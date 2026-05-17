/**
 * Conversation Tracker Utility
 * Tracks Mara AI conversation flow and sends events to the server.
 */

export type ConversationEvent = 
  | 'chat_started' 
  | 'opening_completed' 
  | 'recommendations_shown' 
  | 'link_clicked' 
  | 'chat_abandoned';

interface EventData {
  conversationId: string;
  event: ConversationEvent;
  timestamp: string;
  metadata?: Record<string, any>;
}

/**
 * Sends a tracking event to the logging API
 */
export async function trackConversationEvent(
  conversationId: string, 
  event: ConversationEvent, 
  metadata?: Record<string, any>
) {
  const data: EventData = {
    conversationId,
    event,
    timestamp: new Date().toISOString(),
    metadata,
  };

  try {
    // We use a fire-and-forget approach or a background request
    // to not block the main UI thread.
    fetch('/api/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      // keepalive ensures the request finishes even if the page is closed (important for abandonment)
      keepalive: true,
    }).catch(err => console.warn('Analytics failed to send:', err));
    
    // Also log to console in dev mode
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] ${event}:`, data);
    }
  } catch (e) {
    console.error('Tracking Error:', e);
  }
}

/**
 * Initializes a new conversation tracking session
 */
export function startConversationTracking() {
  const conversationId = `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  trackConversationEvent(conversationId, 'chat_started');
  return conversationId;
}
