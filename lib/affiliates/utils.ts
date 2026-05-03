import { TRAVELPAYOUTS_CONFIG } from './config';

/**
 * Generates a Travelpayouts tracked deep link.
 * 
 * @param url The destination URL (e.g., cruisedirect.com)
 * @returns The tracked affiliate URL
 */
export function generateDeepLink(url: string): string {
  if (!TRAVELPAYOUTS_CONFIG.marker) {
    console.warn('Travelpayouts Marker ID is missing. Links will not be tracked.');
    return url;
  }

  const encodedUrl = encodeURIComponent(url);
  
  // Standard Travelpayouts deep link format
  // Note: Some partners might require a specific 'p' (partner) ID
  // but the general redirector works for many.
  return `https://tp.media/r?marker=${TRAVELPAYOUTS_CONFIG.marker}&u=${encodedUrl}&tr_id=findmycruise`;
}
