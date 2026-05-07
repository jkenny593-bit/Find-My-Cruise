import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    title: 'MSC Cruises Fleet Guide 2026 | World Class & Meraviglia | FindMyCruise.ie',
    description: 'Explore the modern MSC Cruises fleet. From the futuristic World Class to the family-favorite Meraviglia Class, find the best ship for your Irish holiday.',
  };
};

const FLEET = [
  {
    class: "World Class",
    ships: [
      { name: "MSC World America", year: 2025, feature: "The World Promenade", profile: "Launching soon for Caribbean sailings from Miami, perfect for a US fly-cruise.", tourUrl: "https://www.youtube.com/results?search_query=msc+world+america+ship+tour" },
      { name: "MSC World Europa", year: 2022, feature: "Largest Waterpark in Fleet", profile: "The ultimate Med ship, offering incredible value from Barcelona for Irish families.", tourUrl: "https://www.youtube.com/results?search_query=msc+world+europa+ship+tour" }
    ]
  },
  {
    class: "Meraviglia & Meraviglia Plus",
    ships: [
      { name: "MSC Euribia", year: 2023, feature: "Most Environmentally Advanced", profile: "A Northern Europe favorite, often sailing from Southampton or Copenhagen.", tourUrl: "https://www.youtube.com/results?search_query=msc+euribia+ship+tour" },
      { name: "MSC Virtuosa", year: 2021, feature: "Robotic Bartender 'Rob'", profile: "Very popular for departures from UK ports, perfect for Irish travellers avoiding long flights.", tourUrl: "https://www.youtube.com/results?search_query=msc+virtuosa+ship+tour" },
      { name: "MSC Grandiosa", year: 2019, feature: "Galleria Grandiosa Promenade", profile: "A massive, high-energy ship that Irish guests love for its entertainment.", tourUrl: "https://www.youtube.com/results?search_query=msc+grandiosa+ship+tour" }
    ]
  },
  {
    class: "Seaside Class",
    ships: [
      { name: "MSC Seascape", year: 2022, feature: "Robotron Amusement Ride", profile: "Designed to connect guests with the sea, ideal for sunny Caribbean itineraries.", tourUrl: "https://www.youtube.com/results?search_query=msc+seascape+ship+tour" },
      { name: "MSC Seaview", year: 2018, feature: "360-degree Waterfront Boardwalk", profile: "A beautiful Mediterranean ship with fantastic outdoor spaces.", tourUrl: "https://www.youtube.com/results?search_query=msc+seaview+ship+tour" }
    ]
  }
];

export default function MscFleetPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-[#1A1A1A] py-16 text-center text-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <Link href="/cruise-lines/msc" className="text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest mb-4 inline-block transition-colors">← Back to MSC Overview</Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">The MSC Fleet Guide</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the stylish, high-tech fleet of MSC Cruises. From the record-breaking World Class to the elegant Seaside series.
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
                <div className="bg-[#1A1A1A] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Modern Design</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {fleetClass.ships.map((ship, sIdx) => (
                  <div key={sIdx} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{ship.name}</h3>
                        <p className="text-text/40 text-[10px] font-bold uppercase tracking-widest mt-1">Built {ship.year}</p>
                      </div>
                      <span className="text-2xl opacity-20 group-hover:opacity-100 transition-opacity">🛳️</span>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <p className="text-[9px] font-bold text-primary/60 uppercase tracking-wider mb-1">Key Innovation</p>
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
                        className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all"
                      >
                        Search MSC with Mara <span>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* MSC Fleet CTA */}
        <div className="mt-32 bg-[#1A1A1A] p-16 md:p-24 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:30px_30px]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">Stylish Cruising <br/>At Incredible Value</h2>
          <p className="text-gray-400 mb-12 max-w-lg mx-auto text-lg font-light leading-relaxed">
            Whether you want the Yacht Club luxury or a value-packed family escape, Mara will find the perfect MSC ship for you.
          </p>
          <Link 
            href="/find" 
            className="bg-accent text-primary px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-accent/30 inline-block"
          >
            Start Your MSC Adventure
          </Link>
        </div>
      </main>
    </div>
  );
}
