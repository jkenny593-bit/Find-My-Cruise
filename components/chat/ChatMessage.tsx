import { Message } from '@/lib/chat-types';
import CruiseCard from '../cruise/CruiseCard';

interface ChatMessageProps {
  message: Message;
  departureAirport?: string;
  conversationId?: string;
}

const ChatMessage = ({ message, departureAirport, conversationId }: ChatMessageProps) => {
  const isMara = message.role === 'assistant';

  return (
    <div className={`flex flex-col ${isMara ? 'items-start' : 'items-end'} mb-6`}>
      <div className={`flex max-w-[85%] ${isMara ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-sm
          ${isMara ? 'bg-accent text-primary mr-3' : 'bg-primary text-white ml-3'}`}>
          {isMara ? 'M' : 'U'}
        </div>

        {/* Bubble */}
        <div className={`p-4 rounded-2xl shadow-sm border
          ${isMara 
            ? 'bg-white border-gray-100 rounded-tl-none' 
            : 'bg-primary text-white border-primary rounded-tr-none'}`}>
          <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
          <span className={`text-[10px] mt-2 block opacity-50 ${isMara ? 'text-gray-500' : 'text-gray-200'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>

      {/* Recommendations Grid */}
      {message.recommendations && message.recommendations.length > 0 && (
        <div className="mt-6 w-full max-w-[900px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {message.recommendations.map((cruise) => (
              <CruiseCard 
                key={cruise.id} 
                cruise={cruise} 
                departureAirport={departureAirport}
                conversationId={conversationId}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
