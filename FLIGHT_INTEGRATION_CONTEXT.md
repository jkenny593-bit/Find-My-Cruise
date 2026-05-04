# FindMyCruise.ie — Flight Price Integration Context

## What We Are Building

A daily cron job fetches indicative return flight prices for 15 Irish-origin cruise port routes from the Travelpayouts API once per day and writes them to a local JSON file. Mara (the AI cruise specialist) reads from that file when building recommendations — never hitting an external API at chat time.

**No throttle limiter needed. No per-call costs. Zero latency during user sessions.**

---

## The API: Travelpayouts Cheap Prices

- Base URL: `https://api.travelpayouts.com/v1/prices/cheap`
- Auth: query param `token=TRAVELPAYOUTS_TOKEN`
- Cost: free, no tiers relevant at this usage level
- Environment variable needed: `TRAVELPAYOUTS_TOKEN`
- Returns: cheapest prices found in last 48 hours for a given route and month

### Example call
```
GET https://api.travelpayouts.com/v1/prices/cheap
  ?origin=DUB
  &destination=BCN
  &currency=EUR
  &token=YOUR_TOKEN
```

### Example response
```json
{
  "data": {
    "BCN": {
      "0": {
        "price": 148,
        "airline": "FR",
        "departure_at": "2026-08-12",
        "return_at": "2026-08-19"
      }
    }
  },
  "currency": "EUR"
}
```

---

## The 15 Routes to Fetch Daily

| Origin | Destination | Cruise Region | IATA | Route Key |
|--------|-------------|---------------|------|-----------|
| DUB | Barcelona | Mediterranean | BCN | DUB-BCN |
| DUB | Rome (Fiumicino) | Mediterranean | FCO | DUB-FCO |
| DUB | Athens | Mediterranean / Greek Isles | ATH | DUB-ATH |
| DUB | Lisbon | Iberian / Canaries | LIS | DUB-LIS |
| DUB | Tenerife South | Canary Islands | TFS | DUB-TFS |
| DUB | Bergen | Norwegian Fjords | BGO | DUB-BGO |
| DUB | London Heathrow | British Isles / Southampton | LHR | DUB-LHR |
| DUB | Miami | Caribbean | MIA | DUB-MIA |
| DUB | Barbados | Caribbean | BGI | DUB-BGI |
| DUB | Dubai | Middle East / Asia | DXB | DUB-DXB |
| ORK | Barcelona | Mediterranean | BCN | ORK-BCN |
| ORK | London Heathrow | Connections hub | LHR | ORK-LHR |
| SNN | Barcelona | Mediterranean | BCN | SNN-BCN |
| SNN | London Heathrow | Connections hub | LHR | SNN-LHR |
| SNN | Miami | Caribbean (direct) | MIA | SNN-MIA |

---

## Cruise Destination → IATA Mapping (ports.ts)

```ts
export const CRUISE_PORT_MAP: Record<string, string> = {
  "Mediterranean":        "BCN",
  "Greek Isles":          "ATH",
  "Norwegian Fjords":     "BGO",
  "Caribbean":            "MIA",
  "Caribbean (Barbados)": "BGI",
  "Canary Islands":       "TFS",
  "Iberian Peninsula":    "LIS",
  "British Isles":        "LHR",
  "Dubai / Middle East":  "DXB",
  "Transatlantic":        "MIA",
};
```

---

## The Cache File: data/flight-prices.json

Written by the cron script. Read by Mara via `lib/flights/prices.ts`. Commit a seed version with realistic fallback values so the site never starts cold.

```json
{
  "lastUpdated": "2026-05-04T03:00:00Z",
  "month": "2026-08",
  "prices": {
    "DUB-BCN": { "min": 148, "max": 224, "currency": "EUR" },
    "DUB-FCO": { "min": 89,  "max": 190, "currency": "EUR" },
    "DUB-ATH": { "min": 112, "max": 198, "currency": "EUR" },
    "DUB-LIS": { "min": 79,  "max": 160, "currency": "EUR" },
    "DUB-TFS": { "min": 95,  "max": 175, "currency": "EUR" },
    "DUB-BGO": { "min": 130, "max": 230, "currency": "EUR" },
    "DUB-LHR": { "min": 49,  "max": 120, "currency": "EUR" },
    "DUB-MIA": { "min": 380, "max": 540, "currency": "EUR" },
    "DUB-BGI": { "min": 410, "max": 580, "currency": "EUR" },
    "DUB-DXB": { "min": 320, "max": 490, "currency": "EUR" },
    "ORK-BCN": { "min": 135, "max": 210, "currency": "EUR" },
    "ORK-LHR": { "min": 55,  "max": 130, "currency": "EUR" },
    "SNN-BCN": { "min": 140, "max": 220, "currency": "EUR" },
    "SNN-LHR": { "min": 60,  "max": 140, "currency": "EUR" },
    "SNN-MIA": { "min": 360, "max": 510, "currency": "EUR" }
  }
}
```

---

## New Files to Create

| File | Purpose |
|------|---------|
| `scripts/fetch-flight-prices.ts` | Cron script — fetches all 15 routes, writes flight-prices.json |
| `data/flight-prices.json` | Cache file — written by cron, read by Mara |
| `lib/flights/prices.ts` | Helper — reads cache file, exposes getFlightPrice() |
| `lib/flights/ports.ts` | Static map — cruise region name → IATA airport code |
| `app/api/cron/update-flights/route.ts` | Vercel cron endpoint — triggers the fetch script |
| `vercel.json` | Add cron schedule: 3am UTC daily |

---

## Environment Variables

| Variable | Where to Get It |
|----------|----------------|
| `TRAVELPAYOUTS_TOKEN` | app.travelpayouts.com → Developers → API |
| `CRON_SECRET` | Generate any random 32-char string |

Add both to `.env.local` and to Vercel Environment Variables dashboard.

---

## Mara System Prompt Addition

After generating her 3 cruise recommendations, Mara receives a `FLIGHT_CONTEXT` block injected into her final prompt:

```
FLIGHT_CONTEXT:
Budget cruise flights: €{min}–€{max} return from {airport}
Mid cruise flights: €{min}–€{max} return from {airport}
Premium cruise flights: €{min}–€{max} return from {airport}
```

Mara's system prompt addition:
> "You have been given FLIGHT_CONTEXT with indicative return flight prices from the user's preferred Irish airport. For each cruise recommendation, include a 'Total Estimated Cost' line showing cruise price per person + flight range per person. Note that flight prices are indicative based on recent searches."

---

## New Qualification Question for Mara (Question 4)

> "Which Irish airport will you most likely fly from — Dublin (DUB), Cork (ORK), or Shannon (SNN)?"

Store the answer as `preferredAirport` in session state. Default to `DUB` if skipped.

---

## Vercel Cron Config

```json
{
  "crons": [
    {
      "path": "/api/cron/update-flights",
      "schedule": "0 3 * * *"
    }
  ]
}
```

---

## Fallback Behaviour

- If `flight-prices.json` is missing → use hardcoded static estimates from `ports.ts`
- If `flight-prices.json` is older than 48 hours → use hardcoded static estimates
- If a specific route is not in the file → return `null`, Mara omits flight cost for that recommendation
- If Travelpayouts returns no data for a route during the cron run → keep the existing value in the file for that route key
