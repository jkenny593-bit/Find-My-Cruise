import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/layout/GoogleAnalytics";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.findmycruise.ie'),
  title: {
    default: "FindMyCruise.ie | AI Cruise Finder for Irish Travellers",
    template: "%s | FindMyCruise.ie"
  },
  description: "Find your perfect cruise holiday with Mara, our Irish-focused AI cruise specialist. Personalized recommendations from Dublin, Cork, Shannon, and Belfast.",
  alternates: {
    canonical: 'https://www.findmycruise.ie/',
  },
  openGraph: {
    title: {
      default: "FindMyCruise.ie | AI Cruise Finder for Irish Travellers",
      template: "%s | FindMyCruise.ie"
    },
    description: "Personalized cruise recommendations from Dublin, Cork, Shannon, and Belfast with our AI assistant Mara.",
    url: '/',
    siteName: 'FindMyCruise.ie',
    locale: 'en_IE',
    type: 'website',
    images: [
      {
        url: '/logo.svg',
        width: 512,
        height: 512,
        alt: 'FindMyCruise.ie Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "FindMyCruise.ie | AI Cruise Finder for Irish Travellers",
    description: "Find your perfect cruise holiday with our Irish AI assistant Mara.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IE" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="bg-background text-text min-h-screen flex flex-col">
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
        <Header />
        <Breadcrumbs />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Script id="travelpayouts-tracking" strategy="afterInteractive">
          {`
            (function () {
                var script = document.createElement("script");
                script.async = 1;
                script.src = 'https://emrldtp.com/NTI0OTY2.js?t=524966';
                document.head.appendChild(script);
            })();
          `}
        </Script>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "TravelAgency",
                "@id": "https://www.findmycruise.ie/#agency",
                "name": "FindMyCruise.ie",
                "description": "Ireland's premier AI-powered cruise search engine for personalized recommendations from Dublin, Cork, and Shannon.",
                "url": "https://www.findmycruise.ie",
                "logo": "https://www.findmycruise.ie/logo.svg",
                "image": "https://www.findmycruise.ie/logo.svg",
                "priceRange": "€€",
                "areaServed": {
                  "@type": "Country",
                  "name": "Ireland"
                },
                "serviceType": "Cruise Recommendation",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Dublin",
                  "addressRegion": "Co. Dublin",
                  "addressCountry": "IE"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 53.3498,
                  "longitude": -6.2603
                },
                "brand": {
                  "@type": "Brand",
                  "name": "Mara AI"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.findmycruise.ie/#website",
                "url": "https://www.findmycruise.ie",
                "name": "FindMyCruise.ie",
                "description": "AI-powered cruise finder for Irish travellers.",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.findmycruise.ie/find?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                },
                "publisher": { "@id": "https://www.findmycruise.ie/#agency" }
              }
            ])
          }}
        />
      </body>
    </html>
  );
}
