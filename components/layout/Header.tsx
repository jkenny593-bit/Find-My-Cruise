'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-primary sticky top-0 z-50 border-b border-gray-100 backdrop-blur-md bg-white/90">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-heading font-bold tracking-tight">
          FindMyCruise<span className="text-accent">.ie</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-10 items-center font-medium text-sm uppercase tracking-wider">
          <Link href="/find" className="hover:text-accent transition-colors">Find a Cruise</Link>
          
          <div className="relative group">
            <button className="hover:text-accent transition-colors py-8 flex items-center gap-1 uppercase tracking-wider">
              Destinations
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 group-hover:rotate-180 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className="absolute top-full left-0 bg-white text-primary min-w-[220px] shadow-2xl rounded-b-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
              <Link href="/destinations/mediterranean" className="block px-8 py-4 hover:bg-surface transition-colors border-b border-gray-50">Mediterranean</Link>
              <Link href="/destinations/caribbean" className="block px-8 py-4 hover:bg-surface transition-colors border-b border-gray-50">Caribbean</Link>
              <Link href="/destinations/fjords" className="block px-8 py-4 hover:bg-surface transition-colors border-b border-gray-50">Norwegian Fjords</Link>
              <Link href="/destinations/family" className="block px-8 py-4 hover:bg-surface transition-colors border-b border-gray-50">Family Cruises</Link>
              <Link href="/destinations/river" className="block px-8 py-4 hover:bg-surface transition-colors">River Cruises</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-accent transition-colors py-8 flex items-center gap-1 uppercase tracking-wider">
              Cruise Lines
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 group-hover:rotate-180 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className="absolute top-full left-0 bg-white text-primary min-w-[280px] shadow-2xl rounded-b-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
              <div className="grid grid-cols-1 divide-y divide-gray-50">
                {[
                  { name: 'Royal Caribbean', path: '/cruise-lines/royal-caribbean', fleet: '/cruise-lines/royal-caribbean/fleet' },
                  { name: 'P&O Cruises', path: '/cruise-lines/pando', fleet: '/cruise-lines/pando/fleet' },
                  { name: 'MSC Cruises', path: '/cruise-lines/msc', fleet: '/cruise-lines/msc/fleet' },
                  { name: 'Celebrity Cruises', path: '/cruise-lines/celebrity', fleet: '/cruise-lines/celebrity/fleet' },
                  { name: 'Princess Cruises', path: '/cruise-lines/princess', fleet: '/cruise-lines/princess/fleet' },
                ].map((line) => (
                  <div key={line.name} className="flex items-center justify-between group/item px-6 py-4 hover:bg-surface transition-colors">
                    <Link href={line.path} className="font-bold text-primary hover:text-accent transition-colors">{line.name}</Link>
                    <Link href={line.fleet} className="text-[10px] font-bold uppercase tracking-wider bg-primary/5 px-2 py-1 rounded hover:bg-accent hover:text-white transition-all">Fleet Guide</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link href="/blog" className="hover:text-accent transition-colors">Journal</Link>
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-6">
          <Link 
            href="/find" 
            className="hidden sm:block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all text-sm shadow-lg shadow-primary/10"
          >
            Ask Mara
          </Link>
          
          <button 
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col space-y-6 px-8 py-10 font-medium text-lg border-t border-gray-50">
          <Link href="/find" onClick={() => setIsMenuOpen(false)} className="hover:text-accent flex justify-between items-center">
            Find a Cruise
            <span className="text-xs bg-surface px-2 py-1 rounded-md text-text-light">Start Here</span>
          </Link>
          <div className="pt-4 border-t border-gray-50">
            <p className="text-text-light text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Destinations</p>
            <div className="grid grid-cols-1 gap-4 pl-0">
              <Link href="/destinations/mediterranean" onClick={() => setIsMenuOpen(false)} className="hover:text-accent text-primary">Mediterranean</Link>
              <Link href="/destinations/caribbean" onClick={() => setIsMenuOpen(false)} className="hover:text-accent text-primary">Caribbean</Link>
              <Link href="/destinations/fjords" onClick={() => setIsMenuOpen(false)} className="hover:text-accent text-primary">Norwegian Fjords</Link>
              <Link href="/destinations/family" onClick={() => setIsMenuOpen(false)} className="hover:text-accent text-primary">Family Cruises</Link>
              <Link href="/destinations/river" onClick={() => setIsMenuOpen(false)} className="hover:text-accent text-primary">River Cruises</Link>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-50">
            <p className="text-text-light text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Cruise Lines</p>
            <div className="grid grid-cols-1 gap-6 pl-0">
              {[
                { name: 'Royal Caribbean', path: '/cruise-lines/royal-caribbean', fleet: '/cruise-lines/royal-caribbean/fleet' },
                { name: 'P&O Cruises', path: '/cruise-lines/pando', fleet: '/cruise-lines/pando/fleet' },
                { name: 'MSC Cruises', path: '/cruise-lines/msc', fleet: '/cruise-lines/msc/fleet' },
                { name: 'Celebrity Cruises', path: '/cruise-lines/celebrity', fleet: '/cruise-lines/celebrity/fleet' },
                { name: 'Princess Cruises', path: '/cruise-lines/princess', fleet: '/cruise-lines/princess/fleet' },
              ].map((line) => (
                <div key={line.name} className="flex items-center justify-between">
                  <Link href={line.path} onClick={() => setIsMenuOpen(false)} className="hover:text-accent text-primary font-bold">{line.name}</Link>
                  <Link href={line.fleet} onClick={() => setIsMenuOpen(false)} className="text-[10px] font-bold uppercase tracking-widest bg-primary text-white px-3 py-1 rounded-full">Fleet Guide</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-50 pt-8 flex flex-col space-y-6">
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="hover:text-accent">The Journal</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-accent">About Us</Link>
            <Link href="/find" onClick={() => setIsMenuOpen(false)} className="bg-primary text-white p-5 rounded-2xl text-center font-bold shadow-xl shadow-primary/10">Start Your Search</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
