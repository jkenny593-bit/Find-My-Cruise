/**
 * Widgety API Integration for live cruise data.
 * Documentation: https://widgety.org/product/api/
 */

import { generateDeepLink } from "./affiliates/utils";

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

// Widgety API Response Types
interface WidgetyHoliday {
  holiday_ref: string;
  name: string;
  operator: { name: string };
  ship?: { name: string; images?: { url: string }[] };
  price_from?: number;
  duration_days?: number;
  holiday_details?: string; // URL for details
}

interface WidgetyHolidayDetail extends WidgetyHoliday {
  itinerary?: { port_name: string }[];
  description?: string;
  images?: { url: string }[];
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
    market: 'ie', // Targeted for Irish market
    ...params,
  });

  const url = `${BASE_URL}${endpoint}?${queryParams.toString()}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Widgety API error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch from Widgety:`, error);
    return null;
  }
}

/**
 * Fetches real recommended cruises from Widgety.
 * Falls back to MOCK_CRUISES if API keys are missing or call fails.
 */
export async function getRecommendedCruises(preferences: { region?: string }): Promise<CruiseOption[]> {
  const { region } = preferences;
  
  // 1. Search for holidays
  const searchParams: Record<string, string> = {};
  if (region) searchParams.search = region;
  
  const searchData = await fetchWidgety('/holidays.json', searchParams);
  
  if (!searchData || !searchData.holidays || searchData.holidays.length === 0) {
    console.log('No holidays found or API error. Falling back to mock data.');
    return MOCK_CRUISES;
  }

  // 2. Fetch details for the first few holidays to get prices and itineraries
  // We'll take the first 8 and pick our 3 categories from them
  const holidays = searchData.holidays.slice(0, 8);
  const detailedHolidays: CruiseOption[] = [];

  for (const h of holidays) {
    const detail = await fetchWidgety(`/holidays/${h.holiday_ref}.json`);
    if (detail) {
      detailedHolidays.push(mapWidgetyToCruise(detail));
    }
  }

  if (detailedHolidays.length === 0) return MOCK_CRUISES;

  // 3. Categorize into Budget, Mid-range, Premium
  // Sort by price
  const sorted = detailedHolidays.sort((a, b) => a.priceFrom - b.priceFrom);
  
  const budget = sorted[0];
  const premium = sorted[sorted.length - 1];
  const mid = sorted[Math.floor(sorted.length / 2)];

  // Assign categories and return
  return [
    { ...budget, category: 'Budget' },
    { ...mid, category: 'Mid-range' },
    { ...premium, category: 'Premium' },
  ];
}

/**
 * Maps Widgety holiday detail to our internal CruiseOption format
 */
function mapWidgetyToCruise(w: WidgetyHolidayDetail): CruiseOption {
  return {
    id: w.holiday_ref,
    line: w.operator.name,
    ship: w.ship?.name || 'Luxury Ship',
    itinerary: w.name,
    duration: `${w.duration_days || 7} Nights`,
    priceFrom: w.price_from || 0,
    departurePort: w.itinerary?.[0]?.port_name || 'Major Port',
    highlights: w.description ? [w.description.substring(0, 100) + '...'] : ['World-class dining', 'Exciting excursions', 'Luxury amenities'],
    affiliateLink: `https://www.expedia.ie/Cruises-Search?cruise_ref=${w.holiday_ref}`, // Example link construction
    category: 'Mid-range', // Temporary, will be overwritten by getRecommendedCruises
    imageUrl: w.images?.[0]?.url || w.ship?.images?.[0]?.url || 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800',
  };
}

export const MOCK_CRUISES: CruiseOption[] = [
  {
    id: 'rccl-med-001',
    line: 'Royal Caribbean',
    ship: 'Odyssey of the Seas',
    itinerary: 'Greek Isles & Turkey',
    duration: '7 Nights',
    priceFrom: 899,
    departurePort: 'Civitavecchia (Rome)',
    highlights: ['North Star Observation Capsule', 'RipCord by iFLY', 'World-class Dining'],
    affiliateLink: 'https://www.royalcaribbean.com/find-a-cruise?utm_source=findmycruise',
    category: 'Mid-range',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'msc-med-002',
    line: 'MSC Cruises',
    ship: 'MSC World Europa',
    itinerary: 'Western Mediterranean',
    duration: '7 Nights',
    priceFrom: 649,
    departurePort: 'Barcelona',
    highlights: ['Futuristic Design', 'Sustainable Cruising', 'Largest Waterpark at Sea'],
    affiliateLink: 'https://www.msccruises.ie/?utm_source=findmycruise',
    category: 'Budget',
    imageUrl: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'celebrity-med-003',
    line: 'Celebrity Cruises',
    ship: 'Celebrity Beyond',
    itinerary: 'Italian Riviera & France',
    duration: '10 Nights',
    priceFrom: 2450,
    departurePort: 'Rome',
    highlights: ['The Retreat® Luxury Experience', 'Magic Carpet® Cantilevered Bar', 'Michelin-starred Dining'],
    affiliateLink: 'https://www.celebritycruises.ie/?utm_source=findmycruise',
    category: 'Premium',
    imageUrl: 'https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?auto=format&fit=crop&q=80&w=800',
  },
];
