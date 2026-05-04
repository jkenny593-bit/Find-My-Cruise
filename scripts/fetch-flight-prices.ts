import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const TRAVELPAYOUTS_TOKEN = process.env.TRAVELPAYOUTS_TOKEN;
const CACHE_PATH = path.join(process.cwd(), 'data', 'flight-prices.json');

interface Route {
  origin: string;
  destination: string;
  label: string;
}

const ROUTES: Route[] = [
  { origin: 'DUB', destination: 'BCN', label: 'Dublin to Barcelona' },
  { origin: 'DUB', destination: 'FCO', label: 'Dublin to Rome' },
  { origin: 'DUB', destination: 'ATH', label: 'Dublin to Athens' },
  { origin: 'DUB', destination: 'LIS', label: 'Dublin to Lisbon' },
  { origin: 'DUB', destination: 'TFS', label: 'Dublin to Tenerife' },
  { origin: 'DUB', destination: 'BGO', label: 'Dublin to Bergen' },
  { origin: 'DUB', destination: 'LHR', label: 'Dublin to London' },
  { origin: 'DUB', destination: 'MIA', label: 'Dublin to Miami' },
  { origin: 'DUB', destination: 'BGI', label: 'Dublin to Barbados' },
  { origin: 'DUB', destination: 'DXB', label: 'Dublin to Dubai' },
  { origin: 'ORK', destination: 'BCN', label: 'Cork to Barcelona' },
  { origin: 'ORK', destination: 'LHR', label: 'Cork to London' },
  { origin: 'SNN', destination: 'BCN', label: 'Shannon to Barcelona' },
  { origin: 'SNN', destination: 'LHR', label: 'Shannon to London' },
  { origin: 'SNN', destination: 'MIA', label: 'Shannon to Miami' },
];

async function updateFlightPrices() {
  if (!TRAVELPAYOUTS_TOKEN) {
    console.error('TRAVELPAYOUTS_TOKEN is not set in environment variables.');
    return;
  }

  // Calculate next month
  const now = new Date();
  const nextMonthDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const targetMonth = `${nextMonthDate.getFullYear()}-${String(nextMonthDate.getMonth() + 1).padStart(2, '0')}`;

  console.log(`Starting flight price update for month: ${targetMonth}`);

  // Load existing data for fallbacks
  let existingData: any = { prices: {} };
  if (fs.existsSync(CACHE_PATH)) {
    try {
      existingData = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf-8'));
    } catch (e) {
      console.warn('Could not parse existing flight-prices.json, will create new.');
    }
  }

  const newPrices: Record<string, any> = {};

  for (const route of ROUTES) {
    const routeKey = `${route.origin}-${route.destination}`;
    const url = `https://api.travelpayouts.com/v1/prices/cheap?origin=${route.origin}&destination=${route.destination}&currency=EUR&token=${TRAVELPAYOUTS_TOKEN}&depart_date=${targetMonth}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.success === false || !data.data || !data.data[route.destination]) {
        throw new Error('No data returned from API');
      }

      const routeData = data.data[route.destination];
      const prices = Object.values(routeData).map((item: any) => item.price);

      if (prices.length === 0) {
        throw new Error('Price list is empty');
      }

      const min = Math.min(...prices);
      const max = Math.max(...prices);

      newPrices[routeKey] = {
        min,
        max: max > min ? max : Math.round(min * 1.3), // Fallback range if only one price
        currency: 'EUR'
      };

      console.log(`✅ ${route.label} (${routeKey}): €${min}-€${newPrices[routeKey].max}`);
    } catch (error) {
      // Fallback to existing value
      if (existingData.prices[routeKey]) {
        newPrices[routeKey] = existingData.prices[routeKey];
        console.log(`⚠️ ${route.label} (${routeKey}): API failed, used fallback from cache.`);
      } else {
        console.log(`❌ ${route.label} (${routeKey}): API failed and no fallback available.`);
      }
    }

    // Wait 500ms between calls
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  const output = {
    lastUpdated: new Date().toISOString(),
    month: targetMonth,
    prices: newPrices
  };

  // Ensure data directory exists
  const dir = path.dirname(CACHE_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(CACHE_PATH, JSON.stringify(output, null, 2));
  console.log(`\nFlight prices update complete. Saved to ${CACHE_PATH}`);
}

// Execute
updateFlightPrices();
