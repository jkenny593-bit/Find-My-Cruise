import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    title: 'European River Cruise Holidays from Ireland 2026 | FindMyCruise.ie',
    description: 'A European river cruise from Ireland typically costs €1,650–€4,200 including flights. Compare best Rhine and Danube fly-cruise deals from Dublin and Cork.',
    alternates: {
      canonical: '/destinations/river',
    },
    openGraph: {
      title: 'European River Cruise Holidays from Ireland 2026',
      description: 'Discover the heart of Europe with river cruises from Ireland. Expert advice on Rhine, Danube, and Douro voyages with flights from Dublin.',
      url: '/destinations/river',
    }
  };
};

export default function RiverPage() {
  // Filtering mock cruises for River itineraries
  const riverCruises = MOCK_CRUISES.filter(c => 
    c.highlights?.some(h => h?.toLowerCase().includes('river')) || 
    c.line?.toLowerCase().includes('viking') ||
    c.itinerary?.toLowerCase().includes('rhine') ||
    c.itinerary?.toLowerCase().includes('danube')
  );

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a river cruise from Ireland cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A European river cruise from Ireland typically costs between €1,650 and €4,200 per person for a 7-night voyage, including flights. This higher starting price compared to ocean cruises is due to the smaller ship size and the highly inclusive nature of the experience, which often covers daily shore excursions, Wi-Fi, and wine or beer with meals."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best rivers for a first-time Irish cruiser?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For your first river cruise, we highly recommend the Rhine or the Danube. The Rhine (Amsterdam to Basel) is famous for its 'Legendary Rhine' section with dozens of fairy-tale castles. The Danube (Regensburg to Budapest) is perfect for those who want to see iconic capitals like Vienna and Bratislava. Both rivers have excellent flight connections from Dublin."
        }
      },
      {
        "@type": "Question",
        "name": "Do river cruises from Ireland include flights?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many premium river cruise lines like Viking and Avalon Waterways offer 'fly-cruise' packages that include flights from Dublin Airport. Some seasonal routes may also be available from Cork or Shannon. Booking flights as part of a cruise package provides extra protection and ensures your transfers to the ship are coordinated."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a dress code on river cruises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The dress code on river cruises is significantly more relaxed than on large ocean liners. The standard is 'country club casual'—meaning comfortable trousers and polo shirts for men, and sundresses or smart-casual wear for women. There are rarely formal nights, though many guests dress up slightly for the final Captain's Dinner."
        }
      },
      {
        "@type": "Question",
        "name": "Are river cruises suitable for families?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, river cruises are designed for adults and do not have the kids' clubs or waterparks found on ocean ships. Some lines like AmaWaterways offer specific family-friendly sailings, but for the most part, river cruising is best suited for couples, solo travellers, or families with adult children who enjoy history, culture, and gastronomy."
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
      <div className="bg-primary py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,_transparent_25%,_rgba(255,255,255,0.1)_50%,_transparent_75%)] bg-[length:100px_100px]" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
            European River Cruise Holidays from Ireland 2026
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A European river cruise from Ireland typically costs €1,650–€4,200 per person for 7–10 nights, departing via direct flights from Dublin or Cork to Amsterdam, Munich, or Lisbon. Viking and Avalon Waterways offer the most comprehensive all-inclusive packages for the Irish market.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-text/70 italic">
            Showing {riverCruises.length} hand-picked European river cruises
          </p>
          <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-lg text-primary text-sm font-medium">
            🏰 Best for Culture & History
          </div>
        </div>

        <CruiseGrid cruises={riverCruises} />

        {/* SEO Content Section */}
        <section className="mt-20 prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Why Irish Travellers Choose River Cruises</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              River cruising has become a favorite for Irish travellers who want to see the heart of Europe without the stress of constant packing and unpacking. Unlike ocean cruises, where ports are often far from the city center, a river cruise ship docks right in the middle of historic towns. For Irish holidaymakers, the ability to walk off the ship and immediately be among the cobblestone streets of Cologne or the vineyards of the Douro Valley is an incredible advantage.
            </p>
            <p className="mb-4">
              Accessibility from Ireland is exceptional. Most major river cruise hubs are serviced by direct flights from Dublin (DUB). For Rhine cruises, Amsterdam is a short 90-minute flight. For Danube cruises, flying into Munich or Budapest from Dublin is equally convenient. Many premium lines also coordinate seasonal connections from Cork (ORK) and Shannon (SNN) through European hubs, making it easy for travellers from across Ireland to reach their embarkation point.
            </p>
            <p>
              The intimacy of the experience is also a major draw. River ships are small, typically carrying only 100 to 190 guests. This creates a more social atmosphere where it's easy to meet fellow Irish travellers. Because the ship is smaller, the service is incredibly personalized—the staff often know your name and your preferred drink by the second day. It’s a far cry from the bustling mega-ships of the Caribbean, offering a refined and peaceful way to travel.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Best Time to Book a River Cruise from Ireland</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              The river cruise season in Europe is surprisingly long, running from March through to late December. For Irish travellers, the "shoulder seasons" of May/June and September/October are ideal. The weather is mild—perfect for the walking tours that are a staple of river cruising—and the scenery is at its most vibrant. In spring, you’ll see the tulip fields of the Netherlands, while in autumn, the vineyards of the Rhine and Douro turn a spectacular gold.
            </p>
            <p className="mb-4">
              One of the most popular times for Irish cruisers is November and December for the famous European Christmas Markets. Sailing through Germany, Austria, or France when the towns are decorated with festive lights and the air smells of gingerbread and mulled wine is a truly magical experience. These "Yuletide" cruises often sell out over a year in advance, so early booking is essential.
            </p>
            <p>
              From a value perspective, March and April sailings offer the absolute lowest fares. While the weather can be a bit more "Irish" (unpredictable and damp), the lack of crowds in major museums and cathedrals can make for a more relaxing trip. Regardless of when you want to travel, we recommend booking at least 10–12 months in advance, as the small ship size means that popular itineraries and cabin types disappear quickly.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">What's Included vs. What Costs Extra</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              River cruising is widely considered the most "all-inclusive" way to travel by sea. Because the starting price is higher than an ocean cruise, it’s important for Irish travellers to understand exactly what they are getting for their money. On most premium lines (like Viking, AmaWaterways, and Uniworld), your fare includes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Shore Excursions:</strong> At least one guided walking tour or activity is included in every single port of call. You rarely need to pay extra to see the main sights.</li>
              <li><strong>Drinks with Meals:</strong> Most lines include unlimited wine, beer, and soft drinks with lunch and dinner. Some ultra-luxury lines include an open bar all day.</li>
              <li><strong>Wi-Fi:</strong> High-speed internet is typically complimentary throughout the ship.</li>
              <li><strong>Specialty Dining:</strong> Unlike ocean ships, river cruises rarely have "extra charge" restaurants; all dining venues are usually included.</li>
            </ul>
            <p>
              <strong>What usually costs extra?</strong> Gratuities (unless you pre-pay them or they are explicitly included in your Irish booking), premium spirits outside of mealtimes, laundry services, and "optional" high-intensity shore excursions (like private classical concerts or helicopter tours).
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Top Rivers and Ports of Call in Europe</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-6">
              Choosing your first river can be difficult. Here are the most popular waterways for Irish travellers:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary">The Rhine (Castles & Cathedrals)</h3>
                <p>The Rhine is the quintessential river cruise. Starting in Amsterdam, you sail past the Black Forest, the spectacular 'Legendary Rhine' castle section, and historic cities like Cologne and Strasbourg. It's the best choice for first-timers who want that classic European feel.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">The Danube (Imperial Capitals)</h3>
                <p>The Danube is the river of music and history. It connects three of Europe's most beautiful capitals: Vienna, Bratislava, and Budapest. The scenery in the Wachau Valley is breathtaking, and the chance to attend a Mozart concert in Vienna is a highlight for many Irish guests.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">The Douro (Wine & Sun)</h3>
                <p>Cruising through Portugal's Douro Valley is a sun-soaked delight. You'll sail through deep gorges and past steep, terraced vineyards. Starting and ending in Porto, this is a more relaxing cruise with a heavy focus on local food and wine tasting.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">The Seine (Art & Romance)</h3>
                <p>A Seine cruise usually starts and ends in Paris, heading north into Normandy. Highlights include visiting Monet's gardens at Giverny and the historic D-Day landing beaches. It is a dream itinerary for those who love art, history, and the unique charm of northern France.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">How much does a river cruise from Ireland cost?</h3>
              <p className="text-text/80">A European river cruise from Ireland typically costs between €1,650 and €4,200 per person for a 7-night voyage, including flights. This higher starting price compared to ocean cruises is due to the smaller ship size and the highly inclusive nature of the experience, which often covers daily shore excursions, Wi-Fi, and wine or beer with meals.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">What are the best rivers for a first-time Irish cruiser?</h3>
              <p className="text-text/80">For your first river cruise, we highly recommend the Rhine or the Danube. The Rhine (Amsterdam to Basel) is famous for its 'Legendary Rhine' section with dozens of fairy-tale castles. The Danube (Regensburg to Budapest) is perfect for those who want to see iconic capitals like Vienna and Bratislava. Both rivers have excellent flight connections from Dublin.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Do river cruises from Ireland include flights?</h3>
              <p className="text-text/80">Yes, many premium river cruise lines like Viking and Avalon Waterways offer 'fly-cruise' packages that include flights from Dublin Airport. Some seasonal routes may also be available from Cork or Shannon. Booking flights as part of a cruise package provides extra protection and ensures your transfers to the ship are coordinated.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Is there a dress code on river cruises?</h3>
              <p className="text-text/80">The dress code on river cruises is significantly more relaxed than on large ocean liners. The standard is 'country club casual'—meaning comfortable trousers and polo shirts for men, and sundresses or smart-casual wear for women. There are rarely formal nights, though many guests dress up slightly for the final Captain's Dinner.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Are river cruises suitable for families?</h3>
              <p className="text-text/80">Generally, river cruises are designed for adults and do not have the kids' clubs or waterparks found on ocean ships. Some lines like AmaWaterways offer specific family-friendly sailings, but for the most part, river cruising is best suited for couples, solo travellers, or families with adult children who enjoy history, culture, and gastronomy.</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-text/50 italic">
            Last updated: May 2026. Prices and flight availability are subject to change.
          </div>
        </section>

        {/* Internal Links for Authority */}
        <div className="mt-16 text-center">
          <p className="text-sm text-text/50 mb-6 uppercase tracking-widest font-bold">Explore More Cruise Types</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/destinations/mediterranean" className="text-primary font-bold hover:text-accent transition-colors underline decoration-accent underline-offset-4">Mediterranean</Link>
            <Link href="/destinations/fjords" className="text-primary font-bold hover:text-accent transition-colors underline decoration-accent underline-offset-4">Norwegian Fjords</Link>
            <Link href="/destinations/caribbean" className="text-primary font-bold hover:text-accent transition-colors underline decoration-accent underline-offset-4">Caribbean</Link>
            <Link href="/destinations/family" className="text-primary font-bold hover:text-accent transition-colors underline decoration-accent underline-offset-4">Family Cruises</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
