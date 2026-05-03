import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

const MOCK_POSTS: Record<string, any> = {
  'top-5-cruises-from-dublin-2026': {
    title: 'Top 5 Cruises Departing from Dublin in 2026',
    date: 'May 10, 2026',
    category: 'Guides',
    content: `
      <p>There is nothing quite like the convenience of cruising from your own doorstep. For Irish travellers, Dublin Port is becoming an increasingly popular departure point, allowing you to skip the stress of airports and long-haul connections.</p>
      
      <h2>1. The Northern European Circuit</h2>
      <p>Several premium lines now offer round-trip voyages from Dublin that take you to the stunning coastlines of Iceland, Norway, and Scotland. These 10-12 night itineraries are perfect for those who love dramatic scenery and maritime history.</p>

      <h2>2. The 'No-Fly' Mediterranean</h2>
      <p>While rarer, some specialized sailings depart Dublin and head south towards the sun-drenched ports of Lisbon, Cadiz, and Barcelona. These are ideal for those who have plenty of time and want to experience the changing landscapes of the Atlantic coast.</p>

      <h2>3. British Isles Discovery</h2>
      <p>Exploring our closest neighbours by sea is a revelation. From the rugged beauty of the Hebrides to the historic charm of Guernsey, these cruises offer a fresh perspective on the islands around us.</p>
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
