'use client';

import { useState, useRef, useEffect } from 'react';
import { Message } from '@/lib/chat-types';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { getRecommendedCruises, CruiseOption } from '@/lib/widgety';

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Dia dhuit! I'm Mara, your Irish cruise specialist. I'd love to help you find your dream voyage. To get us started, could you tell me a bit about what kind of holiday you're looking for, and how many people will be in your party?",
      timestamp: new Date(),
    },
  ]);
  const [preferredAirport, setPreferredAirport] = useState<string>('DUB');
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Helper to extract airport from messages
  const extractAirport = (msgs: Message[]) => {
    // Look for common Irish airport names or codes
    const text = msgs.map(m => m.content).join(' ').toLowerCase();
    if (text.includes('cork') || text.includes('ork')) return 'ORK';
    if (text.includes('shannon') || text.includes('snn')) return 'SNN';
    return 'DUB'; // Default to Dublin
  };

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };
    
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      // Logic to trigger results if user asks or if we reach 8 messages (16 messages total including Mara's)
      const shouldShowResults = content.toLowerCase().includes('show me') || updatedMessages.length >= 16;
      
      if (shouldShowResults && !isFinished) {
        // 1. Determine airport
        const airport = extractAirport(updatedMessages);
        setPreferredAirport(airport);

        // 2. Get recommendations
        const results = await getRecommendedCruises({});

        // 3. Get flight prices for each recommendation
        // We'll pass this info to the AI to generate the final text
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            messages: updatedMessages,
            recommendations: results,
            preferredAirport: airport
          }),
        });

        const data = await response.json();
        if (data.error) throw new Error(data.error);

        const maraMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.text,
          recommendations: results,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, maraMessage]);
        setIsFinished(true);
      } else {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: updatedMessages }),
        });

        const data = await response.json();
        if (data.error) throw new Error(data.error);

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
        content: "I'm sorry, I'm having a bit of trouble connecting. Could you try that again? (Or just type 'Show me cruises' if you're ready to see results!)",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-background">
      {/* Messages Area */}
      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto p-4 md:p-8"
      >
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

      {/* Input Area */}
      <ChatInput onSend={handleSendMessage} disabled={isLoading} />
    </div>
  );
};

export default ChatInterface;
