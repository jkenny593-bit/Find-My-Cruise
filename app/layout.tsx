import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
  metadataBase: new URL('https://findmycruise.ie'),
  title: {
    default: "FindMyCruise.ie | AI Cruise Finder for Irish Travellers",
    template: "%s | FindMyCruise.ie"
  },
  description: "Find your perfect cruise holiday with Mara, our Irish-focused AI cruise specialist. Personalized recommendations from Dublin, Cork, Shannon, and Belfast.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "FindMyCruise.ie | AI Cruise Finder for Irish Travellers",
    description: "Personalized cruise recommendations from Dublin, Cork, Shannon, and Belfast with our AI assistant Mara.",
    url: 'https://findmycruise.ie',
    siteName: 'FindMyCruise.ie',
    locale: 'en_IE',
    type: 'website',
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="bg-background text-text min-h-screen flex flex-col">
        <Header />
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
      </body>
    </html>
  );
}
