import fs from 'fs';
import path from 'path';
import { CRUISE_PORT_MAP, STATIC_FALLBACK_PRICES } from './ports';

const CACHE_PATH = path.join(process.cwd(), 'data', 'flight-prices.json');

interface FlightPrice {
  min: number;
  max: number;
  currency: string;
}

interface FlightData {
  lastUpdated: string;
  month: string;
  prices: Record<string, FlightPrice>;
}

/**
 * Synchronously retrieves indicative flight prices.
 * Checks the local cache first, falling back to static estimates if missing or stale (>48h).
 */
export function getFlightPrice(
  origin: 'DUB' | 'ORK' | 'SNN' | 'BFS',
  cruiseRegion: string
): FlightPrice | null {
  const destinationIata = CRUISE_PORT_MAP[cruiseRegion];
  if (!destinationIata) return null;

  const routeKey = `${origin}-${destinationIata}`;

  try {
    if (fs.existsSync(CACHE_PATH)) {
      const fileContent = fs.readFileSync(CACHE_PATH, 'utf-8');
      const data: FlightData = JSON.parse(fileContent);

      const lastUpdated = new Date(data.lastUpdated);
      const fortyEightHoursAgo = new Date(Date.now() - 48 * 60 * 60 * 1000);

      // Return from cache if fresh and route exists
      if (lastUpdated > fortyEightHoursAgo && data.prices[routeKey]) {
        return data.prices[routeKey];
      }
    }
  } catch (error) {
    // Silently fall through to fallback on any error
  }

  // Fallback to static estimates
  return STATIC_FALLBACK_PRICES[routeKey] || null;
}
