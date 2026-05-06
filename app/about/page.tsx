import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    title: 'About Us | FindMyCruise.ie',
    description: 'Learn about FindMyCruise.ie, Ireland\'s first AI-powered cruise search engine. Meet Mara and discover how we help Irish travellers find their perfect voyage.',
  };
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Header */}
      <div className="bg-primary py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            About FindMyCruise.ie
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Combining Irish travel expertise with modern AI to help you find the 
            holiday of a lifetime.
          </p>
        </div>
      </div>

      <main className="max-w-[1000px] mx-auto px-4 py-16 space-y-24">
        {/* Our Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-primary">Our Mission</h2>
            <p className="text-text/80 leading-relaxed">
              FindMyCruise.ie was born out of a simple observation: Irish travellers love 
              cruising, but finding the right ship, departure port, and flight connection 
              can be a daunting task.
            </p>
            <p className="text-text/80 leading-relaxed">
              We've built Ireland's first AI-powered cruise specialist to do the hard 
              work for you. Our goal isn't just to find any cruise, but the <strong>right</strong> 
              cruise for your budget, family size, and preferred departure airport.
            </p>
          </div>
          <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 relative">
            <div className="text-6xl absolute -top-8 -left-8">🇮🇪</div>
            <h3 className="text-xl font-heading font-bold text-primary mb-4">100% Focus on Ireland</h3>
            <p className="text-sm text-text/70 italic leading-relaxed">
              "We prioritize cruises that are easy to get to from Dublin, Cork, Shannon, and Belfast. 
              No more guessing if a 'cheap' cruise requires a 3-flight connection."
            </p>
          </div>
        </section>

        {/* Meet Mara */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-48 h-48 bg-accent rounded-full flex-shrink-0 flex items-center justify-center text-7xl shadow-inner">
            👋
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-heading font-bold text-primary">Meet Mara, Your AI Specialist</h2>
            <p className="text-text/80 leading-relaxed">
              Mara isn't your typical search filter. She's a sophisticated AI trained on 
              thousands of cruise itineraries. She understands the nuances of different 
              cruise lines—from the family-focused fun of Royal Caribbean to the 
              refined luxury of Celebrity Cruises.
            </p>
            <p className="text-text/80 leading-relaxed">
              She's here to chat, answer questions, and provide exactly three options: 
              a budget-friendly choice, a balanced mid-range pick, and a premium 
              luxury experience.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/find" 
                className="bg-accent text-primary px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Start a Chat
              </Link>
              <Link 
                href="/destinations/mediterranean" 
                className="border border-primary/20 text-primary px-6 py-3 rounded-full font-bold text-sm hover:bg-primary/5 transition-colors"
              >
                Mediterranean Deals
              </Link>
              <Link 
                href="/destinations/caribbean" 
                className="border border-primary/20 text-primary px-6 py-3 rounded-full font-bold text-sm hover:bg-primary/5 transition-colors"
              >
                Caribbean Holidays
              </Link>
            </div>
          </div>
        </section>

        {/* How We Make Money */}
        <section className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary">Transparency First</h2>
          <p className="text-sm text-text/60 leading-relaxed">
            FindMyCruise.ie is an independent affiliate recommendation site. We do not 
            take payments or handle bookings directly. Instead, when you find a cruise 
            you love, we direct you to our trusted partners like Expedia, CruiseDirect, 
            or the cruise lines themselves. 
          </p>
          <p className="text-sm text-text/60 leading-relaxed">
            We may earn a small commission if you book through these links, which 
            helps us keep Mara's advice free for everyone in Ireland. This never 
            increases the price you pay.
          </p>
        </section>
      </main>
    </div>
  );
}
