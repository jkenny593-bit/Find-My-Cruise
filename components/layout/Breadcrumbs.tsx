'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Breadcrumb {
  label: string;
  href: string;
}

const Breadcrumbs = () => {
  const pathname = usePathname();
  
  // Don't show on homepage
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter((segment) => segment !== '');
  
  const breadcrumbs: Breadcrumb[] = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
    
    // Format label: capitalize and replace hyphens with spaces
    const label = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
      
    return { label, href };
  });

  // Schema.org BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.findmycruise.ie"
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": crumb.label,
        "item": `https://www.findmycruise.ie${crumb.href}`
      }))
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-6 py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-text/40">
        <li>
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center space-x-2">
            <span>/</span>
            {index === breadcrumbs.length - 1 ? (
              <span className="text-primary">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-accent transition-colors">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
