import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Mediterranean Cruise Holidays from Ireland 2026 | FindMyCruise.ie',
    description: 'Mediterranean cruises from Ireland typically cost €649–€2,450. Find the best fly-cruise deals from Dublin and Cork to Barcelona, Rome, and Venice.',
    alternates: {
      canonical: 'https://www.findmycruise.ie/destinations/mediterranean',
    },
    openGraph: {
      title: 'Mediterranean Cruise Holidays from Ireland 2026',
      description: 'Find your perfect Mediterranean cruise from Ireland. Direct flights from Dublin and Cork to top embarkation ports.',
      url: 'https://www.findmycruise.ie/destinations/mediterranean',
    }
  };
};

export default function MediterraneanPage() {
  // Filtering mock cruises for Mediterranean itineraries
  const medCruises = MOCK_CRUISES.filter(c => 
    c.itinerary?.toLowerCase().includes('mediterranean') || 
    c.itinerary?.toLowerCase().includes('greek') ||
    c.itinerary?.toLowerCase().includes('ital')
  );

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a Mediterranean cruise from Ireland cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Mediterranean cruise from Ireland typically costs between €649 and €2,450 per person for a 7-10 night voyage. This price usually includes your cabin, main meals, and on-board entertainment. Total costs vary depending on the cruise line, time of year, and whether you include a drinks package or pre-paid gratuities."
        }
      },
      {
        "@type": "Question",
        "name": "What airport do I fly from for a Mediterranean cruise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Irish travellers fly from Dublin (DUB) or Cork (ORK) for Mediterranean cruises. Dublin offers the widest range of direct flights to major cruise hubs like Barcelona, Rome (Fiumicino), and Nice. Cork provides excellent seasonal connections to key Mediterranean gateways, making it a convenient option for those in the south of Ireland."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a visa for a Mediterranean cruise as an Irish citizen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As an Irish citizen, you generally do not need a visa for Mediterranean cruises within the EU (Schengen Area), such as those visiting Spain, Italy, France, or Greece. However, if your itinerary includes non-EU ports like those in Turkey or North Africa, you should check specific entry requirements, though often a standard passport is sufficient for short transit stays."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best month for a Mediterranean cruise from Ireland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best months for a Mediterranean cruise are May, June, and September. These 'shoulder season' months offer warm, pleasant weather and fewer crowds compared to the peak July/August heat. Booking in these months also typically provides better value for money on both the cruise fare and the flights from Ireland."
        }
      },
      {
        "@type": "Question",
        "name": "Is all-inclusive available on Mediterranean cruises from Ireland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many cruise lines popular with Irish travellers, such as MSC and Celebrity, offer all-inclusive packages that cover drinks and gratuities. Choosing an all-inclusive option is highly recommended as it allows you to budget more accurately in Euro before you even leave Ireland."
        }
      },
      {
        "@type": "Question",
        "name": "How long is the flight from Dublin to embarkation ports like Barcelona or Rome?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Flights from Dublin to major Mediterranean ports are relatively short. Dublin to Barcelona takes approximately 2 hours and 30 minutes, while Dublin to Rome is about 3 hours. This ease of access is one of the main reasons why Mediterranean cruises are so popular with Irish holidaymakers."
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
            Mediterranean Cruise Holidays from Ireland 2026
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A Mediterranean cruise from Ireland typically costs €649–€2,450 per person for 7–10 nights, departing via direct flights from Dublin or Cork to Barcelona, Rome (Civitavecchia), or Venice. MSC Cruises and Royal Caribbean offer the most routes with Irish flight connections.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-text/70 italic">
            Showing {medCruises.length} hand-picked Mediterranean cruises
          </p>
          <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-lg text-primary text-sm font-medium">
            🇮🇪 Flights available from Dublin & Cork
          </div>
        </div>

        <CruiseGrid cruises={medCruises} />

        {/* SEO Content Section */}
        <section className="mt-20 prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Why Irish Travellers Choose Mediterranean Cruises</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              For decades, the Mediterranean has remained the gold standard for Irish cruise enthusiasts. The primary reason is accessibility. With direct flight routes from Dublin (DUB) and Cork (ORK) to hubs like Barcelona, Rome, and Nice, the "fly-cruise" model is incredibly seamless for Irish travellers. A flight from Dublin to Barcelona takes just 2.5 hours, meaning you can leave Ireland in the morning and be sipping a cocktail on the ship's deck by late afternoon.
            </p>
            <p className="mb-4">
              Direct routes from Dublin Airport are plentiful, serviced by Aer Lingus and Ryanair, which synchronize well with the traditional embarkation times of major lines like MSC, Royal Caribbean, and Celebrity Cruises. Cork Airport also offers excellent seasonal connections, particularly to gateways in Spain and France. For those living in the West or North, Shannon and Belfast airports provide additional connectivity through hubs, ensuring that a Mediterranean adventure is never more than a short journey away.
            </p>
            <p>
              The Mediterranean offers an unparalleled mix of history, culture, and relaxation that resonates with the Irish spirit. One day you could be exploring the ancient ruins of the Colosseum in Rome, and the next, you're enjoying the vibrant atmosphere of Las Ramblas in Barcelona or the sun-drenched beaches of the Greek Isles. It's this variety, combined with the ease of travel from Ireland, that makes it the number one choice year after year.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Best Time to Book a Mediterranean Cruise from Ireland</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              Timing is everything when it comes to both weather and your wallet. For Irish travellers, the "shoulder season"—specifically May, June, and September—is often the sweet spot. During these months, the temperatures are pleasantly warm (typically mid-20s Celsius) without being the stifling 30°C+ heat seen in July and August. This makes exploring ports like Pompeii or Athens far more comfortable.
            </p>
            <p className="mb-4">
              From a value perspective, booking during the shoulder season can save you hundreds of Euro on your cruise fare. Furthermore, flight prices from Dublin and Cork are generally more stable outside of the peak school holiday weeks in July. If you are looking for the absolute cheapest deals, late October cruises offer significant savings, though the weather can be more unpredictable as autumn sets in.
            </p>
            <p>
              If you must travel during the peak Irish summer holidays (July and August), we recommend booking at least 9–12 months in advance. These sailings, particularly on family-oriented ships like Royal Caribbean's Oasis-class vessels, sell out quickly. Early booking not only secures your preferred cabin but also allows you to lock in flights from Ireland before the summer surge prices take effect.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">What's Included vs. What Costs Extra</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              Understanding the true cost of a cruise is vital for Irish budget planning. Generally, your base fare includes your accommodation, all main meals in the buffet and main dining room, and most on-board entertainment (theatre shows, live music, and pool access). However, there are several "extras" that Irish cruisers should be aware of to avoid surprise charges on their final bill.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Drinks Packages:</strong> Most lines charge extra for sodas, specialty coffees, and alcoholic beverages. We often recommend adding a drinks package at the time of booking to lock in a fixed price in Euro.</li>
              <li><strong>Gratuities (Tipping):</strong> Many lines automatically add a daily service charge (gratuities) to your account. Some lines, like P&O, include these in the fare, while others allow you to pre-pay them.</li>
              <li><strong>Shore Excursions:</strong> While you can explore ports on your own, guided tours booked through the ship cost extra. These can range from €50 to €200+ per person.</li>
              <li><strong>Specialty Dining:</strong> While the main food is included, "Specialty" restaurants (like high-end steakhouses or sushi bars) have a cover charge.</li>
            </ul>
            <p>
              <strong>Irish-Relevant Note:</strong> Be mindful of the currency used on board. Most Mediterranean cruises use Euro, but some (like Royal Caribbean or Celebrity) use US Dollars, even when sailing in Europe. Additionally, travel insurance is a must—ensure your policy specifically covers "Cruise" to handle any unforeseen embarkation issues or port skips.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Top Ports of Call in the Mediterranean</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-6">
              A Mediterranean itinerary is like a greatest hits album of European culture. Here are the ports that Irish cruisers consistently rate as their favourites:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary">Barcelona, Spain</h3>
                <p>Most ships dock at the Moll Adossat pier, a short shuttle ride from the foot of Las Ramblas. Spend your day marveling at Gaudí's Sagrada Família or wandering the Gothic Quarter; ships typically dock here for 8–10 hours, giving you plenty of time for a leisurely tapas lunch.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Civitavecchia (Rome), Italy</h3>
                <p>The gateway to the Eternal City is about 80km from Rome itself. We recommend taking the "Civitavecchia Express" train for a direct 1-hour trip to the city centre to see the Vatican and Colosseum; ships usually have long stays here (12 hours) to accommodate the travel time.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Santorini, Greece</h3>
                <p>Known for its iconic blue-domed churches and stunning sunsets, Santorini is a tender port where you take small boats to shore. Take the cable car up to Fira or a boat to Oia; most ships stay until sunset, offering one of the most picturesque departures in the world.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Palma de Mallorca, Spain</h3>
                <p>The majestic Palma Cathedral is just a short bus or taxi ride from the port. It's a very walkable city perfect for those who want a relaxing day of shopping and sightseeing without a heavy excursion schedule; ships typically dock for 6–8 hours.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Villefranche/Nice, France</h3>
                <p>This stunning French Riviera stop is often a tender port. From here, you can easily take a 20-minute train ride to either Monaco or Nice; the proximity of the train station to the port makes it one of the easiest DIY ports for Irish travellers.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">How much does a Mediterranean cruise from Ireland cost?</h3>
              <p className="text-text/80">A Mediterranean cruise from Ireland typically costs between €649 and €2,450 per person for a 7-10 night voyage. This price usually includes your cabin, main meals, and on-board entertainment. Total costs vary depending on the cruise line, time of year, and whether you include a drinks package or pre-paid gratuities.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">What airport do I fly from for a Mediterranean cruise?</h3>
              <p className="text-text/80">Most Irish travellers fly from Dublin (DUB) or Cork (ORK) for Mediterranean cruises. Dublin offers the widest range of direct flights to major cruise hubs like Barcelona, Rome (Fiumicino), and Nice. Cork provides excellent seasonal connections to key Mediterranean gateways, making it a convenient option for those in the south of Ireland.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Do I need a visa for a Mediterranean cruise as an Irish citizen?</h3>
              <p className="text-text/80">As an Irish citizen, you generally do not need a visa for Mediterranean cruises within the EU (Schengen Area), such as those visiting Spain, Italy, France, or Greece. However, if your itinerary includes non-EU ports like those in Turkey or North Africa, you should check specific entry requirements, though often a standard passport is sufficient for short transit stays.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">What is the best month for a Mediterranean cruise from Ireland?</h3>
              <p className="text-text/80">The best months for a Mediterranean cruise are May, June, and September. These 'shoulder season' months offer warm, pleasant weather and fewer crowds compared to the peak July/August heat. Booking in these months also typically provides better value for money on both the cruise fare and the flights from Ireland.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Is all-inclusive available on Mediterranean cruises from Ireland?</h3>
              <p className="text-text/80">Yes, many cruise lines popular with Irish travellers, such as MSC and Celebrity, offer all-inclusive packages that cover drinks and gratuities. Choosing an all-inclusive option is highly recommended as it allows you to budget more accurately in Euro before you even leave Ireland.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">How long is the flight from Dublin to embarkation ports like Barcelona or Rome?</h3>
              <p className="text-text/80">Flights from Dublin to major Mediterranean ports are relatively short. Dublin to Barcelona takes approximately 2 hours and 30 minutes, while Dublin to Rome is about 3 hours. This ease of access is one of the main reasons why Mediterranean cruises are so popular with Irish holidaymakers.</p>
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
