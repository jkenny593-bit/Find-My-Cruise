import { Metadata } from 'next';
import { MOCK_CRUISES } from '@/lib/widgety';
import CruiseGrid from '@/components/cruise/CruiseGrid';

export const generateMetadata = (): Metadata => {
  return {
    title: 'MSC Cruises Ireland | European Flair & Great Value | FindMyCruise.ie',
    description: 'Find the best MSC Cruises deals from Ireland. Explore World Europa, Euribia, and Seaview with easy flights from Dublin and Cork.',
  };
};

export default function MscPage() {
  // Filtering mock cruises for MSC
  const mscCruises = MOCK_CRUISES.filter(c => 
    c.line.toLowerCase().includes('msc')
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Brand Hero */}
      <div className="bg-[#1A1A1A] py-20 text-center relative">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="bg-white inline-block px-6 py-2 rounded-full mb-6 shadow-md text-[#1A1A1A] font-bold text-sm tracking-widest uppercase">
            Modern Mediterranean Style
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            MSC Cruises Ireland
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience the world's fastest-growing cruise line. For Irish travellers, 
            MSC offers a stylish, modern, and incredible-value way to explore 
            the Mediterranean, Northern Europe, and beyond.
          </p>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Why MSC Section */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Exceptional Value", 
              desc: "Frequent 'All-Inclusive' deals including drinks and Wi-Fi that Irish guests love.",
              icon: "💶"
            },
            { 
              title: "Futuristic Ships", 
              desc: "MSC World Europa and Euribia are among the most sustainable and high-tech ships at sea.",
              icon: "✨"
            },
            { 
              title: "Global Reach", 
              desc: "From the Caribbean to the Emirates, MSC connects Ireland to every corner of the globe.",
              icon: "🌍"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-text/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        <CruiseGrid cruises={mscCruises} title="Featured MSC Cruises Deals" />

        {/* The MSC Yacht Club */}
        <div className="mt-20 bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-12 space-y-6">
            <h2 className="text-3xl font-heading font-bold text-primary">The MSC Yacht Club</h2>
            <p className="text-text/80 leading-relaxed">
              For those seeking a more exclusive experience, the MSC Yacht Club is a 
              "ship within a ship" concept. Irish travellers looking for a touch of 
              luxury will appreciate the 24-hour butler service, private lounge, 
              and exclusive pool area.
            </p>
            <p className="text-text/80 leading-relaxed">
              MSC offers fantastic Fly-Cruise packages from **Dublin** and **Cork**, 
              making it one of the most accessible lines for the Irish market. Whether 
              you're a couple looking for a stylish getaway or a family seeking 
              unending entertainment, MSC has a ship that fits.
            </p>
            <div className="pt-4">
              <a 
                href="/find" 
                className="inline-block bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md"
              >
                Let Mara find your MSC Cruise
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 bg-[#1A1A1A]/5 flex items-center justify-center p-12">
            <div className="space-y-4 text-center">
              <div className="text-5xl">⚓</div>
              <p className="text-[#1A1A1A] font-bold text-xl font-heading italic leading-tight">
                "The Future of Cruising"
              </p>
              <div className="flex justify-center gap-2">
                <span className="bg-[#1A1A1A] w-2 h-2 rounded-full"></span>
                <span className="bg-[#1A1A1A] w-2 h-2 rounded-full opacity-50"></span>
                <span className="bg-[#1A1A1A] w-2 h-2 rounded-full opacity-25"></span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
