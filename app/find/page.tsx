import ChatInterface from '@/components/chat/ChatInterface';
import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Find a Cruise | Chat with Mara',
    description: 'Tell Mara your travel plans and get 3 personalized cruise recommendations from Ireland.',
  };
};

export default function FindPage() {
  return (
    <div className="bg-white">
      {/* Header section for mobile/context */}
      <div className="bg-primary px-4 py-3 md:hidden">
        <h1 className="text-accent font-heading font-bold text-lg text-center">Chat with Mara</h1>
      </div>
      
      <ChatInterface />
    </div>
  );
}
