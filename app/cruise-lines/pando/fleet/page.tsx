import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    title: 'P&O Cruises Fleet Guide 2026 | Ships & Features | FindMyCruise.ie',
    description: 'Explore the P&O Cruises fleet. From the Excel-class giants Iona and Arvia to the intimate mid-sized ships, find the perfect cruise for your Irish holiday.',
  };
};

const FLEET = [
  {
    class: "Excel Class",
    ships: [
      { name: "Arvia", year: 2022, feature: "SkyDome with Retractable Roof", profile: "Designed for sunshine, Arvia is perfect for Caribbean winters and Med summers.", tourUrl: "https://www.youtube.com/results?search_query=po+cruises+arvia+ship+tour" },
      { name: "Iona", year: 2021, feature: "Two-tier SkyDome & Conservatory", profile: "The ultimate Fjord ship, offering spectacular views and great value from Southampton.", tourUrl: "https://www.youtube.com/results?search_query=po+cruises+iona+ship+tour" }
    ]
  },
  {
    class: "Mid-Sized Ships",
    ships: [
      { name: "Britannia", year: 2015, feature: "The Epicurean Restaurant", profile: "The flagship of the fleet, balancing modern amenities with classic British elegance.", tourUrl: "https://www.youtube.com/results?search_query=po+cruises+britannia+ship+tour" },
      { name: "Azura", year: 2010, feature: "SeaScreen Outdoor Cinema", profile: "A family favorite, particularly popular for value-driven Mediterranean loops.", tourUrl: "https://www.youtube.com/results?search_query=po+cruises+azura+ship+tour" },
      { name: "Ventura", year: 2008, feature: "The Exchange Pub", profile: "A relaxed, family-friendly ship with a great atmosphere and varied dining.", tourUrl: "https://www.youtube.com/results?search_query=po+cruises+ventura+ship+tour" }
    ]
  },
  {
    class: "Adult-Only Ships",
    ships: [
      { name: "Arcadia", year: 2005, feature: "Caffè Nero & Boutique Atmosphere", profile: "Exclusively for adults, offering a sophisticated and calm environment.", tourUrl: "https://www.youtube.com/results?search_query=po+cruises+arcadia+ship+tour" },
      { name: "Aurora", year: 2000, feature: "Classic Teak Decks", profile: "A mid-sized traditional ship, perfect for those who enjoy classic cruising without the crowds.", tourUrl: "https://www.youtube.com/results?search_query=po+cruises+aurora+ship+tour" }
    ]
  }
];

export default function PandoFleetPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-[#002244] py-16 text-center text-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <Link href="/cruise-lines/pando" className="text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest mb-4 inline-block transition-colors">← Back to P&O Overview</Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">P&O Cruises Fleet Guide</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From the family-fun of the Excel class to the sophisticated calm of the adult-only ships. Find your perfect match.
          </p>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="space-y-20">
          {FLEET.map((fleetClass, idx) => (
            <section key={idx}>
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-3xl font-heading font-bold text-primary">{fleetClass.class}</h2>
                <div className="h-px bg-gray-200 flex-grow"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {fleetClass.ships.map((ship, sIdx) => (
                  <div key={sIdx} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-primary group-hover:text-[#002244] transition-colors">{ship.name}</h3>
                        <p className="text-text/40 text-[10px] font-bold uppercase tracking-widest mt-1">Built {ship.year}</p>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#002244] group-hover:text-white transition-all text-xs">⚓</div>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <div className="bg-primary/5 p-4 rounded-2xl border border-primary/5">
                        <p className="text-[9px] font-bold text-[#002244] uppercase tracking-wider mb-1">Standout Asset</p>
                        <p className="text-primary font-bold text-sm">{ship.feature}</p>
                      </div>
                      <p className="text-text/70 text-sm leading-relaxed italic">"{ship.profile}"</p>
                    </div>

                    <div className="mt-6">
                      <a 
                        href={ship.tourUrl} 
                        target="_blank" 
                        rel="nofollow noopener"
                        className="flex items-center justify-center gap-2 w-full bg-red-600 text-white py-3 rounded-xl font-bold text-xs hover:bg-red-700 transition-colors"
                      >
                        <span className="text-lg">▶</span> Watch Full Ship Tour
                      </a>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-50">
                      <Link 
                        href="/find" 
                        className="text-[#002244] font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all"
                      >
                        Enquire via Mara <span>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* P&O Fleet CTA */}
        <div className="mt-32 bg-[#002244] p-16 md:p-24 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">Authentic British Cruising <br/>At Its Best</h2>
          <p className="text-gray-400 mb-12 max-w-lg mx-auto text-lg font-light leading-relaxed">
            Whether it's the Iona for the Fjords or Arvia for the Caribbean, Mara will find you the best P&O deal from Ireland.
          </p>
          <Link 
            href="/find" 
            className="bg-accent text-primary px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-accent/30 inline-block"
          >
            Find My P&O Cruise
          </Link>
        </div>
      </main>
    </div>
  );
}
