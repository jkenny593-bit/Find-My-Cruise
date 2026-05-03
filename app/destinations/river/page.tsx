import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    title: 'European River Cruise Holidays from Ireland | FindMyCruise.ie',
    description: 'Explore the heart of Europe with river cruise holidays from Ireland. Discover Viking, Avalon, and AmaWaterways cruises on the Rhine, Danube, Seine, and Douro.',
  };
};

export default function RiverPage() {
  // Filtering mock cruises for River itineraries
  const riverCruises = MOCK_CRUISES.filter(c => 
    c.id.includes('river') || 
    c.line.toLowerCase().includes('viking')
  ).slice(0, 3);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            European River Cruise Holidays from Ireland
          </h1>
          <Link 
            href="/find" 
            className="inline-block bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            Ask Mara About River Cruises
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="prose prose-slate max-w-none mb-16">
          <p className="text-xl text-text/80 leading-relaxed">
            European river cruise holidays from Ireland offer a unique and intimate way to explore the continent's most historic and beautiful cities. Unlike ocean cruising, river cruises dock right in the heart of the action, allowing you to walk off the ship and directly into the winding streets of Cologne, Budapest, or Paris. With easy flights from Dublin, Cork, and Shannon to major European hubs like Amsterdam and Basel, your river adventure is closer than you think. The Rhine, Danube, Seine, and Douro each offer a distinct cultural experience, from fairy-tale castles and vineyards to world-class art galleries and local gastronomy.
          </p>
          <p className="text-xl text-text/80 leading-relaxed">
            A river cruise is essentially a floating boutique hotel. Onboard lines like Viking, Avalon Waterways, and AmaWaterways, you'll find elegant staterooms, panoramic lounges, and locally-inspired cuisine. Most river cruises are highly inclusive, often covering shore excursions, Wi-Fi, and wine or beer with lunch and dinner. This provides excellent value for Irish travellers seeking a more relaxed and immersive vacation. Prices generally range from €1,500 for shorter Rhine sailings to over €4,000 for more extensive Danube voyages on premium ships like the AmaMagna.
          </p>
        </div>

        <CruiseGrid cruises={riverCruises} title="Featured European River Cruises" />

        {/* FAQ Section */}
        <section className="mt-24 bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
          <h2 className="text-3xl font-heading font-bold text-primary mb-10 text-center">European River Cruise FAQs for Irish Travellers</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                q: "What is the best time of year for a European river cruise?",
                a: "The spring (April to June) and autumn (September to October) offer beautiful weather and fewer crowds. However, the Christmas Market cruises in November and December are incredibly popular with Irish travellers for their festive atmosphere."
              },
              {
                q: "Are flights from Ireland included in river cruise prices?",
                a: "Many river cruise lines, especially Viking, often offer packages that include flights from Dublin and sometimes other regional airports. Mara can help you identify the best fly-cruise deals available."
              },
              {
                q: "How many people are typically on a river cruise ship?",
                a: "River cruise ships are much smaller than ocean giants, typically carrying between 100 and 190 passengers. This leads to a more social atmosphere and much more personalized service."
              },
              {
                q: "What should I wear on a river cruise?",
                a: "The dress code is generally 'country club casual'. Comfortable walking shoes are the most important item for exploring European cobblestone streets. There are rarely formal nights, though some people like to dress up slightly for the captain's dinner."
              },
              {
                q: "Which river is best for a first-time cruiser?",
                a: "The Rhine and the Danube are the most popular choices for first-timers. The Rhine is famous for its castles and vineyards, while the Danube offers the chance to visit iconic capitals like Vienna and Budapest."
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{faq.q}</h3>
                <p className="text-text/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <div className="mt-16 text-center border-t pt-12">
          <p className="text-sm text-text/50 mb-6 uppercase tracking-widest font-bold">Discover More</p>
          <div className="flex justify-center gap-8">
            <Link href="/destinations/mediterranean" className="text-primary font-bold hover:text-accent transition-colors underline decoration-accent underline-offset-4">Mediterranean Cruises</Link>
            <Link href="/destinations/fjords" className="text-primary font-bold hover:text-accent transition-colors underline decoration-accent underline-offset-4">Norwegian Fjords</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
