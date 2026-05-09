import { getOperatorDetail } from '@/lib/widgety';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Norwegian Cruise Line Ireland | NCL Cruise Holidays from Dublin & Cork',
  description: 'Experience Norwegian Cruise Line from Ireland. Discover the latest NCL ships, itineraries, and exclusive cruise deals for Irish travellers.',
};

export default async function NCLPage() {
  const nclData = await getOperatorDetail('norwegian-cruise-line');

  if (!nclData) {
    return <div className="p-10 text-center">Sorry, NCL data is currently unavailable.</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative h-96 w-full rounded-2xl overflow-hidden mb-12">
        <Image 
          src={nclData.cover_image_href || '/placeholder.jpg'} 
          alt={nclData.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end p-8">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold">{nclData.title}</h1>
        </div>
      </section>

      {/* Description */}
      <section className="prose max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: nclData.description }} />
      </section>

      {/* Reasons to Book */}
      <section className="bg-slate-50 p-8 rounded-xl shadow-sm mb-12">
        <h2 className="text-2xl font-serif font-bold text-navy mb-6">Why Choose Norwegian?</h2>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: nclData.reasons_to_book }} />
      </section>

      {/* Ships */}
      <section>
        <h2 className="text-3xl font-serif font-bold text-navy mb-8">Our Fleet</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nclData.ships.map((ship: any) => (
            <div key={ship.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image 
                  src={ship.cover_image_href || '/placeholder.jpg'} 
                  alt={ship.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">{ship.name}</h3>
                <a 
                  href={`/cruise-lines/ncl/ships/${ship.id}`} 
                  className="text-gold font-semibold hover:underline"
                >
                  View Ship Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
