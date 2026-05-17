'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HeroSearchWidget = () => {
  const router = useRouter();
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [style, setStyle] = useState('Any Style');
  
  const [isPassengersOpen, setIsPassengersOpen] = useState(false);
  const [isMonthsOpen, setIsMonthsOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  
  const passengersRef = useRef<HTMLDivElement>(null);
  const monthsRef = useRef<HTMLDivElement>(null);
  const destinationsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (passengersRef.current && !passengersRef.current.contains(event.target as Node)) {
        setIsPassengersOpen(false);
      }
      if (monthsRef.current && !monthsRef.current.contains(event.target as Node)) {
        setIsMonthsOpen(false);
      }
      if (destinationsRef.current && !destinationsRef.current.contains(event.target as Node)) {
        setIsDestinationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const destinationsText = selectedDestinations.length > 0 ? selectedDestinations.join(', ') : 'Anywhere';
    const monthsText = selectedMonths.length > 0 ? selectedMonths.join(', ') : 'Anytime';
    const query = `I'm looking for a ${style} cruise to ${destinationsText} in ${monthsText} for ${adults} adults and ${children} children.`;
    router.push(`/find?q=${encodeURIComponent(query)}`);
  };

  const toggleDestination = (dest: string) => {
    setSelectedDestinations(prev => 
      prev.includes(dest) ? prev.filter(d => d !== dest) : [...prev, dest]
    );
  };

  const toggleMonth = (month: string) => {
    setSelectedMonths(prev => 
      prev.includes(month) ? prev.filter(m => m !== month) : [...prev, month]
    );
  };

  const destinationsList = ['Mediterranean', 'Caribbean', 'Norwegian Fjords', 'River Cruises', 'Greek Isles', 'Canary Islands'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const seasons = [
    { name: 'Summer 2026', ms: ['June', 'July', 'August'] },
    { name: 'Winter 2026', ms: ['December', 'January', 'February'] }
  ];
  const styles = ['Any Style', 'Family', 'Luxury', 'Budget', 'Couples'];

  return (
    <div className="w-full max-w-[1000px] mx-auto">
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-1.5 md:p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-stretch md:items-center gap-1 border border-gray-100"
      >
        {/* Multi-Destination Selection */}
        <div className="flex-grow px-4 py-1.5 border-b md:border-b-0 md:border-r border-gray-100 relative group" ref={destinationsRef}>
          <label className="block text-[9px] uppercase tracking-widest text-text/40 font-bold mb-0.5 group-hover:text-accent transition-colors">
            Where?
          </label>
          <button 
            type="button"
            onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
            className="w-full text-left font-bold text-primary flex items-center justify-between text-xs md:text-sm"
          >
            <span className="truncate max-w-[120px]">
              {selectedDestinations.length === 0 ? 'Anywhere' : 
               selectedDestinations.length === 1 ? selectedDestinations[0] : 
               `${selectedDestinations.length} Regions`}
            </span>
            <span className="text-gray-400 text-[10px] ml-1">▼</span>
          </button>

          {isDestinationsOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-50">
              <div className="grid grid-cols-1 gap-1">
                {destinationsList.map(d => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => toggleDestination(d)}
                    className={`text-left text-[11px] p-2.5 rounded-lg transition-all flex items-center justify-between ${
                      selectedDestinations.includes(d) 
                      ? 'bg-primary/5 text-primary font-bold' 
                      : 'hover:bg-gray-50 text-text/70'
                    }`}
                  >
                    {d}
                    {selectedDestinations.includes(d) && <span className="text-accent">✓</span>}
                  </button>
                ))}
              </div>
              <button 
                type="button"
                onClick={() => setIsDestinationsOpen(false)}
                className="w-full mt-4 py-2 bg-accent text-primary font-bold rounded-lg text-xs"
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* Multi-Month Selection */}
        <div className="flex-grow px-4 py-1.5 border-b md:border-b-0 md:border-r border-gray-100 relative group" ref={monthsRef}>
          <label className="block text-[9px] uppercase tracking-widest text-text/40 font-bold mb-0.5 group-hover:text-accent transition-colors">
            When?
          </label>
          <button 
            type="button"
            onClick={() => setIsMonthsOpen(!isMonthsOpen)}
            className="w-full text-left font-bold text-primary flex items-center justify-between text-xs md:text-sm"
          >
            <span className="truncate max-w-[120px]">
              {selectedMonths.length === 0 ? 'Anytime' : 
               selectedMonths.length === 1 ? selectedMonths[0] : 
               `${selectedMonths.length} Months`}
            </span>
            <span className="text-gray-400 text-[10px] ml-1">▼</span>
          </button>

          {isMonthsOpen && (
            <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-50">
              <div className="grid grid-cols-2 gap-2 mb-4">
                {seasons.map(s => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => setSelectedMonths(s.ms)}
                    className="text-[10px] font-bold uppercase tracking-widest p-2 bg-surface rounded-lg hover:bg-accent/10 hover:text-accent transition-all text-center"
                  >
                    {s.name}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-1">
                {months.map(m => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => toggleMonth(m)}
                    className={`text-[10px] p-2 rounded-lg transition-all text-center ${
                      selectedMonths.includes(m) 
                      ? 'bg-primary text-white font-bold' 
                      : 'hover:bg-gray-50 text-text/70'
                    }`}
                  >
                    {m.substring(0, 3)}
                  </button>
                ))}
              </div>
              <button 
                type="button"
                onClick={() => setIsMonthsOpen(false)}
                className="w-full mt-4 py-2 bg-accent text-primary font-bold rounded-lg text-xs"
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* Passengers */}
        <div className="flex-grow px-4 py-1.5 border-b md:border-b-0 md:border-r border-gray-100 relative group" ref={passengersRef}>
          <label className="block text-[9px] uppercase tracking-widest text-text/40 font-bold mb-0.5 group-hover:text-accent transition-colors">
            Passengers
          </label>
          <button 
            type="button"
            onClick={() => setIsPassengersOpen(!isPassengersOpen)}
            className="w-full text-left font-bold text-primary flex items-center justify-between text-xs md:text-sm"
          >
            {adults + children} {adults + children === 1 ? 'Guest' : 'Guests'}
            <span className="text-gray-400 text-[10px] ml-1">▼</span>
          </button>

          {isPassengersOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-50">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-primary text-sm">Adults</p>
                    <p className="text-[10px] text-text/50">Ages 18+</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-accent hover:text-accent transition-all text-xs"
                    >–</button>
                    <span className="w-4 text-center font-bold text-sm">{adults}</span>
                    <button 
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-accent hover:text-accent transition-all text-xs"
                    >+</button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-primary text-sm">Children</p>
                    <p className="text-[10px] text-text/50">Ages 0-17</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-accent hover:text-accent transition-all text-xs"
                    >–</button>
                    <span className="w-4 text-center font-bold text-sm">{children}</span>
                    <button 
                      type="button"
                      onClick={() => setChildren(children + 1)}
                      className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-accent hover:text-accent transition-all text-xs"
                    >+</button>
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={() => setIsPassengersOpen(false)}
                  className="w-full mt-2 py-2 bg-accent text-primary font-bold rounded-lg text-xs"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Cruise Style */}
        <div className="flex-grow px-4 py-1.5 border-b md:border-b-0 md:border-r border-gray-100 group">
          <label className="block text-[9px] uppercase tracking-widest text-text/40 font-bold mb-0.5 group-hover:text-accent transition-colors">
            Style
          </label>
          <select 
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="block w-full bg-transparent border-none focus:ring-0 text-primary font-bold appearance-none cursor-pointer text-xs md:text-sm p-0"
          >
            {styles.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* Submit */}
        <button 
          type="submit"
          className="bg-accent text-primary font-bold px-8 py-3 rounded-xl md:rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:scale-105 active:scale-95 text-xs uppercase tracking-widest ml-2"
        >
          Find My Cruise
        </button>
      </form>
    </div>
  );
};

export default HeroSearchWidget;
