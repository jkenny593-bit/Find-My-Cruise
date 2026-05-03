import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-heading font-bold text-accent">
          FindMyCruise.ie
        </Link>
        
        <nav className="hidden md:flex space-x-8 items-center font-medium">
          <Link href="/find" className="hover:text-accent transition-colors">Find a Cruise</Link>
          <Link href="/destinations" className="hover:text-accent transition-colors">Destinations</Link>
          <Link href="/cruise-lines" className="hover:text-accent transition-colors">Cruise Lines</Link>
          <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
        </nav>

        <Link 
          href="/find" 
          className="bg-accent text-primary px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all text-sm md:text-base"
        >
          Chat with Mara
        </Link>
      </div>
    </header>
  );
};

export default Header;
