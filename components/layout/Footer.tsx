import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-accent/20">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-heading font-bold text-accent">
            FindMyCruise.ie
          </Link>
          <p className="text-sm text-gray-300 leading-relaxed">
            The #1 AI-powered cruise finder for Irish travellers. 
            Helping you find the perfect voyage from Dublin, Cork, 
            Shannon, and Belfast.
          </p>
        </div>

        {/* Destinations Column */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-4 text-accent">Destinations</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/destinations/mediterranean" className="hover:text-accent transition-colors">Mediterranean</Link></li>
            <li><Link href="/destinations/caribbean" className="hover:text-accent transition-colors">Caribbean</Link></li>
            <li><Link href="/destinations/fjords" className="hover:text-accent transition-colors">Norwegian Fjords</Link></li>
            <li><Link href="/destinations/family" className="hover:text-accent transition-colors">Family Cruises</Link></li>
            <li><Link href="/destinations/river" className="hover:text-accent transition-colors">River Cruises</Link></li>
          </ul>
        </div>

        {/* Cruise Lines Column */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-4 text-accent">Cruise Lines</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/cruise-lines/royal-caribbean" className="hover:text-accent transition-colors">Royal Caribbean</Link></li>
            <li><Link href="/cruise-lines/pando" className="hover:text-accent transition-colors">P&O Cruises</Link></li>
            <li><Link href="/cruise-lines/msc" className="hover:text-accent transition-colors">MSC Cruises</Link></li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-4 text-accent">FindMyCruise</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-accent transition-colors">Cruise Blog</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-400">
        <p className="mb-4">
          © {currentYear} FindMyCruise.ie. All rights reserved. 
          FindMyCruise.ie is an affiliate recommendation site. We may earn a commission 
          when you book through our links at no extra cost to you.
        </p>
        <p>Built for Irish Travellers 🇮🇪</p>
      </div>
    </footer>
  );
};

export default Footer;
