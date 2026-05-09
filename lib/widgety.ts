/**
 * Widgety API Integration for live cruise data.
 * Documentation: https://developer.widgety.co.uk/
 */

export interface CruiseOption {
  id: string;
  line: string;
  ship: string;
  itinerary: string;
  duration: string;
  priceFrom: number;
  departurePort: string;
  highlights: string[];
  affiliateLink: string;
  category: 'Budget' | 'Mid-range' | 'Premium';
  imageUrl: string;
}

// New Widgety API Response Types (V3)
interface WidgetyHolidayBrief {
  holiday_ref: string;
  name: string;
  operator_title: string;
}

interface WidgetyHolidayDetail {
  holiday_ref: string;
  name: string;
  duration_days: number;
  cruise_nights: number;
  description: string;
  operator_title: string;
  regions: string[];
  countries: string[];
  operating_seasons: {
    dates: {
      date_from: string;
      ship_title: string;
      starts_at: { name: string };
      headline_prices?: {
        cruise?: {
          double?: {
            from_inside?: string;
            from_outside?: string;
            from_balcony?: string;
            from_suite?: string;
          }
        }
      };
      pricing?: {
        prices: {
          double_price_pp?: string;
        }[];
      }[];
    }[];
  }[];
  images: { href: string }[];
}

const WIDGETY_APP_ID = process.env.WIDGETY_APP_ID || '';
const WIDGETY_TOKEN = process.env.WIDGETY_TOKEN || '';
const BASE_URL = 'https://www.widgety.co.uk/api';

/**
 * Helper to fetch from Widgety API
 */
async function fetchWidgety(endpoint: string, params: Record<string, string> = {}) {
  if (!WIDGETY_APP_ID || !WIDGETY_TOKEN) {
    console.warn('Widgety API keys are missing. Using mock data.');
    return null;
  }

  const queryParams = new URLSearchParams({
    app_id: WIDGETY_APP_ID,
    token: WIDGETY_TOKEN,
    market: 'ie', // Irish market as requested
    ...params,
  });

  const url = `${BASE_URL}${endpoint}?${queryParams.toString()}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Widgety API error: ${response.status} ${JSON.stringify(errorData)}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch from Widgety:`, error);
    return null;
  }
}

/**
 * Fetches all available operators from Widgety.
 */
export async function getOperators() {
  return await fetchWidgety('/operators.json');
}

/**
 * Fetches detail for a specific operator.
 */
export async function getOperatorDetail(operatorId: string) {
  return await fetchWidgety(`/operators/${operatorId}.json`);
}

/**
 * Fetches all ships from Widgety.
 */
export async function getShips() {
  return await fetchWidgety('/ships.json');
}

/**
 * Fetches detail for a specific ship.
 */
export async function getShipDetail(shipId: string) {
  return await fetchWidgety(`/ships/${shipId}.json`);
}

/**
 * Fetches real recommended cruises from Widgety.
 */
export async function getRecommendedCruises(preferences: { region?: string }): Promise<CruiseOption[]> {
  const { region } = preferences;
  
  // 1. Search for holidays using the new API
  const searchParams: Record<string, string> = { limit: '10' };
  // If region is provided, we could try to filter, but since 'search' parameter failed in tests,
  // we'll fetch a list and filter locally or just use the defaults for now.
  
  const searchData = await fetchWidgety('/holidays.json', searchParams);
  
  if (!searchData || !searchData.holidays || searchData.holidays.length === 0) {
    console.log('No holidays found or API error. Falling back to mock data.');
    return MOCK_CRUISES;
  }

  // 2. Fetch details for holidays to get prices and itineraries
  const holidays = searchData.holidays.slice(0, 8);
  const detailedHolidays: CruiseOption[] = [];

  for (const h of holidays) {
    const detail = await fetchWidgety(`/holidays/${h.holiday_ref}.json`);
    if (detail) {
      detailedHolidays.push(mapWidgetyToCruise(detail));
    }
  }

  if (detailedHolidays.length === 0) return MOCK_CRUISES;

  // 3. Categorize into Budget, Mid-range, Premium based on price
  const sorted = detailedHolidays.sort((a, b) => a.priceFrom - b.priceFrom);
  
  // If we have at least 3, pick the best ones. If not, pad with mock.
  const result: CruiseOption[] = [];
  
  if (sorted.length >= 3) {
    result.push({ ...sorted[0], category: 'Budget' });
    result.push({ ...sorted[Math.floor(sorted.length / 2)], category: 'Mid-range' });
    result.push({ ...sorted[sorted.length - 1], category: 'Premium' });
  } else {
    // Fallback if not enough data
    return MOCK_CRUISES;
  }

  return result;
}

/**
 * Maps Widgety holiday detail to our internal CruiseOption format
 */
function mapWidgetyToCruise(w: WidgetyHolidayDetail): CruiseOption {
  // Find the earliest date to extract price and ship info
  const firstSeason = w.operating_seasons?.[0];
  const firstDate = firstSeason?.dates?.[0];
  
  // Extract price
  let price = 0;
  if (firstDate) {
    // Try headline prices first
    const hp = firstDate.headline_prices?.cruise?.double;
    const lowestHeadline = hp ? Math.min(
      ...[hp.from_inside, hp.from_outside, hp.from_balcony, hp.from_suite]
        .map(p => parseFloat(p || '0'))
        .filter(p => p > 0)
    ) : Infinity;

    // Try specific pricing offers
    const lowestPricing = firstDate.pricing?.[0]?.prices?.[0]?.double_price_pp 
      ? parseFloat(firstDate.pricing[0].prices[0].double_price_pp) 
      : Infinity;

    price = Math.min(lowestHeadline, lowestPricing);
    if (price === Infinity) price = 0;
  }

  // Fallback price for display if still 0
  if (price === 0) price = 799; 

  const shipName = firstDate?.ship_title || 'Luxury Ship';
  const departurePort = firstDate?.starts_at?.name || 'Major Port';

  // Construct affiliate link (using Expedia Ireland as default for now)
  const affiliateLink = `https://www.expedia.ie/Cruises-Search?utm_source=findmycruise&utm_medium=affiliate&operator=${encodeURIComponent(w.operator_title)}`;

  return {
    id: w.holiday_ref,
    line: w.operator_title,
    ship: shipName,
    itinerary: w.name,
    duration: `${w.duration_days || 7} Days`,
    priceFrom: price,
    departurePort: departurePort,
    highlights: w.regions?.slice(0, 3) || ['Gourmet Dining', 'Entertainment', 'Wellness Spa'],
    affiliateLink: affiliateLink,
    category: 'Mid-range', // Temporary, will be overwritten
    imageUrl: w.images?.[0]?.href || 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800',
  };
}

export const MOCK_CRUISES: CruiseOption[] = [
  {
    id: 'msc-med-001',
    line: 'MSC Cruises',
    ship: 'MSC World Europa',
    itinerary: 'Western Mediterranean from Barcelona',
    duration: '7 Nights',
    priceFrom: 649,
    departurePort: 'Barcelona',
    highlights: ['Futuristic Design', 'Sustainable Cruising', 'Largest Waterpark at Sea'],
    affiliateLink: 'https://www.expedia.ie/Cruises?utm_source=findmycruise',
    category: 'Budget',
    imageUrl: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'rccl-med-002',
    line: 'Royal Caribbean',
    ship: 'Odyssey of the Seas',
    itinerary: 'Greek Isles & Turkey from Rome',
    duration: '7 Nights',
    priceFrom: 949,
    departurePort: 'Civitavecchia (Rome)',
    highlights: ['North Star Observation Capsule', 'RipCord by iFLY', 'SeaPlex Indoor Activity Space'],
    affiliateLink: 'https://www.royalcaribbean.com/find-a-cruise?utm_source=findmycruise',
    category: 'Mid-range',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'celebrity-med-003',
    line: 'Celebrity Cruises',
    ship: 'Celebrity Beyond',
    itinerary: 'Italian Riviera & France from Rome',
    duration: '10 Nights',
    priceFrom: 2250,
    departurePort: 'Rome',
    highlights: ['The Retreat® Luxury Experience', 'Magic Carpet® Cantilevered Bar', 'Michelin-starred Dining'],
    affiliateLink: 'https://www.expedia.ie/Cruises?utm_source=findmycruise',
    category: 'Premium',
    imageUrl: 'https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?auto=format&fit=crop&q=80&w=800',
  },
];
