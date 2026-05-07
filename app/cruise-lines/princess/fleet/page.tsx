import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Princess Cruises Fleet Guide 2026 | Ships & Features | FindMyCruise.ie',
    description: 'Explore the destination-focused fleet of Princess Cruises. From the new Sphere-class Sun Princess to the Royal-class icons, find your perfect voyage.',
  };
};

const FLEET = [
  {
    class: "Sphere Class",
    ships: [
      { name: "Sun Princess", year: 2024, feature: "The Dome & Sphere Atrium", profile: "The next generation of Princess, perfect for a high-end Med fly-cruise from Dublin.", tourUrl: "https://www.youtube.com/results?search_query=sun+princess+ship+tour" },
      { name: "Star Princess", year: 2025, feature: "Park19 Adventure Zone", profile: "A sister to Sun Princess, launching soon for premium Caribbean exploration.", tourUrl: "https://www.youtube.com/results?search_query=star+princess+ship+tour" }
    ]
  },
  {
    class: "Royal Class",
    ships: [
      { name: "Discovery Princess", year: 2022, feature: "Sky Suites with 270° Views", profile: "A top-tier luxury choice, often found on stunning Alaska and Coastal routes.", tourUrl: "https://www.youtube.com/results?search_query=discovery+princess+ship+tour" },
      { name: "Enchanted Princess", year: 2020, feature: "The Sanctuary (Adults-only)", profile: "Refined and elegant, a favorite for Irish couples seeking a romantic getaway.", tourUrl: "https://www.youtube.com/results?search_query=enchanted+princess+ship+tour" },
      { name: "Sky Princess", year: 2019, feature: "OceanMedallion Technology", profile: "Frequently sails from Southampton, making it very accessible for the Irish market.", tourUrl: "https://www.youtube.com/results?search_query=sky+princess+ship+tour" },
      { name: "Majestic Princess", year: 2017, feature: "SeaWalk Glass Bridge", profile: "Renowned for its global itineraries and exceptional culinary offerings.", tourUrl: "https://www.youtube.com/results?search_query=majestic+princess+ship+tour" }
    ]
  }
];

export default function PrincessFleetPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-white border-b border-gray-100 py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <Link href="/cruise-lines/princess" className="text-accent hover:text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 inline-block transition-colors">← Back to MedallionClass</Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 tracking-tight">The Princess Fleet</h1>
          <p className="text-text-light max-w-2xl mx-auto font-light leading-relaxed">
            Personalized service at scale. Discover the elegant ship classes that make Princess the leader in destination cruising.
          </p>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 py-20">
        <div className="space-y-24">
          {FLEET.map((fleetClass, idx) => (
            <section key={idx}>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-l-4 border-accent pl-8">
                <div>
                  <span className="text-accent font-bold uppercase tracking-widest text-[10px] block mb-2">Expert Selection</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">{fleetClass.class}</h2>
                </div>
                <p className="text-text-light text-sm italic max-w-sm">"The perfect balance of high-tech innovation and classic nautical charm."</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {fleetClass.ships.map((ship, sIdx) => (
                  <div key={sIdx} className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-primary group-hover:text-accent transition-colors">{ship.name}</h3>
                        <p className="text-text-light text-[10px] font-bold uppercase tracking-widest mt-2">Built {ship.year}</p>
                      </div>
                      <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">🏅</div>
                    </div>
                    
                    <div className="space-y-6 flex-grow">
                      <div className="bg-surface p-5 rounded-2xl border border-gray-50">
                        <p className="text-[9px] font-bold text-accent uppercase tracking-[0.2em] mb-2">Standout Feature</p>
                        <p className="text-primary font-bold text-sm tracking-tight">{ship.feature}</p>
                      </div>
                      <p className="text-text/70 text-sm leading-relaxed font-light">"{ship.profile}"</p>
                    </div>

                    <div className="mt-6">
                      <a 
                        href={ship.tourUrl} 
                        target="_blank" 
                        rel="nofollow noopener"
                        className="flex items-center justify-center gap-2 w-full bg-red-600 text-white py-3 rounded-xl font-bold text-xs hover:bg-red-700 transition-colors"
                      >
                        <span className="text-lg">▶</span> Watch Ship Tour
                      </a>
                    </div>
                    
                    <div className="mt-10 pt-8 border-t border-gray-100">
                      <Link 
                        href="/find" 
                        className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
                      >
                        Ask Mara for Deals <span>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Final Princess CTA */}
        <div className="mt-32 bg-primary p-16 md:p-24 rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,_transparent_25%,_rgba(255,255,255,0.1)_50%,_transparent_75%)] bg-[length:100px_100px]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">Ready to Discover <br/>the Princess Difference?</h2>
          <p className="text-white/60 mb-12 max-w-lg mx-auto text-lg font-light leading-relaxed">
            From Alaska to the Mediterranean, Mara knows exactly which Princess ship will give you the most "Love Boat" magic.
          </p>
          <Link 
            href="/find" 
            className="bg-accent text-primary px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-accent/30 inline-block"
          >
            Start Your Princess Search
          </Link>
        </div>
      </main>
    </div>
  );
}
