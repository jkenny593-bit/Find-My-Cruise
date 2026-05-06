import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Norwegian Fjords Cruises from Ireland | FindMyCruise.ie',
    description: 'Breathtaking Norwegian Fjords cruises with easy connections from Dublin and Cork. Explore hand-picked itineraries for 2026.',
    alternates: {
      canonical: '/destinations/fjords',
    },
  };
};

export default function FjordsPage() {
  // Filtering mock cruises for Fjord itineraries
  const fjordCruises = MOCK_CRUISES.filter(c => 
    c.itinerary.toLowerCase().includes('fjord') || 
    c.itinerary.toLowerCase().includes('norway')
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Header */}
      <div className="bg-primary py-20 text-center relative overflow-hidden">
        {/* Abstract Snowy Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]" />
        </div>
        
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Norwegian Fjords Cruises
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the majestic beauty of the North. Deep blue waters, 
            towering cliffs, and cascading waterfalls—all within easy reach of Ireland.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-text/70 italic">
            Showing {fjordCruises.length} breathtaking Fjord cruises
          </p>
          <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-lg text-primary text-sm font-medium">
            ⚓ Popular departures from Southampton with easy flights
          </div>
        </div>

        <CruiseGrid cruises={fjordCruises} />

        {/* Info Section */}
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Navigating the Fjords from Ireland</h2>
            <div className="prose prose-slate max-w-none text-text/80 leading-relaxed space-y-4">
              <p>
                Cruising the Norwegian Fjords is a "bucket list" experience for many Irish travellers. 
                Most of these spectacular voyages depart from <strong>Southampton</strong> or 
                <strong>Copenhagen</strong>, both of which are extremely well-connected to 
                Dublin, Cork, and Shannon.
              </p>
              <p>
                At FindMyCruise.ie, we specifically recommend cruises that offer "Fly-Cruise" packages 
                or those where flight times align perfectly with the ship's departure. For those who 
                prefer not to fly, we can even help you find connections to the UK ports.
              </p>
              <h3 className="text-xl font-heading font-bold text-primary pt-4">Top Ports to Explore:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Geiranger:</strong> A UNESCO World Heritage site with stunning waterfalls.</li>
                <li><strong>Olden:</strong> Home to the famous Briksdal Glacier.</li>
                <li><strong>Bergen:</strong> The gateway to the Fjords with its colourful wharf.</li>
                <li><strong>Flam:</strong> Famous for one of the world's most scenic railway journeys.</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-xl shadow-lg flex flex-col justify-center text-center">
            <div className="text-4xl mb-6">🏔️</div>
            <h3 className="text-2xl font-heading font-bold mb-4">Not sure which Fjord is for you?</h3>
            <p className="text-gray-300 mb-8">
              Mara knows the difference between a 7-night southern loop and a 14-night Arctic Circle adventure.
            </p>
            <a 
              href="/find" 
              className="bg-accent text-primary px-6 py-4 rounded-full font-bold hover:bg-white transition-colors"
            >
              Ask Mara to help
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
