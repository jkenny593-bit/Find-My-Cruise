import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Princess Cruises Ireland — Deals, Ships & Prices | FindMyCruise.ie',
    description: 'Princess Cruises offers "MedallionClass" fly-cruises from Dublin, typically costing €999–€2,850 per person. Known for multi-generational travel and premium service.',
    alternates: {
      canonical: 'https://www.findmycruise.ie/cruise-lines/princess',
    },
    openGraph: {
      title: 'Princess Cruises Ireland — Deals, Ships & Prices',
      description: 'Find the best Princess Cruises deals from Ireland. Expert advice on MedallionClass technology, Caribbean fly-cruises, and family-friendly amenities.',
      url: 'https://www.findmycruise.ie/cruise-lines/princess',
    }
  };
};

export default function PrincessCruisesPage() {
  // Filtering mock cruises for Princess
  const princessCruises = MOCK_CRUISES.filter(c => 
    c.line?.toLowerCase().includes('princess')
  );

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Princess Cruises good for Irish travellers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Princess Cruises is an excellent choice for Irish travellers looking for a 'premium-contemporary' experience. They offer a more refined atmosphere than the massive resort ships, with a strong focus on service and destination-rich itineraries. Their MedallionClass technology makes the onboard experience incredibly seamless."
        }
      },
      {
        "@type": "Question",
        "name": "Does Princess fly from Dublin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Princess Cruises offers extensive fly-cruise packages from Dublin (DUB). They have regular connections to Mediterranean hubs like Barcelona, Rome, and Athens. They are also a top choice for Irish travellers heading to Alaska or the Caribbean, with one-stop flight packages via major hubs."
        }
      },
      {
        "@type": "Question",
        "name": "What is the MedallionClass on Princess Cruises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MedallionClass is a wearable device (the Medallion) that replaces your room key and credit card. It allows for touchless embarkation, keyless room entry, and even lets you order a drink to wherever you are on the ship. Irish guests find it incredibly convenient and it significantly reduces queues onboard."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a Princess cruise cost from Ireland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 7-night Princess cruise from Ireland typically costs between €999 and €2,850 per person, including flights. We highly recommend adding the 'Princess Plus' package (around €50 per day), which bundles drinks, Wi-Fi, and gratuities, offering much better value than paying for these items individually."
        }
      },
      {
        "@type": "Question",
        "name": "Is Princess Cruises family friendly for Irish families?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Princess is great for families who prefer a more relaxed holiday. While they don't have the massive waterparks of other lines, they have excellent Discovery at SEA™ programs for kids and teens. They are also a favorite for multi-generational Irish families (grandparents, parents, and kids) travelling together."
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
            Princess Cruises Ireland
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A Princess cruise from Ireland typically costs €999–€2,850 per person including flights from Dublin. Princess is famous for their "MedallionClass" technology and offers Irish travellers a premium, destination-focused experience that is perfect for multi-generational families and couples.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-text/70 italic">
            Showing {princessCruises.length} featured Princess Cruises itineraries
          </p>
          <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-lg text-primary text-sm font-medium">
            🏅 Premium Destination Experts
          </div>
        </div>

        <CruiseGrid cruises={princessCruises} />

        {/* SEO Content Section */}
        <section className="mt-20 prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Is Princess Cruises Good for Irish Travellers?</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              Princess Cruises is a stalwart of the premium cruise market and has a loyal following in Ireland. They offer what many Irish guests describe as a "proper" cruise experience—one that balances tradition with modern innovation. If you want a holiday that focuses on the destinations you are visiting, with high-quality service and a sense of effortless luxury, Princess is a top contender.
            </p>
            <p className="mb-4">
              For travellers from Ireland, the logistics are excellent. Princess offers comprehensive fly-cruise packages from Dublin (DUB). They are particularly strong in the Mediterranean, with ships frequently sailing from Barcelona, Rome (Civitavecchia), and Athens. On board, the experience is enhanced by their "MedallionClass" technology, which Irish guests love for its simplicity. The wearable Medallion streamlines everything from boarding to paying for a Guinness at the bar, making the whole trip feel more like a vacation and less like an exercise in logistics.
            </p>
            <p>
              While Princess is an American line, the atmosphere on board is international and very welcoming to Irish guests. They are particularly famous for their "Movies Under the Stars" (giant poolside cinema screens) and their world-class pizza—consistently voted the best at sea. For the Irish cruiser, Princess offers a sense of stability and quality that makes them a very safe bet for a high-value holiday.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Princess Cruises Pricing Guide for Ireland</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              Princess typically sits just above the contemporary lines (like MSC) in terms of price. Here is a guide for a 7-night fly-cruise from Dublin:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Princess Standard (Interior/Balcony):</strong> €999–€1,650 per person. Includes flights and standard dining.</li>
              <li><strong>Princess Plus Upgrade:</strong> Highly recommended. For about €50 extra per day, you get the Plus Drinks Package, Wi-Fi, and pre-paid gratuities. This usually brings the total to €1,350–€2,100.</li>
              <li><strong>Princess Premier Upgrade:</strong> The ultimate all-inclusive. Includes premium drinks, specialty dining, and unlimited photos. Typically €1,850–€2,850 per person including flights.</li>
            </ul>
            <p>
              <strong>Top Tip for Irish Travellers:</strong> Always book the "Princess Plus" rate at the time of booking. It is significantly cheaper than buying a drinks package and Wi-Fi separately once you are on board, and it includes your daily gratuities, which simplifies your Euro-based budgeting.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Princess Cruises Pros and Cons</h2>
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
                      <li>Seamless experience with MedallionClass technology</li>
                      <li>Exceptional destination-rich itineraries (Best for Alaska/Asia)</li>
                      <li>High-quality, diverse dining options included in the fare</li>
                      <li>Great "Princess Plus" all-inclusive value packages</li>
                      <li>Perfect for multi-generational family groups</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-sm text-text/80 align-top">
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Onboard currency is USD, which requires monitoring</li>
                      <li>Fewer "action" features for children (no water slides)</li>
                      <li>Ships can have a more traditional, older demographic in some regions</li>
                      <li>Shore excursions can be more expensive than competitors</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">How Does Princess Cruises Compare?</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p>
              When compared to Royal Caribbean, Princess is much more laid-back. You won't find the high-intensity activities here, but you will find a higher standard of service and dining. Compared to Celebrity Cruises, Princess is slightly more traditional and "classic," whereas Celebrity is more contemporary and design-focused. For Irish families, Princess is often the preferred choice for a multi-generational trip where grandparents and children are travelling together, as the ships offer something for every age group without the overwhelming scale of the mega-resorts.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Frequently Asked Questions about Princess from Ireland</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Is Princess Cruises good for Irish travellers?</h3>
              <p className="text-text/80">Princess Cruises is an excellent choice for Irish travellers looking for a 'premium-contemporary' experience. They offer a more refined atmosphere than the massive resort ships, with a strong focus on service and destination-rich itineraries. Their MedallionClass technology makes the onboard experience incredibly seamless.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Does Princess fly from Dublin?</h3>
              <p className="text-text/80">Yes, Princess Cruises offers extensive fly-cruise packages from Dublin (DUB). They have regular connections to Mediterranean hubs like Barcelona, Rome, and Athens. They are also a top choice for Irish travellers heading to Alaska or the Caribbean, with one-stop flight packages via major hubs.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">What is the MedallionClass on Princess Cruises?</h3>
              <p className="text-text/80">MedallionClass is a wearable device (the Medallion) that replaces your room key and credit card. It allows for touchless embarkation, keyless room entry, and even lets you order a drink to wherever you are on the ship. Irish guests find it incredibly convenient and it significantly reduces queues onboard.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">How much does a Princess cruise cost from Ireland?</h3>
              <p className="text-text/80">A 7-night Princess cruise from Ireland typically costs between €999 and €2,850 per person, including flights. We highly recommend adding the 'Princess Plus' package (around €50 per day), which bundles drinks, Wi-Fi, and gratuities, offering much better value than paying for these items individually.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Is Princess Cruises family friendly for Irish families?</h3>
              <p className="text-text/80">Yes, Princess is great for families who prefer a more relaxed holiday. While they don't have the massive waterparks of other lines, they have excellent Discovery at SEA™ programs for kids and teens. They are also a favorite for multi-generational Irish families (grandparents, parents, and kids) travelling together.</p>
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
