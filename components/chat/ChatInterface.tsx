'use client';

import { useState, useRef, useEffect } from 'react';
import { Message } from '@/lib/chat-types';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { getRecommendedCruises, CruiseOption } from '@/lib/widgety';
import { trackEvent } from '@/components/layout/GoogleAnalytics';
import { trackConversationEvent, startConversationTracking } from '@/lib/analytics/conversationTracker';

import { useSearchParams } from 'next/navigation';

const ChatInterface = () => {
  const searchParams = useSearchParams();
  const initialQueryProcessed = useRef(false);
  const [conversationId, setConversationId] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Dia dhuit! I'm Mara, your Irish cruise specialist. ⚓\n\nI'd love to help you find your perfect voyage. Where are you thinking of heading, and how many are planning to sail?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [preferredAirport, setPreferredAirport] = useState<string>('DUB');
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize Tracking
  useEffect(() => {
    const id = startConversationTracking();
    setConversationId(id);

    // Abandonment Tracker: If they close the tab before finishing
    const handleBeforeUnload = () => {
      // We only track abandonment if they haven't reached the recommendations phase
      // Note: This is an approximation since fetch might be cancelled on unload
      // but 'keepalive: true' in the tracker helps.
      if (!isFinished) {
        trackConversationEvent(id, 'chat_abandoned', { last_message_count: messages.length });
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isFinished, messages.length]);

  // Handle initial query from Hero Search Widget
  useEffect(() => {
    const query = searchParams.get('q');
    if (query && !initialQueryProcessed.current && messages.length === 1) {
      initialQueryProcessed.current = true;
      handleSendMessage(query);
    }
  }, [searchParams]);

  const quickReplies = [
    'Mediterranean',
    'Caribbean',
    'Norwegian Fjords',
    'Family Cruise',
    'Surprise Me'
  ];

  const handleQuickReply = (reply: string) => {
    setInput(prev => {
      const trimmed = prev.trim();
      return trimmed ? `${trimmed} ${reply}` : reply;
    });
  };

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Re-engagement logic for inactivity
  useEffect(() => {
    if (isFinished && !isLoading) {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      inactivityTimerRef.current = setTimeout(() => {
        const reEngagementMessage: Message = {
          id: (Date.now() + 2).toString(),
          role: 'assistant',
          content: "Still there? I can refine these options for you or email them to you so you have them saved.",
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, reEngagementMessage]);
        inactivityTimerRef.current = null;
      }, 90000); // 90 seconds
    }
    return () => {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    };
  }, [isFinished, messages.length, isLoading]);

  // Helper to extract airport from messages
  const extractAirport = (msgs: Message[]) => {
    const text = msgs.map(m => m.content).join(' ').toLowerCase();
    if (text.includes('cork') || text.includes('ork')) return 'ORK';
    if (text.includes('shannon') || text.includes('snn')) return 'SNN';
    if (text.includes('belfast') || text.includes('bfs')) return 'BFS';
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
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
      inactivityTimerRef.current = null;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };
    
    if (messages.length === 1) {
      trackEvent('chat_start', { first_message: content });
      trackConversationEvent(conversationId, 'opening_completed', { first_input: content });
    }

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      // 1. ATTEMPT FETCH
      let response;
      try {
        response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: updatedMessages }),
        });
      } catch (networkErr: any) {
        throw { 
          debug: `NETWORK FAILURE: Could not connect to /api/chat. ${networkErr.message || 'The server might be down.'}` 
        };
      }

      // 2. CHECK STATUS
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw { 
          debug: `HTTP ERROR ${response.status}: ${errorData.debug || errorData.error || 'The server encountered an error.'}` 
        };
      }

      // 3. PARSE DATA
      const data = await response.json();
      if (!data || !data.text) {
        throw { debug: "EMPTY RESPONSE: The AI returned no text." };
      }

      // 4. PROCESS MARA RESPONSE
      const text = data.text.toLowerCase();
      const shouldTriggerResults = text.includes('found three great cruise options') || 
                                  text.includes('searching') || 
                                  text.includes('found three') ||
                                  text.includes('recommendations') ||
                                  content.toLowerCase().includes('show me');

      if (shouldTriggerResults && !isFinished) {
        trackEvent('chat_complete');
        trackConversationEvent(conversationId, 'recommendations_shown');
        
        const airport = extractAirport(updatedMessages);
        const region = extractRegion(updatedMessages);
        setPreferredAirport(airport);

        const results = await getRecommendedCruises({ region });

        const finalResponse = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            messages: updatedMessages,
            recommendations: results,
            preferredAirport: airport
          }),
        });

        if (!finalResponse.ok) {
           const finalErrorData = await finalResponse.json().catch(() => ({}));
           throw { debug: `RECOMMENDATION ERROR: ${finalErrorData.debug || 'Failed to generate final costs.'}` };
        }

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
    } catch (error: any) {
      console.error('ULTIMATE DEBUG LOG:', error);
      
      const debugMsg = error.debug || error.message || (typeof error === 'object' ? JSON.stringify(error) : String(error));
      let displayMsg = "Mara is having a quick tea break. Try again in a second!";

      if (debugMsg.includes('API Key Missing') || debugMsg.includes('403')) {
        displayMsg = "It looks like your Gemini API Key is missing or invalid in .env.local.";
      }

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: displayMsg + `\n\n[System Debug: ${debugMsg}]`,
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
            <ChatMessage 
              key={msg.id} 
              message={msg} 
              departureAirport={preferredAirport === 'DUB' ? 'Dublin' : preferredAirport === 'ORK' ? 'Cork' : preferredAirport === 'SNN' ? 'Shannon' : 'Belfast'}
              conversationId={conversationId}
            />
          ))}
          
          {messages.length === 1 && !isLoading && (
            <div className="flex flex-wrap gap-2 mb-6 ml-12">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="px-4 py-2 bg-white border border-accent/20 rounded-full text-sm text-primary hover:bg-accent hover:text-white transition-all shadow-sm"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

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
      <ChatInput 
        onSend={handleSendMessage} 
        disabled={isLoading} 
        input={input}
        setInput={setInput}
      />
    </div>
  );
};

export default ChatInterface;
