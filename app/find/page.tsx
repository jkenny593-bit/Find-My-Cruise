import ChatInterface from '@/components/chat/ChatInterface';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Find a Cruise | Chat with Mara',
    description: 'Tell Mara your travel plans and get 3 personalized cruise recommendations from Ireland.',
    alternates: {
      canonical: 'https://www.findmycruise.ie/find',
    },
    openGraph: {
      title: 'Find a Cruise | Chat with Mara',
      description: 'Tell Mara your travel plans and get 3 personalized cruise recommendations from Ireland.',
      url: '/find',
    },
  };
};

export default function FindPage() {
  return (
    <div className="bg-white">
      {/* Header section for mobile/context */}
      <div className="bg-primary px-4 py-3 md:hidden">
        <h1 className="text-accent font-heading font-bold text-lg text-center">Chat with Mara</h1>
      </div>
      
      <Suspense fallback={
        <div className="h-[calc(100vh-80px)] flex items-center justify-center bg-background">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
        </div>
      }>
        <ChatInterface />
      </Suspense>
    </div>
  );
}
