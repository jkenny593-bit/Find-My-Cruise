/**
 * Travelpayouts Configuration
 * 
 * Marker: Your unique affiliate ID
 * Token: API token for generating deep links
 */

export const TRAVELPAYOUTS_CONFIG = {
  marker: process.env.TRAVELPAYOUTS_MARKER || '',
  token: process.env.TRAVELPAYOUTS_TOKEN || '',
};
