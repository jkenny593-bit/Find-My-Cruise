import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Norwegian Fjords Cruises from Ireland 2026 | FindMyCruise.ie',
    description: 'A Norwegian Fjords cruise from Ireland typically costs €799–€2,100. Find the best fly-cruise deals from Dublin and Belfast to Bergen or Southampton.',
    alternates: {
      canonical: '/destinations/fjords',
    },
    openGraph: {
      title: 'Norwegian Fjords Cruises from Ireland 2026',
      description: 'Discover the majesty of the Norwegian Fjords from Ireland. Expert advice on cruises from Dublin, Cork, and Belfast to Norway.',
      url: '/destinations/fjords',
    }
  };
};

export default function FjordsPage() {
  // Filtering mock cruises for Fjords itineraries
  const fjordsCruises = MOCK_CRUISES.filter(c => 
    c.itinerary?.toLowerCase().includes('fjord') || 
    c.itinerary?.toLowerCase().includes('norway') ||
    c.itinerary?.toLowerCase().includes('scand')
  );

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I get to a Norwegian Fjords cruise from Ireland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Irish travellers take a Norwegian Fjords cruise by flying from Dublin or Belfast to London and then transferring to Southampton, or by flying direct to Bergen or Oslo for a fly-cruise itinerary. Celebrity Cruises and P&O Cruises frequently offer packages that include these connections specifically for the Irish market."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a Norwegian Fjords cruise cost from Ireland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Norwegian Fjords cruise typically costs between €799 and €2,100 per person for a 7-night voyage. This usually includes accommodation, meals, and entertainment. Prices can be higher if you opt for a premium line like Celebrity or Princess, especially during the peak summer months of July and August."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best month for a Fjords cruise from Ireland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best months for a Norwegian Fjords cruise are June, July, and August. During this time, you'll experience the 'Midnight Sun' with very long daylight hours and the warmest weather. May is also a beautiful time to visit as the waterfalls are at their peak due to melting snow, though temperatures remain cooler."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a visa for Norway as an Irish citizen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Irish citizens do not need a visa for Norway. Although Norway is not a member of the EU, it is part of the EEA and the Schengen Area, allowing Irish passport holders to visit for up to 90 days for tourism purposes without a visa."
        }
      },
      {
        "@type": "Question",
        "name": "Is Norway expensive for Irish travellers on shore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Norway is known for having a high cost of living. While your meals on the cruise ship are included, buying food, drinks, or coffee on shore can be significantly more expensive than in Ireland. We recommend enjoying a hearty breakfast on the ship before heading out to explore to help manage your budget."
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
            Norwegian Fjords Cruises from Ireland 2026
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A Norwegian Fjords cruise from Ireland typically costs €799–€2,100 per person for 7 nights, departing via flights from Dublin, Cork, or Belfast to Bergen, Oslo, or London (Southampton). P&O Cruises and Celebrity Cruises offer the most convenient fly-cruise packages for Irish travellers.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-text/70 italic">
            Showing {fjordsCruises.length} hand-picked Norwegian Fjords cruises
          </p>
          <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-lg text-primary text-sm font-medium">
            ⛰️ Best for Natural Beauty
          </div>
        </div>

        <CruiseGrid cruises={fjordsCruises} />

        {/* SEO Content Section */}
        <section className="mt-20 prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Why Irish Travellers Choose Norwegian Fjords Cruises</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              The Norwegian Fjords offer a dramatic contrast to the typical sun-and-sand holiday, making it a favorite for Irish travellers seeking awe-inspiring natural landscapes. The sheer scale of the mountains rising directly from the sea, topped with cascading waterfalls, is a sight that rivals anything on earth. For many in Ireland, Norway feels like a more rugged, spectacular version of our own Wild Atlantic Way, but experienced from the comfort of a luxury floating hotel.
            </p>
            <p className="mb-4">
              Getting to Norway from Ireland is straightforward. While there aren't many cruises that depart directly from Irish ports, the "Fly-Cruise" options are excellent. Irish cruisers can fly from Dublin (DUB) or Belfast (BFS) to major hubs like Bergen or Oslo in just over 2 hours. Alternatively, many prefer flying to London and taking a short transfer to Southampton, which serves as a major gateway for larger ships heading to the Fjords. This flexibility allows you to choose between smaller, more intimate vessels that can navigate deeper into the narrow fjords and massive, feature-rich ships.
            </p>
            <p>
              The appeal of Norway also lies in its tranquility and clean air. Unlike the bustling ports of the Mediterranean, Norwegian towns like Flam and Geiranger are peaceful, charming, and incredibly easy to explore on foot. For Irish holidaymakers, the safety and efficiency of Norway provide a stress-free environment, allowing you to focus entirely on the breathtaking scenery passing by your balcony.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Best Time to Book a Fjords Cruise from Ireland</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              The Norwegian cruise season is relatively short, typically running from late April to September. For the quintessential experience, the summer months of June and July are unbeatable. This is the time of the "Midnight Sun," where the sun barely sets, giving you nearly 24 hours of daylight to admire the scenery. These months also offer the mildest weather, with temperatures often reaching the high teens or low 20s Celsius—quite similar to a good Irish summer!
            </p>
            <p className="mb-4">
              If you prefer to see the waterfalls at their most powerful, May is a spectacular choice. As the winter snow melts, hundreds of falls spring to life along the fjord walls. While it is cooler than mid-summer, the air is incredibly crisp and clear. For those on a budget, late August and early September often see price drops as the peak family season ends, though you should pack more layers for the cooler evenings.
            </p>
            <p>
              We recommend Irish travellers book their Fjords cruise at least 6–9 months in advance. Because the season is limited, the best cabins (especially those with balconies, which are highly recommended for Norway) sell out very quickly. Booking early also helps you secure the best flight rates from Dublin or Belfast, ensuring your total holiday cost stays within budget.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">What's Included vs. What Costs Extra in Norway</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              Norway is known as one of the most expensive countries in the world, which makes a cruise an exceptionally high-value way to visit. By booking a cruise, you lock in your accommodation and meals at a fixed price, avoiding the high costs of Norwegian hotels and restaurants. However, there are still a few things Irish travellers should budget for:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Shore Excursions:</strong> Unique experiences like the Flam Railway or a glacier trek are bucket-list items but can be costly, often starting at €100+ per person.</li>
              <li><strong>Onshore Spending:</strong> While meals are included on the ship, a simple coffee or beer in a Norwegian town can cost double what you'd pay in Ireland. Budget accordingly for your time off the ship.</li>
              <li><strong>Drinks Packages:</strong> If you enjoy a glass of wine with dinner, a drinks package is often a wise investment, as alcohol taxes in Scandinavia are very high.</li>
              <li><strong>Layered Clothing:</strong> Even in summer, the weather in the fjords can change rapidly. You may need to invest in some high-quality waterproof and windproof gear before you leave.</li>
            </ul>
            <p>
              <strong>Irish-Relevant Note:</strong> The currency in Norway is the Norwegian Krone (NOK), not the Euro. While the ship will operate in Euro or Dollars, you'll need a card (like Revolut) or some local cash for small purchases on shore. Most Norwegian retailers are very tech-forward and prefer card payments over cash.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Top Ports of Call in the Norwegian Fjords</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-6">
              A Norwegian itinerary is defined by its stunning natural gateways. Here are the ports that Irish cruisers find most memorable:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary">Bergen</h3>
                <p>Often called the 'Gateway to the Fjords,' Bergen is a beautiful city famous for the colorful wooden houses of Bryggen (a UNESCO World Heritage site). Take the Floibanen funicular to the top of Mount Floyen for a panoramic view of the city and the surrounding sea.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Flam</h3>
                <p>Nestled at the end of the Aurlandsfjord, Flam is the starting point for the world-famous Flam Railway (Flamsbana). It's one of the steepest train journeys in the world, taking you past thundering waterfalls and through 20 tunnels up to the mountain station of Myrdal.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Geiranger</h3>
                <p>Home to the Geirangerfjord, arguably the most beautiful fjord in the world. The sail-in is an event in itself, passing the 'Seven Sisters' and 'Suitor' waterfalls. From the port, you can take a bus up to the Flydalsjuvet viewpoint for that classic postcard photo.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Olden</h3>
                <p>This tiny village is the jumping-off point for the Briksdal Glacier. You can take a scenic bus ride and then a short hike (or a 'Troll Car' ride) to the foot of the glacier, experiencing the raw power of Norway's frozen landscape.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Stavanger</h3>
                <p>Known for its charming old town with over 170 white wooden houses, Stavanger is also the base for excursions to Pulpit Rock (Preikestolen). While the hike is strenuous, the view from the 600-meter vertical drop into the Lysefjord is life-changing.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">How do I get to a Norwegian Fjords cruise from Ireland?</h3>
              <p className="text-text/80">Most Irish travellers take a Norwegian Fjords cruise by flying from Dublin or Belfast to London and then transferring to Southampton, or by flying direct to Bergen or Oslo for a fly-cruise itinerary. Celebrity Cruises and P&O Cruises frequently offer packages that include these connections specifically for the Irish market.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">How much does a Norwegian Fjords cruise cost from Ireland?</h3>
              <p className="text-text/80">A Norwegian Fjords cruise typically costs between €799 and €2,100 per person for a 7-night voyage. This usually includes accommodation, meals, and entertainment. Prices can be higher if you opt for a premium line like Celebrity or Princess, especially during the peak summer months of July and August.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">What is the best month for a Fjords cruise from Ireland?</h3>
              <p className="text-text/80">The best months for a Norwegian Fjords cruise are June, July, and August. During this time, you'll experience the 'Midnight Sun' with very long daylight hours and the warmest weather. May is also a beautiful time to visit as the waterfalls are at their peak due to melting snow, though temperatures remain cooler.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Do I need a visa for Norway as an Irish citizen?</h3>
              <p className="text-text/80">No, Irish citizens do not need a visa for Norway. Although Norway is not a member of the EU, it is part of the EEA and the Schengen Area, allowing Irish passport holders to visit for up to 90 days for tourism purposes without a visa.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Is Norway expensive for Irish travellers on shore?</h3>
              <p className="text-text/80">Yes, Norway is known for having a high cost of living. While your meals on the cruise ship are included, buying food, drinks, or coffee on shore can be significantly more expensive than in Ireland. We recommend enjoying a hearty breakfast on the ship before heading out to explore to help manage your budget.</p>
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
