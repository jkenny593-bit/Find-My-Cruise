'use client';

import Image from 'next/image';
import { CruiseOption } from '@/lib/widgety';
import { generateDeepLink } from '@/lib/affiliates/utils';
import { trackEvent } from '@/components/layout/GoogleAnalytics';
import { trackConversationEvent } from '@/lib/analytics/conversationTracker';

interface CruiseCardProps {
  cruise: CruiseOption;
  departureAirport?: string;
  conversationId?: string;
}

const CruiseCard = ({ cruise, departureAirport = 'Dublin', conversationId }: CruiseCardProps) => {
  const handleBookingClick = () => {
    trackEvent('affiliate_click', {
      cruise_line: cruise.line,
      ship: cruise.ship,
      category: cruise.category,
      itinerary: cruise.itinerary
    });

    if (conversationId) {
      trackConversationEvent(conversationId, 'link_clicked', {
        cruise_line: cruise.line,
        category: cruise.category
      });
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full group">
      {/* Category Header Tag */}
      <div className={`py-2 px-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white ${
        cruise.category === 'Budget' ? 'bg-green-600' :
        cruise.category === 'Mid-range' ? 'bg-blue-600' :
        'bg-accent text-primary'
      }`}>
        {cruise.category} Recommendation
      </div>

      {/* Visual Content */}
      <div className="relative h-44">
        <Image
          src={cruise.imageUrl}
          alt={`${cruise.line} ${cruise.ship}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-3 right-3 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-lg text-accent font-bold text-sm shadow-sm border border-white/10">
          From €{cruise.priceFrom}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {/* Cruise Line & Logo Placeholder */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{cruise.line}</span>
          <div className="w-8 h-4 bg-gray-100 rounded opacity-50 flex items-center justify-center text-[8px] text-gray-400 font-bold">LOGO</div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-heading font-bold text-primary leading-tight mb-1">
            {cruise.duration} {cruise.itinerary}
          </h3>
          <p className="text-xs font-medium text-text/60">
            🚢 {cruise.ship}
          </p>
        </div>

        {/* Departure Info */}
        <div className="bg-surface/50 rounded-lg p-3 mb-4 flex items-center gap-3">
          <span className="text-xl">✈️</span>
          <div>
            <p className="text-[10px] uppercase font-bold text-text/40 leading-none mb-1">Travel Info</p>
            <p className="text-xs font-bold text-primary">Fly from {departureAirport}</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-2 mb-6 flex-grow">
          <p className="text-[10px] uppercase font-bold text-text/40 tracking-widest">Highlights</p>
          <ul className="space-y-1.5">
            {cruise.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-[11px] text-text/80">
                <span className="text-accent mt-0.5 text-xs">✔</span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* HIGH CONVERSION CTA */}
        <a
          href={generateDeepLink(cruise.affiliateLink)}
          target="_blank"
          rel="nofollow noopener sponsored"
          onClick={handleBookingClick}
          className="w-full bg-accent text-primary py-4 rounded-xl font-bold text-center hover:bg-opacity-90 transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2 group/btn text-xs uppercase tracking-widest"
        >
          Check Availability & Book with {cruise.line}
          <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
};

export default CruiseCard;
