import { NextResponse } from 'next/server';
import { updateFlightPrices } from '@/scripts/fetch-flight-prices';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  try {
    await updateFlightPrices();
    return NextResponse.json({ success: true, message: 'Flight prices updated successfully' });
  } catch (error) {
    console.error('Cron job failed:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
