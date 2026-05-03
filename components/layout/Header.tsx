'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-heading font-bold text-accent">
          FindMyCruise.ie
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center font-medium">
          <Link href="/find" className="hover:text-accent transition-colors">Find a Cruise</Link>
          <div className="relative group">
            <button className="hover:text-accent transition-colors py-8 flex items-center gap-1">
              Destinations
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:rotate-180 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className="absolute top-full left-0 bg-white text-primary min-w-[200px] shadow-xl rounded-b-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border-t-2 border-accent">
              <Link href="/destinations/mediterranean" className="block px-6 py-3 hover:bg-background transition-colors border-b border-gray-50">Mediterranean</Link>
              <Link href="/destinations/caribbean" className="block px-6 py-3 hover:bg-background transition-colors border-b border-gray-50">Caribbean</Link>
              <Link href="/destinations/fjords" className="block px-6 py-3 hover:bg-background transition-colors border-b border-gray-50">Norwegian Fjords</Link>
              <Link href="/destinations/family" className="block px-6 py-3 hover:bg-background transition-colors border-b border-gray-50">Family Cruises</Link>
              <Link href="/destinations/river" className="block px-6 py-3 hover:bg-background transition-colors">River Cruises</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:text-accent transition-colors py-8 flex items-center gap-1">
              Cruise Lines
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:rotate-180 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className="absolute top-full left-0 bg-white text-primary min-w-[200px] shadow-xl rounded-b-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border-t-2 border-accent">
              <Link href="/cruise-lines/royal-caribbean" className="block px-6 py-3 hover:bg-background transition-colors border-b border-gray-50">Royal Caribbean</Link>
              <Link href="/cruise-lines/pando" className="block px-6 py-3 hover:bg-background transition-colors border-b border-gray-50">P&O Cruises</Link>
              <Link href="/cruise-lines/msc" className="block px-6 py-3 hover:bg-background transition-colors">MSC Cruises</Link>
            </div>
          </div>
          <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link 
            href="/find" 
            className="hidden sm:block bg-accent text-primary px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all text-sm md:text-base"
          >
            Chat with Mara
          </Link>
          
          <button 
            className="lg:hidden p-2 text-white hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-primary border-t border-accent/20 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[100vh] py-8' : 'max-h-0'}`}>
        <nav className="flex flex-col space-y-4 px-4 font-medium text-lg">
          <Link href="/find" onClick={() => setIsMenuOpen(false)} className="hover:text-accent">Find a Cruise</Link>
          <div className="pt-2 pb-1 text-accent text-sm uppercase tracking-widest font-bold">Destinations</div>
          <div className="grid grid-cols-2 gap-2 text-sm pl-2">
            <Link href="/destinations/mediterranean" onClick={() => setIsMenuOpen(false)} className="hover:text-white text-gray-300">Mediterranean</Link>
            <Link href="/destinations/caribbean" onClick={() => setIsMenuOpen(false)} className="hover:text-white text-gray-300">Caribbean</Link>
            <Link href="/destinations/fjords" onClick={() => setIsMenuOpen(false)} className="hover:text-white text-gray-300">Norwegian Fjords</Link>
            <Link href="/destinations/family" onClick={() => setIsMenuOpen(false)} className="hover:text-white text-gray-300">Family Cruises</Link>
            <Link href="/destinations/river" onClick={() => setIsMenuOpen(false)} className="hover:text-white text-gray-300">River Cruises</Link>
          </div>
          <div className="pt-2 pb-1 text-accent text-sm uppercase tracking-widest font-bold">Cruise Lines</div>
          <div className="grid grid-cols-2 gap-2 text-sm pl-2">
            <Link href="/cruise-lines/royal-caribbean" onClick={() => setIsMenuOpen(false)} className="hover:text-white text-gray-300">Royal Caribbean</Link>
            <Link href="/cruise-lines/pando" onClick={() => setIsMenuOpen(false)} className="hover:text-white text-gray-300">P&O Cruises</Link>
            <Link href="/cruise-lines/msc" onClick={() => setIsMenuOpen(false)} className="hover:text-white text-gray-300">MSC Cruises</Link>
          </div>
          <div className="border-t border-accent/20 pt-4 flex flex-col space-y-4">
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="hover:text-accent">Cruise Blog</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-accent">About Us</Link>
            <Link href="/find" onClick={() => setIsMenuOpen(false)} className="bg-accent text-primary p-4 rounded-xl text-center font-bold">Start Chatting with Mara</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
