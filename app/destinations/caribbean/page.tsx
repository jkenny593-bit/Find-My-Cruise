import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';

export const generateMetadata = (): Metadata => {
  const title = 'Caribbean Fly Cruises from Dublin & Cork 2026 | FindMyCruise.ie';
  const description = 'A Caribbean cruise from Ireland typically costs €1,250–€3,800 including flights. Compare best fly-cruise deals from Dublin and Cork to Florida and Barbados.';
  const url = 'https://www.findmycruise.ie/destinations/caribbean';

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

export default function CaribbeanPage() {
  // Filtering mock cruises for Caribbean itineraries
  const caribbeanCruises = MOCK_CRUISES.filter(c => 
    c.itinerary?.toLowerCase().includes('caribbean') || 
    c.itinerary?.toLowerCase().includes('bahamas') || 
    c.itinerary?.toLowerCase().includes('barbados')
  );

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I get a Caribbean cruise from Ireland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common way to get a Caribbean cruise from Ireland is a 'fly-cruise' package. You typically fly from Dublin (DUB) to major US hubs like Miami, Fort Lauderdale, or Orlando (Canaveral). Alternatively, many Irish travellers choose direct seasonal flights to Barbados for Southern Caribbean itineraries. We recommend booking flights and cruise as a single package for maximum protection."
        }
      },
      {
        "@type": "Question",
        "name": "How long is a Caribbean cruise from Ireland including flights?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Caribbean cruises are 7 nights, but when you include transatlantic flights from Ireland, the total trip length is usually 9 to 11 days. We strongly suggest flying into your departure port (like Miami or Bridgetown) at least one day before embarkation to account for potential flight delays and to help adjust to the time difference."
        }
      },
      {
        "@type": "Question",
        "name": "Is a Caribbean cruise good value from Ireland compared to a European cruise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While the upfront cost of a Caribbean cruise is higher due to long-haul flights from Ireland, the 'on-board value' is often superior. US-based ships tend to be larger with more included activities, and the duty-free shopping in Caribbean ports offers significant savings. When you factor in the tropical weather and exotic destinations, many Irish cruisers find the extra flight cost well worth the investment."
        }
      },
      {
        "@type": "Question",
        "name": "What cruise lines fly from Dublin to the Caribbean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Major lines including Royal Caribbean, Celebrity Cruises, and MSC Cruises offer fly-cruise packages from Dublin. These often involve a connection in a European hub like London or Amsterdam, or a direct flight to a US East Coast city followed by a short domestic hop. P&O Cruises also offers very popular direct charter flights from Dublin to Barbados during the winter season."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best Caribbean cruise for Irish travellers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 'best' cruise depends on your preference: Royal Caribbean is the top choice for Irish families due to their massive ships and private islands like Perfect Day at CocoCay. For couples seeking luxury, Celebrity Cruises offers a more refined experience. If you want to avoid long US immigration queues, a Southern Caribbean cruise departing from Barbados with P&O is a fantastic, hassle-free option."
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
            Caribbean Fly Cruises from Dublin & Cork 2026
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A Caribbean cruise from Ireland typically costs €1,250–€3,800 per person for 9–14 days (including flights), departing via major hubs to Miami, Fort Lauderdale, or Barbados. Royal Caribbean and P&O Cruises offer the most direct fly-cruise packages tailored for Irish travellers.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-text/70 italic">
            Showing {caribbeanCruises.length} hand-picked Caribbean cruises
          </p>
          <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-lg text-primary text-sm font-medium">
            ☀️ Best for Winter Sun
          </div>
        </div>

        <CruiseGrid cruises={caribbeanCruises} />

        {/* SEO Content Section */}
        <section className="mt-20 prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Why Irish Travellers Choose Caribbean Cruises</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              The Caribbean represents the ultimate tropical escape for Irish holidaymakers, especially during the long, grey winter months. While it requires a longer flight than a Mediterranean voyage, the reward is crystal-clear turquoise waters, white sandy beaches, and a vibrant culture that is welcoming to all. For many in Ireland, a Caribbean cruise is a "bucket list" trip that offers a level of sun and luxury that simply isn't available closer to home.
            </p>
            <p className="mb-4">
              Accessibility from Ireland has improved significantly in recent years. Irish travellers can fly from Dublin Airport (DUB) with a single connection via London, Amsterdam, or various US East Coast hubs to reach major embarkation ports like Miami and Fort Lauderdale. Even more conveniently, P&O Cruises often operates direct charter flights from Dublin to Barbados during the winter, allowing you to bypass US immigration entirely and step straight into the Caribbean heat.
            </p>
            <p>
              Beyond the weather, the sheer scale of the ships in the Caribbean is a major draw. Many of the world's largest and most innovative cruise ships are stationed here year-round. For Irish families, the onboard waterparks, Broadway-style shows, and dedicated kids' clubs provide an all-in-one holiday that is hard to beat. Whether you're exploring the Mayan ruins in Mexico or swimming with stingrays in the Caymans, the variety of experiences is staggering.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Best Time to Book a Caribbean Cruise from Ireland</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              The peak season for Caribbean cruises coincides perfectly with the Irish winter—from December through April. This is when the weather in the region is at its best: dry, sunny, and around 28°C. However, this is also the most expensive time to travel. To get the best value, we recommend looking at the "bridge" periods such as early December (before the Christmas rush) or May, when the weather is still excellent but the crowds are thinner.
            </p>
            <p className="mb-4">
              Hurricane season officially runs from June to November. While modern cruise ships are expert at navigating around weather systems, these months can see more rain and higher humidity. The benefit for the budget-conscious Irish traveller is that prices drop significantly during this period. Late August and September often offer the absolute lowest fares of the year, provided you are comfortable with a slightly higher risk of itinerary changes.
            </p>
            <p>
              Our top tip for Irish cruisers is to book at least 10 months in advance for winter sailings. Because these cruises require transatlantic flights, flight availability can tighten quickly, driving up the total package price. Booking early ensures you get the best flight routes (ideally with shorter layovers) and your choice of the best cabins on the ship.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">What's Included vs. What Costs Extra</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              Budgeting for a Caribbean cruise is slightly different than a European one. While your base fare covers your room, most food, and entertainment, US-based lines have a different approach to "extras" that Irish travellers should be prepared for.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Flights & Transfers:</strong> Unless you book a specific "Fly-Cruise" package, flights from Ireland to the US or Caribbean are extra. Don't forget to budget for airport transfers to the port.</li>
              <li><strong>Automatic Gratuities:</strong> Most Caribbean lines (Royal Caribbean, Celebrity, Carnival) add a daily service charge of $16–$20 per person. You can usually pre-pay this in Euro to avoid currency fluctuations.</li>
              <li><strong>Drinks & Wi-Fi:</strong> Drinks packages are more expensive in the Caribbean, often costing $60–$100 per day. Wi-Fi is also typically a paid extra unless you book a premium package.</li>
              <li><strong>ESTA/Visas:</strong> If your cruise departs from a US port, you will need an ESTA (Electronic System for Travel Authorization), which costs $21 and must be applied for online before you leave Ireland.</li>
            </ul>
            <p>
              <strong>Irish-Relevant Note:</strong> Many Caribbean ports of call use the US Dollar. We recommend bringing a small amount of USD cash for local markets and tips in port, though most large shops accept major credit cards. Also, be aware that US-based ships often have higher "tax and fee" add-ons than European sailings.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Top Ports of Call in the Caribbean</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-6">
              The Caribbean is divided into three main regions: Eastern, Western, and Southern. Here are the ports that Irish travellers love the most:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary">St. Maarten / St. Martin</h3>
                <p>This unique island is half-French and half-Dutch. Most cruisers head to Maho Beach to watch the planes land right over the sand, or visit Philipsburg for world-class duty-free shopping. It's a very easy port to navigate on foot or by water taxi.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Cozumel, Mexico</h3>
                <p>A staple of Western Caribbean itineraries, Cozumel is the gateway to the Mayan ruins of Tulum. It's also one of the best spots in the world for snorkeling and diving. For a more relaxed day, head to one of the many "all-inclusive" beach clubs just a short taxi ride from the pier.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Bridgetown, Barbados</h3>
                <p>A favourite for those on Southern Caribbean routes, Barbados offers a beautiful blend of British colonial history and Bajan warmth. Boatyard Beach is a popular spot for Irish visitors, offering calm waters and great amenities right near the port.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Grand Cayman, Cayman Islands</h3>
                <p>Known for Seven Mile Beach and "Stingray City," where you can stand on a sandbar and interact with friendly rays. This is a tender port, meaning you'll take small boats to shore, so plan for a bit of extra time to disembark.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Perfect Day at CocoCay, Bahamas</h3>
                <p>Royal Caribbean's private island is a massive hit with families. It features North America's tallest waterslide, a massive wave pool, and pristine beaches. Best of all, your ship's drinks and food packages typically work on the island too!</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">How do I get a Caribbean cruise from Ireland?</h3>
              <p className="text-text/80">The most common way to get a Caribbean cruise from Ireland is a 'fly-cruise' package. You typically fly from Dublin (DUB) to major US hubs like Miami, Fort Lauderdale, or Orlando (Canaveral). Alternatively, many Irish travellers choose direct seasonal flights to Barbados for Southern Caribbean itineraries. We recommend booking flights and cruise as a single package for maximum protection.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">How long is a Caribbean cruise from Ireland including flights?</h3>
              <p className="text-text/80">Most Caribbean cruises are 7 nights, but when you include transatlantic flights from Ireland, the total trip length is usually 9 to 11 days. We strongly suggest flying into your departure port (like Miami or Bridgetown) at least one day before embarkation to account for potential flight delays and to help adjust to the time difference.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Is a Caribbean cruise good value from Ireland compared to a European cruise?</h3>
              <p className="text-text/80">While the upfront cost of a Caribbean cruise is higher due to long-haul flights from Ireland, the 'on-board value' is often superior. US-based ships tend to be larger with more included activities, and the duty-free shopping in Caribbean ports offers significant savings. When you factor in the tropical weather and exotic destinations, many Irish cruisers find the extra flight cost well worth the investment.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">What cruise lines fly from Dublin to the Caribbean?</h3>
              <p className="text-text/80">Major lines including Royal Caribbean, Celebrity Cruises, and MSC Cruises offer fly-cruise packages from Dublin. These often involve a connection in a European hub like London or Amsterdam, or a direct flight to a US East Coast city followed by a short domestic hop. P&O Cruises also offers very popular direct charter flights from Dublin to Barbados during the winter season.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">What is the best Caribbean cruise for Irish travellers?</h3>
              <p className="text-text/80">The 'best' cruise depends on your preference: Royal Caribbean is the top choice for Irish families due to their massive ships and private islands like Perfect Day at CocoCay. For couples seeking luxury, Celebrity Cruises offers a more refined experience. If you want to avoid long US immigration queues, a Southern Caribbean cruise departing from Barbados with P&O is a fantastic, hassle-free option.</p>
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
