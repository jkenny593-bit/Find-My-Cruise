# Project: FindMyCruise.ie — AI Cruise Finder for Irish Travellers

## What This Project Is
FindMyCruise.ie is an Irish-focused AI-powered cruise recommendation 
website. It earns revenue through affiliate commissions when users 
click through and book cruises via partner links. There is no booking 
engine on this site — we are purely an affiliate recommendation site.

The core product is an AI chat assistant named "Mara" who asks Irish 
travellers questions about what they want from a cruise holiday and 
recommends the best options for them.

## Owner Context
- Owner is non-technical — explain what you are doing before doing it
- Always break tasks into numbered steps
- Show me what files you created and where after each task
- Warn me before doing anything that could break existing work
- Use simple language, avoid jargon unless you explain it
- If something could be done two ways, recommend one and explain why

## Tech Stack
- Framework: Next.js 15 with App Router
- Language: TypeScript (strict mode, no use of "any" type)
- Styling: Tailwind CSS only — no separate CSS files, no inline styles
- AI Chat: Google Gemini API (gemini-2.0-flash model)
- Cruise Data: Widgety API (keys in .env.local)
- Hosting: Vercel (free tier)
- Analytics: Google Analytics 4

## Coding Rules
- Use 2 spaces for indentation throughout
- Functional components only — no class components
- Use Next.js App Router (app/ directory structure)
- All pages must export generateMetadata() for SEO
- Images must use next/image component
- All external links must open in new tab with rel="nofollow noopener"
- Mobile-first design — must work perfectly at 375px width
- Every page needs unique title tag and meta description
- No hardcoded API keys anywhere — always use environment variables
- Add comments explaining what code does in plain English

## Design System
- Primary colour: #0A2647 (deep navy blue)
- Accent colour: #C9A84C (warm gold)
- Background: #F8F9FA (light grey-white)
- Text: #1A1A2E (near black)
- Success: #2ECC71 (green)
- Font headings: Playfair Display (Google Font)
- Font body: Inter (Google Font)
- Border radius cards: rounded-xl
- Border radius buttons: rounded-full
- Card shadows: shadow-lg
- Max content width: 1200px centered

## AI Assistant — Mara
- Name: Mara
- Personality: Friendly, warm, knowledgeable Irish cruise specialist
- Tone: Like a helpful friend, not a salesperson
- Always recommends exactly 3 cruise options:
  1. Budget option
  2. Mid-range option  
  3. Premium option
- Questions Mara asks users (one at a time):
  1. How many people travelling?
  2. Any children? What ages?
  3. What is your rough budget per person?
  4. When do you want to travel? (month/year)
  5. Where do you want to fly from? (Dublin/Cork/Shannon/Belfast)
  6. Any destination preference or open to suggestions?
  7. What kind of experience? (relaxing/adventure/food & culture/family)
  8. First cruise or have you cruised before?
- After gathering info, return exactly 3 cruise recommendations
- Each recommendation includes: cruise line, ship name, itinerary,
  duration, price from, 3 highlights, affiliate booking link

## Affiliate Partners
- CruiseDirect: 3% commission — cruisedirect.com
- Expedia: 12% commission — expedia.ie  
- Royal Caribbean: 4% commission — royalcaribbean.com
- Princess Cruises: 3% commission — princess.com
All affiliate links stored in /lib/affiliates.ts
All links must use UTM parameters: utm_source=findmycruise&utm_medium=affiliate

## Pages to Build
1. Homepage (/) — hero, how it works, featured destinations, trust signals
2. Find a Cruise (/find) — Isla AI chat interface — this is the core product
3. Mediterranean Cruises (/destinations/mediterranean)
4. Caribbean Cruises (/destinations/caribbean)
5. Norwegian Fjords (/destinations/fjords)
6. Family Cruises (/destinations/family)
7. River Cruises (/destinations/river)
8. Royal Caribbean Ireland (/cruise-lines/royal-caribbean)
9. P&O Cruises Ireland (/cruise-lines/pando)
10. MSC Cruises Ireland (/cruise-lines/msc)
11. Blog index (/blog)
12. Blog post template (/blog/[slug])
13. About (/about)

## SEO Targets
Primary keywords to rank for:
- "cruises from Ireland"
- "cruise holidays Ireland"  
- "find a cruise from Ireland"
- "Mediterranean cruise from Dublin"
- "Caribbean cruise Ireland"
- "family cruises Ireland 2026"
- "Norwegian fjords cruise Ireland"
Each page targets one primary keyword — no keyword stuffing

## Folder Structure
app/
  layout.tsx
  page.tsx
  find/page.tsx
  destinations/
    mediterranean/page.tsx
    caribbean/page.tsx
    fjords/page.tsx
    family/page.tsx
    river/page.tsx
  cruise-lines/
    royal-caribbean/page.tsx
    pando/page.tsx
    msc/page.tsx
  blog/
    page.tsx
    [slug]/page.tsx
  about/page.tsx
  api/
    chat/route.ts
components/
  layout/
    Header.tsx
    Footer.tsx
  cruise/
    CruiseCard.tsx
    CruiseGrid.tsx
  chat/
    ChatInterface.tsx
    ChatMessage.tsx
    ChatInput.tsx
  ui/
    Button.tsx
    Card.tsx
lib/
  affiliates.ts
  widgety.ts
  gemini.ts
content/
  blog/ (markdown files)

## Environment Variables Needed
GEMINI_API_KEY=
WIDGETY_API_KEY=
CRUISEDIRECT_AFFILIATE_ID=
EXPEDIA_AFFILIATE_ID=
ROYAL_CARIBBEAN_AFFILIATE_ID=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_SITE_URL=https://findmycruise.ie

## What NOT to Do
- Do not build a payment or booking system
- Do not store any user personal data
- Do not use purple or generic AI colour schemes
- Do not use class components in React
- Do not create separate .css files
- Do not use the "any" TypeScript type
- Do not hardcode any API keys
- Do not make pages that are not mobile responsive
- Do not use Lorem Ipsum placeholder text — write real Irish-focused content