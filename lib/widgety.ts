/**
 * Mock data and types for the Widgety API integration.
 * This allows us to build the UI and Mara's logic before the real API keys arrive.
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
  {
    id: 'pando-fjords-001',
    line: 'P&O Cruises',
    ship: 'Iona',
    itinerary: 'Norwegian Fjords',
    duration: '7 Nights',
    priceFrom: 749,
    departurePort: 'Southampton',
    highlights: ['SkyDome Entertainment', 'Great for Irish Families', 'No Exchange Rate Hassle (GBP)'],
    affiliateLink: 'https://www.pocruises.com/?utm_source=findmycruise',
    category: 'Budget',
    imageUrl: 'https://images.unsplash.com/photo-1588616140706-05634024220b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'rccl-fjords-002',
    line: 'Royal Caribbean',
    ship: 'Anthem of the Seas',
    itinerary: 'Norwegian Fjords Adventure',
    duration: '7 Nights',
    priceFrom: 929,
    departurePort: 'Southampton',
    highlights: ['North Star Viewing Capsule', 'SeaPlex Indoor Activity Space', 'Spectacular Scenery'],
    affiliateLink: 'https://www.royalcaribbean.com/?utm_source=findmycruise',
    category: 'Mid-range',
    imageUrl: 'https://images.unsplash.com/photo-1533619032610-8488e010834c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'rccl-carib-001',
    line: 'Royal Caribbean',
    ship: 'Icon of the Seas',
    itinerary: 'Eastern Caribbean & CocoCay',
    duration: '7 Nights',
    priceFrom: 1850,
    departurePort: 'Miami',
    highlights: ['Largest Waterpark at Sea', 'Perfect Day at CocoCay', 'Surfside Family Neighborhood'],
    affiliateLink: 'https://www.royalcaribbean.com/?utm_source=findmycruise',
    category: 'Premium',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'ncl-carib-002',
    line: 'Norwegian Cruise Line',
    ship: 'Norwegian Viva',
    itinerary: 'Caribbean: Barbados, Antigua & St. Lucia',
    duration: '7 Nights',
    priceFrom: 1450,
    departurePort: 'San Juan',
    highlights: ['Indulge Food Hall', 'Ocean Boulevard', 'Viva Speedway'],
    affiliateLink: 'https://www.ncl.com/?utm_source=findmycruise',
    category: 'Mid-range',
    imageUrl: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'msc-family-001',
    line: 'MSC Cruises',
    ship: 'MSC Euribia',
    itinerary: 'Northern Europe Family Adventure',
    duration: '7 Nights',
    priceFrom: 1200,
    departurePort: 'Southampton',
    highlights: ['LEGO® Experience Onboard', 'All-Inclusive Drinks Included', 'MSC Foundation Center'],
    affiliateLink: 'https://www.msccruises.ie/?utm_source=findmycruise',
    category: 'Budget',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'disney-family-002',
    line: 'Disney Cruise Line',
    ship: 'Disney Wish',
    itinerary: 'Bahamian Cruise from Port Canaveral',
    duration: '4 Nights',
    priceFrom: 3200,
    departurePort: 'Port Canaveral',
    highlights: ['AquaMouse Attraction', 'Arendelle Dining Experience', 'Marvel Super Hero Academy'],
    affiliateLink: 'https://disneycruise.disney.go.com/?utm_source=findmycruise',
    category: 'Premium',
    imageUrl: 'https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'viking-river-001',
    line: 'Viking River Cruises',
    ship: 'Viking Sigrun',
    itinerary: 'Rhine Getaway',
    duration: '7 Nights',
    priceFrom: 1999,
    departurePort: 'Amsterdam',
    highlights: ['Al fresco Aquavit Terrace', 'All-inclusive shore excursions', 'Cultural Curriculum®'],
    affiliateLink: 'https://www.vikingrivercruises.com/?utm_source=findmycruise',
    category: 'Premium',
    imageUrl: 'https://images.unsplash.com/photo-1629161750599-28cc6397f02d?auto=format&fit=crop&q=80&w=800',
  }
];

/**
 * Simulates fetching cruises from Widgety.
 * In the future, this will use fetch() with the real API key.
 */
export async function getRecommendedCruises(preferences: any): Promise<CruiseOption[]> {
  // Simulating network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // For now, just return our mock list
  // We can add filtering logic here later to match Mara's questions
  return MOCK_CRUISES;
}
