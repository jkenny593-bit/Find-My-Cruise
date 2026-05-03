import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
        {/* Abstract Nautical Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-accent)_1px,_transparent_1px)] bg-[length:40px_40px]" />
        </div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Find Your Perfect Cruise <br className="hidden md:block" />
            <span className="text-accent italic">Tailored for Ireland</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop scrolling through endless lists. Chat with Mara, our AI specialist, 
            to discover hand-picked cruises departing from Dublin, Cork, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/find" 
              className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              Start Chatting with Mara
            </Link>
            <Link 
              href="/destinations" 
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-16">
            How FindMyCruise.ie Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Tell Mara Your Plans",
                desc: "Have a quick chat with Mara. She'll ask about your budget, preferred ports, and travel style."
              },
              {
                step: "02",
                title: "Compare Top Picks",
                desc: "Mara scans the Widgety API to find 3 perfect options—budget, mid-range, and premium."
              },
              {
                step: "03",
                title: "Book with Partners",
                desc: "Once you find 'the one', we'll send you directly to our trusted partners like Royal Caribbean or Expedia to book."
              }
            ].map((item, i) => (
              <div key={i} className="relative p-8 rounded-xl border border-gray-100 bg-background shadow-sm hover:shadow-lg transition-shadow">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent text-primary font-bold w-12 h-12 rounded-full flex items-center justify-center border-4 border-white">
                  {item.step}
                </span>
                <h3 className="text-xl font-heading font-bold text-primary mt-4 mb-3">{item.title}</h3>
                <p className="text-text/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">Popular from Ireland</h2>
              <p className="text-text/70">Hand-picked destinations for Irish cruise lovers.</p>
            </div>
            <Link href="/destinations" className="text-primary font-bold hover:text-accent transition-colors underline decoration-accent underline-offset-8">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Mediterranean', img: '/dest-med.jpg', color: 'bg-blue-600' },
              { name: 'Caribbean', img: '/dest-caribbean.jpg', color: 'bg-teal-500' },
              { name: 'Norwegian Fjords', img: '/dest-fjords.jpg', color: 'bg-slate-700' },
              { name: 'River Cruises', img: '/dest-river.jpg', color: 'bg-emerald-600' }
            ].map((dest, i) => (
              <Link 
                key={i} 
                href={`/destinations/${dest.name.toLowerCase().replace(' ', '-')}`}
                className="group relative h-80 rounded-xl overflow-hidden shadow-lg bg-primary"
              >
                {/* Placeholder Image Overlay */}
                <div className={`absolute inset-0 ${dest.color} opacity-40 group-hover:scale-110 transition-transform duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-heading font-bold text-white mb-1">{dest.name}</h3>
                  <span className="text-accent text-sm font-medium">Explore Deals →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Built for the Irish Traveller</h2>
            <div className="space-y-6">
              {[
                { title: "Direct Flight Access", desc: "Mara prioritizes cruises with easy connections from Dublin, Cork, Shannon, and Belfast." },
                { title: "Independent Advice", desc: "We are an affiliate site, meaning we recommend the best cruises across all lines, not just one." },
                { title: "No Hidden Fees", desc: "Using Mara is completely free. We earn a small commission from the cruise lines when you book." }
              ].map((signal, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-accent h-6 w-6 rounded-full flex-shrink-0 mt-1 flex items-center justify-center text-primary font-bold text-xs">✓</div>
                  <div>
                    <h4 className="font-bold text-lg text-accent">{signal.title}</h4>
                    <p className="text-gray-300">{signal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video rounded-xl overflow-hidden bg-accent/20 flex items-center justify-center p-12 text-center border-2 border-accent/30">
            <div>
              <div className="w-20 h-20 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">☘️</div>
              <h3 className="text-2xl font-heading font-bold mb-2 italic">"Mara saved me hours of research. She knew exactly which ships sailed from Southampton with easy flights from Cork!"</h3>
              <p className="text-accent font-bold">— Siobhán, County Cork</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <div className="bg-background p-12 rounded-3xl border border-gray-100 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Ready to find your voyage?</h2>
            <p className="text-lg text-text/70 mb-10 leading-relaxed">
              Don't spend another evening staring at spreadsheets. Tell Mara what you're looking for and let her do the hard work.
            </p>
            <Link 
              href="/find" 
              className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-accent/20"
            >
              Start Your Free Search
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
