import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Norwegian Cruise Line (NCL) Ireland — Deals & Reviews | FindMyCruise.ie',
    description: 'NCL offers "Free at Sea" fly-cruises from Dublin, typically costing €950–€2,400 per person. Perfect for flexible dining and baby-friendly family travel.',
    alternates: {
      canonical: 'https://www.findmycruise.ie/cruise-lines/ncl',
    },
    openGraph: {
      title: 'Norwegian Cruise Line (NCL) Ireland — Deals & Reviews',
      description: 'Find the best NCL deals from Ireland. Expert advice on "Free at Sea" packages, flexible dining, and family-friendly Guppies programs.',
      url: 'https://www.findmycruise.ie/cruise-lines/ncl',
    }
  };
};

export default function NCLCruisesPage() {
  // Filtering mock cruises for NCL (using 'norwegian' or 'ncl' keywords)
  const nclCruises = MOCK_CRUISES.filter(c => 
    c.line?.toLowerCase().includes('norwegian') || c.line?.toLowerCase().includes('ncl')
  );

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Norwegian's 'Free at Sea' for Irish travellers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a small upgrade fee (usually €149–€249), Irish guests can add the 'Free at Sea' package, which typically includes an open bar (premium drinks), specialty dining, Wi-Fi, and shore excursion credits. This is the most popular way for Irish cruisers to book NCL as it offers exceptional value and makes the holiday nearly all-inclusive."
        }
      },
      {
        "@type": "Question",
        "name": "Does NCL fly from Dublin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, NCL offers extensive fly-cruise packages from Dublin (DUB). They have strong connections to Mediterranean hubs like Barcelona and Rome, and for their massive Caribbean fleet, they offer one-stop flight packages to Miami and Orlando. All flight-inclusive bookings made through our partners are fully protected."
        }
      },
      {
        "@type": "Question",
        "name": "Is NCL good for babies and toddlers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. NCL's 'Guppies' program is specifically designed for parents and their little ones (ages 6 months to 3 years). While not a drop-off nursery on all ships, it provides a dedicated, safe space for play. Their 'Freestyle' dining is also a major plus for parents with infants, as there are no set dining times or formal dress codes to worry about."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a Norwegian cruise cost from Ireland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 7-night Norwegian cruise from Ireland typically costs between €950 and €2,400 per person, including flights. The 'Free at Sea' upgrade is highly recommended for the best value. Prices are most competitive in the Mediterranean during the shoulder seasons (May/June and September)."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to dress up on NCL?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No! NCL is famous for 'Freestyle Cruising,' which means there are zero formal nights and no fixed dining times. You can wear smart-casual attire every night. This relaxed atmosphere is a huge draw for Irish holidaymakers who want a break from the formalities of everyday life."
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
            Norwegian Cruise Line (NCL) Ireland
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A Norwegian cruise from Ireland typically costs €950–€2,400 per person including flights from Dublin. NCL is the pioneer of "Freestyle Cruising," offering Irish travellers total flexibility with no set dining times, no dress codes, and the highly-rated "Free at Sea" all-inclusive upgrade.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-text/70 italic">
            Showing {nclCruises.length} featured Norwegian Cruise Line itineraries
          </p>
          <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-lg text-primary text-sm font-medium">
            ⚓ The Freestyle Choice
          </div>
        </div>

        <CruiseGrid cruises={nclCruises} />

        {/* SEO Content Section */}
        <section className="mt-20 prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Is NCL Good for Irish Travellers?</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              Norwegian Cruise Line (NCL) is a fantastic option for the Irish market, particularly for those who value flexibility and a relaxed atmosphere above all else. NCL's core philosophy is "Freestyle Cruising," which essentially means your holiday is on your terms. There are no fixed dining times, no assigned tables, and—crucially for many Irish guests—no formal nights. You can eat when you want, where you want, and wear what you want.
            </p>
            <p className="mb-4">
              For travellers from Ireland, NCL offers excellent fly-cruise packages from Dublin. They have a strong presence in the Mediterranean with ships like Norwegian Epic and Norwegian Viva sailing from Barcelona and Rome. They are also a powerhouse in the Caribbean and are one of the best lines for Alaskan cruises. Their onboard experience is high-energy and modern, featuring things like go-kart tracks, Broadway shows, and an incredible array of specialty dining restaurants that rival any 5-star hotel in Dublin.
            </p>
            <p>
              One thing Irish guests should be aware of is that NCL operates in US Dollars ($) onboard. However, their base fares and the "Free at Sea" upgrade are always quoted in Euro (€) when booking in Ireland. This allows you to pre-pay for the majority of your holiday (including drinks and specialty dining) in Euro before you even step foot on the plane, protecting you from currency fluctuations.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Infant-Friendly Travel with NCL</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              While NCL is often marketed towards active adults and families with teenagers, they are surprisingly well-equipped for those travelling with infants. Their **Guppies** program is specifically designed for the smallest cruisers (ages 6 months to 3 years). On many ships, this includes a dedicated Guppies Nursery where certified staff can look after your children while you enjoy the ship's amenities.
            </p>
            <p className="mb-4">
              The "Freestyle" nature of NCL is also a massive benefit for parents. When you have a toddler whose nap schedule or meal times are unpredictable, not having to be at a specific dinner table at 6:30 PM is a lifesaver. You can simply head to the buffet or one of the casual dining venues whenever it suits your family.
            </p>
            <p>
              NCL also offers cribs and high chairs on request, and their staterooms are efficiently designed to accommodate a pack-and-play if needed. For Irish families looking for a flexible, stress-free holiday with a young child, NCL's combination of the Guppies program and Freestyle dining is hard to beat.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">NCL Pricing Guide for Ireland</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              NCL typically sits in the mid-range of the cruise market. Here is a rough breakdown of costs for a 7-night fly-cruise from Dublin:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Base Fare (Interior Cabin):</strong> €950–€1,250 per person. Includes flights and standard dining.</li>
              <li><strong>Balcony Cabin + Free at Sea:</strong> €1,350–€1,850 per person. This is the "sweet spot" for value, adding an open bar, specialty dining, and Wi-Fi.</li>
              <li><strong>The Haven (Luxury):</strong> €3,500–€6,000+ per person. This is NCL's ultra-private, all-suite complex with its own pool, lounge, and 24-hour butler service.</li>
            </ul>
            <p>
              <strong>Top Tip for Irish Travellers:</strong> Always look for the "Free at Sea" promotion. For a relatively small additional fee, you can make your cruise nearly all-inclusive. In the long run, this is far cheaper than paying for individual drinks or Wi-Fi packages once you are on board.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Norwegian Cruise Line Pros and Cons</h2>
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
                      <li>Total flexibility with "Freestyle Cruising" (no dress codes)</li>
                      <li>Incredible value with "Free at Sea" upgrade packages</li>
                      <li>Wide variety of specialty dining options</li>
                      <li>High-energy entertainment and activities (Go-karts, VR zones)</li>
                      <li>Excellent Haven suite complex for luxury seekers</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-sm text-text/80 align-top">
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Onboard currency is USD, which can be expensive</li>
                      <li>Service charges/gratuities are among the highest in the industry</li>
                      <li>The "nickel and diming" can be frustrating if you don't book Free at Sea</li>
                      <li>Main dining room service can sometimes be slower due to no set times</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">How Does NCL Compare?</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p>
              Compared to Royal Caribbean, NCL is much more focused on flexibility and "Freestyle" dining. While Royal Caribbean has more "wow" physical features on their ships (like surf simulators), NCL focuses more on the variety of dining and the "all-in" value of their Free at Sea package. Compared to MSC, NCL is generally more expensive but offers a more relaxed, informal atmosphere. If you want a cruise that feels like a modern city break with great food and no rules, NCL is the winner. If you want a more traditional, structured cruise, you might prefer P&O or Princess.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Frequently Asked Questions about NCL from Ireland</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">What is Norwegian's 'Free at Sea' for Irish travellers?</h3>
              <p className="text-text/80">For a small upgrade fee (usually €149–€249), Irish guests can add the 'Free at Sea' package, which typically includes an open bar (premium drinks), specialty dining, Wi-Fi, and shore excursion credits. This is the most popular way for Irish cruisers to book NCL as it offers exceptional value and makes the holiday nearly all-inclusive.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Does NCL fly from Dublin?</h3>
              <p className="text-text/80">Yes, NCL offers extensive fly-cruise packages from Dublin (DUB). They have strong connections to Mediterranean hubs like Barcelona and Rome, and for their massive Caribbean fleet, they offer one-stop flight packages to Miami and Orlando. All flight-inclusive bookings made through our partners are fully protected.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Is NCL good for babies and toddlers?</h3>
              <p className="text-text/80">Absolutely. NCL's 'Guppies' program is specifically designed for parents and their little ones (ages 6 months to 3 years). While not a drop-off nursery on all ships, it provides a dedicated, safe space for play. Their 'Freestyle' dining is also a major plus for parents with infants, as there are no set dining times or formal dress codes to worry about.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">How much does a Norwegian cruise cost from Ireland?</h3>
              <p className="text-text/80">A 7-night Norwegian cruise from Ireland typically costs between €950 and €2,400 per person, including flights. The 'Free at Sea' upgrade is highly recommended for the best value. Prices are most competitive in the Mediterranean during the shoulder seasons (May/June and September).</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Do I have to dress up on NCL?</h3>
              <p className="text-text/80">No! NCL is famous for 'Freestyle Cruising,' which means there are zero formal nights and no fixed dining times. You can wear smart-casual attire every night. This relaxed atmosphere is a huge draw for Irish holidaymakers who want a break from the formalities of everyday life.</p>
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
