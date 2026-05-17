/**
 * Conversation Logging API
 * Receives tracking events from the client and logs them.
 * In production, this will connect to a database (e.g., Supabase or MongoDB).
 */

// Ephemeral in-memory store for "Live" numbers without a DB
// This will reset every time the server restarts or code is changed.
let serverLogs: any[] = [];

export async function GET() {
  return Response.json({ logs: serverLogs });
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Add to memory store
    serverLogs.unshift({
      ...data,
      serverTime: new Date().toISOString()
    });

    // Keep only the last 100 logs in memory to prevent bloat
    if (serverLogs.length > 100) {
      serverLogs = serverLogs.slice(0, 100);
    }
    
    // SERVER-SIDE LOGGING (Visible in terminal)
    console.log(`[EVENT] ${data.event} | ID: ${data.conversationId}`);

    return Response.json({ success: true });
  } catch (error: any) {
    console.error('Logging API Error:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

