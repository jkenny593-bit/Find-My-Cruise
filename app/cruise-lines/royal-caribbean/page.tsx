import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';

export const generateMetadata = (): Metadata => {
  const title = 'Royal Caribbean Cruises from Ireland — Prices & Itineraries | FindMyCruise.ie';
  const description = 'Royal Caribbean offers fly-cruises from Dublin to the Mediterranean and Caribbean. Prices typically range from €850 to €2,900 per person. Find the best Irish deals here.';
  const url = 'https://www.findmycruise.ie/cruise-lines/royal-caribbean';

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

export default function RoyalCaribbeanPage() {
  // Filtering mock cruises for Royal Caribbean
  const rcclCruises = MOCK_CRUISES.filter(c => 
    c.line?.toLowerCase().includes('royal caribbean')
  );

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does Royal Caribbean fly from Dublin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Royal Caribbean offers comprehensive fly-cruise packages from Dublin (DUB). For Mediterranean sailings, they typically use direct flights to Barcelona or Rome. For Caribbean sailings, they offer packages with one-stop flights to major hubs like Miami, Fort Lauderdale, and Orlando (Canaveral). These packages include flights, transfers, and the cruise itself, providing full protection for Irish travellers."
        }
      },
      {
        "@type": "Question",
        "name": "How much is a Royal Caribbean cruise from Ireland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 7-night Royal Caribbean cruise from Ireland typically costs between €850 and €2,900 per person, depending on the destination and time of year. Mediterranean fly-cruises in the shoulder season (May/September) offer the best value, while peak summer holidays or Christmas Caribbean sailings can reach the higher end of the range."
        }
      },
      {
        "@type": "Question",
        "name": "Are gratuities included in Royal Caribbean prices for Irish bookings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For bookings made in Ireland, gratuities (service charges) are typically not included in the initial base fare unless a specific 'all-inclusive' promotion is running. They are usually around $18–$20 per person, per day. We recommend pre-paying these at the time of booking in Euro to avoid daily charges on your onboard account and to lock in the currency rate."
        }
      },
      {
        "@type": "Question",
        "name": "Is Royal Caribbean better than MSC for Irish travellers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Royal Caribbean is generally considered to offer a more 'all-action' experience with features like the FlowRider and North Star, making it the top choice for families with teenagers. MSC often provides better baseline value and frequent 'Kids Sail Free' offers. While Royal Caribbean focuses on high-energy entertainment, MSC tends to lean towards a more European, slightly more formal atmosphere."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cancellation policy for Royal Caribbean booked in Ireland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cancellation policies vary based on the fare type booked. Generally, for Irish bookings, you can cancel with just the loss of deposit up to 70-90 days before departure. Within 70 days, the charges increase progressively. We always advise Irish travellers to ensure their travel insurance is active from the moment the deposit is paid to cover any unforeseen cancellations."
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
            Royal Caribbean Cruises from Ireland
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Royal Caribbean offers extensive fly-cruise packages from Dublin to the Mediterranean and Caribbean, with prices typically ranging from €850 to €2,900 per person including flights. They are the leading choice for Irish families seeking high-energy ships with direct connections to Barcelona and Rome.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-text/70 italic">
            Showing {rcclCruises.length} featured Royal Caribbean itineraries
          </p>
          <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-lg text-primary text-sm font-medium">
            🏆 Top Rated for Families
          </div>
        </div>

        <CruiseGrid cruises={rcclCruises} />

        {/* SEO Content Section */}
        <section className="mt-20 prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Is Royal Caribbean Good for Irish Travellers?</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              Royal Caribbean is widely regarded as the most popular "mega-ship" line for the Irish market, and for good reason. They specialize in a high-energy, feature-rich experience that perfectly suits the active Irish family or couple. If you are looking for a ship that feels like a floating city—complete with ice rinks, surf simulators, and Broadway-style theatre—this is the line for you.
            </p>
            <p className="mb-4">
              For Irish consumers, one of the biggest benefits is the seamless "Fly-Cruise" integration from Dublin Airport. Royal Caribbean works closely with carriers like Aer Lingus to ensure that their flight packages synchronize perfectly with ship embarkation times in Barcelona and Rome. While they are a US-owned company, their European presence is massive, and you will find that the atmosphere on board remains welcoming and easy for Irish guests to navigate. 
            </p>
            <p>
              It is important to note that while they are very accessible, Royal Caribbean typically prices their onboard experience in US Dollars ($). For Irish travellers, this means being mindful of the exchange rate when booking shore excursions or paying for specialty dining. However, their base cruise fares are always quoted in Euro (€) when booking through Irish channels, making the initial budgeting process straightforward.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Royal Caribbean Pricing Guide for Ireland</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              Budgeting for a Royal Caribbean cruise from Ireland requires looking at three main components: the cruise fare, the flight package, and the onboard "add-ons."
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>7-Night Mediterranean:</strong> Expect to pay between €850 and €1,600 per person in an interior or balcony cabin. This usually includes flights from Dublin.</li>
              <li><strong>7-Night Caribbean:</strong> Including transatlantic flights, prices typically start around €1,400 and can rise to €2,900+ for the newest ships like Icon of the Seas.</li>
              <li><strong>School Holiday Surcharges:</strong> Be aware that July and August sailings can be 40-60% more expensive than May or September departures.</li>
            </ul>
            <p>
              Pricing is also heavily influenced by the "class" of ship. The older, smaller ships offer incredible value (often around €700-€900), while the Oasis-class and Icon-class giants command a premium price because of their unique features. We recommend looking for "NCL vs Royal Caribbean" or "MSC vs Royal Caribbean" comparisons if price is your primary driver.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Royal Caribbean Pros and Cons</h2>
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
                      <li>Incredible onboard features (Waterparks, Zip lines, Surf simulators)</li>
                      <li>Best-in-class kids' clubs for all ages</li>
                      <li>Direct flight packages from Dublin to Med ports</li>
                      <li>High-quality, Broadway-level entertainment</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-sm text-text/80 align-top">
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Onboard currency is USD, which can be expensive</li>
                      <li>Ships can feel very crowded at peak capacity</li>
                      <li>Many "extra" costs (Specialty dining, Wi-Fi, Drinks)</li>
                      <li>Gratuities are not always included in the base price</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">How Does Royal Caribbean Compare?</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p>
              Royal Caribbean sits in the "Contemporary" category of cruising. Compared to MSC Cruises, Royal Caribbean is generally more expensive but offers a more consistent level of service and a broader range of "wow" features on every ship. While MSC is fantastic for the budget-conscious Irish family, Royal Caribbean is the better choice if you want the absolute best in onboard entertainment and activities. When compared to premium lines like Celebrity Cruises (which is actually owned by the same parent company), Royal Caribbean is much more family-focused, whereas Celebrity offers a more sophisticated, quiet experience with a focus on fine dining and art.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Frequently Asked Questions about Royal Caribbean from Ireland</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Does Royal Caribbean fly from Dublin?</h3>
              <p className="text-text/80">Yes, Royal Caribbean offers comprehensive fly-cruise packages from Dublin (DUB). For Mediterranean sailings, they typically use direct flights to Barcelona or Rome. For Caribbean sailings, they offer packages with one-stop flights to major hubs like Miami, Fort Lauderdale, and Orlando (Canaveral). These packages include flights, transfers, and the cruise itself, providing full protection for Irish travellers.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">How much is a Royal Caribbean cruise from Ireland?</h3>
              <p className="text-text/80">A 7-night Royal Caribbean cruise from Ireland typically costs between €850 and €2,900 per person, depending on the destination and time of year. Mediterranean fly-cruises in the shoulder season (May/September) offer the best value, while peak summer holidays or Christmas Caribbean sailings can reach the higher end of the range.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Are gratuities included in Royal Caribbean prices for Irish bookings?</h3>
              <p className="text-text/80">For bookings made in Ireland, gratuities (service charges) are typically not included in the initial base fare unless a specific 'all-inclusive' promotion is running. They are usually around $18–$20 per person, per day. We recommend pre-paying these at the time of booking in Euro to avoid daily charges on your onboard account and to lock in the currency rate.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Is Royal Caribbean better than MSC for Irish travellers?</h3>
              <p className="text-text/80">Royal Caribbean is generally considered to offer a more 'all-action' experience with features like the FlowRider and North Star, making it the top choice for families with teenagers. MSC often provides better baseline value and frequent 'Kids Sail Free' offers. While Royal Caribbean focuses on high-energy entertainment, MSC tends to lean towards a more European, slightly more formal atmosphere.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">What is the cancellation policy for Royal Caribbean booked in Ireland?</h3>
              <p className="text-text/80">Cancellation policies vary based on the fare type booked. Generally, for Irish bookings, you can cancel with just the loss of deposit up to 70-90 days before departure. Within 70 days, the charges increase progressively. We always advise Irish travellers to ensure their travel insurance is active from the moment the deposit is paid to cover any unforeseen cancellations.</p>
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
