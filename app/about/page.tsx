import { Metadata } from 'next';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    title: 'About FindMyCruise.ie — Ireland\'s AI Cruise Specialists',
    description: 'Learn how FindMyCruise.ie helps Irish travellers find the best cruise deals from Dublin and Cork. Independent advice, powered by AI and local expertise.',
    alternates: {
      canonical: 'https://www.findmycruise.ie/about',
    },
    openGraph: {
      url: 'https://www.findmycruise.ie/about',
    },
  };
};

export default function AboutPage() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FindMyCruise.ie",
      "url": "https://www.findmycruise.ie",
      "logo": "https://www.findmycruise.ie/logo.png",
      "description": "Ireland's AI-powered cruise discovery platform, helping local travellers find and compare cruise holidays from Dublin, Cork, Shannon, and Belfast.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IE"
      },
      "areaServed": "Ireland",
      "founder": {
        "@type": "Person",
        "name": "John Kenny",
        "jobTitle": "Founder & Cruise Specialist",
        "description": "John Kenny is an Irish travel technology expert with over 15 years of experience in helping Irish holidaymakers navigate the complexities of international travel."
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "John Kenny",
      "url": "https://www.findmycruise.ie/about",
      "jobTitle": "Founder",
      "worksFor": {
        "@type": "Organization",
        "name": "FindMyCruise.ie"
      },
      "knowsAbout": ["Cruising", "Irish Travel Market", "Travel Technology", "AI"]
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Header */}
      <div className="bg-primary py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,_transparent_25%,_rgba(255,255,255,0.1)_50%,_transparent_75%)] bg-[length:100px_100px]" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Independent Cruise Advice <br/> <span className="text-accent">for the Irish Traveller</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-light">
            We're on a mission to simplify cruising from Ireland. No jargon, no sales pressure—just the best deals and smartest routes.
          </p>
        </div>
      </div>

      <main className="max-w-[1000px] mx-auto px-4 py-16">
        
        {/* Top Affiliate Disclosure */}
        <div className="bg-surface border-l-4 border-accent p-6 mb-16 rounded-r-xl shadow-sm">
          <p className="text-sm text-text/70 italic leading-relaxed">
            <strong>Affiliate Disclosure:</strong> FindMyCruise.ie is an independent, Irish-owned comparison site. To keep our service free for users, we may earn a small commission when you book a cruise through the partner links on our site. This comes at no extra cost to you and allows us to continue providing expert, unbiased advice for the Irish market.
          </p>
        </div>

        {/* Our Story & Authority */}
        <section className="prose prose-slate max-w-none mb-20">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6 text-center md:text-left">Our Mission: Your Perfect Voyage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="text-text/80 text-lg leading-relaxed">
              <p className="mb-6">
                FindMyCruise.ie was founded in 2026 to help Irish travellers cut through the noise and find the right cruise at the right price, without the sales pressure of a traditional travel agent.
              </p>
              <p className="mb-6">
                As Irish holidaymakers ourselves, we noticed a recurring problem: most cruise websites are designed for the US or UK markets. They list departure ports that are difficult to reach from Ireland and price everything in Dollars or Sterling, often ignoring the specific flight connections and Euro-based budgeting needs of the Irish consumer.
              </p>
              <p>
                We built FindMyCruise.ie to change that. We are 100% focused on the Irish market, prioritizing cruises that depart via direct flights from <strong>Dublin, Cork, Shannon, and Belfast</strong>.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16" />
              <h3 className="text-xl font-bold text-primary mb-4">Meet the Founder</h3>
              <p className="text-text/70 mb-6 italic">
                "Cruising is the best-value holiday in the world, but it can be a logistical headache for people living in Ireland. My goal is to use technology to make finding your next ship as easy as booking a flight to London."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">JK</div>
                <div>
                  <p className="font-bold text-primary leading-none">John Kenny</p>
                  <p className="text-xs text-text/50">Founder, FindMyCruise.ie</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology / How it Works */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-primary mb-10 text-center">Our Methodology: How We Find Your Cruise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Local Logistics First",
                desc: "Our systems don't just look at the ship; they look at the flights. We prioritize itineraries that sync with Aer Lingus and Ryanair routes from Irish airports.",
                icon: "🇮🇪"
              },
              {
                title: "AI-Powered Matching",
                desc: "Our AI assistant, Mara, analyzes thousands of data points—from cabin availability to drinks package values—to recommend only the three best options for your style.",
                icon: "🤖"
              },
              {
                title: "Transparent Value",
                desc: "We factor in the 'hidden' costs like gratuities and shore excursions to ensure that our recommendations represent the true total value for your Euro.",
                icon: "💶"
              }
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-6">{step.icon}</div>
                <h4 className="text-xl font-bold text-primary mb-4">{step.title}</h4>
                <p className="text-text/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-primary p-12 md:p-20 rounded-[3rem] text-white relative overflow-hidden mb-20">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Why Trust FindMyCruise.ie?</h2>
            <ul className="space-y-6">
              {[
                { title: "Irish Owned & Operated", text: "We understand the specific needs and preferences of the Irish cruiser." },
                { title: "Completely Independent", text: "We are not owned by any cruise line or travel agency group." },
                { title: "No Hidden Fees", text: "Our service is 100% free for you to use, forever." },
                { title: "Expert Support", text: "Our AI, Mara, is trained on real Irish travel data and decades of cruise expertise." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary text-xs font-bold">✓</div>
                  <div>
                    <strong className="text-accent block text-lg mb-1">{item.title}</strong>
                    <p className="text-white/70 leading-snug">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact / CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Ready to Start Your Search?</h2>
          <p className="text-text/70 mb-10 max-w-md mx-auto">
            If you have any questions or want to learn more about how we work, feel free to reach out or start a chat with Mara.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/find" 
              className="bg-accent text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-accent/20"
            >
              Chat with Mara
            </Link>
            <a 
              href="mailto:hello@findmycruise.ie" 
              className="bg-white text-primary border border-gray-200 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all"
            >
              Contact Us
            </a>
          </div>
        </section>

      </main>

      {/* Footer Affiliate Note */}
      <div className="bg-surface py-12 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <p className="text-xs text-text/40 uppercase tracking-widest font-bold mb-4">Official Disclosure</p>
          <p className="text-sm text-text/50 max-w-2xl mx-auto italic">
            FindMyCruise.ie is a participant in various affiliate marketing programs, which means we may get paid commissions on products purchased through our links to retailer sites. We only recommend cruise lines and ships that we believe offer the best value and experience for Irish holidaymakers.
          </p>
        </div>
      </div>
    </div>
  );
}
