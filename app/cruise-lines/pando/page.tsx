import { Metadata } from 'next';
import Link from 'next/link';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';

export const generateMetadata = (): Metadata => {
  return {
    title: 'P&O Cruises Ireland | Great Value from Southampton | FindMyCruise.ie',
    description: 'Find the best P&O Cruises deals from Ireland. Explore Iona, Arvia, and Britannia with easy flight connections to Southampton.',
  };
};

export default function PandoPage() {
  // Filtering mock cruises for P&O Cruises
  const pandoCruises = MOCK_CRUISES.filter(c => 
    c.line.toLowerCase().includes('p&o') || c.line.toLowerCase().includes('pando')
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Brand Hero */}
      <div className="bg-[#002244] py-20 text-center relative">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="bg-[#C9A84C] inline-block px-6 py-2 rounded-full mb-6 shadow-md text-[#002244] font-bold text-sm tracking-widest uppercase">
            Classic British Style
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            P&O Cruises Ireland
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience the comfort of British cruising. For Irish travellers, P&O 
            offers a familiar, great-value way to see the world—with no currency 
            exchange worries and a focus on Southampton departures.
          </p>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Why P&O Section */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Great for Families", 
              desc: "Ships like Iona and Arvia are designed for all ages, with incredible clubs and pool decks.",
              icon: "👪"
            },
            { 
              title: "No Hidden Costs", 
              desc: "Daily gratuities are included in your fare, making budgeting simple for Irish guests.",
              icon: "💰"
            },
            { 
              title: "British Comfort", 
              desc: "From afternoon tea to familiar brands, it feels like a home away from home at sea.",
              icon: "🍵"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-text/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        <CruiseGrid cruises={pandoCruises} title="Featured P&O Cruises Deals" />

        {/* The Southampton Advantage */}
        <div className="mt-20 bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2 p-8 md:p-12 space-y-6">
            <h2 className="text-3xl font-heading font-bold text-primary">The Southampton Advantage</h2>
            <p className="text-text/80 leading-relaxed">
              Many Irish travellers prefer sailing from **Southampton**. Why? Because it 
              eliminates the need for long-haul flights. With regular, short flights 
              from Dublin, Cork, and Shannon to Southampton Airport, you can be at the 
              cruise terminal in no time.
            </p>
            <p className="text-text/80 leading-relaxed">
              P&O Cruises is the king of Southampton, offering the most variety and 
              frequent departures to the Norwegian Fjords, Spain, France, and even 
              the Canary Islands. Mara can help you find the best flights to match 
              your P&O sailing perfectly.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="/find" 
                className="inline-block bg-[#002244] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md"
              >
                Let Mara find your P&O Cruise
              </a>
              <Link 
                href="/cruise-lines/pando/fleet" 
                className="inline-block border border-[#002244] text-[#002244] px-8 py-3 rounded-full font-bold hover:bg-[#002244]/5 transition-all"
              >
                View Full Fleet Guide
              </Link>
            </div>

          </div>
          <div className="lg:w-1/2 bg-[#002244]/5 flex items-center justify-center p-12">
            <div className="space-y-4 text-center">
              <div className="text-5xl">⚓</div>
              <p className="text-[#002244] font-bold text-xl font-heading italic leading-tight">
                "Small Ship Charm, Big Ship Features"
              </p>
              <div className="flex justify-center gap-2">
                <span className="bg-[#C9A84C] w-2 h-2 rounded-full"></span>
                <span className="bg-[#C9A84C] w-2 h-2 rounded-full opacity-50"></span>
                <span className="bg-[#C9A84C] w-2 h-2 rounded-full opacity-25"></span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
