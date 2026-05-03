import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link href="/" className="text-2xl font-heading font-bold tracking-tight text-primary">
            FindMyCruise<span className="text-accent">.ie</span>
          </Link>
          <p className="text-sm text-text-light leading-relaxed font-light">
            Ireland's specialized AI cruise discovery platform. We simplify the search process for the modern traveller.
          </p>
        </div>

        {/* Destinations Column */}
        <div>
          <h3 className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-8">Destinations</h3>
          <ul className="space-y-4 text-sm text-text-light">
            <li><Link href="/destinations/mediterranean" className="hover:text-accent transition-colors">Mediterranean</Link></li>
            <li><Link href="/destinations/caribbean" className="hover:text-accent transition-colors">Caribbean</Link></li>
            <li><Link href="/destinations/fjords" className="hover:text-accent transition-colors">Norwegian Fjords</Link></li>
            <li><Link href="/destinations/family" className="hover:text-accent transition-colors">Family Cruises</Link></li>
            <li><Link href="/destinations/river" className="hover:text-accent transition-colors">River Cruises</Link></li>
          </ul>
        </div>

        {/* Cruise Lines Column */}
        <div>
          <h3 className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-8">Cruise Lines</h3>
          <ul className="space-y-4 text-sm text-text-light">
            <li><Link href="/cruise-lines/royal-caribbean" className="hover:text-accent transition-colors">Royal Caribbean</Link></li>
            <li><Link href="/cruise-lines/pando" className="hover:text-accent transition-colors">P&O Cruises</Link></li>
            <li><Link href="/cruise-lines/msc" className="hover:text-accent transition-colors">MSC Cruises</Link></li>
          </ul>
        </div>

        {/* Connect Column */}
        <div>
          <h3 className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-8">Navigation</h3>
          <ul className="space-y-4 text-sm text-text-light">
            <li><Link href="/blog" className="hover:text-accent transition-colors">The Journal</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">About Our Story</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Get in Touch</Link></li>
            <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy & Terms</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mt-24 pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] text-text-light uppercase tracking-widest leading-loose max-w-xl text-center md:text-left">
          © {currentYear} FindMyCruise.ie. Independent affiliate recommendation site. We may earn a commission when you book through our links at no additional cost to you.
        </p>
        <div className="flex items-center gap-2 text-xs font-bold text-primary">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          Live in Ireland 🇮🇪
        </div>
      </div>
    </footer>
  );
};

export default Footer;
