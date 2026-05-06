import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Royal Caribbean Fleet Guide 2026 | Ships & Features | FindMyCruise.ie',
    description: 'Explore the full Royal Caribbean fleet. From Icon of the Seas to the Oasis Class, discover which ship is perfect for your Irish cruise holiday.',
  };
};

const FLEET = [
  {
    class: "Icon Class",
    ships: [
      { name: "Icon of the Seas", year: 2024, feature: "Largest Waterpark at Sea", profile: "The ultimate family vacation, perfect for those flying from Dublin to Miami." },
      { name: "Star of the Seas", year: 2025, feature: "Lincoln Park neighborhood", profile: "Coming soon to Port Canaveral, ideal for a Florida fly-cruise." }
    ]
  },
  {
    class: "Oasis Class",
    ships: [
      { name: "Utopia of the Seas", year: 2024, feature: "The World's Biggest Weekend", profile: "Perfect for short 3-4 night Bahamas escapes from Port Canaveral." },
      { name: "Wonder of the Seas", year: 2022, feature: "8 Unique Neighborhoods", profile: "A Med favorite, often sailing from Barcelona with great Irish connections." },
      { name: "Symphony of the Seas", year: 2018, feature: "Ultimate Abyss Slide", profile: "A classic Oasis experience for high-energy families." }
    ]
  },
  {
    class: "Quantum Ultra Class",
    ships: [
      { name: "Odyssey of the Seas", year: 2021, feature: "SeaPlex Indoor Activity Space", profile: "A top choice for Greek Isles cruises from Rome." },
      { name: "Anthem of the Seas", year: 2015, feature: "North Star Observation Pod", profile: "Frequently sails from Southampton, very popular for Irish travellers avoiding flights." }
    ]
  }
];

export default function RoyalCaribbeanFleetPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-[#0055A4] py-16 text-center text-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <Link href="/cruise-lines/royal-caribbean" className="text-blue-200 hover:text-white text-sm font-bold uppercase tracking-widest mb-4 inline-block">← Back to Brand Overview</Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Royal Caribbean Fleet Guide</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Not all ships are created equal. Discover which Royal Caribbean vessel matches your travel style and Irish departure needs.
          </p>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="space-y-20">
          {FLEET.map((fleetClass, idx) => (
            <section key={idx}>
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-3xl font-heading font-bold text-primary">{fleetClass.class}</h2>
                <div className="h-px bg-gray-200 flex-grow"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {fleetClass.ships.map((ship, sIdx) => (
                  <div key={sIdx} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-primary group-hover:text-[#0055A4] transition-colors">{ship.name}</h3>
                        <p className="text-text/50 text-xs font-bold uppercase tracking-widest mt-1">Built {ship.year}</p>
                      </div>
                      <div className="bg-blue-50 text-[#0055A4] text-[10px] font-bold px-2 py-1 rounded uppercase">Active Fleet</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-primary/5 p-4 rounded-2xl">
                        <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">Standout Feature</p>
                        <p className="text-primary font-medium text-sm">{ship.feature}</p>
                      </div>
                      <p className="text-text/70 text-sm leading-relaxed italic">"{ship.profile}"</p>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-50">
                      <Link 
                        href="/find" 
                        className="text-[#0055A4] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                      >
                        Ask Mara about {ship.name} <span>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Fleet Call to Action */}
        <div className="mt-32 bg-primary p-12 md:p-20 rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Step Onboard?</h2>
          <p className="text-white/60 mb-10 max-w-md mx-auto">
            Whether you want the giant waterparks of the Icon Class or the elegance of the Quantum Class, Mara knows exactly which sailings are best from Ireland.
          </p>
          <Link 
            href="/find" 
            className="bg-accent text-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-accent/20 inline-block"
          >
            Start Your Custom Search
          </Link>
        </div>
      </main>
    </div>
  );
}
