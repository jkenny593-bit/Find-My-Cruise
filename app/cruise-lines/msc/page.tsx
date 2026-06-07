import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';

export const generateMetadata = (): Metadata => {
  const title = 'MSC Cruises Ireland — Best Deals, Prices & Reviews | FindMyCruise.ie';
  const description = 'MSC Cruises offers the best value fly-cruises from Dublin and Cork, typically costing €649–€1,850 per person. Known for Kids Sail Free and baby-friendly clubs.';
  const url = 'https://www.findmycruise.ie/cruise-lines/msc';

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
    }
  };
};

export default function MSCCruisesPage() {
  // Filtering mock cruises for MSC
  const mscCruises = MOCK_CRUISES.filter(c => 
    c.line?.toLowerCase().includes('msc')
  );

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is MSC Cruises good for families from Ireland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, MSC is one of the top choices for Irish families, largely due to their 'Kids Sail Free' promotions (where children only pay port taxes) and their award-winning family facilities. Their partnership with LEGO and Chicco ensures high-quality play areas and baby-friendly amenities across the fleet."
        }
      },
      {
        "@type": "Question",
        "name": "Does MSC fly from Dublin or Cork?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MSC Cruises offers extensive fly-cruise packages from Dublin (DUB) year-round, with direct flights to Barcelona, Rome, and Marseille. During the summer season, they also offer seasonal connections from Cork (ORK) via European hubs, making it one of the most accessible lines for Irish travellers."
        }
      },
      {
        "@type": "Question",
        "name": "What is the MSC Baby Club?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The MSC Baby Club is a dedicated service for infants aged 6 to 36 months. Unlike many other lines, MSC offers a 'Babycare' service where staff will look after your little ones while you enjoy the ship. They also provide Chicco baby equipment, bottle warmers, and dedicated baby laundry services, making it the most infant-friendly line for Irish parents."
        }
      },
      {
        "@type": "Question",
        "name": "Are drinks included on MSC Cruises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Base fares on MSC usually include food and basic water/coffee in the buffet, but not alcoholic or soft drinks. However, most Irish bookings are made as 'All-In' packages which include the Easy Drinks Package. We highly recommend booking the drinks inclusive fare in Euro to avoid the 15% service charge added to individual drinks purchased onboard."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to pay gratuities on MSC Cruises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MSC adds a daily Hotel Service Charge to your onboard account (typically €12 per adult per night). For Irish travellers, we recommend pre-paying these gratuities at the time of booking. This allows you to settle your total holiday cost in Euro before you leave, avoiding surprise charges on your final morning."
        }
      }
    ]
  };

  return (
    <div className="bg-background min-h-screen">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Hero Header */}
      <div className="bg-primary py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
            MSC Cruises Ireland
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            An MSC Mediterranean cruise from Ireland typically costs €649–€1,850 per person including flights from Dublin or Cork. MSC is the industry leader for budget-conscious families, offering 'Kids Sail Free' deals and the most comprehensive baby-friendly clubs at sea.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-text/70 italic">
            Showing {mscCruises.length} featured MSC itineraries
          </p>
          <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-lg text-primary text-sm font-medium">
            👨‍👩‍👧‍👦 Best Value for Families
          </div>
        </div>

        <CruiseGrid cruises={mscCruises} />

        {/* SEO Content Section */}
        <section className="mt-20 prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Is MSC Cruises Good for Irish Travellers?</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              MSC Cruises has rapidly become the go-to choice for the Irish market, primarily because they offer an unbeatable combination of modern ships and aggressive pricing. If you are an Irish traveller looking for a high-quality Mediterranean experience without the premium price tag of US-based lines, MSC is hard to ignore. Their fleet is among the youngest in the world, featuring stunning Swarovski crystal staircases, expansive pool decks, and vibrant evening entertainment.
            </p>
            <p className="mb-4">
              For Irish guests, the departure options are a major plus. MSC offers some of the best flight-inclusive packages from Dublin Airport, with direct routes to Barcelona, Rome (Civitavecchia), and Genoa. They also have a significant presence in Northern Europe for those looking at Norwegian Fjords cruises. On board, the atmosphere is distinctly European—multilingual, stylish, and slightly more formal than some of the "resort-style" lines, which many Irish cruisers find adds a touch of class to their holiday.
            </p>
            <p>
              Crucially for the Irish consumer, MSC is extremely transparent with their Euro-based pricing. Unlike some competitors that operate in USD, MSC's onboard currency for European sailings is the Euro, which makes tracking your spending at the bar or in the shops much easier. Their "All-In" packages are also highly popular in Ireland, allowing you to bundle your cruise, flights, drinks, and gratuities into one single, protected payment.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">The Best Line for Infants: MSC Baby Club</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              Where MSC truly shines is in their dedication to the youngest travellers. While many cruise lines only offer supervised clubs for children aged 3 and up, MSC’s partnership with **Chicco** has resulted in the best infant facilities at sea. The **MSC Baby Club** caters to infants as young as 6 months.
            </p>
            <p className="mb-4">
              They offer two tiers of service: **Babycare**, where you can leave your child with qualified staff for a few hours (allowing parents to have a quiet dinner or spa treatment), and **Baby Time**, where parents can play with their children in a dedicated, Chicco-equipped playroom. This is a game-changer for Irish parents who often find traditional sun holidays difficult with very young children.
            </p>
            <p>
              Beyond the clubs, MSC provides specialized baby laundry services (using non-biological detergents), bottle warmers, and high-quality strollers and bouncers on loan. When combined with their frequent "Kids Sail Free" promotions, where children under 12 only pay port taxes when sharing a cabin with two adults, MSC offers the best value-per-square-inch for Irish families with infants.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">MSC Cruises Pricing Guide for Ireland</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              MSC is widely considered the best-value major cruise line. Here is a rough guide to what you can expect to pay for a 7-night fly-cruise from Dublin:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Budget (Interior Cabin):</strong> €649–€850 per person. Often includes flights and sometimes the Easy Drinks Package during promo periods.</li>
              <li><strong>Mid-Range (Balcony Cabin):</strong> €950–€1,350 per person. Usually includes the "Premium Extra" drinks package and pre-paid gratuities.</li>
              <li><strong>The MSC Yacht Club (Luxury):</strong> €2,200–€3,800 per person. This is their "ship-within-a-ship" concept, offering butler service, private decks, and all-inclusive luxury.</li>
            </ul>
            <p>
              <strong>Top Tip for Irish Families:</strong> Always look for the "Kids Sail Free" logo. On many Mediterranean itineraries, you can take two children under 12 for just the cost of their flights and port taxes (roughly €250–€350 each), which can save an Irish family of four over €1,000 compared to other lines.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">MSC Cruises Pros and Cons</h2>
          <div className="mb-10 overflow-hidden rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-primary uppercase tracking-wider">Pros</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-primary uppercase tracking-wider">Cons</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-text/80 align-top">
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Unbeatable value for money, especially for families</li>
                      <li>Best-in-class baby and toddler facilities (Chicco partnership)</li>
                      <li>Euro currency used on board for European sailings</li>
                      <li>Modern, glamorous ships with stunning design</li>
                      <li>Strong flight connections from Dublin Airport</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-sm text-text/80 align-top">
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Dining quality can be inconsistent in the main dining rooms</li>
                      <li>Ships can feel very busy and loud during peak season</li>
                      <li>Service style is European, which some find less 'proactive' than US lines</li>
                      <li>Extra charges for some onboard attractions (4D cinema, bowling)</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">How Does MSC Cruises Compare?</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p>
              When comparing MSC to its closest rival, Royal Caribbean, the choice usually comes down to budget vs. activities. Royal Caribbean offers more "active" features like surf simulators and skydiving pods, which appeal more to teenagers. However, MSC is significantly cheaper and offers a more sophisticated, glamorous feel. Compared to NCL (Norwegian Cruise Line), MSC is more traditional in its dining structure but offers better family-specific deals. If you are looking for a true luxury experience, MSC's Yacht Club often beats out the "Suites" experience on many other contemporary lines for a lower total price.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Frequently Asked Questions about MSC Cruises from Ireland</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Is MSC Cruises good for families from Ireland?</h3>
              <p className="text-text/80">Yes, MSC is one of the top choices for Irish families, largely due to their 'Kids Sail Free' promotions (where children only pay port taxes) and their award-winning family facilities. Their partnership with LEGO and Chicco ensures high-quality play areas and baby-friendly amenities across the fleet.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Does MSC fly from Dublin or Cork?</h3>
              <p className="text-text/80">MSC Cruises offers extensive fly-cruise packages from Dublin (DUB) year-round, with direct flights to Barcelona, Rome, and Marseille. During the summer season, they also offer seasonal connections from Cork (ORK) via European hubs, making it one of the most accessible lines for Irish travellers.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">What is the MSC Baby Club?</h3>
              <p className="text-text/80">The MSC Baby Club is a dedicated service for infants aged 6 to 36 months. Unlike many other lines, MSC offers a 'Babycare' service where staff will look after your little ones while you enjoy the ship. They also provide Chicco baby equipment, bottle warmers, and dedicated baby laundry services, making it the most infant-friendly line for Irish parents.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Are drinks included on MSC Cruises?</h3>
              <p className="text-text/80">Base fares on MSC usually include food and basic water/coffee in the buffet, but not alcoholic or soft drinks. However, most Irish bookings are made as 'All-In' packages which include the Easy Drinks Package. We highly recommend booking the drinks inclusive fare in Euro to avoid the 15% service charge added to individual drinks purchased onboard.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Do I need to pay gratuities on MSC Cruises?</h3>
              <p className="text-text/80">MSC adds a daily Hotel Service Charge to your onboard account (typically €12 per adult per night). For Irish travellers, we recommend pre-paying these gratuities at the time of booking. This allows you to settle your total holiday cost in Euro before you leave, avoiding surprise charges on your final morning.</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-text/50 italic">
            Last updated: May 2026. Prices and flight availability are subject to change.
          </div>
        </section>
      </main>
    </div>
  );
}
