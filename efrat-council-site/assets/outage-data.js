// (Outage feature removed — file kept as empty stub. Safe to delete.)
//
// announcements channel. Each entry: { date: 'YYYY-MM-DD', type: 'water'|'power', neighborhoods: [], note: '' }
const OUTAGE_EVENTS = [
  {
    date: "2025-09-16", type: "water",
    neighborhoods: ["Zayit", "Tamar", "Dagan"],
    note_he: "הפסקת מים בשכונות הצפוניות (4 עדכונים מהשעה 18:40 עד 21:23). חוברה בריכת המים בראש הזית.",
    note_en: "Water outage in northern neighborhoods (4 updates between 6:40 PM and 9:23 PM). Reservoir at top of Zayit connected."
  },
  {
    date: "2026-01-05", type: "water",
    neighborhoods: ["Zayit", "Tamar", "Dagan", "Dekel Gimel"],
    note_he: "הפסקת מים מתוכננת בלילה (כ-21:00 עד 06:00) לחיבור בריכת אגירה למערכת.",
    note_en: "Scheduled overnight shutdown (~9 PM to 6 AM) to connect the storage reservoir to the community water system."
  },
  {
    date: "2026-01-07", type: "water",
    neighborhoods: ["Zayit", "Tamar", "Dagan", "Dekel Gimel"],
    note_he: "הפסקת מים בערב כדי לתקן את התקלה בלחצי המים של ימי שישי. מקואות נסגרו מוקדם.",
    note_en: "Evening water cut to fix the Friday water-pressure malfunction. Mikvaot closed early."
  },
  {
    date: "2026-01-08", type: "water",
    neighborhoods: ["Zayit", "Tamar", "Dagan", "Dekel Gimel"],
    note_he: "המשך עבודות הלילה (07-08 בינואר) על תקלת המים של ימי שישי.",
    note_en: "Continuation of overnight work (Jan 7-8) on the Friday water-pressure malfunction."
  },
  {
    date: "2026-01-20", type: "water",
    neighborhoods: ["Zayit", "Tamar", "Dagan"],
    note_he: "הפסקת מים גדולה — מכליות מים הוצבו בבתי הספר אריאל, אלומים ואורות עציון לבנות. המים במכליות הוגדרו כלא ראויים לשתייה.",
    note_en: "Major water outage — water tankers were placed at the Ariel, Alumim, and Orot Etzion Girls' schools. Tanker water designated for sanitation only, not drinking."
  },
  {
    date: "2026-01-26", type: "water",
    neighborhoods: ["Zayit", "Tamar", "Dagan"],
    note_he: "הפסקת מים בערב בשכונות הצפוניות. מקואות נסגרו מוקדם.",
    note_en: "Evening water outage in northern neighborhoods. Mikvaot closed early."
  },
  {
    date: "2026-05-12", type: "power",
    neighborhoods: ["regional"],
    note_he: "הפסקת חשמל אזורית בסביבות 22:00. תקלה במתח גבוה. חברת חשמל שלחה צוותים. אין הערכת זמן לחזרת החשמל באותו רגע.",
    note_en: "Regional power outage around 10:07 PM. High-voltage malfunction. Israel Electric Corporation crews dispatched. No initial restoration estimate."
  },
  {
    date: "2026-05-14", type: "water",
    neighborhoods: ["Zayit", "Tamar", "Dagan"],
    note_he: "פיצוץ צינור מים בזית. הופסקה אספקת המים לכל השכונות הצפוניות. צוותי המועצה חילקו ארגזי מים לגנים ולפעוטונים, ומכליות הוצבו בבתי הספר אריאל ואורות עציון לבנות.",
    note_en: "Water main break in Zayit. Water supply cut to all three northern neighborhoods. Council teams distributed cases of water to daycares; tankers stationed at Ariel and Orot Etzion Banot schools."
  }
];
