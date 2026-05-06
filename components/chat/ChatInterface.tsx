'use client';

import { useState, useRef, useEffect } from 'react';
import { Message } from '@/lib/chat-types';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { getRecommendedCruises, CruiseOption } from '@/lib/widgety';
import { trackEvent } from '@/components/layout/GoogleAnalytics';

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Dia dhuit! I'm Mara, your Irish cruise specialist. I'd love to help you find your dream voyage. To get started, tell me a bit about your ideal holiday—like where you'd love to go, when you're thinking of travelling, and who's coming along!",
      timestamp: new Date(),
    },
  ]);
  const [preferredAirport, setPreferredAirport] = useState<string>('DUB');
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Helper to extract airport from messages
  const extractAirport = (msgs: Message[]) => {
    const text = msgs.map(m => m.content).join(' ').toLowerCase();
    if (text.includes('cork') || text.includes('ork')) return 'ORK';
    if (text.includes('shannon') || text.includes('snn')) return 'SNN';
    return 'DUB';
  };

  // Helper to extract region from messages
  const extractRegion = (msgs: Message[]) => {
    const text = msgs.map(m => m.content).join(' ').toLowerCase();
    if (text.includes('mediterranean') || text.includes('med')) return 'Mediterranean';
    if (text.includes('caribbean')) return 'Caribbean';
    if (text.includes('fjord') || text.includes('norway')) return 'Norwegian Fjords';
    if (text.includes('river')) return 'River';
    if (text.includes('greek') || text.includes('greece')) return 'Greek Isles';
    if (text.includes('canary') || text.includes('tenerife')) return 'Canary Islands';
    if (text.includes('dubai') || text.includes('emirates')) return 'Dubai';
    return undefined;
  };

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };
    
    if (messages.length === 1) {
      trackEvent('chat_start', { first_message: content });
    }

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      // THE NEW LOGIC: Mara decides when to show results
      // We'll call the API first to see her natural response
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      // If Mara says she's "searching" or "found options", we trigger the results
      const text = data.text.toLowerCase();
      const shouldTriggerResults = text.includes('searching') || 
                                  text.includes('best options') || 
                                  text.includes('found three') ||
                                  content.toLowerCase().includes('show me');

      if (shouldTriggerResults && !isFinished) {
        trackEvent('chat_complete');
        const airport = extractAirport(updatedMessages);
        const region = extractRegion(updatedMessages);
        setPreferredAirport(airport);

        const results = await getRecommendedCruises({ region });

        // Call API again with recommendations to get the final "Total Cost" response
        const finalResponse = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            messages: updatedMessages,
            recommendations: results,
            preferredAirport: airport
          }),
        });

        const finalData = await finalResponse.json();
        
        const maraMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: finalData.text,
          recommendations: results,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, maraMessage]);
        setIsFinished(true);
      } else {
        const maraMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.text,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, maraMessage]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I'm sorry, I'm having a bit of trouble connecting. Could you try that again?",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-background">
      <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 md:p-8">
        <div className="max-w-[800px] mx-auto">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          {isLoading && (
            <div className="flex justify-start mb-6">
              <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:-.3s]" />
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:-.5s]" />
              </div>
            </div>
          )}
        </div>
      </div>
      <ChatInput onSend={handleSendMessage} disabled={isLoading} />
    </div>
  );
};

export default ChatInterface;
