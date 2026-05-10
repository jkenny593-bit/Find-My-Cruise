import { Metadata } from 'next';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    title: "FindMyCruise.ie | AI Cruise Finder for Irish Travellers",
    description: "Find your perfect cruise holiday with Mara, our Irish-focused AI cruise specialist. Personalized recommendations from Dublin, Cork, Shannon, and Belfast.",
    alternates: {
      canonical: '/',
    },
  };
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Organization Schema for Homepage SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FindMyCruise.ie",
            "url": "https://www.findmycruise.ie",
            "description": "Ireland's AI-powered cruise finder. Helping Irish travellers find the best cruise holidays from Dublin, Cork, Shannon, and Belfast.",
            "areaServed": "Ireland",
            "knowsAbout": ["Cruise Holidays", "Mediterranean Cruises", "Caribbean Cruises", "Norwegian Fjords Cruises"]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-primary">
        {/* Modern Geometric Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,_transparent_25%,_rgba(255,255,255,0.1)_50%,_transparent_75%)] bg-[length:100px_100px]" />
        </div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-6 block animate-fade-in">Redefining Cruise Discovery</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 leading-[1.1] tracking-tight">
            The Intelligent Way <br className="hidden md:block" />
            <span className="text-accent italic font-normal">to Find Your Voyage</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Skip the generic search engines. Chat with Mara, our specialized AI, 
            to uncover hand-picked cruises tailored for your departure from Ireland.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/find" 
              className="bg-accent text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-accent/20"
            >
              Consult with Mara
            </Link>
            <Link 
              href="/blog" 
              className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Explore the Journal
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Value Prop */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">The FindMyCruise Advantage</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 leading-tight">
                Personalized Expert Advice, Powered by AI.
              </h2>
              <p className="text-text-light text-lg mb-10 leading-relaxed">
                We've combined decades of travel expertise with cutting-edge AI to solve the biggest frustration in cruising: finding the right ship for the right price, with the right flight connections.
              </p>
              <div className="space-y-8">
                {[
                  { title: "Smart Matching", desc: "Mara analyzes thousands of itineraries to find the three that best match your style." },
                  { title: "Irish Centric", desc: "Every recommendation prioritizes ease of travel from Dublin, Cork, Shannon, and Belfast." },
                  { title: "Transparent & Free", desc: "We are an independent affiliate site. Our advice is free, and we never add hidden fees." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-surface rounded-2xl flex-shrink-0 flex items-center justify-center text-accent text-xl font-bold">0{i+1}</div>
                    <div>
                      <h4 className="font-bold text-primary text-xl mb-1">{item.title}</h4>
                      <p className="text-text-light text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square bg-surface rounded-[3rem] overflow-hidden shadow-inner border border-gray-100 flex items-center justify-center p-16">
               <div className="text-center">
                  <div className="w-24 h-24 bg-accent/20 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl">🚢</div>
                  <p className="text-2xl font-heading font-bold text-primary leading-snug">
                    Expert Cruise Recommendations, <br/> Hand-Picked for You.
                  </p>
                  <p className="mt-8 text-accent font-bold tracking-widest uppercase text-xs">Direct from Dublin, Cork & Shannon</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations (More Minimalist) */}
      <section className="py-32 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-heading font-bold text-primary mb-4">Curated Destinations</h2>
              <p className="text-text-light">Hand-picked regions that Irish travellers are booking right now.</p>
            </div>
            <Link href="/destinations/mediterranean" className="group flex items-center text-primary font-bold uppercase tracking-widest text-xs">
              View All Destinations
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Mediterranean', img: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800' },
              { name: 'Caribbean', img: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&q=80&w=800' },
              { name: 'Norwegian Fjords', img: 'https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?auto=format&fit=crop&q=80&w=800' },
              { name: 'River Cruises', img: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=1200' }
            ].map((dest, i) => (
              <Link 
                key={i} 
                href={`/destinations/${dest.name.toLowerCase().replace(' ', '-')}`}
                className="group relative h-96 rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 bg-white"
              >
                <img src={dest.img} alt={dest.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">{dest.name}</h3>
                  <span className="text-accent text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform inline-block">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-40 bg-white">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div className="bg-primary p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">Ready to Find Your <br/>Perfect Voyage?</h2>
            <p className="text-white/60 text-lg mb-12 max-w-md mx-auto font-light">
              Start your conversation with Mara today and get three expert recommendations in minutes.
            </p>
            <Link 
              href="/find" 
              className="inline-block bg-accent text-primary px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-accent/20"
            >
              Begin Your Search
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
