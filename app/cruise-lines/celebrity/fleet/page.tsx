import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Celebrity Cruises Fleet Guide 2026 | Ships & Classes | FindMyCruise.ie',
    description: 'Explore the modern luxury fleet of Celebrity Cruises. From the Edge Series to the Solstice Class, find the perfect premium ship for your Irish cruise.',
  };
};

const FLEET = [
  {
    class: "Edge Series",
    ships: [
      { name: "Celebrity Ascent", year: 2023, feature: "The Magic Carpet®", profile: "The newest flagship, offering unparalleled design for Mediterranean sailings from Rome." },
      { name: "Celebrity Beyond", year: 2022, feature: "Expanded Rooftop Garden", profile: "A favorite for luxury seekers flying from Dublin for a premium experience." },
      { name: "Celebrity Apex", year: 2020, feature: "Infinite Verandas", profile: "Often sails from Southampton, making it very accessible for Irish travellers who prefer UK ports." },
      { name: "Celebrity Edge", year: 2018, feature: "Eden Multi-level Venue", profile: "The ship that started the revolution, perfect for a modern first-time cruiser." }
    ]
  },
  {
    class: "Solstice Class",
    ships: [
      { name: "Celebrity Reflection", year: 2012, feature: "Real Grass Lawn Club", profile: "The largest of the Solstice class, known for its incredible space and dining." },
      { name: "Celebrity Silhouette", year: 2011, feature: "The Hideaway Lounge", profile: "A beautifully refurbished classic, often offering great value on Greek Isles routes." },
      { name: "Celebrity Equinox", year: 2009, feature: "Corning Museum of Glass", profile: "Highly rated for its service and elegant atmosphere." }
    ]
  }
];

export default function CelebrityFleetPage() {
  return (
    <div className="bg-background min-h-screen font-body">
      <div className="bg-white border-b border-gray-100 py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <Link href="/cruise-lines/celebrity" className="text-accent hover:text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 inline-block transition-colors">← Back to Modern Luxury</Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 tracking-tight">The Celebrity Fleet</h1>
          <p className="text-text-light max-w-2xl mx-auto font-light leading-relaxed">
            Sophisticated design meets intuitive service. Discover the differences between Celebrity’s award-winning ship classes.
          </p>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 py-20">
        <div className="space-y-24">
          {FLEET.map((fleetClass, idx) => (
            <section key={idx}>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-l-4 border-accent pl-8">
                <div>
                  <span className="text-accent font-bold uppercase tracking-widest text-[10px] block mb-2">Refined Selection</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">{fleetClass.class}</h2>
                </div>
                <p className="text-text-light text-sm italic max-w-sm">"The gold standard in modern ship design and premium amenities."</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {fleetClass.ships.map((ship, sIdx) => (
                  <div key={sIdx} className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-primary group-hover:text-accent transition-colors">{ship.name}</h3>
                        <p className="text-text-light text-[10px] font-bold uppercase tracking-widest mt-2">Commissioned {ship.year}</p>
                      </div>
                      <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">✨</div>
                    </div>
                    
                    <div className="space-y-6 flex-grow">
                      <div className="bg-surface p-5 rounded-2xl border border-gray-50">
                        <p className="text-[9px] font-bold text-accent uppercase tracking-[0.2em] mb-2">Signature Asset</p>
                        <p className="text-primary font-bold text-sm tracking-tight">{ship.feature}</p>
                      </div>
                      <p className="text-text/70 text-sm leading-relaxed font-light">"{ship.profile}"</p>
                    </div>
                    
                    <div className="mt-10 pt-8 border-t border-gray-100">
                      <Link 
                        href="/find" 
                        className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
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

        {/* Final Fleet CTA */}
        <div className="mt-32 bg-primary p-16 md:p-24 rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,_transparent_25%,_rgba(255,255,255,0.1)_50%,_transparent_75%)] bg-[length:100px_100px]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">Elevate Your Next <br/>Honeymoon or Escape</h2>
          <p className="text-white/60 mb-12 max-w-lg mx-auto text-lg font-light leading-relaxed">
            From the Retreat to the Solstice lawn, Mara understands the Celebrity experience better than any robotic filter.
          </p>
          <Link 
            href="/find" 
            className="bg-accent text-primary px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-accent/30 inline-block"
          >
            Curate My Celebrity Voyage
          </Link>
        </div>
      </main>
    </div>
  );
}
