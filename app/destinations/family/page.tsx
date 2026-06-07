import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';

export const generateMetadata = (): Metadata => {
  const title = 'Family Cruises from Ireland 2026 | Best Deals & Ships | FindMyCruise.ie';
  const description = 'A family cruise from Ireland typically costs €2,800–€5,500 for a family of four including flights. Find the best family fly-cruise deals from Dublin and Cork.';
  const url = 'https://www.findmycruise.ie/destinations/family';

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

export default function FamilyCruisesPage() {
  // Filtering mock cruises for family-friendly itineraries
  const familyCruises = MOCK_CRUISES.filter(c => 
    c.highlights?.some(h => h?.toLowerCase().includes('family') || h?.toLowerCase().includes('kids')) ||
    c.line?.toLowerCase().includes('royal caribbean') ||
    c.line?.toLowerCase().includes('msc')
  );

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a family cruise from Ireland cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a family of four (two adults, two children), a 7-night Mediterranean cruise from Ireland typically costs between €2,800 and €5,500 including flights. Prices vary significantly based on the time of year, with peak Irish school holiday weeks in July and August commanding the highest prices. Booking early or choosing 'Kids Sail Free' promotions on lines like MSC can significantly reduce these costs."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best cruise lines for families from Ireland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Royal Caribbean and MSC Cruises are the top choices for Irish families. Royal Caribbean is famous for its 'Oasis-class' ships with waterparks and surf simulators, while MSC offers excellent value and 'Kids Sail Free' deals on many Mediterranean routes. For a slightly more refined family experience with excellent childcare, Celebrity Cruises and Princess Cruises are also highly recommended."
        }
      },
      {
        "@type": "Question",
        "name": "Are there direct flights from Ireland for family cruises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the most convenient family cruises depart from Mediterranean hubs like Barcelona or Rome, which have multiple daily direct flights from Dublin and seasonal direct flights from Cork. For Caribbean family cruises, most families fly from Dublin with a connection, though direct winter charter flights to Barbados are sometimes available."
        }
      },
      {
        "@type": "Question",
        "name": "What age restrictions apply to kids' clubs on cruises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most major cruise lines offer complimentary kids' clubs starting from age 3 (must be toilet trained). There are usually separate groups for 'Aquanauts' (3-5), 'Explorers' (6-8), and 'Voyagers' (9-11), plus dedicated teen lounges for ages 12-17. Some ships also offer 'Royal Babies & Tots' nurseries for ages 6-36 months, though these typically incur an hourly fee."
        }
      },
      {
        "@type": "Question",
        "name": "Can a family of five share a single cruise cabin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard cruise cabins usually accommodate 2 to 4 people. For a family of five, you will need to book a specific 'Family Stateroom' or two interconnecting cabins. Interconnecting cabins are a very popular choice for Irish families as they provide two bathrooms and a bit more privacy while keeping everyone together. We recommend booking these very early as they are limited in number."
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
            Family Cruises from Ireland 2026
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A family cruise from Ireland typically costs €2,800–€5,500 for a family of four (including flights) for 7 nights, departing via direct flights from Dublin or Cork to Barcelona or Rome. Royal Caribbean and MSC Cruises offer the best 'Kids Sail Free' deals and onboard waterparks for Irish families.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-text/70 italic">
            Showing {familyCruises.length} hand-picked family-friendly cruises
          </p>
          <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-lg text-primary text-sm font-medium">
            👨‍👩‍👧‍👦 Best for All Ages
          </div>
        </div>

        <CruiseGrid cruises={familyCruises} />

        {/* SEO Content Section */}
        <section className="mt-20 prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Why Irish Travellers Choose Family Cruises</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              Family cruises have exploded in popularity among Irish travellers, and it's easy to see why. Unlike a traditional hotel-based holiday, a cruise offers a massive variety of entertainment and dining options in a safe, controlled environment. For parents in Ireland, the greatest appeal is often the supervised kids' clubs, which allow mums and dads to enjoy some much-needed relaxation while the children are entertained by professional staff.
            </p>
            <p className="mb-4">
              Accessibility is another huge factor. With multiple daily direct flights from Dublin (DUB) and seasonal direct routes from Cork (ORK) to Mediterranean cruise hubs like Barcelona and Rome, the journey is manageable even with toddlers in tow. A 2.5-hour flight followed by a short 20-minute transfer to the port means you can be on the ship and enjoying the pool before dinner. This "fly-cruise" model is far less stressful than long-distance driving or multiple airport layovers.
            </p>
            <p>
              Furthermore, the value for money is hard to ignore. When you factor in the cost of three meals a day, snacks, ice creams, and high-quality theatre shows and waterpark access, a cruise often works out cheaper than a comparable 4-star resort in Spain or Portugal. Plus, with the "Kids Sail Free" or "Kids for €99" promotions often available through our affiliate partners, the total cost for a large family can be surprisingly affordable.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Choosing the Right Ship for Your Family</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              Not all cruise ships are created equal when it comes to family travel. For Irish families, we generally categorize ships into three tiers:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-4">
              <li><strong>The 'Mega-Resorts' (Royal Caribbean & MSC):</strong> These are the giants of the sea. Think Icon of the Seas or MSC World Europa. They feature multiple water slides, surf simulators, zip lines, and even bumper cars. If your children are active and love high-energy environments, these are the top choices.</li>
              <li><strong>The 'Premium All-Rounders' (Celebrity & Princess):</strong> These ships offer a more refined atmosphere. While they still have excellent kids' clubs and pools, the focus is more on high-quality dining and relaxation. They are perfect for multi-generational families (grandparents, parents, and kids) travelling together.</li>
              <li><strong>The 'Classic Cruisers' (P&O):</strong> P&O is a great choice for Irish families who prefer a more British-style experience (including proper tea and familiar food). Their family-friendly ships like Iona and Arvia offer great value and dedicated family zones.</li>
            </ul>
            <p>
              When choosing, consider the ages of your children. Teenagers will want ships with dedicated "Teen Lounges" and high-speed Wi-Fi (Starlink is now common on many ships), while parents of toddlers should prioritize ships with dedicated nursery facilities and splash pads specifically for non-toilet-trained children.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Manageable Flight Times & Stress-Free Embarkation</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              We know that the flight is often the most stressful part of a family holiday. That's why we focus on itineraries that synchronize with the best Irish flight routes. For the Mediterranean, we recommend flying into Barcelona or Rome (Fiumicino). Both airports are large, well-organized, and have excellent taxi and private transfer links to the cruise terminal.
            </p>
            <p className="mb-4">
              <strong>Our Pro-Tip for Irish Families:</strong> If your budget allows, fly into your departure city one day early. Staying one night in a hotel near the Las Ramblas or the Port of Civitavecchia means you can wake up on embarkation day, have a relaxed breakfast, and board the ship as soon as it opens. This avoids the stress of potential flight delays and ensures you start your holiday feeling refreshed rather than rushed.
            </p>
            <p>
              For families considering the Caribbean, the flight is longer (usually 9+ hours). For these trips, we strongly recommend flying from Dublin to avoid the extra stress of a UK connection. Royal Caribbean and Aer Lingus often have great synchronization for Miami and Orlando sailings.
            </p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Cabin Layouts: How to Sleep a Family of Four or More</h2>
          <div className="text-text/80 leading-relaxed mb-10">
            <p className="mb-4">
              Where you sleep matters. Standard cruise cabins are about 16-18 square meters. While they are efficiently designed, they can feel "cosy" for a family of four. Here are the most common options for Irish families:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary">Pullman Beds & Sofa Beds</h3>
                <p>In a standard quad cabin, the two main beds can be separate or pushed together. The kids will sleep on a double sofa bed or "Pullman" beds that fold down from the ceiling or wall. This is the most budget-friendly option.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Interconnecting Cabins</h3>
                <p>This is the "Gold Standard" for family cruising. You book two separate cabins with an internal door between them. This gives you two bathrooms (a lifesaver!), two TVs, and twice the space. These sell out first, so book early!</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Family Suites</h3>
                <p>Larger ships offer dedicated family suites that can sleep up to 6 or 8 people. These often include separate bedrooms and even private balconies with kid-safe railings. While expensive, they offer a level of comfort that makes the holiday truly special.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">How much does a family cruise from Ireland cost?</h3>
              <p className="text-text/80">For a family of four (two adults, two children), a 7-night Mediterranean cruise from Ireland typically costs between €2,800 and €5,500 including flights. Prices vary significantly based on the time of year, with peak Irish school holiday weeks in July and August commanding the highest prices. Booking early or choosing 'Kids Sail Free' promotions on lines like MSC can significantly reduce these costs.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">What are the best cruise lines for families from Ireland?</h3>
              <p className="text-text/80">Royal Caribbean and MSC Cruises are the top choices for Irish families. Royal Caribbean is famous for its 'Oasis-class' ships with waterparks and surf simulators, while MSC offers excellent value and 'Kids Sail Free' deals on many Mediterranean routes. For a slightly more refined family experience with excellent childcare, Celebrity Cruises and Princess Cruises are also highly recommended.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Are there direct flights from Ireland for family cruises?</h3>
              <p className="text-text/80">Yes, the most convenient family cruises depart from Mediterranean hubs like Barcelona or Rome, which have multiple daily direct flights from Dublin and seasonal direct flights from Cork. For Caribbean family cruises, most families fly from Dublin with a connection, though direct winter charter flights to Barbados are sometimes available.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">What age restrictions apply to kids' clubs on cruises?</h3>
              <p className="text-text/80">Most major cruise lines offer complimentary kids' clubs starting from age 3 (must be toilet trained). There are usually separate groups for 'Aquanauts' (3-5), 'Explorers' (6-8), and 'Voyagers' (9-11), plus dedicated teen lounges for ages 12-17. Some ships also offer 'Royal Babies & Tots' nurseries for ages 6-36 months, though these typically incur an hourly fee.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Can a family of five share a single cruise cabin?</h3>
              <p className="text-text/80">Standard cruise cabins usually accommodate 2 to 4 people. For a family of five, you will need to book a specific 'Family Stateroom' or two interconnecting cabins. Interconnecting cabins are a very popular choice for Irish families as they provide two bathrooms and a bit more privacy while keeping everyone together. We recommend booking these very early as they are limited in number.</p>
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
