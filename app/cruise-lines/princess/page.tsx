import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Princess Cruises Ireland | The Love Boat Experience | FindMyCruise.ie',
    description: 'Expert advice on Princess Cruises from Ireland. Discover the MedallionClass experience, world-class entertainment, and destination-focused itineraries.',
  };
};

export default function PrincessPage() {
  // Filtering mock cruises for Princess (using generic premium as mock doesn't have Princess yet)
  const princessCruises = MOCK_CRUISES.filter(c => 
    c.category === 'Premium' || c.line.toLowerCase().includes('princess')
  ).slice(0, 3);

  return (
    <div className="bg-background min-h-screen">
      {/* Brand Hero */}
      <div className="bg-white border-b border-gray-100 py-24 text-center relative">
        <div className="max-w-[1200px] mx-auto px-4">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-6 block">The MedallionClass Experience</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-6 leading-tight">
            Princess Cruises Ireland
          </h1>
          <p className="text-text-light max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Discover a world of effortless travel. Princess Cruises combines 
            destination-rich itineraries with a personalized, high-tech experience 
            that ensures Irish travellers feel completely at home, anywhere on Earth.
          </p>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 py-20">
        {/* Why Princess Section */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              title: "MedallionClass™", 
              desc: "A wearable device that streamlines everything from boarding to ordering drinks to your sun lounger.",
              icon: "🏅"
            },
            { 
              title: "Discovery at Sea", 
              desc: "Exclusive shore excursions and onboard activities developed in partnership with Discovery™.",
              icon: "🔭"
            },
            { 
              title: "Movies Under the Stars", 
              desc: "Watch the latest blockbusters on a massive poolside screen with popcorn and warm blankets.",
              icon: "🍿"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        <CruiseGrid cruises={princessCruises} title="Recommended Princess Cruises Sailings" />

        {/* Destination Leaders */}
        <div className="mt-24 bg-surface rounded-[3rem] overflow-hidden border border-gray-100 flex flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2 p-12 md:p-20 space-y-8">
            <span className="text-accent font-bold tracking-widest uppercase text-xs block">Voted Best Itineraries</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary leading-tight">World-Class Itineraries</h2>
            <p className="text-text-light leading-relaxed text-lg">
              Princess Cruises is renowned for spending more time in port and offering 
              late-night departures, allowing Irish travellers to truly immerse 
              themselves in local culture. Whether it's the glaciers of Alaska or the 
              historic ports of the Mediterranean, Princess gets you closer.
            </p>
            <div className="pt-6 flex flex-wrap gap-4">
              <a 
                href="/find" 
                className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl shadow-primary/10"
              >
                Let Mara find your Voyage
              </a>
              <Link 
                href="/cruise-lines/princess/fleet" 
                className="inline-block border border-primary text-primary px-10 py-4 rounded-full font-bold hover:bg-primary/5 transition-all"
              >
                View the Princess Fleet
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 bg-white flex items-center justify-center p-20 relative">
             <div className="text-center">
              <div className="text-7xl mb-8 opacity-20">🌊</div>
              <p className="text-primary font-bold text-2xl font-heading italic leading-tight max-w-sm">
                "Experience the Love Boat magic for the modern era."
              </p>
              <p className="mt-8 text-text-light font-bold tracking-widest uppercase text-xs">— The Princess Promise</p>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
