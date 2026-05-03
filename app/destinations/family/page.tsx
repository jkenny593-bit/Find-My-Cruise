import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Family Cruise Holidays from Ireland 2026 | FindMyCruise.ie',
    description: 'The best family cruise holidays from Ireland for 2026. Discover MSC, Disney, and Royal Caribbean cruises with great kids clubs and family-friendly itineraries.',
  };
};

export default function FamilyPage() {
  // Filtering mock cruises for Family itineraries (using tags or specific ships in mock)
  const familyCruises = MOCK_CRUISES.filter(c => 
    c.id.includes('family') || 
    ['MSC Cruises', 'Disney Cruise Line', 'Royal Caribbean'].includes(c.line)
  ).slice(0, 3);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Family Cruise Holidays from Ireland 2026
          </h1>
          <Link 
            href="/find" 
            className="inline-block bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            Ask Mara for the Best Family Deals
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="prose prose-slate max-w-none mb-16">
          <p className="text-xl text-text/80 leading-relaxed">
            Planning the perfect family holiday can be a challenge, but a family cruise from Ireland takes all the stress away. Imagine a vacation where the kids' clubs are world-class, the entertainment rivals Broadway, and you only have to unpack your suitcase once. For 2026, we are seeing incredible demand for family-friendly sailings from Dublin, Cork, and Belfast. Modern cruise ships are designed with families in mind, offering spacious inter-connecting cabins, dedicated splash zones, and supervised clubs for everyone from toddlers to teenagers.
          </p>
          <p className="text-xl text-text/80 leading-relaxed">
            Whether you're looking for the magic of Disney Cruise Line, the incredible value of MSC Cruises, or the sheer innovation of Royal Caribbean, there is a perfect ship waiting for you. Most family-oriented cruises offer all-inclusive options, meaning your meals, entertainment, and even some drinks are covered in the initial price. This makes budgeting for an Irish family much easier. With prices typically ranging from €1,200 for budget-friendly MSC sailings to over €3,500 for the premium Disney experience, Mara can help you find the best value for your party size.
          </p>
        </div>

        <CruiseGrid cruises={familyCruises} title="Recommended 2026 Family Cruises" />

        {/* FAQ Section */}
        <section className="mt-24 bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
          <h2 className="text-3xl font-heading font-bold text-primary mb-10 text-center">Family Cruise FAQs for Irish Parents</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                q: "What age can children start cruising?",
                a: "Most cruise lines require infants to be at least 6 months old at the time of sailing. For trans-Atlantic or more remote itineraries, the minimum age is often 12 months. All the major family lines have fantastic facilities for older babies and toddlers."
              },
              {
                q: "Are kids' clubs included in the price?",
                a: "Yes! On lines like Royal Caribbean, MSC, and Disney, the standard kids' clubs are included in your fare. They are supervised by professional staff and divided into specific age groups to ensure everyone has a blast."
              },
              {
                q: "Which cruise line is best for teenagers?",
                a: "Royal Caribbean is often the top choice for teens, with dedicated lounges, gaming areas, and high-energy activities like surf simulators and rock climbing. MSC also offers great teen-specific programming."
              },
              {
                q: "How do family cabins work?",
                a: "Cruise lines offer various options, from cabins with pull-out sofa beds to inter-connecting rooms. Some newer ships even have large family suites that can sleep up to 6 or 8 people. Mara can help you find the most cost-effective layout for your family."
              },
              {
                q: "What about picky eaters in the family?",
                a: "Cruising is a paradise for picky eaters! With 24-hour buffets, casual pizza spots, and dedicated kids' menus in the main dining rooms, even the most selective eaters will find plenty they love. Most lines also handle allergies and dietary requirements brilliantly."
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
          <p className="text-sm text-text/50 mb-6 uppercase tracking-widest font-bold">More for the Family</p>
          <div className="flex justify-center gap-8">
            <Link href="/destinations/mediterranean" className="text-primary font-bold hover:text-accent transition-colors underline decoration-accent underline-offset-4">Mediterranean Cruises</Link>
            <Link href="/destinations/caribbean" className="text-primary font-bold hover:text-accent transition-colors underline decoration-accent underline-offset-4">Caribbean Escapes</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
