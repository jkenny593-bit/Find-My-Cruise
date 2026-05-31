import { Metadata } from 'next';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Cruise Insights & Planning Guides | FindMyCruise.ie',
    description: 'Expert advice and practical guides for Irish cruisers. Compare cruise lines, discover top destinations, and plan your perfect voyage.',
    alternates: {
      canonical: '/blog',
    },
    openGraph: {
      title: 'Cruise Insights & Planning Guides',
      description: 'Expert advice and practical guides for Irish cruisers. Compare cruise lines, discover top destinations, and plan your perfect voyage.',
      url: '/blog',
    },
  };
};

const POSTS = [
  {
    slug: 'luxury-vs-budget-cruise-comparison',
    title: 'Luxury vs. Budget: Which Cruise Line is Right for You?',
    excerpt: 'We break down the real differences between premium lines like Celebrity and value lines like MSC to help you decide where to invest your holiday budget.',
    date: 'May 12, 2026',
    category: 'Comparison',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'best-family-cruises-2026',
    title: 'The Ultimate Guide to Family Cruising in 2026',
    excerpt: 'From waterparks to world-class kids\' clubs, discover the top 3 cruise lines that Irish parents are booking for 2026.',
    date: 'May 11, 2026',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'cruise-embarkation-day-tips',
    title: '10 Essential Tips for a Stress-Free Embarkation Day',
    excerpt: 'First time cruising? Our expert guide covers everything from luggage tags to boarding times to ensure a smooth start to your holiday.',
    date: 'May 10, 2026',
    category: 'Tips',
    image: 'https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?auto=format&fit=crop&q=80&w=800',
  }
];

export default function BlogPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Blog Header */}
      <div className="bg-white border-b border-gray-100 py-24">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Expert Insights</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
            The Cruise Journal
          </h1>
          <p className="text-text-light max-w-2xl mx-auto text-lg leading-relaxed">
            Practical advice, in-depth comparisons, and destination inspiration 
            curated for the modern Irish traveller.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <main className="max-w-[1200px] mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {POSTS.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-text-light text-xs mb-4 font-medium">{post.date}</p>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-text/70 text-sm mb-8 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center text-primary font-bold text-sm">
                  Read Full Article
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
