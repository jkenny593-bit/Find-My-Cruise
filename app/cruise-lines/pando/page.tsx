import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';

export const generateMetadata = (): Metadata => {
  const title = 'P&O Cruises Ireland — Best Deals & Prices 2026 | FindMyCruise.ie';
  const description = 'P&O Cruises offers "British at Sea" fly-cruises from Dublin, typically costing €750–€1,950 per person. Known for direct Barbados charters and no tipping.';
  const url = 'https://www.findmycruise.ie/cruise-lines/pando';

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

export default function PandOCruisesPage() {
  // Filtering mock cruises for P&O
  const pandoCruises = MOCK_CRUISES.filter(c => 
    c.line?.toLowerCase().includes('p&o') || c.line?.toLowerCase().includes('pando')
  );

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are gratuities included on P&O Cruises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! One of the biggest advantages for Irish travellers booking P&O is that tips (service charges) are already included in your fare. This means there are no daily gratuity charges added to your onboard account, making it much easier to manage your budget compared to US-based lines."
        }
      },
      {
        "@type": "Question",
        "name": "Does P&O fly from Dublin to the Caribbean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, P&O Cruises operates highly popular direct winter charter flights from Dublin (DUB) to Barbados. This is a massive benefit for Irish cruisers as it allows you to fly direct to the sun, bypass US immigration entirely, and be on your ship within hours of landing."
        }
      },
      {
        "@type": "Question",
        "name": "Is the currency on board P&O Cruises Euro or Sterling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "P&O Cruises is a British line, so the onboard currency is Pound Sterling (£). While Irish guests book their cruise in Euro, any purchases made on board (like drinks or excursions) will be charged in Sterling. We recommend using a travel-friendly card like Revolut to get the best exchange rates."
        }
      },
      {
        "@type": "Question",
        "name": "Is P&O Cruises good for families from Ireland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "P&O is excellent for families. They have specific 'Family-Friendly' ships (like Iona and Arvia) that feature dedicated kids' clubs, family-specific cabins, and great entertainment for all ages. They also offer adult-only ships (like Aurora and Arcadia) for those looking for a quieter getaway."
        }
      },
      {
        "@type": "Question",
        "name": "What is the food like on P&O for Irish guests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The food on P&O is very familiar to the Irish palate, focusing on 'British at Sea' classics. You'll find a proper cooked breakfast, afternoon tea, and high-quality Sunday roasts. They also have specialty restaurants by celebrity chefs like Marco Pierre White, offering a premium dining experience at a reasonable cost."
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
            P&O Cruises Ireland
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A P&O cruise from Ireland typically costs €750–€1,950 per person including flights. Known for their "British at Sea" style, P&O is a top choice for Irish travellers due to their direct Barbados charter flights from Dublin and their policy of including all tips in the cruise fare.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-text/70 italic">
            Showing {pandoCruises.length} featured P&O Cruises itineraries
          </p>
          <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-lg text-primary text-sm font-medium">
            🇬🇧 British at Sea Experience
          </div>
        </div>

        <CruiseGrid cruises={pandoCruises} />

        {/* SEO Content Section */}
        <section className="mt-20 prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Is P&O Cruises Good for Irish Travellers?</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              P&O Cruises offers a "home away from home" experience that resonates strongly with many Irish holidaymakers. As a British line, the atmosphere on board is familiar, comfortable, and welcoming. From the proper cups of tea to the traditional evening entertainment, P&O focuses on providing a classic cruise experience without the high-energy "gimmicks" of some US-based lines.
            </p>
            <p className="mb-4">
              For travellers from Ireland, P&O is particularly attractive due to its logistical convenience. During the winter months, they operate direct charter flights from Dublin (DUB) to Barbados, making them the easiest way for Irish guests to reach the Southern Caribbean. For Mediterranean sailings, they offer flight packages to Malta or direct sailings from Southampton (which many Irish guests reach via a short flight to London or a ferry). 
            </p>
            <p>
              The single biggest benefit for the budget-conscious Irish traveller is P&O's policy on gratuities: they are included in the fare. On most other lines, you can expect to pay an extra $15–$20 per person per day in tips, which can add hundreds of Euro to the cost of a family holiday. With P&O, the price you see is much closer to the final price you'll pay, providing excellent peace of mind.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">P&O Cruises Pricing Guide for Ireland</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              P&O is positioned as a "Value-Premium" line. Here is a rough guide to what an Irish traveller can expect to pay for a 7-night fly-cruise:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Mediterranean Fly-Cruise (Malta):</strong> €750–€1,250 per person. Includes flights from Dublin and all tips.</li>
              <li><strong>Caribbean Fly-Cruise (Barbados):</strong> €1,350–€1,950 per person. Includes direct charter flights from Dublin.</li>
              <li><strong>Southampton Departures:</strong> Often available from €600 per person for 7 nights, though you must factor in the cost of getting to the port.</li>
            </ul>
            <p>
              <strong>Top Tip for Irish Guests:</strong> Look for their "Select Price" fares if you want to choose your specific cabin and get perks like onboard spending money. If you just want the lowest price and don't mind where your cabin is, their "Early Saver" fares offer incredible value.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">P&O Cruises Pros and Cons</h2>
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
                      <li>Gratuities (tips) are included in the fare</li>
                      <li>Direct winter charter flights from Dublin to Barbados</li>
                      <li>Familiar food and "British at Sea" atmosphere</li>
                      <li>Choice of family-friendly or adult-only ships</li>
                      <li>Excellent value for money with no hidden daily fees</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-sm text-text/80 align-top">
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Onboard currency is Pound Sterling (£), requiring exchange</li>
                      <li>Atmosphere can feel a bit more "reserved" than US lines</li>
                      <li>Fewer "high-action" features (no surf simulators or go-karts)</li>
                      <li>Winter Caribbean cruises are extremely popular and sell out fast</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">How Does P&O Cruises Compare?</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p>
              When compared to MSC or Royal Caribbean, P&O offers a much more traditional and calm experience. While it lacks the "bells and whistles" of the mega-ships, it wins on transparency and ease of budgeting due to the inclusive tips. Compared to Princess Cruises (a sister line), P&O is more focused on the British market, whereas Princess has a more international, slightly more premium feel. For Irish families, the choice often comes down to the direct Barbados flight—if you want the Caribbean without the US immigration hassle, P&O is the clear winner.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Frequently Asked Questions about P&O from Ireland</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Are gratuities included on P&O Cruises?</h3>
              <p className="text-text/80">Yes! One of the biggest advantages for Irish travellers booking P&O is that tips (service charges) are already included in your fare. This means there are no daily gratuity charges added to your onboard account, making it much easier to manage your budget compared to US-based lines.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Does P&O fly from Dublin to the Caribbean?</h3>
              <p className="text-text/80">Yes, P&O Cruises operates highly popular direct winter charter flights from Dublin (DUB) to Barbados. This is a massive benefit for Irish cruisers as it allows you to fly direct to the sun, bypass US immigration entirely, and be on your ship within hours of landing.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Is the currency on board P&O Cruises Euro or Sterling?</h3>
              <p className="text-text/80">P&O Cruises is a British line, so the onboard currency is Pound Sterling (£). While Irish guests book their cruise in Euro, any purchases made on board (like drinks or excursions) will be charged in Sterling. We recommend using a travel-friendly card like Revolut to get the best exchange rates.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Is P&O Cruises good for families from Ireland?</h3>
              <p className="text-text/80">P&O is excellent for families. They have specific 'Family-Friendly' ships (like Iona and Arvia) that feature dedicated kids' clubs, family-specific cabins, and great entertainment for all ages. They also offer adult-only ships (like Aurora and Arcadia) for those looking for a quieter getaway.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">What is the food like on P&O for Irish guests?</h3>
              <p className="text-text/80">The food on P&O is very familiar to the Irish palate, focusing on 'British at Sea' classics. You'll find a proper cooked breakfast, afternoon tea, and high-quality Sunday roasts. They also have specialty restaurants by celebrity chefs like Marco Pierre White, offering a premium dining experience at a reasonable cost.</p>
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
