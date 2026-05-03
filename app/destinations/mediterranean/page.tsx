import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Mediterranean Cruises from Ireland | FindMyCruise.ie',
    description: 'Discover the best Mediterranean cruise deals from Dublin, Cork, and Belfast. Hand-picked itineraries for 2026/2027.',
  };
};

export default function MediterraneanPage() {
  // Filtering mock cruises for Mediterranean itineraries
  const medCruises = MOCK_CRUISES.filter(c => 
    c.itinerary.toLowerCase().includes('mediterranean') || 
    c.itinerary.toLowerCase().includes('greek') ||
    c.itinerary.toLowerCase().includes('ital')
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Header */}
      <div className="bg-primary py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Mediterranean Cruises from Ireland
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From the sun-drenched Amalfi Coast to the ancient ruins of Greece, 
            find your perfect Mediterranean voyage with easy flight connections 
            from across the Emerald Isle.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-text/70 italic">
            Showing {medCruises.length} hand-picked Mediterranean cruises
          </p>
          <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-lg text-primary text-sm font-medium">
            🇮🇪 Flights available from Dublin & Cork
          </div>
        </div>

        <CruiseGrid cruises={medCruises} />

        {/* SEO Content Section */}
        <section className="mt-20 prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Why Book a Mediterranean Cruise from Ireland?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-text/80 leading-relaxed">
            <div>
              <p className="mb-4">
                The Mediterranean remains the top choice for Irish cruisers, and for good reason. 
                With direct flights from Dublin and Cork to major cruise hubs like Barcelona, 
                Rome (Civitavecchia), and Venice, getting to your ship has never been easier.
              </p>
              <p>
                Our AI specialist, Mara, focuses on itineraries that sync perfectly with Irish 
                flight schedules, ensuring you spend less time in airports and more time on the deck.
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>Family Friendly:</strong> Great kids' clubs and safe excursions.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>Culture & History:</strong> Visit Rome, Athens, and Florence in one trip.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>Value for Money:</strong> All-inclusive options that suit every Irish budget.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
