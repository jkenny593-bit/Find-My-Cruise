import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Royal Caribbean Ireland | Best Deals & Ship Info | FindMyCruise.ie',
    description: 'Find the best Royal Caribbean cruise deals from Ireland. Explore Odyssey, Anthem, and Wonder of the Seas with easy flights from Dublin.',
  };
};

export default function RoyalCaribbeanPage() {
  // Filtering mock cruises for Royal Caribbean
  const rcclCruises = MOCK_CRUISES.filter(c => 
    c.line.toLowerCase().includes('royal caribbean')
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Brand Hero */}
      <div className="bg-[#0055A4] py-20 text-center relative">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="bg-white inline-block px-6 py-2 rounded-full mb-6 shadow-md text-[#0055A4] font-bold text-sm tracking-widest uppercase">
            Official Partner Brand
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Royal Caribbean Cruises Ireland
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Experience the world's most innovative ships. From the North Star to the 
            FlowRider, discover why Royal Caribbean is the #1 choice for Irish families.
          </p>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Why Royal Caribbean Section */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Perfect for Families", 
              desc: "Award-winning kids' clubs and activities that keep every age group entertained.",
              icon: "👨‍👩‍👧‍👦"
            },
            { 
              title: "Innovative Ships", 
              desc: "Home to the world's largest ships and industry-first features like skydiving at sea.",
              icon: "🚢"
            },
            { 
              title: "Irish Connections", 
              desc: "Great Fly-Cruise packages from Dublin and Cork to Mediterranean and Caribbean ports.",
              icon: "🇮🇪"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-text/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        <CruiseGrid cruises={rcclCruises} title="Featured Royal Caribbean Sailings" />

        {/* Brand Story */}
        <div className="mt-20 bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-12 space-y-6">
            <h2 className="text-3xl font-heading font-bold text-primary">The Royal Caribbean Experience</h2>
            <p className="text-text/80 leading-relaxed">
              For Irish travellers, Royal Caribbean represents the pinnacle of "big ship" 
              cruising. Whether you're sailing on an Oasis-class giant or a tech-forward 
              Quantum-class ship, you're guaranteed world-class entertainment, 
              Michelin-inspired dining, and more activities than you could possibly 
              finish in a week.
            </p>
            <p className="text-text/80 leading-relaxed">
              We work closely with Royal Caribbean to highlight the best "Irish friendly" 
              itineraries, specifically focusing on sailings from **Barcelona**, **Rome**, 
              and **Southampton** which offer the most convenient travel options from 
              the Emerald Isle.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="/find" 
                className="inline-block bg-[#0055A4] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md"
              >
                Let Mara find your Cruise
              </a>
              <Link 
                href="/cruise-lines/royal-caribbean/fleet" 
                className="inline-block border border-[#0055A4] text-[#0055A4] px-8 py-3 rounded-full font-bold hover:bg-[#0055A4]/5 transition-all"
              >
                View Full Fleet Guide
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 bg-[#0055A4]/5 flex items-center justify-center p-12">
            <div className="space-y-4 text-center">
              <div className="text-5xl">⚓</div>
              <p className="text-[#0055A4] font-bold text-xl font-heading italic">
                "Come Seek the Royal Way"
              </p>
              <div className="flex justify-center gap-2">
                <span className="bg-[#0055A4] w-2 h-2 rounded-full"></span>
                <span className="bg-[#0055A4] w-2 h-2 rounded-full opacity-50"></span>
                <span className="bg-[#0055A4] w-2 h-2 rounded-full opacity-25"></span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
