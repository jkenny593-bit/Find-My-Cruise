import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Celebrity Cruises Ireland | Modern Luxury at Sea | FindMyCruise.ie',
    description: 'Discover Celebrity Cruises deals from Ireland. Explore Edge-class ships, world-class dining, and premium service with easy flights from Dublin and Cork.',
  };
};

export default function CelebrityPage() {
  // Filtering mock cruises for Celebrity
  const celebrityCruises = MOCK_CRUISES.filter(c => 
    c.line.toLowerCase().includes('celebrity')
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Brand Hero */}
      <div className="bg-white border-b border-gray-100 py-24 text-center relative">
        <div className="max-w-[1200px] mx-auto px-4">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-6 block">The Height of Modern Luxury</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-6 leading-tight">
            Celebrity Cruises Ireland
          </h1>
          <p className="text-text-light max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Elevate your holiday experience. For Irish travellers seeking sophisticated 
            design, Michelin-starred cuisine, and intuitive service, Celebrity 
            Cruises offers an unmatched premium voyage.
          </p>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 py-20">
        {/* Why Celebrity Section */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              title: "Award-Winning Dining", 
              desc: "Menus crafted by Michelin-starred chefs and unique venues like Le Petit Chef.",
              icon: "🍽️"
            },
            { 
              title: "Innovative Design", 
              desc: "Experience the Magic Carpet and the stunning outward-facing design of the Edge Series.",
              icon: "✨"
            },
            { 
              title: "Intuitive Service", 
              desc: "A staff-to-guest ratio that ensures every need is anticipated before you even ask.",
              icon: "🤵"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        <CruiseGrid cruises={celebrityCruises} title="Featured Celebrity Cruises Deals" />

        {/* The Retreat Experience */}
        <div className="mt-24 bg-primary text-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-20 space-y-8">
            <span className="text-accent font-bold tracking-widest uppercase text-xs block">Exclusive Sanctuary</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">The Retreat®</h2>
            <p className="text-white/70 leading-relaxed text-lg font-light">
              For the ultimate Irish luxury getaway, The Retreat® is more than a suite—it’s 
              your own private resort. It includes a dedicated team of butlers, a 
              private restaurant, and an exclusive lounge and sundeck that rivals 
              the world’s most high-end hotels.
            </p>
            <div className="pt-6">
              <a 
                href="/find" 
                className="inline-block bg-accent text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-accent/20"
              >
                Let Mara find your Celebrity Suite
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 bg-white/5 flex items-center justify-center p-20 relative">
             {/* Abstract luxury pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-accent)_1px,_transparent_1px)] bg-[length:30px_30px]" />
            </div>
            <div className="space-y-6 text-center z-10">
              <div className="text-6xl">💎</div>
              <p className="text-accent font-bold text-2xl font-heading italic leading-tight">
                "Nothing Comes Close"
              </p>
              <div className="flex justify-center gap-3">
                <span className="bg-accent w-2 h-2 rounded-full"></span>
                <span className="bg-accent w-2 h-2 rounded-full opacity-50"></span>
                <span className="bg-accent w-2 h-2 rounded-full opacity-25"></span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
