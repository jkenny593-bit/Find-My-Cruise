# FindMyCruise.ie — Gemini CLI Build Prompts
# Flight Price Integration

Run these prompts in order. Wait for each one to complete and confirm
the files are created before moving to the next.

---

## START OF SESSION

Paste this first before any of the prompts below:

```
Read FLIGHT_INTEGRATION_CONTEXT.md in full before we start.
This describes what we are building — a daily cron job that fetches
flight prices from Travelpayouts and caches them so Mara can include
flight cost estimates in her cruise recommendations.
Confirm you have read it and summarise the approach in 2 sentences.
```

---

## PROMPT 1 — Cron Fetch Script

```
Create a TypeScript script at scripts/fetch-flight-prices.ts.

Define a ROUTES array of 15 objects with shape:
{ origin: string, destination: string, label: string }

Use these routes:
DUB→BCN, DUB→FCO, DUB→ATH, DUB→LIS, DUB→TFS, DUB→BGO,
DUB→LHR, DUB→MIA, DUB→BGI, DUB→DXB,
ORK→BCN, ORK→LHR,
SNN→BCN, SNN→LHR, SNN→MIA

For each route:
- Call GET https://api.travelpayouts.com/v1/prices/cheap
  with query params: origin, destination, currency=EUR, token=process.env.TRAVELPAYOUTS_TOKEN
- Extract all numeric price values from the nested response data object
- Calculate minPrice and maxPrice using Math.min / Math.max over those values
- Wait 500ms between each call (to be polite to the API)

Error handling:
- If a route call fails or returns no data, read the existing value
  for that route key from data/flight-prices.json if it exists,
  and keep it unchanged
- Log each route result (success or fallback) to console

After all 15 routes, write data/flight-prices.json with this exact structure:
{
  "lastUpdated": "<ISO timestamp>",
  "month": "<YYYY-MM of next calendar month>",
  "prices": {
    "DUB-BCN": { "min": 148, "max": 224, "currency": "EUR" },
    ...
  }
}

Use the current date + 1 month as the target month for the API calls
(we want next month's indicative prices, not historical).

Make the script runnable with: npx ts-node scripts/fetch-flight-prices.ts
```

---

## PROMPT 2 — Port Map and Price Reader

```
Create two files:

FILE 1: lib/flights/ports.ts
Export a constant CRUISE_PORT_MAP as Record<string, string>
mapping cruise region names to their nearest arrival airport IATA code:
{
  "Mediterranean":        "BCN",
  "Greek Isles":          "ATH",
  "Norwegian Fjords":     "BGO",
  "Caribbean":            "MIA",
  "Caribbean (Barbados)": "BGI",
  "Canary Islands":       "TFS",
  "Iberian Peninsula":    "LIS",
  "British Isles":        "LHR",
  "Dubai / Middle East":  "DXB",
  "Transatlantic":        "MIA"
}

Also export STATIC_FALLBACK_PRICES as
Record<string, { min: number, max: number, currency: string }>
with hardcoded estimates for all 15 route keys
(e.g. "DUB-BCN": { min: 148, max: 224, currency: "EUR" })
Use the values from the seed data in FLIGHT_INTEGRATION_CONTEXT.md.

FILE 2: lib/flights/prices.ts
Export a function:
  getFlightPrice(
    origin: 'DUB' | 'ORK' | 'SNN',
    cruiseRegion: string
  ): { min: number, max: number, currency: string } | null

Logic:
1. Look up destination IATA from CRUISE_PORT_MAP using cruiseRegion
2. Build route key: `${origin}-${iata}`
3. Try to read data/flight-prices.json with fs.readFileSync (synchronous — not async)
4. If file exists and lastUpdated is within 48 hours, return prices[routeKey]
5. If file is missing, stale, or route key not found, return STATIC_FALLBACK_PRICES[routeKey]
6. If route key not in fallback either, return null

Do not use any async/await in this function — it must be synchronous.
```

---

## PROMPT 3 — Mara Integration

```
Update app/api/chat/route.ts to integrate flight price context into
Mara's recommendation output.

STEP 1 — Add a new qualification question.
In Mara's existing multi-step qualification workflow, add a new question:
"Which Irish airport will you most likely fly from?
 Dublin (DUB), Cork (ORK), or Shannon (SNN)?"
Store the answer as preferredAirport in the session/conversation state.
If the user skips or doesn't answer, default to 'DUB'.

STEP 2 — Fetch flight prices after cruise selection.
After Mara has selected her 3 cruise recommendations (budget, mid, premium),
import getFlightPrice from lib/flights/prices.ts.
For each recommendation, call:
  getFlightPrice(preferredAirport, cruiseRegion)
where cruiseRegion is the destination type of that cruise
(e.g. "Mediterranean", "Caribbean", etc.)

STEP 3 — Build FLIGHT_CONTEXT string.
Assemble a FLIGHT_CONTEXT block:
  "FLIGHT_CONTEXT:
   Budget option flights: €{min}–€{max} return from {preferredAirport}
   Mid option flights: €{min}–€{max} return from {preferredAirport}
   Premium option flights: €{min}–€{max} return from {preferredAirport}"

If getFlightPrice returns null for a recommendation, omit that line.

STEP 4 — Inject into Mara's final prompt.
Append FLIGHT_CONTEXT to Mara's existing final recommendation prompt.
Also append this instruction to Mara's system prompt for this request:
  "You have been given FLIGHT_CONTEXT showing indicative return flight
   prices from the user's preferred Irish airport. For each cruise
   recommendation, add a 'Total Estimated Cost' line:
   cruise price per person + flight range per person.
   End with: 'Flight prices are indicative based on recent searches.
   Always check live fares before booking.'"

Do not change any other part of Mara's existing workflow.
Show me the diff of changes to app/api/chat/route.ts only.
```

---

## PROMPT 4 — Vercel Cron Endpoint

```
Create the Vercel cron endpoint that triggers the daily price fetch.

FILE: app/api/cron/update-flights/route.ts
Create a Next.js 15 App Router GET handler.
- Check that the Authorization header equals 'Bearer ' + process.env.CRON_SECRET
- If it does not match, return a 401 JSON response: { error: "Unauthorized" }
- If it matches, import and run the fetch logic from scripts/fetch-flight-prices.ts
  (refactor the script if needed so the core logic is an exported async function
  that can be called from both the CLI script and this route handler)
- Return: { success: true, updated: new Date().toISOString(), routesFetched: 15 }
- Wrap in try/catch — on error return: { success: false, error: error.message }

UPDATE: vercel.json
Add a crons entry (create vercel.json if it does not already exist,
or merge with existing content — do not overwrite existing config):
{
  "crons": [
    {
      "path": "/api/cron/update-flights",
      "schedule": "0 3 * * *"
    }
  ]
}

REMINDER: Add these to .env.local (tell me what values to use):
- TRAVELPAYOUTS_TOKEN
- CRON_SECRET
```

---

## PROMPT 5 — Flight Estimate UI Card

```
Add a Flight Estimate card to the cruise recommendation UI component.

The card should display:
- Origin airport code and Irish flag emoji (🇮🇪)
- Arrow → destination airport code
- Price range: "from €{min} – €{max} return"
- A "Search Flights" button that opens a Travelpayouts deep link in a new tab

Travelpayouts deep link format:
https://www.travelpayouts.com/flights/?origin={origin}&destination={destination}&marker=724564

The card should:
- Appear below the cruise price in each recommendation card
- Use the existing design system / Tailwind classes already in the project
- Be fully responsive and display cleanly on mobile
- Include a small disclaimer below the button:
  "Indicative prices based on recent searches"

Show me the component code and where to add it in the existing recommendation UI.
```

---

## BUILD CHECKLIST

Work through these in order and tick each off before proceeding:

- [ ] Get Travelpayouts API token from app.travelpayouts.com → Developers → API
- [ ] Add TRAVELPAYOUTS_TOKEN and CRON_SECRET to .env.local
- [ ] Test one manual API call in browser to confirm token works
- [ ] Run Prompt 1 → create scripts/fetch-flight-prices.ts
- [ ] Run script: npx ts-node scripts/fetch-flight-prices.ts
- [ ] Confirm data/flight-prices.json is created with real prices
- [ ] Commit flight-prices.json seed file to GitHub
- [ ] Run Prompt 2 → create lib/flights/prices.ts + lib/flights/ports.ts
- [ ] Run Prompt 3 → update app/api/chat/route.ts
- [ ] Test full Mara chat flow end-to-end — confirm flight estimates appear
- [ ] Run Prompt 4 → create cron route + update vercel.json
- [ ] Add TRAVELPAYOUTS_TOKEN + CRON_SECRET to Vercel environment variables
- [ ] Deploy to Vercel
- [ ] Trigger cron manually from Vercel dashboard → confirm file updates
- [ ] Run Prompt 5 → build Flight Estimate UI card
- [ ] Test on mobile — confirm card layout is clean
