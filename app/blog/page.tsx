import { Metadata } from 'next';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Irish Cruise Blog | Tips & Advice for Travellers | FindMyCruise.ie',
    description: 'Expert cruise tips for Irish travellers. From packing lists to destination guides, discover how to make the most of your voyage.',
  };
};

const MOCK_POSTS = [
  {
    slug: 'top-5-cruises-from-dublin-2026',
    title: 'Top 5 Cruises Departing from Dublin in 2026',
    excerpt: 'Discover the most convenient cruises for 2026 that let you skip the airport and board right in Dublin Port.',
    date: 'May 10, 2026',
    category: 'Guides',
  },
  {
    slug: 'packing-for-a-fjords-cruise-irish-guide',
    title: 'Packing for a Norwegian Fjords Cruise: An Irish Guide',
    excerpt: 'Don\'t let the weather catch you out! Here is exactly what you need to pack for a spectacular Fjord adventure.',
    date: 'May 5, 2026',
    category: 'Tips',
  },
  {
    slug: 'first-time-cruiser-mistakes-to-avoid',
    title: '7 Mistakes First-Time Irish Cruisers Make (And How to Avoid Them)',
    excerpt: 'Heading on your first voyage? Make sure you read these tips before you step on board.',
    date: 'April 28, 2026',
    category: 'Advice',
  }
];

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-primary py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            The Irish Cruise Blog
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Expert advice, destination guides, and the latest cruise news tailored 
            specifically for the Irish traveller.
          </p>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_POSTS.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="h-48 bg-primary/10 flex items-center justify-center text-4xl">
                {post.category === 'Guides' ? '📍' : post.category === 'Tips' ? '📦' : '🚢'}
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">{post.category}</span>
                  <span className="text-xs text-text/50">{post.date}</span>
                </div>
                <h2 className="text-xl font-heading font-bold text-primary mb-3 leading-tight">
                  {post.title}
                </h2>
                <p className="text-sm text-text/70 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <span className="text-primary font-bold text-sm hover:text-accent transition-colors">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
