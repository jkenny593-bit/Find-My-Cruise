import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

const POSTS_DATA: Record<string, any> = {
  'best-cruise-lines-ireland-ranked': {
    title: 'Best Cruise Lines from Ireland in 2026: Ranked for Irish Travellers',
    excerpt: 'We rank the top 5 cruise lines for Irish holidaymakers in 2026 based on pricing, flight connectivity from Dublin and Cork, onboard quality, and overall value.',
    date: 'May 31, 2026',
    category: 'Rankings',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p class="lead">For Irish travellers, the best cruise lines in 2026 are <strong>MSC Cruises</strong> for value, <strong>Royal Caribbean</strong> for family entertainment, and <strong>Celebrity Cruises</strong> for modern luxury. These rankings are based on direct flight connectivity from Dublin and Cork, pricing in Euro, and overall ship quality.</p>
      
      <p>Choosing a cruise is a significant investment, and for those flying from Ireland, the "fly-cruise" logistics are just as important as the ship itself. In this guide, we break down the top 5 lines serving the Irish market this year.</p>

      <h3>Comparison Table: Top 5 Cruise Lines for Ireland</h3>
      <div class="overflow-x-auto my-10">
        <table class="w-full text-sm text-left border-collapse border border-gray-200">
          <thead>
            <tr class="bg-primary text-white">
              <th class="p-4 border border-gray-200">Cruise Line</th>
              <th class="p-4 border border-gray-200">Best For</th>
              <th class="p-4 border border-gray-200">Flights</th>
              <th class="p-4 border border-gray-200">Price Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-4 border border-gray-200 font-bold">MSC Cruises</td>
              <td class="p-4 border border-gray-200">Budget & Families</td>
              <td class="p-4 border border-gray-200">Dublin, Cork, Shannon</td>
              <td class="p-4 border border-gray-200">€€</td>
            </tr>
            <tr class="bg-surface">
              <td class="p-4 border border-gray-200 font-bold">Royal Caribbean</td>
              <td class="p-4 border border-gray-200">Teens & Activities</td>
              <td class="p-4 border border-gray-200">Dublin, Shannon</td>
              <td class="p-4 border border-gray-200">€€€</td>
            </tr>
            <tr>
              <td class="p-4 border border-gray-200 font-bold">Celebrity Cruises</td>
              <td class="p-4 border border-gray-200">Modern Luxury</td>
              <td class="p-4 border border-gray-200">Dublin</td>
              <td class="p-4 border border-gray-200">€€€€</td>
            </tr>
            <tr class="bg-surface">
              <td class="p-4 border border-gray-200 font-bold">P&O Cruises</td>
              <td class="p-4 border border-gray-200">British Atmosphere</td>
              <td class="p-4 border border-gray-200">Dublin (via LHR)</td>
              <td class="p-4 border border-gray-200">€€</td>
            </tr>
            <tr>
              <td class="p-4 border border-gray-200 font-bold">Princess Cruises</td>
              <td class="p-4 border border-gray-200">Couples</td>
              <td class="p-4 border border-gray-200">Dublin</td>
              <td class="p-4 border border-gray-200">€€€</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>1. MSC Cruises: The Value King</h3>
      <p>MSC remains the most popular choice for Irish families, largely due to their "Kids Sail Free" promotions and their aggressive expansion in the Mediterranean. With newer ships like the <em>MSC World Europa</em>, they offer a futuristic experience that rivals much more expensive lines.</p>
      <ul>
        <li><strong>Pros:</strong> Excellent value, stunning Swarovski staircases, great for kids.</li>
        <li><strong>Cons:</strong> Can feel crowded during peak season, some extra costs for theme restaurants.</li>
      </ul>

      <h3>2. Royal Caribbean: Ultimate Entertainment</h3>
      <p>If you have teenagers, Royal Caribbean is unbeatable. Their ships are essentially floating theme parks with flow-riders, rock climbing walls, and even skydiving simulators. They have strong flight connections from Dublin to Barcelona and Rome.</p>

      <h3>3. Celebrity Cruises: For the Sophisticated Traveller</h3>
      <p>Celebrity's "Edge-class" ships have revolutionized cruise ship design. The Magic Carpet—a platform that moves between decks—is a must-see. It’s perfect for Irish couples looking for a child-free atmosphere without going to a strictly adults-only line.</p>

      <h3>4. P&O Cruises: A Home Away from Home</h3>
      <p>P&O offers a familiar, British-style service that many Irish cruisers appreciate. One of the biggest perks is that gratuities are included in the price, so there are no surprise charges at the end of the holiday.</p>

      <h3>5. Princess Cruises: The Destination Experts</h3>
      <p>Princess is ideal for those who care more about the ports than the onboard waterslides. Their "Medallion" technology makes the experience incredibly smooth, allowing you to order a drink to exactly where you are sitting on the ship using your phone.</p>
    `,
  },
  'luxury-vs-budget-cruise-comparison': {
    title: 'Luxury vs. Budget: Which Cruise Line is Right for You?',
    excerpt: 'We break down the real differences between premium lines like Celebrity and value lines like MSC to help you decide where to invest your holiday budget.',
    date: 'May 12, 2026',
    category: 'Comparison',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p class="lead">Choosing between a premium cruise line and a budget-friendly option is more than just a matter of price. It’s about understanding the "value proposition" and what each Euro buys you in terms of experience, service, and inclusions.</p>
      
      <h3>1. The Atmosphere and Crowds</h3>
      <p>Budget lines like <strong>MSC Cruises</strong> and <strong>P&O Cruises</strong> often operate some of the largest ships in the world. While this means incredible facilities, it also means higher guest counts. Conversely, premium lines like <strong>Celebrity Cruises</strong> focus on a higher "space-per-guest" ratio, leading to a more serene and sophisticated atmosphere.</p>

      <div class="bg-surface p-8 rounded-2xl my-10 border border-gray-100">
        <h4 class="text-primary font-bold mb-4">Key Takeaway</h4>
        <p class="text-sm italic">If you enjoy high-energy environments and multi-generational fun, budget lines are excellent. If you prefer a quiet corner and personalized service, premium is the way to go.</p>
      </div>

      <h3>2. Dining and Inclusions</h3>
      <p>On a budget line, your base fare typically covers the main dining room and the buffet. Specialty restaurants (Steakhouse, Teppanyaki, etc.) almost always cost extra. Premium lines often include more varied dining options in the base fare, and their "All-Inclusive" packages frequently cover alcoholic drinks, high-speed Wi-Fi, and daily gratuities.</p>

      <h3>3. Accommodations</h3>
      <p>While all lines offer a range of cabins, premium lines tend to have larger standard rooms and higher-quality linens and toiletries. The "Suite Class" experience on premium lines often includes dedicated butler service and exclusive access to private areas of the ship.</p>
    `,
  },
  'best-family-cruises-2026': {
    title: 'The Ultimate Guide to Family Cruising in 2026',
    excerpt: "From waterparks to world-class kids' clubs, discover the top 3 cruise lines that Irish parents are booking for 2026.",
    date: 'May 11, 2026',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p class="lead">Planning a family holiday from Ireland requires balancing the needs of toddlers, teenagers, and parents. In 2026, cruising has become the #1 choice for Irish families seeking variety and value.</p>
      
      <h3>The Top Contenders for 2026</h3>
      <p>When it comes to family fun, three lines stand head and shoulders above the rest for the Irish market:</p>
      
      <h4>1. Royal Caribbean (The All-Rounder)</h4>
      <p>With their massive "Oasis-class" and "Quantum-class" ships, Royal Caribbean is unbeatable for teenagers. The SeaPlex indoor activity center and the North Star viewing capsule provide high-tech fun that keeps kids engaged for days.</p>

      <h4>2. MSC Cruises (The Value Choice)</h4>
      <p>MSC’s partnership with <strong>LEGO</strong> is a massive draw for younger children. Their ships are visually stunning, and their frequent "Kids Sail Free" promotions make them the most cost-effective option for large Irish families.</p>

      <h4>3. Disney Cruise Line (The Magic)</h4>
      <p>Disney Wish and the new Disney Treasure offer an experience that is impossible to replicate. While the price point is higher, the quality of the kids' clubs and the nightly Broadway-style shows are second to none.</p>
    `,
  },
  'cruise-embarkation-day-tips': {
    title: '10 Essential Tips for a Stress-Free Embarkation Day',
    excerpt: 'First time cruising? Our expert guide covers everything from luggage tags to boarding times to ensure a smooth start to your holiday.',
    date: 'May 10, 2026',
    category: 'Tips',
    image: 'https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p class="lead">Embarkation day is exciting, but it can also be overwhelming. Follow these ten expert tips to ensure your cruise holiday gets off to a perfect start.</p>
      
      <ol>
        <li><strong>Arrive a day early:</strong> If you're flying from Ireland to your departure port, always fly in the day before to avoid stress from flight delays.</li>
        <li><strong>Keep your "Carry-on" ready:</strong> It can take several hours for your main luggage to arrive at your cabin. Pack a small bag with swimwear, sunscreen, and essential medications.</li>
        <li><strong>Download the App:</strong> Most lines now use apps for daily schedules and restaurant bookings. Download it before you leave home.</li>
        <li><strong>Check-in Online:</strong> Complete all your documentation online to breeze through the terminal.</li>
        <li><strong>Skip the Buffet:</strong> The main buffet is often crowded on day one. Look for smaller casual cafes that are open for lunch.</li>
      </ol>
    `,
  },
};

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS_DATA[slug];

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title}`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.findmycruise.ie/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.findmycruise.ie/blog/${slug}`,
      images: [
        {
          url: post.image,
        },
      ],
    },
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = POSTS_DATA[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Article Hero */}
      <div className="h-[50vh] relative overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-10 left-0 w-full">
          <div className="max-w-[800px] mx-auto px-4">
            <span className="bg-accent text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <article className="max-w-[800px] mx-auto px-4 py-16">
        <Link href="/blog" className="text-text-light font-bold text-xs mb-10 inline-flex items-center hover:text-primary transition-colors uppercase tracking-widest">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Journal
        </Link>
        
        <div className="mb-12 border-b border-gray-100 pb-8">
          <p className="text-text-light text-sm italic">{post.date} • Expert Contributor</p>
        </div>

        <div 
          className="prose prose-slate prose-lg max-w-none text-text/80 leading-relaxed 
          prose-headings:text-primary prose-headings:font-heading prose-headings:font-bold
          prose-p:mb-8 prose-li:mb-2 prose-strong:text-primary prose-img:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-20 p-12 bg-surface rounded-[2rem] border border-gray-100 text-center shadow-sm">
          <span className="text-accent text-3xl mb-6 block">⚓</span>
          <h3 className="text-3xl font-heading font-bold text-primary mb-4 italic">Ready to find your voyage?</h3>
          <p className="text-text-light mb-10 max-w-md mx-auto">Let Mara provide personalized recommendations based on your unique travel style and budget.</p>
          <Link 
            href="/find" 
            className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20"
          >
            Start Your Journey with Mara
          </Link>
        </div>
      </article>
    </div>
  );
}
