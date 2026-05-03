import CruiseCard from './CruiseCard';
import { CruiseOption } from '@/lib/widgety';

interface CruiseGridProps {
  cruises: CruiseOption[];
  title?: string;
}

const CruiseGrid = ({ cruises, title }: CruiseGridProps) => {
  return (
    <section className="py-12">
      {title && (
        <h2 className="text-3xl font-heading font-bold text-primary mb-8">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cruises.map((cruise) => (
          <CruiseCard key={cruise.id} cruise={cruise} />
        ))}
      </div>
    </section>
  );
};

export default CruiseGrid;
