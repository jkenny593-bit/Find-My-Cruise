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
  "Transatlantic":        "MIA"
};

export const STATIC_FALLBACK_PRICES: Record<string, { min: number, max: number, currency: string }> = {
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
  "SNN-MIA": { "min": 360, "max": 510, "currency": "EUR" },
  "BFS-BCN": { "min": 145, "max": 225, "currency": "EUR" },
  "BFS-LHR": { "min": 50,  "max": 125, "currency": "EUR" },
  "BFS-MIA": { "min": 390, "max": 560, "currency": "EUR" }
};
