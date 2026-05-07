'use client';

import Image from 'next/image';
import { CruiseOption } from '@/lib/widgety';
import { generateDeepLink } from '@/lib/affiliates/utils';
import { trackEvent } from '@/components/layout/GoogleAnalytics';

interface CruiseCardProps {
  cruise: CruiseOption;
}

const CruiseCard = ({ cruise }: CruiseCardProps) => {
  const handleBookingClick = () => {
    trackEvent('affiliate_click', {
      cruise_line: cruise.line,
      ship: cruise.ship,
      category: cruise.category,
      itinerary: cruise.itinerary
    });
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col h-full">
      {/* Category Badge */}
      <div className="relative h-48">
        <Image
          src={cruise.imageUrl}
          alt={`${cruise.line} ${cruise.ship}`}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${
            cruise.category === 'Budget' ? 'bg-green-600' :
            cruise.category === 'Mid-range' ? 'bg-blue-600' :
            'bg-accent text-primary'
          }`}>
            {cruise.category} Option
          </span>
        </div>
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-primary font-bold text-sm shadow-sm">
          From €{cruise.priceFrom}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-xl font-heading font-bold text-primary leading-tight mb-1">
            {cruise.itinerary}
          </h3>
          <p className="text-sm text-text/70">
            {cruise.line} • {cruise.ship}
          </p>
        </div>

        <div className="space-y-3 mb-6 flex-grow">
          <div className="flex items-center gap-2 text-sm text-text/80">
            <span className="w-5 h-5 flex items-center justify-center bg-gray-100 rounded-full text-xs">📅</span>
            {cruise.duration}
          </div>
          <div className="flex items-center gap-2 text-sm text-text/80">
            <span className="w-5 h-5 flex items-center justify-center bg-gray-100 rounded-full text-xs">⚓</span>
            Departs: {cruise.departurePort}
          </div>
          <ul className="space-y-1">
            {cruise.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text/70">
                <span className="text-accent mt-0.5">★</span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={generateDeepLink(cruise.affiliateLink)}
          target="_blank"
          rel="nofollow noopener"
          onClick={handleBookingClick}
          className="w-full bg-primary text-white py-3 rounded-full font-bold text-center hover:bg-primary/90 transition-all text-sm mt-auto"
        >
          View Full Itinerary & Book
        </a>
      </div>
    </div>
  );
};

export default CruiseCard;
