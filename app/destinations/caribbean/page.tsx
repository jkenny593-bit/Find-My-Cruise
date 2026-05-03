import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Caribbean Cruise Holidays from Ireland | FindMyCruise.ie',
    description: 'Find your perfect Caribbean cruise from Ireland. Expert advice on cruises from Dublin and Cork to Barbados, St Lucia, Antigua, and more.',
  };
};

export default function CaribbeanPage() {
  // Filtering mock cruises for Caribbean itineraries
  const caribbeanCruises = MOCK_CRUISES.filter(c => 
    c.itinerary.toLowerCase().includes('caribbean') || 
    c.itinerary.toLowerCase().includes('baham')
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Caribbean Cruise Holidays from Ireland
          </h1>
          <Link 
            href="/find" 
            className="inline-block bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            Chat with Mara to Plan Your Caribbean Escape
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="prose prose-slate max-w-none mb-16">
          <p className="text-xl text-text/80 leading-relaxed">
            Dreaming of white sandy beaches and turquoise waters? Caribbean cruise holidays from Ireland have never been more accessible. Whether you're looking to fly from Dublin, Cork, or Shannon, we help you find the best connections to major cruise hubs like Miami, San Juan, and Barbados. A Caribbean cruise offers the perfect escape from the Irish winter, allowing you to wake up in a new tropical paradise every morning. From the lush rainforests of St. Lucia to the historic dockyards of Antigua and the vibrant culture of Martinique, there is an island for every traveller.
          </p>
          <p className="text-xl text-text/80 leading-relaxed">
            Many Irish travellers choose "Fly-Cruise" packages that include direct flights to Florida or the Caribbean islands. These packages often provide the best value, combining your luxury cruise with flights and transfers. Our AI assistant, Mara, can help you navigate the different options, whether you want a family-friendly adventure with Royal Caribbean, a freestyle vacation with Norwegian, or a premium experience with Celebrity Cruises. With prices starting from €1,800 and going up to €4,500 for luxury suites, there is a Caribbean voyage to suit every Irish budget.
          </p>
        </div>

        <CruiseGrid cruises={caribbeanCruises} title="Top Caribbean Deals for Irish Travellers" />

        {/* FAQ Section */}
        <section className="mt-24 bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
          <h2 className="text-3xl font-heading font-bold text-primary mb-10 text-center">Caribbean Cruise FAQs for Irish Travellers</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                q: "What is the best time for a Caribbean cruise from Ireland?",
                a: "The most popular time is during the Irish winter (December to April) when the weather in the Caribbean is dry and warm. This is the perfect time to escape the cold at home."
              },
              {
                q: "Do I need a visa for a Caribbean cruise?",
                a: "As an Irish citizen, you generally do not need a visa for most Caribbean islands, but if your cruise departs from a US port (like Miami), you will need a valid ESTA. Always check the specific requirements for each island on your itinerary."
              },
              {
                q: "Which Irish airports fly to Caribbean cruise hubs?",
                a: "Dublin Airport offers the best connections, often via London, Amsterdam, or direct flights to major US hubs. Cork and Shannon also offer convenient connections through major European cities."
              },
              {
                q: "What should I pack for a Caribbean cruise?",
                a: "Light, breathable clothing is essential. Don't forget high-factor sunscreen, swimwear, and a light jacket for the air-conditioned areas on the ship. Comfortable walking shoes are a must for exploring ports like St. Kitts."
              },
              {
                q: "Are flights included in the cruise price?",
                a: "Some packages are 'Cruise Only' while others are 'Fly-Cruise'. Mara can help you identify which deals include flights from Ireland to make your planning easier."
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
          <p className="text-sm text-text/50 mb-6 uppercase tracking-widest font-bold">Explore More Destinations</p>
          <div className="flex justify-center gap-8">
            <Link href="/destinations/mediterranean" className="text-primary font-bold hover:text-accent transition-colors underline decoration-accent underline-offset-4">Mediterranean Cruises</Link>
            <Link href="/destinations/fjords" className="text-primary font-bold hover:text-accent transition-colors underline decoration-accent underline-offset-4">Norwegian Fjords</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
