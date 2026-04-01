// Defines the structure of a show
export type Show = {
  date: string; // IMPORTANT: use YYYY-MM-DD
  city: string;
  country: string;
  venue: string;
  ticketLink?: string;
};

// Your data (edit this only)
export const shows: Show[] = [
  
  {
    date: "2026-03-06",
    city: "Zürich",
    country: "Switzerland",
    venue: "Ebrietas",
    ticketLink: "https://example.com",
  },
    {
    date: "2026-03-07",
    city: "Biel/Bienne",
    country: "Switzerland",
    venue: "Quai Du Bas 30",
    ticketLink: "https://example.com",
  },
  {
    date: "2026-03-28",
    city: "Basel",
    country: "Switzerland",
    venue: "Valhalla Bar",
    ticketLink: "https://example.com",
  },
  {
    date: "2026-04-18",
    city: "Saint-Maurice",
    country: "Switzerland",
    venue: "Manoir Pub",
    ticketLink: "https://example.com",
  },
  {
    date: "2026-05-23",
    city: "Aarau",
    country: "Switzerland",
    venue: "Flösserplatz",
    ticketLink: "https://example.com",
  },
  {
    date: "2025-11-15",
    city: "Yverdon-Les-Bains",
    country: "Switzerland",
    venue: "Les Citrons Masqués",
    ticketLink: "https://example.com",
  },
  {
    date: "2025-11-22",
    city: "Lausanne",
    country: "Switzerland",
    venue: "Maison de Quartier Sous-Gare",
    ticketLink: "https://example.com",
  },
  {
    date: "2025-12-06",
    city: "Nyon",
    country: "Switzerland",
    venue: "Usine à Gaz",
    ticketLink: "https://example.com",
  },
  {
    date: "2023-05-06",
    city: "Lausanne",
    country: "Switzerland",
    venue: "Maison de Quartier Sous-Gare",
    ticketLink: "https://example.com",
  },
  {
    date: "2023-11-09",
    city: "Lausanne",
    country: "Switzerland",
    venue: "Bleu Lezard",
    ticketLink: "https://example.com",
  },
  {
    date: "2025-02-26",
    city: "Lausanne",
    country: "Switzerland",
    venue: "Barberousse",
    ticketLink: "https://example.com",
  },
  {
    date: "2024-12-14",
    city: "Lausanne",
    country: "Switzerland",
    venue: "The Rockies",
    ticketLink: "https://example.com",
  },
  {
    date: "2024-12-21",
    city: "Biel/Bienne",
    country: "Switzerland",
    venue: "Schlachthof Kulturzentrum",
    ticketLink: "https://example.com",
  },
  {
    date: "2025-06-21",
    city: "Lausanne",
    country: "Switzerland",
    venue: "The Rockies",
    ticketLink: "https://example.com",
  },
  {
    date: "2025-04-04",
    city: "Lausanne",
    country: "Switzerland",
    venue: "Le Qwertz",
    ticketLink: "https://example.com",
  },
  {
    date: "2025-07-05",
    city: "Geneva",
    country: "Switzerland",
    venue: "Flocky La Loutre",
    ticketLink: "https://example.com",
  },
  {
    date: "2025-09-28",
    city: "Geneva",
    country: "Switzerland",
    venue: "Porteous",
    ticketLink: "https://example.com",
  },
  {
    date: "2025-03-15",
    city: "Lausanne",
    country: "Switzerland",
    venue: "Le Cylure",
    ticketLink: "https://example.com",
  },
  {
    date: "2025-07-24",
    city: "Zürich",
    country: "Switzerland",
    venue: "Rautistrasse 3000",
    ticketLink: "https://example.com",
  }
];