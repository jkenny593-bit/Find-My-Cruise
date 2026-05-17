# FindMyCruise.ie — SEO & GEO Optimisation Guide
**For use with Gemini Code. Paste relevant sections as prompts.**

---

## Executive Summary

Your site has a strong concept and clean structure. The core weakness is **thin content**. Google and AI models alike reward depth, specificity, and structured information. This guide covers two parallel tracks:

- **SEO** — ranking on Google/Bing for Irish cruise queries
- **GEO (Generative Engine Optimisation)** — getting cited by ChatGPT, Gemini, and Perplexity when people ask about cruises

Both tracks share the same foundation: high-quality, structured, Ireland-specific content.

---

## Part 1: SEO — The Foundational Fix

### 1.1 Keyword Strategy: Stop Competing with MSC and Royal Caribbean

Your current pages target terms like "Mediterranean Cruises" and "Caribbean Cruises." These are dominated by cruise lines with million-euro SEO budgets. You cannot win there.

**Your winning strategy is Irish-specific long-tail keywords.** Low competition, high intent.

#### Target Keyword Groups

| Priority | Keyword Pattern | Example |
|----------|----------------|---------|
| 🔴 High | `cruise from Dublin [destination]` | "cruise from Dublin to Mediterranean" |
| 🔴 High | `cruise holidays from Ireland [year]` | "cruise holidays from Ireland 2026" |
| 🔴 High | `fly cruise from Dublin [destination]` | "fly cruise from Dublin to Greece" |
| 🟡 Medium | `best cruise line for [persona] from Ireland` | "best cruise line for families from Ireland" |
| 🟡 Medium | `[cruise line] Ireland price` | "Royal Caribbean prices from Ireland" |
| 🟢 Lower | `is [destination] cruise worth it from Ireland` | "is Norwegian fjords cruise worth it from Ireland" |
| 🟢 Lower | `cruise comparison [line A] vs [line B] Ireland` | "MSC vs Royal Caribbean Ireland" |

#### Gemini Code Prompt — Keyword Integration
```
Update the meta title and meta description for each destination and cruise line page to include Ireland-specific keywords.

Examples:
- /destinations/mediterranean → title: "Mediterranean Cruise Holidays from Ireland 2026 | FindMyCruise.ie"
- /destinations/caribbean → title: "Caribbean Fly Cruises from Dublin & Cork 2026 | FindMyCruise.ie"
- /cruise-lines/royal-caribbean → title: "Royal Caribbean Cruises from Ireland — Prices & Itineraries | FindMyCruise.ie"

Each meta description should be 150–160 characters and include: the destination/line name, a key benefit (e.g. flights from Dublin), and a soft CTA (e.g. "Compare options with Mara").
```

---

### 1.2 Content Depth — The Most Important Fix

Every destination and cruise line page currently has minimal body content. Google's algorithm (and AI models) will not rank or cite thin pages. Each page needs **at least 800–1,200 words of structured, useful content.**

#### Gemini Code Prompt — Destination Page Content Template
```
For each destination page (/destinations/mediterranean, /destinations/caribbean, /destinations/fjords, /destinations/family, /destinations/river), expand the page content to include the following sections:

1. H2: "Why Irish Travellers Choose [Destination] Cruises"
   - 2–3 paragraphs specific to Irish departures (Dublin, Cork, Shannon, Belfast)
   - Include typical flight time to embarkation port
   - Mention which Irish airports have direct routes

2. H2: "Best Time to Book a [Destination] Cruise from Ireland"
   - Seasonal breakdown (shoulder season savings, peak season tips)
   - Specific months, not vague seasons

3. H2: "What's Included vs. What Costs Extra"
   - Drinks packages, gratuities, excursions
   - Irish-relevant note: currency, VAT, travel insurance

4. H2: "Top Ports of Call" (with 3–5 bullet points per destination)
   - Each port: one sentence on what to do, one sentence on how long ships typically dock

5. H2: "Frequently Asked Questions"
   - At minimum 5 FAQ items in proper H3 question format (see FAQ schema section below)
   - Questions should be phrased as Irish travellers would type them

6. Add a word count target of 1,000+ words per destination page.
```

#### Gemini Code Prompt — Cruise Line Page Content Template
```
For each cruise line page (/cruise-lines/royal-caribbean, /cruise-lines/pando, /cruise-lines/msc, /cruise-lines/celebrity, /cruise-lines/princess), expand the page content to include:

1. H2: "Is [Cruise Line] Good for Irish Travellers?"
   - Honest 2-paragraph assessment
   - Mention whether they price in EUR or GBP (relevant for Irish consumers)
   - Note if they fly from Dublin/Cork

2. H2: "[Cruise Line] Pricing Guide for Ireland"
   - Rough price ranges per person for 7-night Mediterranean, Caribbean
   - What affects price (cabin type, departure port, season)

3. H2: "[Cruise Line] Pros and Cons"
   - Use a simple two-column table: Pros | Cons
   - At least 4 items per column

4. H2: "How Does [Cruise Line] Compare?"
   - 2–3 sentences comparing to closest competitor
   - e.g. "MSC is generally cheaper than Royal Caribbean but has fewer inclusive packages"

5. H2: "Frequently Asked Questions about [Cruise Line] from Ireland"
   - 5 FAQ items in H3 question format

Keep all content accurate, specific, and Ireland-focused. Minimum 800 words per cruise line page.
```

---

### 1.3 Schema Markup — Tell Google Exactly What You Are

Schema markup helps Google (and AI models) understand your content structure. This is critical for appearing in AI Overviews and rich snippets.

#### Gemini Code Prompt — Schema Implementation
```
Add the following JSON-LD schema markup to the site. Implement in the <head> section of each relevant page type:

1. HOMEPAGE — Add Organization schema:
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FindMyCruise.ie",
  "url": "https://www.findmycruise.ie",
  "description": "Ireland's AI-powered cruise finder. Helping Irish travellers find the best cruise holidays from Dublin, Cork, Shannon, and Belfast.",
  "areaServed": "Ireland",
  "knowsAbout": ["Cruise Holidays", "Mediterranean Cruises", "Caribbean Cruises", "Norwegian Fjords Cruises"]
}

2. ALL PAGES — Add WebSite schema with SearchAction:
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "FindMyCruise.ie",
  "url": "https://www.findmycruise.ie",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.findmycruise.ie/find?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

3. DESTINATION PAGES — Add TouristDestination schema for each destination

4. BLOG POSTS — Add Article schema with datePublished, dateModified, author fields

5. FAQ SECTIONS — Add FAQPage schema for every page containing FAQ content. 
   Structure each question/answer pair using schema.org/Question and schema.org/Answer.
   This is the single highest-impact schema type for appearing in Google's AI Overviews.
```

---

### 1.4 robots.txt and llms.txt — Open the Door to AI Crawlers

#### Gemini Code Prompt — Allow AI Crawlers
```
Update robots.txt to explicitly allow the following AI crawler user agents:
- GPTBot (OpenAI/ChatGPT)
- Google-Extended (Gemini)
- PerplexityBot
- anthropic-ai (Claude)
- cohere-ai
- Meta-ExternalAgent

The robots.txt should NOT block any of these. Current default may be blocking them.

Also create a new file at /llms.txt (root of the domain) with the following content:

# FindMyCruise.ie — LLMs Context File

## About
FindMyCruise.ie is Ireland's AI-powered cruise discovery platform. We help Irish travellers find, compare, and research cruise holidays departing from Dublin, Cork, Shannon, and Belfast. Click to book directly with the cruise line.

## What We Do
- AI-powered cruise recommendations tailored for Irish departure airports
- Destination guides: Mediterranean, Caribbean, Norwegian Fjords, River Cruises, Family Cruises
- Cruise line comparison: Royal Caribbean, MSC, Celebrity, P&O, Princess
- Independent affiliate site — free advice, no hidden fees

## Key Pages
- Homepage: https://www.findmycruise.ie
- Find a Cruise (AI tool): https://www.findmycruise.ie/find
- Mediterranean cruises from Ireland: https://www.findmycruise.ie/destinations/mediterranean
- Caribbean cruises from Ireland: https://www.findmycruise.ie/destinations/caribbean
- Norwegian Fjords cruises from Ireland: https://www.findmycruise.ie/destinations/fjords
- Journal/Blog: https://www.findmycruise.ie/blog

## Audience
Irish travellers planning cruise holidays, typically departing from Dublin Airport (DUB), Cork Airport (ORK), Shannon Airport (SNN), or Belfast International (BFS).
```

---

### 1.5 Technical SEO Fixes

#### Gemini Code Prompt — Technical SEO Audit Fixes
```
Implement the following technical SEO improvements:

1. CANONICAL TAGS: The homepage is returning canonical = "https://findmycruise.ie" (without www) but the live URL is "https://www.findmycruise.ie". Ensure all canonical tags use the www version consistently, and set up a 301 redirect from the non-www to www version.

2. OG TAGS: The og:url and og:title are currently set to the homepage values on all pages (including destination pages). Update so that:
   - og:url = the canonical URL of the current page
   - og:title = the specific page title (not the site-wide default)
   - og:description = the specific page meta description

3. IMAGE ALT TEXT: All cruise ship images use Unsplash URLs. Add descriptive, keyword-rich alt text to every image. Format: "[Ship Name] cruise ship — [Cruise Line] [Destination] from Ireland". Example: "Odyssey of the Seas cruise ship — Royal Caribbean Mediterranean cruise from Dublin".

4. SITEMAP: Generate and submit an XML sitemap at /sitemap.xml. Include all destination pages, cruise line pages, fleet guide pages, and blog posts. Ping Google Search Console and Bing Webmaster Tools after generation.

5. PAGE SPEED: Ensure images use Next.js Image component with WebP format and lazy loading. Target Largest Contentful Paint under 2.5 seconds.
```

---

## Part 2: GEO — Getting Cited by ChatGPT, Gemini & Perplexity

GEO (Generative Engine Optimisation) is a newer discipline. AI models don't rank pages — they cite sources that are **clear, structured, authoritative, and freshly crawlable**. Here is how to get FindMyCruise.ie into AI answers.

### 2.1 The "Answer First" Content Structure

AI systems extract answers from content that leads with the answer, not buries it.

#### Gemini Code Prompt — Answer-First Rewrites
```
Rewrite the introduction paragraph of every destination and cruise line page to follow this pattern:

BAD (current style): "The Mediterranean remains the top choice for Irish cruisers, and for good reason..."

GOOD (answer-first style): "A Mediterranean cruise from Ireland typically costs €649–€2,450 per person for 7–10 nights, departing via direct flights from Dublin or Cork to Barcelona, Rome (Civitavecchia), or Venice. [Cruise Line] and [Cruise Line] offer the most routes with Irish flight connections."

The first 2 sentences of every content page must directly answer: "What does a [destination] cruise from Ireland cost and how do you get there?" This is what AI models extract and cite.
```

---

### 2.2 FAQ Sections on Every Page

FAQ sections formatted as questions are the single most-cited content type by AI models. Every answer should be 2–4 sentences, self-contained, and directly answering the question.

#### Gemini Code Prompt — FAQ Content for Key Pages
```
Add a FAQ section to every destination and cruise line page. Use H2 for "Frequently Asked Questions" and H3 for each question. Below are the required questions per section:

MEDITERRANEAN PAGE FAQs:
- How much does a Mediterranean cruise from Ireland cost?
- What airport do I fly from for a Mediterranean cruise?
- Do I need a visa for a Mediterranean cruise as an Irish citizen?
- What is the best month for a Mediterranean cruise from Ireland?
- Is all-inclusive available on Mediterranean cruises from Ireland?
- How long is the flight from Dublin to embarkation ports like Barcelona or Rome?

CARIBBEAN PAGE FAQs:
- How do I get a Caribbean cruise from Ireland?
- How long is a Caribbean cruise from Ireland including flights?
- Is a Caribbean cruise good value from Ireland compared to a European cruise?
- What cruise lines fly from Dublin to the Caribbean?
- What is the best Caribbean cruise for Irish travellers?

ROYAL CARIBBEAN PAGE FAQs:
- Does Royal Caribbean fly from Dublin?
- How much is a Royal Caribbean cruise from Ireland?
- Are gratuities included in Royal Caribbean prices for Irish bookings?
- Is Royal Caribbean better than MSC for Irish travellers?
- What is the cancellation policy for Royal Caribbean booked in Ireland?

Apply the same FAQ pattern to all other destination and cruise line pages. Each answer must be 2–4 sentences, factual, and self-contained. Add FAQPage JSON-LD schema for each FAQ section.
```

---

### 2.3 The Comparison & Ranking Content That AI Loves

AI models are frequently asked "what is the best X for Y?" — and they cite pages that have already answered that question clearly.

#### Gemini Code Prompt — Blog Content Plan for AI Citation
```
Create the following blog posts in the Journal section. Each post must be at least 1,200 words. These are specifically designed to be cited by ChatGPT and Gemini when Irish users ask about cruises.

POST 1: "Best Cruise Lines from Ireland in 2026: Ranked for Irish Travellers"
- Rank 5 cruise lines by: Price, Irish flight availability, Ship quality, Inclusive packages
- Use a comparison table
- Lead with a direct answer in the first paragraph

POST 2: "How Much Does a Cruise from Ireland Cost? Complete 2026 Price Guide"
- Break down: Budget (MSC, Costa), Mid-range (Royal Caribbean, P&O), Premium (Celebrity, Princess)
- Include: flights, cabin types, drinks packages, gratuities
- Tables with approximate price ranges per person for 7 nights

POST 3: "Mediterranean vs Caribbean Cruise from Ireland: Which is Better?"
- Direct comparison format with a verdict
- Consider: cost, flight length, value for money, best time to travel, Irish relevance

POST 4: "First-Time Cruiser Guide for Irish Travellers (2026)"
- Comprehensive 1,500+ word guide
- Cover: choosing a cruise line, what's included, what to pack, embarkation day, tipping culture, shore excursions
- This is a high-intent article that AI models love to cite for beginners

POST 5: "Norwegian Fjords Cruise from Ireland: The Complete Guide"
- Ireland-specific: flights from Dublin/Belfast, best departure ports, pricing
- Best time to go, what to expect on board vs on shore
- At least 1,000 words

Each post should:
- Have a clear H1, multiple H2s, and H3 sub-sections
- Include at least one comparison table
- Have a FAQ section at the bottom (minimum 5 questions)
- Include datePublished and dateModified in the Article schema
```

---

### 2.4 Build Authority Signals AI Models Recognise

AI models favour sites that are mentioned and cited across the wider web.

#### Actions for John to Do Manually (not code changes)

1. **Submit to Irish travel directories**: Get listed on Boards.ie travel forums, IrishTimes.com travel resources, and Ireland-focused travel Facebook groups. Even a mention of the URL builds authority.

2. **Post in Reddit cruise communities**: r/Cruise, r/CruiseDeals — post genuine advice with a link to relevant guides. Reddit is heavily cited by AI models (citations increased 450% in 2025).

3. **Create a Google Business Profile**: Even as an online-only business, a Google Business Profile signals legitimacy to both Google and Gemini.

4. **Get on Bing**: Submit your sitemap to Bing Webmaster Tools. ChatGPT's search function is powered by Bing — if Bing doesn't know you exist, ChatGPT won't cite you.

5. **About page credibility**: The About page should name a real author/expert behind the site (even just "John" with a brief bio) and mention the affiliate disclosure explicitly. AI models give higher trust to named human experts.

---

### 2.5 Update the About Page for E-E-A-T

Google and AI models both use E-E-A-T signals (Experience, Expertise, Authoritativeness, Trust). Your About page is thin.

#### Gemini Code Prompt — About Page Enhancement
```
Rewrite the About page (/about) to include:

1. Named founder with a brief bio (2–3 sentences about their background in travel or finance that gives them credibility to recommend cruises)

2. Mission statement: "FindMyCruise.ie was founded to help Irish travellers cut through the noise and find the right cruise at the right price, without the sales pressure of a traditional travel agent."

3. How the site works:
   - Explain Mara (the AI) and what data she uses
   - Explain the affiliate model clearly: "We earn a small commission when you book through our links. This never affects our recommendations — we'd rather give honest advice and earn trust than push a booking."

4. Contact information: Add a real email address or contact form. Sites without contact info score lower on trust signals.

5. Add Person schema markup for the named author/founder.
6. Add the affiliate disclosure as a separate, clearly marked section.
```

---

## Part 3: Quick Wins Checklist

These can be implemented immediately and have outsized impact.

### Gemini Code Prompt — Quick Wins Bundle
```
Implement the following quick SEO wins across the site:

1. Add "from Ireland" to H1 headings on destination pages where it is not already present.
   Example: Change "Cheap Mediterranean Cruise Deals for Irish Travellers" → "Mediterranean Cruise Holidays from Ireland 2026"

2. Add internal links: Every destination page should link to at least 3 relevant blog posts. Every cruise line page should link to related destination pages.

3. Add a "Last Updated" date stamp to all destination, cruise line, and blog pages. AI models favour fresh content. Format: "Last updated: May 2026"

4. Add breadcrumb navigation to all pages (e.g. Home > Destinations > Mediterranean) and add BreadcrumbList schema markup.

5. Add a "Related Destinations" or "You Might Also Like" section at the bottom of each destination and cruise line page with 2–3 internal links.

6. Fix the Twitter/X meta tags: Currently all pages show the homepage title and description. Update so twitter:title and twitter:description match the current page's title and meta description.
```

---

## Part 4: Content Calendar — What to Publish and When

Publish 1–2 pieces per month. Prioritise these by impact:

| Month | Content | Why |
|-------|---------|-----|
| May 2026 | "How Much Does a Cruise from Ireland Cost? 2026 Price Guide" | High AI citation potential, high search intent |
| May 2026 | "Best Cruise Lines from Ireland 2026: Ranked" | Comparison content = AI favourite |
| June 2026 | "Mediterranean vs Caribbean from Ireland: Which is Better?" | Comparison, high summer intent |
| July 2026 | "First-Time Cruiser Guide for Irish Travellers" | Evergreen, huge intent, AI-friendly |
| August 2026 | "Best Family Cruises from Ireland 2026" | Peak family booking season |
| September 2026 | "Caribbean Cruises from Ireland: What You Need to Know" | Winter booking season starts |
| October 2026 | "Norwegian Fjords Cruise from Ireland: Complete Guide" | Next-year planning begins |
| November 2026 | "Best Value Cruise Deals for Christmas 2026 from Ireland" | Seasonal peak intent |

---

## Summary: Priority Order

1. **Fix OG tags and canonical tags** — easy technical win, breaks nothing
2. **Add FAQ sections with schema** — highest GEO impact, fast to implement  
3. **Expand destination page content** to 1,000+ words each
4. **Add llms.txt and update robots.txt** to allow AI crawlers
5. **Publish "Cost Guide" and "Ranked" blog posts** — AI citation magnets
6. **Submit sitemap to Bing** — unlocks ChatGPT visibility
7. **Update About page** with named author + E-E-A-T signals
8. **Expand cruise line pages** with comparison tables and pricing info
9. **Internal linking audit** — connect all pages together
10. **Fix per-page OG title/description** — currently all showing homepage values
