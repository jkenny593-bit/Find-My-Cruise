import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Celebrity Cruises Ireland — Modern Luxury & Prices | FindMyCruise.ie',
    description: 'Celebrity Cruises offers "Modern Luxury" fly-cruises from Dublin, typically costing €1,350–€3,500 per person. Known for Michelin-starred dining and sophisticated design.',
    alternates: {
      canonical: '/cruise-lines/celebrity',
    },
    openGraph: {
      title: 'Celebrity Cruises Ireland — Modern Luxury & Prices',
      description: 'Discover the best Celebrity Cruises deals from Ireland. Expert advice on "Always Included" packages, gourmet dining, and direct flights from Dublin.',
      url: '/cruise-lines/celebrity',
    }
  };
};

export default function CelebrityCruisesPage() {
  // Filtering mock cruises for Celebrity
  const celebrityCruises = MOCK_CRUISES.filter(c => 
    c.line?.toLowerCase().includes('celebrity')
  );

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Celebrity Cruises good for Irish travellers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Celebrity Cruises is a top choice for Irish travellers seeking a 'Modern Luxury' experience. It bridges the gap between contemporary and luxury lines, offering sophisticated design, world-class dining, and excellent service. They have a strong presence in the Mediterranean with direct flight packages from Dublin."
        }
      },
      {
        "@type": "Question",
        "name": "How much is a Celebrity cruise from Ireland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 7-night Celebrity cruise from Ireland typically costs between €1,350 and €3,500 per person, including flights. While more expensive than MSC or Royal Caribbean, the price often includes a higher level of service and superior dining. Look for 'All-Included' rates that bundle drinks and Wi-Fi for the best value."
        }
      },
      {
        "@type": "Question",
        "name": "Are drinks included on Celebrity Cruises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Celebrity often offers 'All-Included' fares that bundle the Classic Drinks Package and basic Wi-Fi into the price. If you book a standard fare, drinks are extra. For Irish guests, we recommend the 'All-Included' option as it provides the most stress-free experience and better value than buying individual drinks onboard."
        }
      },
      {
        "@type": "Question",
        "name": "Does Celebrity fly from Dublin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Celebrity Cruises offers extensive fly-cruise packages from Dublin (DUB). They have excellent connections to Mediterranean hubs like Barcelona and Rome (Civitavecchia), often using direct Aer Lingus flights. They also offer one-stop flight packages for their Caribbean sailings from Florida."
        }
      },
      {
        "@type": "Question",
        "name": "What is the dress code on Celebrity Cruises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Celebrity's dress code is 'Smart Casual' for most evenings. They have replaced traditional formal nights with 'Evening Chic' nights, which are slightly more dressy but far less formal than old-school cruising. Men typically wear a collared shirt and slacks, while women wear a sundress or smart trousers."
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
            Celebrity Cruises Ireland
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A Celebrity cruise from Ireland typically costs €1,350–€3,500 per person including flights from Dublin. Celebrity is the leader in "Modern Luxury," offering Irish travellers a sophisticated, adult-focused experience with Michelin-starred dining and stunning, contemporary ship design.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-text/70 italic">
            Showing {celebrityCruises.length} featured Celebrity Cruises itineraries
          </p>
          <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-lg text-primary text-sm font-medium">
            ✨ The Modern Luxury Choice
          </div>
        </div>

        <CruiseGrid cruises={celebrityCruises} />

        {/* SEO Content Section */}
        <section className="mt-20 prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Is Celebrity Cruises Good for Irish Travellers?</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              Celebrity Cruises occupies a unique space in the cruise market that appeals strongly to a specific type of Irish traveller. If you find the "mega-ships" with their waterparks and constant noise a bit much, but you aren't quite ready for the small-ship ultra-luxury lines, Celebrity is the perfect middle ground. They call it "Modern Luxury," and it translates to an experience that focuses on incredible design, world-class culinary experiences, and a level of service that feels truly attentive.
            </p>
            <p className="mb-4">
              For travellers from Ireland, Celebrity is highly accessible. They offer excellent fly-cruise packages from Dublin (DUB), primarily targeting Mediterranean hubs like Barcelona and Rome. Their "Edge-class" ships—like Celebrity Edge, Apex, and Beyond—have redefined what a cruise ship can look like, featuring the revolutionary "Magic Carpet" (a cantilevered platform that moves between decks) and stunning rooftop gardens. On board, the atmosphere is sophisticated and relaxed, making it a favorite for couples, solo travellers, and families with adult children.
            </p>
            <p>
              While Celebrity is a premium line, they are very popular in Ireland because of their "All-Included" pricing model. This allows Irish guests to bundle their drinks, Wi-Fi, and sometimes gratuities into their initial booking in Euro. This transparency is highly valued by Irish cruisers who want to know the total cost of their holiday before they leave Dublin Airport, avoiding the "bill shock" that can sometimes happen on other lines.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Celebrity Cruises Pricing Guide for Ireland</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              Celebrity is a premium line, so prices are higher than MSC or Royal Caribbean. Here is a guide for a 7-night fly-cruise from Dublin:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Standard Balcony Cabin:</strong> €1,350–€1,950 per person. Includes flights and standard dining.</li>
              <li><strong>All-Included Balcony Cabin:</strong> €1,750–€2,450 per person. Includes flights, drinks, and Wi-Fi. This is the most popular choice in Ireland.</li>
              <li><strong>The Retreat (Ultra-Luxury):</strong> €3,500–€7,000+ per person. Celebrity's exclusive suite-class experience with private restaurant, lounge, and butler service.</li>
            </ul>
            <p>
              <strong>Top Tip for Irish Guests:</strong> Celebrity frequently runs "Buy One, Get One Half Off" or "Reduced Fares" for the second guest. If you are travelling as a couple, these promotions can bring the cost of a premium cruise down to a very competitive level.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Celebrity Cruises Pros and Cons</h2>
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
                      <li>Stunning, award-winning ship design (especially Edge-class)</li>
                      <li>Michelin-starred culinary direction and gourmet dining</li>
                      <li>High ratio of staff to guests for attentive service</li>
                      <li>"All-Included" pricing options for easy budgeting</li>
                      <li>Adult-focused atmosphere that is sophisticated yet relaxed</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-sm text-text/80 align-top">
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Higher base price than contemporary lines</li>
                      <li>Not as many facilities for young children (no waterparks)</li>
                      <li>Onboard currency is USD, which can fluctuate</li>
                      <li>Specialty dining and drinks outside of packages are expensive</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">How Does Celebrity Cruises Compare?</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p>
              Compared to Royal Caribbean (its sister line), Celebrity is significantly more relaxed and refined. You won't find water slides or surf simulators here; instead, you'll find art galleries and martini bars. Compared to Princess Cruises, Celebrity has a more contemporary, "cool" vibe, whereas Princess is more traditional and classic. If you want a holiday that feels like staying in a high-end boutique hotel in London or New York, but at sea, Celebrity is the winner. If you are travelling with young children, you might find Royal Caribbean or MSC to be a better fit for their energy levels.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Frequently Asked Questions about Celebrity from Ireland</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Is Celebrity Cruises good for Irish travellers?</h3>
              <p className="text-text/80">Yes, Celebrity Cruises is a top choice for Irish travellers seeking a 'Modern Luxury' experience. It bridges the gap between contemporary and luxury lines, offering sophisticated design, world-class dining, and excellent service. They have a strong presence in the Mediterranean with direct flight packages from Dublin.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">How much is a Celebrity cruise from Ireland?</h3>
              <p className="text-text/80">A 7-night Celebrity cruise from Ireland typically costs between €1,350 and €3,500 per person, including flights. While more expensive than MSC or Royal Caribbean, the price often includes a higher level of service and superior dining. Look for 'All-Included' rates that bundle drinks and Wi-Fi for the best value.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Are drinks included on Celebrity Cruises?</h3>
              <p className="text-text/80">Celebrity often offers 'All-Included' fares that bundle the Classic Drinks Package and basic Wi-Fi into the price. If you book a standard fare, drinks are extra. For Irish guests, we recommend the 'All-Included' option as it provides the most stress-free experience and better value than buying individual drinks onboard.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Does Celebrity fly from Dublin?</h3>
              <p className="text-text/80">Yes, Celebrity Cruises offers extensive fly-cruise packages from Dublin (DUB). They have excellent connections to Mediterranean hubs like Barcelona and Rome (Civitavecchia), often using direct Aer Lingus flights. They also offer one-stop flight packages for their Caribbean sailings from Florida.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">What is the dress code on Celebrity Cruises?</h3>
              <p className="text-text/80">Celebrity's dress code is 'Smart Casual' for most evenings. They have replaced traditional formal nights with 'Evening Chic' nights, which are slightly more dressy but far less formal than old-school cruising. Men typically wear a collared shirt and slacks, while women wear a sundress or smart trousers.</p>
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
