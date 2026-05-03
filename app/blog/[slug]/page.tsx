import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

const MOCK_POSTS: Record<string, any> = {
  'premium-vs-budget-cruises-guide': {
    title: 'Premium vs. Budget: Finding the Best Value for Your Irish Holiday',
    date: 'May 12, 2026',
    category: 'Comparison',
    excerpt: 'Is the extra cost of a luxury cruise worth it? We compare the inclusions, dining, and cabins of the top lines.',
    content: `
      <p>When planning a cruise from Ireland, one of the first questions you'll face is whether to go with a budget-friendly line or splash out on a premium experience. While both offer a great holiday, the "hidden" differences can significantly impact your total spend.</p>
      
      <h2>Budget Cruises: The Value King</h2>
      <p>Lines like <strong>MSC Cruises</strong> and <strong>P&O Cruises</strong> are incredibly popular in the Irish market because of their entry-level pricing. You can often find a week in the Mediterranean for under €700 per person.</p>
      <ul>
        <li><strong>Best for:</strong> Families and groups watching their budget.</li>
        <li><strong>What's included:</strong> Your cabin, standard meals in the buffet and main dining room, and most entertainment.</li>
        <li><strong>The Trade-off:</strong> You'll likely pay extra for drinks, specialty restaurants, and some activities.</li>
      </ul>

      <h2>Premium Cruises: The Elevated Choice</h2>
      <p>Lines like <strong>Celebrity Cruises</strong> or <strong>Princess Cruises</strong> sit in the "Premium" bracket. They offer a more refined atmosphere with fewer crowds and higher-quality finishes.</p>
      <ul>
        <li><strong>Best for:</strong> Couples, foodies, and those celebrating a special occasion.</li>
        <li><strong>What's included:</strong> Often features "All-Inclusive" packages that cover drinks, Wi-Fi, and tips upfront.</li>
        <li><strong>The Trade-off:</strong> A higher initial price tag, usually starting from €1,500+ per person.</li>
      </ul>

      <h2>Which is right for you?</h2>
      <p>If you're an Irish family with teenagers who want waterparks and high energy, a budget/mid-range line like Royal Caribbean is unbeatable. However, if you want a peaceful week with world-class dining and a bit of "the quiet life," a premium line is worth every extra Euro.</p>
    `,
  },
  'best-family-cruise-lines-ireland': {
    title: 'Top 3 Family-Friendly Cruise Lines for Irish Parents',
    date: 'May 11, 2026',
    category: 'Comparison',
    excerpt: 'From waterparks to kids clubs, we break down which lines offer the best experience for your children.',
    content: `
      <p>Finding the right family holiday is about keeping the kids happy so the parents can relax. Here are the top three lines we recommend for Irish families in 2026.</p>
      
      <h2>1. Royal Caribbean: The Ultimate Playground</h2>
      <p>With features like the FlowRider surf simulator, rock climbing, and some of the best kids' clubs at sea, Royal Caribbean is the gold standard for active families. Their ships departing from Southampton are particularly convenient for Irish travellers.</p>

      <h2>2. MSC Cruises: Fantastic Value</h2>
      <p>MSC often offers "Kids Sail Free" promotions which are a huge hit in Ireland. Their partnership with LEGO means the kids' clubs are world-class, and their new ships like MSC Euribia are packed with family entertainment.</p>

      <h2>3. Disney Cruise Line: Pure Magic</h2>
      <p>While the most expensive option, the experience is unmatched. From character meet-and-greets to incredible themed dining, it's a "once-in-a-lifetime" trip that your children will never forget.</p>
    `,
  },
};

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = MOCK_POSTS[slug];

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | FindMyCruise.ie`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = MOCK_POSTS[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen pb-20">
      <article className="max-w-[800px] mx-auto px-4 pt-16">
        <Link href="/blog" className="text-primary font-bold text-sm mb-8 inline-block hover:text-accent transition-colors">
          ← Back to Blog
        </Link>
        
        <div className="mb-8">
          <span className="text-xs font-bold text-accent uppercase tracking-wider">{post.category}</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mt-4 mb-4">
            {post.title}
          </h1>
          <p className="text-text/50 text-sm">{post.date} • Written by the FindMyCruise Team</p>
        </div>

        <div 
          className="prose prose-slate max-w-none text-text/80 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 p-8 bg-primary rounded-3xl text-white text-center">
          <h3 className="text-2xl font-heading font-bold mb-4">Ready to find your perfect cruise?</h3>
          <p className="text-gray-300 mb-8">Let Mara help you find the best deals from Dublin, Cork, and beyond.</p>
          <Link 
            href="/find" 
            className="inline-block bg-accent text-primary px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Chat with Mara Now
          </Link>
        </div>
      </article>
    </div>
  );
}
