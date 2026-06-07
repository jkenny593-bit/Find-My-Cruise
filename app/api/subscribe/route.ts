/**
 * Newsletter & Lead Capture API
 * Stores emails for users who want to receive their cruise recommendations.
 */

// Ephemeral store (in production, use Supabase, Mailchimp, or a DB)
let subscribers: any[] = [];

export async function GET() {
  return Response.json({ subscribers });
}

export async function POST(req: Request) {
  try {
    const { email, conversationId, recommendations } = await req.json();

    if (!email || !email.includes('@')) {
      return Response.json({ success: false, error: 'Invalid email address' }, { status: 400 });
    }

    const newSubscriber = {
      email,
      conversationId,
      recommendations,
      timestamp: new Date().toISOString()
    };

    subscribers.unshift(newSubscriber);
    
    // Log for the terminal
    console.log(`[LEAD] New subscriber: ${email} | Conv: ${conversationId}`);

    // Here you would typically trigger an automated email via SendGrid/Resend
    
    return Response.json({ 
      success: true, 
      message: 'Great! I have saved your details and will send those recommendations over shortly.' 
    });
  } catch (error: any) {
    console.error('Email API Error:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
