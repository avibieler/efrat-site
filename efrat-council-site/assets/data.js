// Efrat Council analytical dataset
// Compiled from official meeting protocols: Dec 3, 2024 / Dec 23, 2024 / Jan 7, 2025 / Dec 2, 2025 / Jan 6, 2026 / Feb 3, 2026
// Data is descriptive and fact-based; framing is neutral.

const COUNCIL_DATA = {
  metadata: {
    council: { he: "מועצה מקומית אפרת", en: "Efrat Local Council" },
    meetings_analyzed: 28,
    date_range: { from: "2024-03-31", to: "2026-05-12" },
    last_updated: "2026-06-14",
    source: "Official meeting protocols (Hebrew)",
  },

  members: [
    {
      id: "dovi-shefler",
      council_from: "2024-01-01", council_to: null,
      he: "דובי שפלר",
      en: "Dovi Shefler",
      role: { he: "ראש המועצה", en: "Mayor / Head of Council" },
      attendance: { dec3: true, dec23: true, jan7: true, feb4: true, apr8: true, may6: true, jun10: true, jul22: true, sep9: true, sep30: false, nov4: true, dec2: true, jan6: true, feb3: true, jun30: true, jul9: true, oct8: true, nov5: true, jun3: true, jun25app: true, jun25arn: true, jun25bud: true, mar31: true, apr15: true, sep26: true, jan6b: true, apr14: true, may12: true },
      speaker_turns: { dec3: 40, dec23: 25, jan7: 45, feb4: 216, apr8: 113, may6: 86, jun10: 193, jul22: 67, sep9: 94, sep30: 0, nov4: 107, dec2: 205, jan6: 60, feb3: 106, jun30: 72, jul9: 139, oct8: 292, nov5: 295, jun3: 47, jun25app: 38, jun25arn: 48, jun25bud: 51, mar31: 12, apr15: 81, sep26: 14, jan6b: 89, apr14: 34, may12: 78 },
      vote_alignment_with_mayor: 1.0,
      note: { he: "ראש המועצה; השתתף בכל הישיבות.", en: "Mayor; attended every meeting." }
    },
    {
      id: "tzuri-dotan",
      council_from: "2024-01-01", council_to: null,
      he: "צורי דותן",
      en: "Tzuri Dotan",
      role: { he: "סגן ומ\"מ ראש המועצה", en: "Deputy Mayor" },
      attendance: { dec3: true, dec23: true, jan7: true, feb4: true, apr8: false, may6: true, jun10: true, jul22: false, sep9: true, sep30: true, nov4: true, dec2: true, jan6: false, feb3: false, jun30: true, jul9: true, oct8: false, nov5: false, jun3: true, jun25app: true, jun25arn: true, jun25bud: true, mar31: true, apr15: true, sep26: true, jan6b: false, apr14: true, may12: true },
      speaker_turns: { dec3: 30, dec23: 12, jan7: 30, feb4: 20, apr8: 0, may6: 50, jun10: 63, jul22: 0, sep9: 56, sep30: 129, nov4: 32, dec2: 16, jan6: 0, feb3: 0, jun30: 29, jul9: 98, oct8: 0, nov5: 0, jun3: 22, jun25app: 5, jun25arn: 10, jun25bud: 27, mar31: 2, apr15: 19, sep26: 1, jan6b: 0, apr14: 1, may12: 13 },
      vote_alignment_with_mayor: 0.5,
      note: { he: "סגן ראש המועצה. ניהל את ישיבת ספטמבר 30 (ראש המועצה נעדר) ועמד בראש הצבעת עדכון תקציב 2025 שבה הוא וחנני התייצבו בעד הקיצוץ. נעדר מישיבת התקציב ומישיבת פברואר. בדצמבר הצביע נגד עמדת ראש המועצה בהמלצת ועדת הביקורת.", en: "Deputy Mayor. Chaired the Sep 30 meeting (mayor absent) and led the 2025 budget-update vote in which he and Hanani voted for the cuts. Missed the budget meeting and the Feb 3 meeting. In Dec voted against the mayor's position on the audit-committee tax-offset recommendation." }
    },
    {
      id: "hanani-feigin",
      council_from: "2024-01-01", council_to: null,
      he: "חנני פייגין",
      en: "Hanani Feigin",
      role: { he: "חבר מועצה", en: "Council Member" },
      attendance: { dec3: true, dec23: true, jan7: false, feb4: true, apr8: false, may6: true, jun10: true, jul22: true, sep9: true, sep30: true, nov4: true, dec2: true, jan6: false, feb3: true, jun30: true, jul9: true, oct8: true, nov5: true, jun3: true, jun25app: true, jun25arn: true, jun25bud: true, mar31: true, apr15: true, sep26: true, jan6b: true, apr14: true, may12: true },
      speaker_turns: { dec3: 30, dec23: 12, jan7: 0, feb4: 169, apr8: 0, may6: 93, jun10: 81, jul22: 44, sep9: 55, sep30: 51, nov4: 58, dec2: 105, jan6: 0, feb3: 90, jun30: 11, jul9: 44, oct8: 171, nov5: 33, jun3: 28, jun25app: 1, jun25arn: 10, jun25bud: 28, mar31: 0, apr15: 0, sep26: 4, jan6b: 71, apr14: 10, may12: 39 },
      vote_alignment_with_mayor: 1.0,
      note: { he: "חבר מועצה בקואליציה. הצביע באופן עקבי עם ראש המועצה בנושא ההמלצה למניעת קיזוזי חובות. נמנע באישור פרוטוקול ישיבת התקציב משום שלא נכח בה (היה במילואים).", en: "Coalition member. Voted with the mayor on the disputed audit recommendation. Abstained on the Jan 6 budget protocol approval because he attended that meeting late (was on reserve duty)." }
    },
    {
      id: "avi-hadida",
      council_from: "2024-01-01", council_to: null,
      he: "אבי חדידה",
      en: "Avi Hadida",
      role: { he: "חבר מועצה", en: "Council Member" },
      attendance: { dec3: false, dec23: true, jan7: false, feb4: true, apr8: false, may6: true, jun10: false, jul22: false, sep9: true, sep30: true, nov4: true, dec2: true, jan6: true, feb3: false, jun30: true, jul9: true, oct8: false, nov5: true, jun3: false, jun25app: false, jun25arn: true, jun25bud: true, mar31: true, apr15: true, sep26: true, jan6b: true, apr14: false, may12: false },
      speaker_turns: { dec3: 0, dec23: 22, jan7: 0, feb4: 57, apr8: 0, may6: 13, jun10: 0, jul22: 0, sep9: 22, sep30: 74, nov4: 50, dec2: 155, jan6: 45, feb3: 0, jun30: 52, jul9: 48, oct8: 0, nov5: 256, jun3: 0, jun25app: 0, jun25arn: 6, jun25bud: 17, mar31: 0, apr15: 67, sep26: 5, jan6b: 47, apr14: 0, may12: 0 },
      vote_alignment_with_mayor: 0.0,
      note: { he: "יו\"ר ועדת ביקורת. ההתנגדות הברורה ביותר לראש המועצה: ההצבעה היחידה נגד תקציב 2026 (7:1). הציג את עצמו בפירוש כאופוזיציה, וטען שלא הוזמן לישיבת ההכנה לתקציב.", en: "Chair of audit committee. The single 'no' vote on the 2026 budget (7-1). Explicitly positioned himself as opposition, saying he was not invited to budget-preparation meetings (\"is this a coalition meeting?\")." }
    },
    {
      id: "dana-spiegel",
      council_from: "2024-10-08", council_to: null,
      he: "דנה שפיגל",
      en: "Dana Spiegel",
      role: { he: "חברת מועצה", en: "Council Member" },
      attendance: { dec3: true, dec23: true, jan7: true, feb4: true, apr8: true, may6: true, jun10: true, jul22: true, sep9: true, sep30: true, nov4: true, dec2: true, jan6: true, feb3: true, jun30: false, jul9: false, oct8: true, nov5: false, jun3: false, jun25app: false, jun25arn: false, jun25bud: false, mar31: false, apr15: false, sep26: true, jan6b: true, apr14: true, may12: true },
      speaker_turns: { dec3: 10, dec23: 8, jan7: 12, feb4: 14, apr8: 16, may6: 3, jun10: 23, jul22: 7, sep9: 4, sep30: 8, nov4: 13, dec2: 6, jan6: 1, feb3: 32, jun30: 0, jul9: 0, oct8: 9, nov5: 0, jun3: 0, jun25app: 0, jun25arn: 0, jun25bud: 0, mar31: 0, apr15: 0, sep26: 1, jan6b: 4, apr14: 3, may12: 13 },
      vote_alignment_with_mayor: 1.0,
      note: { he: "נוכחות מלאה. הצביעה עם ראש המועצה בכל ההצבעות, כולל הצבעת ההמלצה המחלוקתית של ועדת הביקורת.", en: "Perfect attendance. Voted with the mayor on every vote including the contested audit-committee recommendation." }
    },
    {
      id: "menachem-spitz",
      tenure: [["2024-03-01","2024-05-01"],["2024-10-01",null]],
      council_from: "2024-10-08", council_to: null,
      he: "מנחם שפיץ",
      en: "Menachem Spitz",
      role: { he: "חבר מועצה", en: "Council Member" },
      attendance: { dec3: true, dec23: true, jan7: true, feb4: false, apr8: true, may6: false, jun10: true, jul22: true, sep9: false, sep30: true, nov4: false, dec2: true, jan6: true, feb3: false, jun30: false, jul9: false, oct8: true, nov5: false, jun3: false, jun25app: false, jun25arn: false, jun25bud: false, mar31: true, apr15: true, sep26: true, jan6b: false, apr14: true, may12: true },
      speaker_turns: { dec3: 8, dec23: 15, jan7: 22, feb4: 0, apr8: 11, may6: 0, jun10: 77, jul22: 19, sep9: 0, sep30: 26, nov4: 0, dec2: 69, jan6: 51, feb3: 0, jun30: 0, jul9: 0, oct8: 88, nov5: 0, jun3: 0, jun25app: 0, jun25arn: 0, jun25bud: 0, mar31: 0, apr15: 0, sep26: 1, jan6b: 0, apr14: 7, may12: 6 },
      vote_alignment_with_mayor: 0.67,
      note: { he: "ביקש יחד עם אבי חדידה את הדיון על חוות עיטם. הצביע נגד עמדת ראש המועצה בנושא קיזוזי החובות, אך בעד תקציב 2026.", en: "Jointly with Avi Hadida requested the Eitam Farm discussion. Voted against the mayor's position on tax-offsets but supported the 2026 budget." }
    },
    {
      id: "avital-cohen",
      council_from: "2024-01-01", council_to: null,
      he: "אביטל כהן",
      en: "Avital Cohen",
      role: { he: "חברת מועצה", en: "Council Member" },
      attendance: { dec3: true, dec23: true, jan7: true, feb4: true, apr8: true, may6: true, jun10: true, jul22: true, sep9: true, sep30: false, nov4: true, dec2: true, jan6: true, feb3: false, jun30: true, jul9: true, oct8: true, nov5: false, jun3: true, jun25app: true, jun25arn: true, jun25bud: true, mar31: true, apr15: true, sep26: true, jan6b: true, apr14: true, may12: false },
      speaker_turns: { dec3: 25, dec23: 8, jan7: 16, feb4: 96, apr8: 57, may6: 45, jun10: 60, jul22: 10, sep9: 75, sep30: 0, nov4: 24, dec2: 52, jan6: 3, feb3: 0, jun30: 35, jul9: 54, oct8: 72, nov5: 0, jun3: 53, jun25app: 12, jun25arn: 15, jun25bud: 24, mar31: 2, apr15: 31, sep26: 2, jan6b: 30, apr14: 7, may12: 0 },
      vote_alignment_with_mayor: 1.0,
      note: { he: "חברת מועצה תומכת בקואליציה. הצביעה עם ראש המועצה בנושא הקיזוזים (\"אני עושה מה שחנני עושה\").", en: "Coalition member. Voted with the mayor on the audit-committee dispute (\"I'll do what Hanani does\")." }
    },
    {
      id: "ariella-perry",
      council_from: "2024-01-01", council_to: null,
      he: "אריאלה פרי",
      en: "Ariella Perry",
      role: { he: "חברת מועצה", en: "Council Member" },
      attendance: { dec3: true, dec23: true, jan7: true, feb4: true, apr8: true, may6: false, jun10: true, jul22: true, sep9: true, sep30: true, nov4: true, dec2: true, jan6: true, feb3: true, jun30: true, jul9: true, oct8: true, nov5: true, jun3: true, jun25app: true, jun25arn: true, jun25bud: true, mar31: true, apr15: true, sep26: true, jan6b: true, apr14: true, may12: true },
      speaker_turns: { dec3: 22, dec23: 8, jan7: 25, feb4: 54, apr8: 23, may6: 0, jun10: 36, jul22: 3, sep9: 9, sep30: 18, nov4: 10, dec2: 12, jan6: 4, feb3: 17, jun30: 11, jul9: 12, oct8: 40, nov5: 69, jun3: 5, jun25app: 0, jun25arn: 3, jun25bud: 1, mar31: 0, apr15: 12, sep26: 1, jan6b: 40, apr14: 2, may12: 32 },
      vote_alignment_with_mayor: 0.67,
      note: { he: "נוכחות מלאה. הצביעה נגד עמדת ראש המועצה בהמלצת ועדת ביקורת, אך בעד תקציב 2026. העלתה את שאלת הנגישות בשפה האנגלית בנושא מדיניות הטעינה.", en: "Perfect attendance. Voted against the mayor's position on the audit-committee recommendation, but supported the 2026 budget. Raised the accessibility-for-English-speakers concern during the EV-charging policy debate." }
    },
    {
      id: "yishai-fleisher",
      council_from: "2024-01-01", council_to: null,
      he: "ישי יעקב פליישר",
      en: "Yishai Fleisher",
      role: { he: "חבר מועצה", en: "Council Member" },
      attendance: { dec3: false, dec23: true, jan7: true, feb4: true, apr8: true, may6: true, jun10: false, jul22: true, sep9: false, sep30: true, nov4: true, dec2: true, jan6: true, feb3: true, jun30: true, jul9: true, oct8: true, nov5: true, jun3: false, jun25app: true, jun25arn: true, jun25bud: true, mar31: true, apr15: true, sep26: true, jan6b: true, apr14: true, may12: true },
      speaker_turns: { dec3: 0, dec23: 3, jan7: 8, feb4: 9, apr8: 16, may6: 14, jun10: 0, jul22: 13, sep9: 0, sep30: 4, nov4: 11, dec2: 21, jan6: 5, feb3: 18, jun30: 3, jul9: 7, oct8: 47, nov5: 30, jun3: 0, jun25app: 2, jun25arn: 3, jun25bud: 6, mar31: 0, apr15: 1, sep26: 2, jan6b: 3, apr14: 5, may12: 43 },
      vote_alignment_with_mayor: 0.67,
      note: { he: "נוכחות מלאה. הצביע נגד עמדת ראש המועצה בקיזוזים אך בעד תקציב 2026.", en: "Perfect attendance. Voted against the mayor's position on tax-offsets but supported the 2026 budget." }
    },
    {
      id: "shlomo-bentzvi",
      council_from: "2024-01-01", council_to: null,
      he: "שלמה בן צבי",
      en: "Shlomo Ben Tzvi",
      role: { he: "חבר מועצה", en: "Council Member" },
      attendance: { dec3: false, dec23: true, jan7: false, feb4: false, apr8: true, may6: true, jun10: true, jul22: false, sep9: false, sep30: true, nov4: true, dec2: true, jan6: false, feb3: true, jun30: true, jul9: true, oct8: true, nov5: true, jun3: false, jun25app: true, jun25arn: true, jun25bud: true, mar31: true, apr15: true, sep26: true, jan6b: false, apr14: false, may12: false },
      speaker_turns: { dec3: 0, dec23: 18, jan7: 0, feb4: 0, apr8: 0, may6: 1, jun10: 24, jul22: 0, sep9: 0, sep30: 19, nov4: 7, dec2: 22, jan6: 0, feb3: 17, jun30: 11, jul9: 15, oct8: 154, nov5: 42, jun3: 0, jun25app: 4, jun25arn: 36, jun25bud: 24, mar31: 0, apr15: 15, sep26: 1, jan6b: 0, apr14: 0, may12: 0 },
      vote_alignment_with_mayor: 0.5,
      note: { he: "החסיר את ישיבת התקציב. בחר במכוון \"לא משתתף\" באישור פרוטוקול ישיבת התקציב (לאחר שיונתן מרקוס הסביר את ההבדל בין \"נמנע\" ל\"לא משתתף\"). נמנע במדיניות הטעינה.", en: "Missed budget meeting. Deliberately chose \"not participating\" rather than \"abstain\" on approving the budget protocol (after the staff explained the procedural difference). Abstained on the EV-charging policy." }
    },
    {
      id: "talia-marcus",
      council_from: "2024-10-08", council_to: null,
      he: "טליה מרכוס",
      en: "Talia Marcus",
      role: { he: "חברת מועצה", en: "Council Member" },
      attendance: { dec3: true, dec23: true, jan7: true, feb4: true, apr8: true, may6: true, jun10: true, jul22: true, sep9: true, sep30: true, nov4: false, dec2: true, jan6: true, feb3: true, jun30: false, jul9: false, oct8: true, nov5: true, jun3: false, jun25app: false, jun25arn: false, jun25bud: false, mar31: false, apr15: false, sep26: true, jan6b: true, apr14: true, may12: false },
      speaker_turns: { dec3: 20, dec23: 3, jan7: 10, feb4: 55, apr8: 28, may6: 40, jun10: 35, jul22: 4, sep9: 32, sep30: 25, nov4: 0, dec2: 8, jan6: 10, feb3: 20, jun30: 0, jul9: 0, oct8: 41, nov5: 39, jun3: 0, jun25app: 0, jun25arn: 0, jun25bud: 0, mar31: 0, apr15: 0, sep26: 1, jan6b: 9, apr14: 0, may12: 0 },
      vote_alignment_with_mayor: 0.67,
      note: { he: "החסירה את ישיבת התקציב המקורית אך נכחה באישור הפרוטוקול. הובילה את התפילה במליאה. הצביעה נגד עמדת ראש המועצה בקיזוזים אך בעד תקציב 2026.", en: "Missed the original budget meeting but was present at protocol approval. Led the opening prayer in Dec. Voted against the mayor's position on the audit dispute but supported the 2026 budget." }
    },
    {
      id: "oded-ravivi",
      council_from: "2024-01-01", council_to: "2024-09-01",
      he: "עודד רביבי",
      en: "Oded Ravivi",
      role: { he: "חבר מועצה (לשעבר)", en: "Council Member (former)" },
      former: true,
      attendance: { dec3: false, dec23: false, jan7: false, feb4: false, apr8: false, may6: false, jun10: false, jul22: false, sep9: false, sep30: false, nov4: false, dec2: false, jan6: false, feb3: false, jun30: true, jul9: true, oct8: false, nov5: false, jun3: true, jun25app: true, jun25arn: true, jun25bud: true, mar31: true, apr15: true, sep26: false, jan6b: false, apr14: false, may12: false },
      speaker_turns: { dec3: 0, dec23: 0, jan7: 0, feb4: 0, apr8: 0, may6: 0, jun10: 0, jul22: 0, sep9: 0, sep30: 0, nov4: 0, dec2: 0, jan6: 0, feb3: 0, jun30: 60, jul9: 35, oct8: 0, nov5: 0, jun3: 40, jun25app: 24, jun25arn: 35, jun25bud: 57, mar31: 6, apr15: 50, sep26: 0, jan6b: 0, apr14: 0, may12: 0 },
      vote_alignment_with_mayor: 0.86,
      note: { he: "כיהן במועצה בשנת 2024 (מופיע בפרוטוקולים שלפני דצמבר 2024) — ראש המועצה לשעבר של אפרת. בישיבת 30.6.2024 היה ההצבעה היחידה נגד צו הארנונה החדש לחניון הקניון.", en: "Served on the council in 2024 (appears in the pre-December 2024 protocols) — a former mayor of Efrat. At the June 30, 2024 meeting he cast the only 'no' vote against the new mall-parking tax order." }
    },
    {
      id: "orit-samuels",
      council_from: "2024-01-01", council_to: "2024-09-01",
      he: "אורית סמואלס",
      en: "Orit Samuels",
      role: { he: "חברת מועצה (לשעבר)", en: "Council Member (former)" },
      former: true,
      attendance: { dec3: false, dec23: false, jan7: false, feb4: false, apr8: false, may6: false, jun10: false, jul22: false, sep9: false, sep30: false, nov4: false, dec2: false, jan6: false, feb3: false, jun30: false, jul9: false, oct8: false, nov5: false, jun3: true, jun25app: false, jun25arn: false, jun25bud: false, mar31: false, apr15: false, sep26: false, jan6b: false, apr14: false, may12: false },
      speaker_turns: { dec3: 0, dec23: 0, jan7: 0, feb4: 0, apr8: 0, may6: 0, jun10: 0, jul22: 0, sep9: 0, sep30: 0, nov4: 0, dec2: 0, jan6: 0, feb3: 0, jun30: 0, jul9: 0, oct8: 0, nov5: 0, jun3: 0, jun25app: 0, jun25arn: 0, jun25bud: 0, mar31: 0, apr15: 0, sep26: 0, jan6b: 0, apr14: 0, may12: 0 },
      vote_alignment_with_mayor: null,
      note: { he: "חברת מועצה בשנת 2024. נעדרה משתי הישיבות שתועדו בתקופת כהונתה (30.6 ו-9.7.2024).", en: "Council member in 2024. Was absent from both recorded meetings during her tenure (June 30 and July 9, 2024)." }
    },
    {
      id: "tamar-amar",
      council_from: "2024-01-01", council_to: "2024-09-01",
      he: "תמר עמר",
      en: "Tamar Amar",
      role: { he: "חברת מועצה (לשעבר)", en: "Council Member (former)" },
      former: true,
      attendance: { dec3: false, dec23: false, jan7: false, feb4: false, apr8: false, may6: false, jun10: false, jul22: false, sep9: false, sep30: false, nov4: false, dec2: false, jan6: false, feb3: false, jun30: false, jul9: true, oct8: false, nov5: false, jun3: false, jun25app: true, jun25arn: true, jun25bud: true, mar31: true, apr15: true, sep26: false, jan6b: false, apr14: false, may12: false },
      speaker_turns: { dec3: 0, dec23: 0, jan7: 0, feb4: 0, apr8: 0, may6: 0, jun10: 0, jul22: 0, sep9: 0, sep30: 0, nov4: 0, dec2: 0, jan6: 0, feb3: 0, jun30: 0, jul9: 21, oct8: 0, nov5: 0, jun3: 0, jun25app: 0, jun25arn: 2, jun25bud: 8, mar31: 0, apr15: 0, sep26: 0, jan6b: 0, apr14: 0, may12: 0 },
      vote_alignment_with_mayor: 1.0,
      note: { he: "חברת מועצה בשנת 2024. נכחה בישיבת 9.7.2024 והצביעה עם הרוב.", en: "Council member in 2024. Attended the July 9, 2024 meeting and voted with the majority." }
    },
    {
      id: "efrat-gantz",
      he: "אפרת גנטק",
      en: "Efrat Gantz",
      role: { he: "חבר מועצה (לשעבר)", en: "Council Member (former)" },
      former: true,
      council_from: "2024-01-01", council_to: "2024-05-01",
      attendance: { dec3: false, dec23: false, jan7: false, feb4: false, apr8: false, may6: false, jun10: false, jul22: false, sep9: false, sep30: false, nov4: false, dec2: false, jan6: false, feb3: false, jun30: false, jul9: false, oct8: false, nov5: false, jun3: false, jun25app: false, jun25arn: false, jun25bud: false, mar31: true, apr15: true, sep26: false, jan6b: false, apr14: false, may12: false },
      speaker_turns: { dec3: 0, dec23: 0, jan7: 0, feb4: 0, apr8: 0, may6: 0, jun10: 0, jul22: 0, sep9: 0, sep30: 0, nov4: 0, dec2: 0, jan6: 0, feb3: 0, jun30: 0, jul9: 0, oct8: 0, nov5: 0, jun3: 0, jun25app: 0, jun25arn: 0, jun25bud: 0, mar31: 0, apr15: 0, sep26: 0, jan6b: 0, apr14: 0, may12: 0 },
      vote_alignment_with_mayor: null,
      note: { he: "חברת מועצה במליאה שהושבעה במרץ 2024. נכחה בישיבת הכינון ובישיבת אפריל; אינה מופיעה בפרוטוקולים מיוני 2024 ואילך.", en: "A member of the council sworn in in March 2024. Attended the inaugural and April meetings; does not appear in the protocols from June 2024 onward." }
    },
    {
      id: "hanoch-wolfe",
      he: "חנוך וולפה",
      en: "Hanoch Wolfe",
      role: { he: "חבר מועצה (לשעבר)", en: "Council Member (former)" },
      former: true,
      council_from: "2024-01-01", council_to: "2024-05-01",
      attendance: { dec3: false, dec23: false, jan7: false, feb4: false, apr8: false, may6: false, jun10: false, jul22: false, sep9: false, sep30: false, nov4: false, dec2: false, jan6: false, feb3: false, jun30: false, jul9: false, oct8: false, nov5: false, jun3: false, jun25app: false, jun25arn: false, jun25bud: false, mar31: true, apr15: true, sep26: false, jan6b: false, apr14: false, may12: false },
      speaker_turns: { dec3: 0, dec23: 0, jan7: 0, feb4: 0, apr8: 0, may6: 0, jun10: 0, jul22: 0, sep9: 0, sep30: 0, nov4: 0, dec2: 0, jan6: 0, feb3: 0, jun30: 0, jul9: 0, oct8: 0, nov5: 0, jun3: 0, jun25app: 0, jun25arn: 0, jun25bud: 0, mar31: 0, apr15: 0, sep26: 0, jan6b: 0, apr14: 0, may12: 0 },
      vote_alignment_with_mayor: null,
      note: { he: "חבר מועצה במליאה שהושבעה במרץ 2024. נכח בישיבת הכינון ובישיבת אפריל; אינו מופיע בפרוטוקולים מיוני 2024 ואילך.", en: "A member of the council sworn in in March 2024. Attended the inaugural and April meetings; does not appear in the protocols from June 2024 onward." }
    },
    {
      id: "zeev-gershinsky",
      he: "זאב גרשינסקי",
      en: "Zeev Gershinsky",
      role: { he: "חבר מועצה (לשעבר)", en: "Council Member (former)" },
      former: true,
      council_from: "2024-01-01", council_to: "2024-05-01",
      attendance: { dec3: false, dec23: false, jan7: false, feb4: false, apr8: false, may6: false, jun10: false, jul22: false, sep9: false, sep30: false, nov4: false, dec2: false, jan6: false, feb3: false, jun30: false, jul9: false, oct8: false, nov5: false, jun3: false, jun25app: false, jun25arn: false, jun25bud: false, mar31: false, apr15: false, sep26: false, jan6b: false, apr14: false, may12: false },
      speaker_turns: { dec3: 0, dec23: 0, jan7: 0, feb4: 0, apr8: 0, may6: 0, jun10: 0, jul22: 0, sep9: 0, sep30: 0, nov4: 0, dec2: 0, jan6: 0, feb3: 0, jun30: 0, jul9: 0, oct8: 0, nov5: 0, jun3: 0, jun25app: 0, jun25arn: 0, jun25bud: 0, mar31: 0, apr15: 0, sep26: 0, jan6b: 0, apr14: 0, may12: 0 },
      vote_alignment_with_mayor: null,
      note: { he: "חבר מועצה ותיק (יו\"ר ועדת הביטחון, כ-6 שנים) וסמנכ\"ל בארגון נפש בנפש. נכלל ברשימת חברי המועצה בישיבת הכינון (31.3.2024) ובאפריל 2024, אך נעדר משתיהן. עזב את המועצה במהלך 2024 וקיבל פרידה רשמית (באיחור) בישיבת 8.4.2025.", en: "A veteran council member (chair of the security committee, ~6 years) and a deputy CEO of Nefesh B\u2019Nefesh. Listed among the council members at the March 31, 2024 inaugural and in April 2024, but absent from both. He left the council during 2024 and received a (belated) formal farewell at the April 8, 2025 meeting." }
    }
  ],

  meetings: [
    {
      id: "dec3",
      date: "2024-12-03",
      hebrew_date: "ב' בכסלו תשפ\"ה",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 9,
      absent: ["Avi Hadida", "Yishai Fleisher", "Shlomo Ben Tzvi"],
      total_speaker_turns: 210,
      agenda: [
        { num: 1, he: "אישור פרוטוקולים קודמים", en: "Approval of previous protocols",
          details: { he: "אושרו פרוטוקולים של ישיבות קודמות פה אחד.", en: "Previous meeting protocols approved unanimously." } },
        { num: 2, he: "סקירת מחלקת נוער", en: "Youth department review",
          details: { he: "הוצגה סקירה מקיפה של פעילות מחלקת הנוער ותכניות לשנת 2025.", en: "Comprehensive review of youth department activities and plans for 2025." } },
        { num: 3, he: "דיון בסולידריות חברתית", en: "Social solidarity discussion",
          details: { he: "דיון בהעמקת תחושת הסולידריות החברתית בקהילת אפרת בעת המלחמה.", en: "Discussion on strengthening community solidarity in Efrat during the war." } },
        { num: 4, he: "תב\"רים שונים", en: "Various capital budgets",
          details: { he: "אושרו מספר תב\"רים פה אחד.", en: "Several capital budgets approved unanimously." } }
      ]
    },
    {
      id: "dec23",
      date: "2024-12-23",
      hebrew_date: "כ\"ב בכסלו תשפ\"ה",
      title: { he: "ישיבה שלא מן המניין", en: "Extraordinary Council Meeting" },
      attendance_count: 11,
      absent: [],
      total_speaker_turns: 134,
      agenda: [
        { num: 1, he: "אישור תקציב 2025", en: "Budget 2025 approval",
          details: { he: "אושר תקציב 2025 בהצבעה. כל חברי המועצה נכחו.", en: "Budget 2025 approved by vote. All council members were present." } }
      ]
    },
    {
      id: "jan7",
      date: "2025-01-07",
      hebrew_date: "ז' בטבת תשפ\"ה",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 8,
      absent: ["Hanani Feigin", "Avi Hadida", "Shlomo Ben Tzvi"],
      total_speaker_turns: 220,
      agenda: [
        { num: 1, he: "אישור פרוטוקולים קודמים", en: "Approval of previous protocols",
          details: { he: "אושרו פרוטוקולים של ישיבות קודמות.", en: "Previous meeting protocols approved." } },
        { num: 2, he: "סקירת מחלקת רווחה", en: "Welfare department review",
          details: { he: "סקירת פעילות מחלקת הרווחה ותכניות לשנת 2025.", en: "Welfare department activity review and plans for 2025." } },
        { num: 3, he: "הארכת כהונת מנהל חינוך", en: "Extension of education director term",
          details: { he: "הוצע ואושר הארכת כהונת מנהל החינוך.", en: "Extension of the education director's term proposed and approved." } },
        { num: 4, he: "תב\"רים שונים", en: "Various capital budgets",
          details: { he: "אושרו מספר תב\"רים פה אחד.", en: "Several capital budgets approved unanimously." } }
      ]
    },
    {
      id: "feb4",
      date: "2025-02-04",
      hebrew_date: "ו' בשבט תשפ\"ה",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 9,
      absent: ["Shlomo Ben Tzvi", "Menachem Spitz"],
      total_speaker_turns: 690,
      agenda: [
        { num: 1, he: "דבר תורה", en: "Torah teaching",
          details: { he: "דבר תורה לפתיחת הישיבה.", en: "An opening Torah teaching." } },
        { num: 2, he: "תפילה לשלום הפצועים והחטופים", en: "Prayer for the wounded and the hostages",
          details: { he: "תפילה לשלום הפצועים והחטופים.", en: "A prayer for the wounded and the hostages." } },
        { num: 3, he: "סקירת אגף הון אנושי — חגית שמואלי", en: "Human-resources department review — Hagit Shmueli",
          details: { he: "מנהלת אגף ההון האנושי, חגית שמואלי, הציגה סקירה של פעילות האגף. ללא הצבעה.", en: "HR department head Hagit Shmueli presented a review of the department's work. No vote." } },
        { num: 4, he: "מינוי יו\"ר לוועדת ביקורת", en: "Appoint audit-committee chair",
          details: { he: "אבי חדידה נבחר ליו\"ר ועדת הביקורת ושלמה בן צבי כחבר. אושר פה אחד.", en: "Avi Hadida appointed audit-committee chair and Shlomo Ben Tzvi as a member. Approved unanimously." } },
        { num: 5, he: "מינוי חברי מועצה דתית וועדת פיקוח", en: "Appoint Religious-Council members and oversight committee",
          details: { he: "אבי חדידה וישי יעקב פליישר מונו לוועדת הפיקוח (אושר פה אחד); כל חברי המועצה ישמשו בוועדת הבחירה לרב.", en: "Avi Hadida and Yishai Fleisher were appointed to the oversight committee (approved unanimously); all council members will serve on the rabbi-selection committee." } },
        { num: 6, he: "אישור פרוטוקול ישיבה שלא מן המניין 23.12.2024", en: "Approval of the Dec 23, 2024 extraordinary protocol",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." } },
        { num: 7, he: "אישור פרוטוקול ישיבת 07.01.2025", en: "Approval of the Jan 7, 2025 protocol",
          details: { he: "אושר ברוב קולות; אבי חדידה וחנני פייגין נמנעו (שניהם לא נכחו באותה ישיבה).", en: "Approved by majority; Avi Hadida and Hanani Feigin abstained (neither had attended that meeting)." } },
        { num: 8, he: "שמות רחובות", en: "Street names",
          details: { he: "המועצה התנגדה פה אחד לשינויי שמות הרחובות שהוצעו, וביקשה מוועדת השמות להמשיך עם השמות הקיימים.", en: "The council unanimously opposed the proposed street-name changes and asked the Names Committee to keep the existing names." } },
        { num: 9, he: "חוק עזר אגרת שילוט", en: "Signage fee by-law",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." } },
        { num: 10, he: "מסכי פרסום", en: "Advertising screens",
          details: { he: "אושר פה אחד, למרות התלבטות אם הרשות מוותרת על הכנסות לטובת המתנ\"ס.", en: "Approved unanimously, despite debate over whether the council was foregoing revenue in favor of the community center." } },
        { num: 11, he: "טיוטת חזון למליאה", en: "Draft vision statement for the plenum",
          details: { he: "הוצגה טיוטת חזון לדיון; חנני פייגין העיר על הערות שנכרכו בטקסט. דיון, ללא הצבעה פורמלית.", en: "A draft vision statement was presented for discussion; Hanani Feigin commented on remarks embedded in the text. Discussion, with no formal vote." } },
        { num: 12, he: "תב\"רים", en: "Capital budgets (TaBaRs)",
          details: { he: "תב\"ר 888 (רכב קב\"ט ביטחון) אושר ברוב קולות — אביטל כהן נגד; תב\"ר 309 (טרקטורון כיבוי אש) אושר פה אחד.", en: "TaBaR 888 (security-officer vehicle) approved by majority — Avital Cohen against; TaBaR 309 (firefighting ATV) approved unanimously." } },
        { num: 13, he: "עדכוני ראש המועצה", en: "Mayor's updates",
          details: { he: "סקירת עדכונים שוטפים של ראש המועצה.", en: "The mayor's running updates." } }
      ]
    },
    {
      id: "apr8",
      date: "2025-04-08",
      hebrew_date: "י' ניסן התשפ\"ה",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 8,
      absent: ["Tzuri Dotan", "Hanani Feigin", "Avi Hadida"],
      total_speaker_turns: 264,
      agenda: [
        { num: 1, he: "תפילה לשלום הפצועים והחטופים", en: "Prayer for the wounded and hostages",
          details: { he: "תפילה.", en: "Standard opening prayer." } },
        { num: 2, he: "דבר תורה", en: "Torah teaching",
          details: { he: "דברי תורה לפסח.", en: "Pesach-themed Torah teaching." } },
        { num: 3, he: "אישור פרוטוקול ישיבת 4.3.25", en: "Approval of Mar 4 protocol",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." } },
        { num: 4, he: "פתיחת חשבון בנק לבית ספר החווה החקלאית", en: "Open bank account for Agricultural Farm school",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." } },
        { num: 5, he: "אישור יו\"ר וחברי ועדת שמות", en: "Approve Names Committee chair and members",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." } },
        { num: 6, he: "תוספת לקריטריונים להנצחת חללים ושביל הגבורה", en: "Addition to criteria for memorializing fallen and the Heroism Path",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." } },
        { num: 7, he: "צירוף אריאלה פרי לוועדת הנצחה", en: "Add Ariella Perry to memorial committee",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." } },
        { num: 8, he: "עדכוני ראש המועצה", en: "Mayor updates",
          details: { he: "עדכונים על תכנון, פעולות שוטפות, וחגי פסח.", en: "Updates on planning, ongoing operations, and Passover holidays." } }
      ]
    },
    {
      id: "may6",
      date: "2025-05-06",
      hebrew_date: "ח' אייר התשפ\"ה",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 9,
      absent: ["Menachem Spitz", "Ariella Perry"],
      total_speaker_turns: 384,
      agenda: [
        { num: 1, he: "תפילה לשלום הפצועים והחטופים", en: "Prayer for the wounded and hostages",
          details: { he: "תפילה.", en: "Standard opening prayer." } },
        { num: 2, he: "אישור פרוטוקול ישיבת 8.4.25", en: "Approval of Apr 8 protocol",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." } },
        { num: 3, he: "מיחזור הלוואה בסך 14.5 מיליון ש\"ח", en: "Refinance ₪14.5M loan",
          details: { he: "המועצה מיחזרת הלוואה קיימת. אושר פה אחד.", en: "Council refinances an existing loan. Approved unanimously." } },
        { num: 4, he: "תב\"ר 11.26 מיליון ש\"ח - שיקום דרכי", en: "TaBaR ₪11.26M — road rehabilitation",
          details: { he: "תב\"ר משמעותי לשיקום דרכים. אושר פה אחד.", en: "Major capital budget for road rehabilitation. Approved unanimously." } },
        { num: 5, he: "תב\"ר עיצוב ושיפור חזית", en: "TaBaR — facade design and improvement",
          details: { he: "אושר ברוב קולות (7 בעד, 2 נמנעו).", en: "Approved by majority (7 for, 2 abstain)." } },
        { num: 6, he: "החלפת מזכירת בית הספר תמר", en: "Replace Tamar school secretary",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." } },
        { num: 7, he: "שינויים בוועדת השמות", en: "Changes to Names Committee",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." } },
        { num: 8, he: "החלפת חבר הנהלת המתנ\"ס", en: "Replace community center board member",
          details: { he: "אושר ברוב קולות; שלמה בן צבי נמנע.", en: "Approved by majority; Shlomo Ben Tzvi abstained." } },
        { num: 9, he: "מינוי שלמה בן צבי וצורי דותן לוועדת מכרזים", en: "Appoint Shlomo Ben Tzvi and Tzuri Dotan to selection committee",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." } },
        { num: 10, he: "הארכת חוק עזר ביוב עד 31.12.2025", en: "Extend sewage by-law through Dec 31, 2025",
          details: { he: "אושר.", en: "Approved." } },
        { num: 11, he: "אישור חברי ועדת כספים", en: "Approve finance committee members",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." } },
        { num: 12, he: "עדכוני ראש המועצה", en: "Mayor updates",
          details: { he: "עדכונים על תכנון, פעולות שוטפות.", en: "Updates on planning and ongoing operations." } }
      ]
    },
    {
      id: "jun10",
      date: "2025-06-10",
      hebrew_date: "י\"ד סיון התשפ\"ה",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 9,
      absent: ["Avi Hadida", "Yishai Fleisher"],
      total_speaker_turns: 592,
      agenda: [
        { num: 1, he: "תפילה לשלום הפצועים והחטופים", en: "Prayer for the wounded and hostages",
          details: { he: "טליה מרכוס הקריאה את התפילה.", en: "Talia Marcus recited the prayer." }
        },
        { num: 2, he: "דבר תורה", en: "Torah teaching",
          details: { he: "ראש המועצה נשא דבר תורה.", en: "The mayor delivered the Torah teaching." }
        },
        { num: 3, he: "הוקרה ליונה בוגנר", en: "Tribute to Yona Bogner",
          details: { he: "טקס הוקרה למשפחת בוגנר וליונה בוגנר על תרומה ארוכת שנים לאפרת.", en: "Tribute ceremony for the Bogner family and Yona Bogner for years of contribution to Efrat." }
        },
        { num: 4, he: "הצגת הספרייה", en: "Library presentation",
          details: { he: "שולמית מרציאנו, מנהלת הספרייה, הציגה את פעילות הספרייה ותכניות עתידיות.", en: "Library director Shulamit Marciano presented the library's activities and future programs." }
        },
        { num: 5, he: "שבוע הוקרה לחיילי המילואים", en: "Reservists' Appreciation Week",
          details: { he: "דיון על תכנון שבוע הוקרה לחיילי המילואים מאפרת. הוצגו פעילויות מתוכננות.", en: "Discussion of a planned appreciation week for Efrat reservists. Planned activities were presented." }
        },
        { num: 6, he: "סקר מיפוי צרכים - מועצת הנוער", en: "Youth-council needs survey",
          details: { he: "אורי שיין, יו\"ר מועצת הנוער, הציג סקר מיפוי צרכי הנוער באפרת. נדונו המסקנות והשלכותיהן.", en: "Ori Shein, Youth Council chair, presented a survey mapping youth needs in Efrat. Conclusions and implications were discussed." }
        },
        { num: 7, he: "שער העיר - דיון תיירותי", en: "City Gate — tourism discussion",
          details: { he: "יועצי התיירות חזקי בצלאל ואילן בן יוסף הציגו את פרויקט שער העיר. דיון נרחב על תוכניות עתידיות, הקמת מלון, ומדיניות תיירות. לא התקבלה החלטה.", en: "Tourism consultants Chizki Betzalel and Ilan Ben Yosef presented the City Gate project. Extended discussion of future plans, hotel construction, and tourism policy. No decision was reached." }
        },
        { num: 8, he: "אישור פרוטוקול 6.5.25", en: "Approval of May 6 protocol",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." }
        },
        { num: 9, he: "תב\"ר - תנועת העזרא בתמר", en: "TaBaR — Ezra Youth Movement in Tamar",
          details: { he: "תב\"ר בסך 1,844,375 ש\"ח לתנועת העזרא בשכונת תמר. אושר פה אחד.", en: "Capital budget of ₪1,844,375 for the Ezra youth movement in Tamar neighborhood. Approved unanimously." }
        },
        { num: 10, he: "הצגת נושא מכינת נטע שורק", en: "Netah Sorek pre-army academy",
          details: { he: "הצגת התקדמות מול מכינת נטע שורק שמתכוונת לפעול בשכונת תמר. אושר פה אחד לפעול ב-3 מישורים: לפנות, לבדוק, ולקבוע מדיניות.", en: "Update on the Netah Sorek pre-army academy planning to operate in the Tamar neighborhood. Approved unanimously to act on 3 fronts: outreach, due diligence, and policy-setting." }
        },
        { num: 11, he: "שינוי תאריך ישיבת המועצה הבאה", en: "Reschedule next meeting",
          details: { he: "הוצע לדחות את ישיבת יולי ל-15.7. הצבעה: 7 בעד, צורי דותן נגד, חנני פייגין נמנע. (מאוחר יותר הוסכם על 22.7 ברוב מלא של החברים.)", en: "Proposed to push the July meeting to July 15. Vote: 7 for, Tzuri Dotan against, Hanani Feigin abstained. (Later rescheduled by full consent to July 22.)" }
        },
        { num: 12, he: "הארכת כהונת ראש אגף החינוך יוסי קרוטמר עד סוף 2025", en: "Extend Education Dept head Yossi Krotmer through end of 2025",
          details: { he: "אמיר בן גל נבחר להחליף את יוסי קרוטמר, אך יתחיל רק באוגוסט. אושר פה אחד להאריך את כהונת יוסי קרוטמר עד סוף דצמבר 2025 כדי לאפשר חפיפה.", en: "Amir Ben Gal was selected to replace Yossi Krotmer but will only start in August. Approved unanimously to extend Krotmer's tenure through end of Dec 2025 to allow handover." }
        },
        { num: 13, he: "עדכוני ראש המועצה", en: "Mayor updates",
          details: { he: "עדכונים על תכנון, פעולות שוטפות וגיוס מענקים.", en: "Updates on planning, operations, and grant-raising." }
        }
      ]
    },
    {
      id: "jul22",
      date: "2025-07-22",
      hebrew_date: "כ\"ו תמוז התשפ\"ה",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 8,
      absent: ["Tzuri Dotan", "Shlomo Ben Tzvi", "Avi Hadida"],
      total_speaker_turns: 167,
      agenda: [
        { num: 1, he: "הוקרה לפרופ' אהרון דמסקי", en: "Tribute to Prof. Aharon Damski",
          details: {
            he: "ראש המועצה ציין 40 שנות שירות של פרופ' אהרון דמסקי בוועדת השמות של אפרת. דמסקי הוביל את התיק שאישר את שינוי שם היישוב מ\"אפרתה\" ל\"אפרת\". מיכאל גרוס, יו\"ר ועדת השמות 40 שנה, התלווה. ניתנה לדמסקי תעודת הוקרה.",
            en: "The mayor recognized Prof. Aharon Damski for 40 years on Efrat's Names Committee. Damski led the file that gained government approval to change the town's name from 'Efrata' to 'Efrat'. Michael Gross, who has chaired the Names Committee for 40 years, joined. A certificate of appreciation was awarded to Damski."
          }
        },
        { num: 2, he: "תפילה לשלום הפצועים והחטופים", en: "Prayer for the wounded and hostages",
          details: { he: "טליה מרכוס וחנני פייגין הקריאו את התפילות הקבועות.", en: "Talia Marcus and Hanani Feigin recited the standing prayers." }
        },
        { num: 3, he: "דבר תורה", en: "Torah teaching",
          details: { he: "ראש המועצה נשא דבר תורה.", en: "The mayor delivered the Torah teaching." }
        },
        { num: 4, he: "הסדרת תנועה בצומת דוד המלך-רחל אימנו", en: "Traffic regulation at the David HaMelech / Rachel Imenu junction",
          details: {
            he: "מהנדסת המועצה רחל אשר-הרוש הציגה תוכנית להסדרת התנועה בצומת בעייתי. מנחם שפיץ העיר ש\"אנשים בכל זאת לא עושים את זה\" (לא ממלאים אחר חוקי תנועה). אושר פה אחד.",
            en: "Council engineer Rachel Asher-Harush presented a plan to regulate traffic at a problematic junction. Menachem Spitz remarked that 'people still don't do this' (don't follow traffic rules). Approved unanimously."
          }
        },
        { num: 5, he: "אישור פרוטוקול ישיבת 10.6.25", en: "Approval of June 10 meeting protocol",
          details: { he: "חנני ואביטל ציינו שהפרוטוקול ארוך מדי, אך אישרו פה אחד.", en: "Hanani and Avital noted the protocol was overly long, but approved unanimously." }
        },
        { num: 6, he: "אישור מינוי ושכר מנהל אגף חינוך - אמיר בן גל", en: "Approval of Amir Ben Gal as Education Department head",
          details: { he: "מינוי רשמי של אמיר בן גל למנהל אגף החינוך, כולל אישור שכר. אושר פה אחד.", en: "Formal appointment of Amir Ben Gal as head of the Education Department, including salary. Approved unanimously." }
        },
        { num: 7, he: "אישור מינוי ושכר מבקרת המועצה - נעה דניאל", en: "Approval of Noa Daniel as council auditor",
          details: { he: "אישור פורמלי של מינויה ושכרה של נעה דניאל למבקרת המועצה. אושר פה אחד. (היא נכנסה לתפקיד בפועל ב-21.10).", en: "Formal approval of Noa Daniel's appointment and salary as council auditor. Approved unanimously. (She would actually start on Oct 21.)" }
        },
        { num: 8, he: "עדכון תאריך ישיבת מועצה (2.9 → 9.9)", en: "Reschedule next council meeting (Sep 2 → Sep 9)",
          details: { he: "הסעיף הבא, ישיבת ספטמבר, נדחתה משבוע. אושר פה אחד.", en: "The next meeting was pushed back one week. Approved unanimously." }
        },
        { num: 9, he: "תב\"ר 924 - הנגשת אמות המים", en: "TaBaR 924 — Roman aqueducts accessibility",
          details: { he: "תב\"ר להנגשת אמות המים העתיקות באפרת. דיון על תיירות והנגשה. אושר פה אחד.", en: "Capital budget for making Efrat's ancient Roman aqueducts accessible. Discussion of tourism. Approved unanimously." }
        },
        { num: 10, he: "תב\"ר 869 - השמשת קומת המועצה בסנטר אפרת", en: "TaBaR 869 — fitting out the council floor at the Efrat Center",
          details: { he: "תב\"ר להשמשת קומת משרדי המועצה בסנטר אפרת. אושר פה אחד.", en: "Capital budget to fit out the council-office floor at the Efrat Center. Approved unanimously." }
        },
        { num: 11, he: "עדכוני ראש מועצה", en: "Mayor updates",
          details: { he: "דיון על תכנון מורדות הזית; ישי פליישר שאל \"מה זו החלטה? מי החליט?\" לגבי בחירת חלופה תכנונית.", en: "Discussion of Mordot HaZayit planning; Yishai Fleisher pressed: 'what does \"decision\" mean? who decided?' about the chosen planning alternative." }
        }
      ]
    },
    {
      id: "sep9",
      date: "2025-09-09",
      hebrew_date: "ט\"ז באלול התשפ\"ה",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 8,
      absent: ["Yishai Fleisher", "Menachem Spitz", "Shlomo Ben Tzvi"],
      total_speaker_turns: 347,
      agenda: [
        { num: 1, he: "תפילה לשלום הפצועים והחטופים", en: "Prayer for the wounded and hostages",
          details: { he: "טליה מרכוס וחנני פייגין הקריאו את התפילות. טליה הוסיפה: \"בתפילה שלא נגיד את זה שוב בישיבה הבאה\".", en: "Talia Marcus and Hanani Feigin recited the standing prayers. Talia added: 'praying we won't have to say this again at the next meeting.'" }
        },
        { num: 2, he: "דבר תורה", en: "Torah teaching",
          details: { he: "טליה מרכוס נשאה דבר תורה.", en: "Talia Marcus delivered the Torah teaching." }
        },
        { num: 3, he: "עדכוני פתיחת שנת הלימודים - אמיר בן גל", en: "School-year opening update — Amir Ben Gal",
          details: { he: "מנהל אגף החינוך אמיר בן גל סקר את פתיחת שנת הלימודים: מספרי תלמידים, צוותי הוראה, אתגרים, ובניית כיתות חדשות.", en: "Education Department head Amir Ben Gal reviewed the opening of the school year: student counts, teaching staff, challenges, and new classroom construction." }
        },
        { num: 4, he: "דו\"ח כספי המתנ\"ס ופרידה מיצחק בדנר", en: "Community-center financial report and farewell to Yitzhak Bednar",
          details: { he: "מנהל המתנ\"ס היוצא יצחק בדנר הציג דוח כספי לפני סיום תפקידו. עלה דיון על קרן מתקנים והניהול הכלכלי של המתנ\"ס.", en: "Outgoing community-center director Yitzhak Bednar presented a financial report ahead of his departure. Discussion of the facilities fund and the center's financial management." }
        },
        { num: 5, he: "אישור פרוטוקול ישיבת 22.7.25", en: "Approval of July 22 protocol",
          details: { he: "אבי חדידה נמנע (\"לא הייתי כאן, אבל למרות שעקבתי\"). שאר הנוכחים הצביעו בעד. רמ\"ט המועצה ציין: \"הפרוטוקול הכי מהיר שאושר מאז\".", en: "Avi Hadida abstained ('I wasn't there, though I followed along'). The others voted in favor. The chief of staff quipped: 'the fastest protocol approval to date.'" }
        },
        { num: 6, he: "תב\"ר 927 - 12K ש\"ח מזהירות בדרכים", en: "TaBaR 927 — ₪12K from Road Safety Authority",
          details: { he: "סכום צנוע ממענק זהירות בדרכים. אושר פה אחד.", en: "A ₪12K grant from the Road Safety Authority. Approved unanimously." }
        },
        { num: 7, he: "תב\"ר 928-111508 - קייטנות חופש קיץ", en: "TaBaR 928-111508 — summer camp funding",
          details: { he: "תב\"ר למימון קייטנות לחופש הקיץ. אביטל כהן הצביעה נגד והסבירה: רישום ל\"קייטנת חופש\" עובד בשיטת \"כל הקודם זוכה\" שהיא \"זוועה\" ולא הוגנת לילדים עם צרכים מיוחדים, חד-הוריות ומחוננים. ההצבעה הסתיימה ברוב קולות עם 1 נגד.", en: "Capital budget for funding summer camps. Avital Cohen voted against and explained: registration for 'free camps' is first-come-first-served which is 'horrible' and unfair to children with special needs, single-parent families, and gifted children. Passed by majority with 1 against." }
        },
        { num: 8, he: "עדכוני ראש המועצה", en: "Mayor updates",
          details: { he: "ראש המועצה דיווח על אזעקה חריגה אתמול (כלי טייס) שבה הנחיות פיקוד העורף לא היו מדויקות. דיון על שיפור התיאום.", en: "The mayor reported an unusual aerial alert the night before; Home Front Command's real-time guidance had been inaccurate. Discussion of better coordination." }
        }
      ]
    },
    {
      id: "sep30",
      date: "2025-09-30",
      hebrew_date: "ח' בתשרי התשפ\"ו",
      title: { he: "ישיבת מועצה מן המניין (ראש המועצה נעדר)", en: "Regular Council Meeting (Mayor absent)" },
      attendance_count: 9,
      absent: ["Avital Cohen", "Dovi Shefler (Mayor)"],
      total_speaker_turns: 354,
      chaired_by: "tzuri-dotan",
      agenda: [
        { num: 1, he: "תפילה לשלום הפצועים והחטופים", en: "Prayer for the wounded and hostages",
          details: {
            he: "צורי דותן ניהל את הישיבה (ראש המועצה נעדר). פתיחה: איחולי החלמה לפצועי הפיגוע בצומת אלח'דר ולחייל אפרת שנפצע בעזה. טליה מרכוס הקריאה תפילה לשבויים ולחטופים, חנני פייגין הקריא תפילה לחיילי צה\"ל.",
            en: "Tzuri Dotan chaired (Mayor absent). Opened with wishes for recovery to those wounded in the Al-Khader Junction attack and to an Efrat resident wounded in Gaza. Talia Marcus recited the prayer for the captives and hostages; Hanani Feigin recited the prayer for IDF soldiers."
          }
        },
        { num: 2, he: "דבר תורה", en: "Torah teaching",
          details: {
            he: "הגזבר שרון הורוביץ נשא דברי תורה לקראת יום כיפור, על המתח בין \"לא ייקח שוחד\" (אלוקים לא מקבל \"שוחד\" של מצוות חלקיות) ל-\"ויחנך וישא ה' פניו אליך\". הדגיש את כוחה של ברכת המזון כדוגמה להידור מצווה.",
            en: "Treasurer Sharon Horowitz delivered a Yom Kippur–themed Torah teaching, exploring the tension between \"He will not take a bribe\" (G-d does not accept partial mitzvot as payment) and \"may His face shine upon you.\" Highlighted Birkat Hamazon as an example of mitzvah enhancement."
          }
        },
        { num: 3, he: "הצגת \"אפרת בקליק\" - הקניון הדיגיטלי של אפרת", en: "Presentation: \"Efrat BeClick\" - Efrat's digital marketplace",
          details: {
            he: "טובית לייכטר (מנהלת המחלקה לקידום ורישוי עסקים) וגידי פייטן (יועץ אסטרטגי) הציגו את \"אפרת בקליק\" — אפליקציה/קניון דיגיטלי לעסקים מקומיים. המיזם הוקם במסגרת מענק של משרד הפנים. הוצג סרטון של האפליקציה. הוצגה תוכנית עבודה ומימון.",
            en: "Tovit Leichter (Head of Business Promotion & Licensing) and Gidi Faytan (organizational consultant) presented \"Efrat BeClick\" — an app / digital marketplace for local businesses. Funded through an Interior Ministry grant. A video of the app was shown along with the work plan and budget."
          }
        },
        { num: 4, he: "עדכון תקציב 2025 - קיצוץ ל-137,790,000 ש\"ח", en: "2025 Budget Update — cut to ₪137,790,000",
          details: {
            he: "הסעיף הכי שנוי במחלוקת בישיבה. בעקבות דיון במשרד הפנים, נדרשת התאמת תקציב 2025 כלפי מטה. ההצבעה התקיימה ברוב פשוט בלבד: 5 בעד (צורי, חנני, אריאלה, מנחם, ישי), 2 נגד (שלמה בן צבי, אבי חדידה), 2 נמנעו (דנה, טליה). זה אחד מארבעת המקרים הבודדים שבהם המועצה הצביעה לא פה-אחד, ושנים מההצבעות נגד היו של חברים שטעו טוב יותר את הקיצוץ.",
            en: "The most contested item of the meeting. Following a discussion at the Interior Ministry, an adjustment of the 2025 budget downward was required. Vote: 5 for (Tzuri, Hanani, Ariella, Menachem, Yishai), 2 against (Shlomo, Avi Hadida), 2 abstain (Dana, Talia). One of only a handful of split votes recorded."
          }
        },
        { num: 5, he: "אישור פרוטוקול ישיבת מועצה שלא מן המניין (25.9.25)", en: "Approval of Sep 25 extraordinary meeting protocol",
          details: {
            he: "הצבעה על אישור פרוטוקול ישיבת זום שלא מן המניין שהתקיימה ב-25.9. חנני העלה הסתייגויות לגבי דיוק רישום הפרוטוקול. הוחלט להחזיר את הסעיף בהמשך הישיבה לאחר עיון נוסף.",
            en: "Vote to approve protocol of the Sep 25 extraordinary Zoom session. Hanani raised concerns about the accuracy of the transcription. The item was deferred to later in the meeting for further review."
          }
        },
        { num: 6, he: "אישור הצטרפות לתוכנית \"ערים בריאות\"", en: "Joining the \"Healthy Cities\" program",
          details: {
            he: "אפרת מצטרפת רשמית לרשת \"ערים בריאות\" של ארגון הבריאות העולמי — תוכנית לקידום אורח חיים בריא ברשויות מקומיות. אושר פה אחד.",
            en: "Efrat formally joins the WHO's \"Healthy Cities\" network — a program promoting healthy-lifestyle initiatives at the municipal level. Approved unanimously."
          }
        },
        { num: 7, he: "אישור שינוי מורשי חתימה", en: "Change of authorized signatories",
          details: {
            he: "עדכון רשימת מורשי החתימה של המועצה. אושר פה אחד.",
            en: "Update of the council's list of authorized signatories. Approved unanimously."
          }
        },
        { num: 8, he: "אישור תמר שרייגר ליו\"ר ועדת תחבורה ותנועה", en: "Tamar Schreiger as chair of the Transportation & Traffic Committee",
          details: {
            he: "אישור מינוייה של תמר שרייגר ליו\"ר ועדת התחבורה והתנועה. אושר פה אחד.",
            en: "Appointment of Tamar Schreiger as chair of the Transportation & Traffic Committee. Approved unanimously."
          }
        },
        { num: 9, he: "אישור פרוטוקול ישיבת מועצה שלא מן המניין (חזרה)", en: "Approval of Sep 25 protocol (returning to the item)",
          details: {
            he: "חזרה לסעיף 5. הפרוטוקול אושר ברוב קולות. טליה מרכוס העלתה הצעה לקיים ישיבות זום ב-Teams במקום, כי יש שם תמלול אוטומטי.",
            en: "Returned to item 5. Protocol approved by majority. Talia Marcus suggested holding future Zoom meetings on Teams instead, because Teams offers automatic transcription."
          }
        },
        { num: 10, he: "תב\"ר 929 - מערכות LPR לשערי היישוב", en: "TaBaR 929 — LPR (license-plate recognition) systems at settlement gates",
          details: {
            he: "תב\"ר נוסף למערכות זיהוי לוחיות רישוי (LPR) בשערי היישוב. אבי חדידה הקפיד: \"פה אחד, לא רוב קולות\" — והפרוטוקול תוקן בהתאם. אושר פה אחד.",
            en: "Additional budget for license-plate recognition (LPR) systems at settlement gates. Avi Hadida insisted on correcting the protocol: \"unanimous, not majority.\" Approved unanimously."
          }
        },
        { num: 11, he: "עדכוני ראש המועצה", en: "Mayor updates (delivered by deputy)",
          details: {
            he: "צורי דותן הציג עדכונים בהיעדר ראש המועצה. דיון על שירותי הקליטה, פרויקטים בתכנון, ועוד.",
            en: "Tzuri Dotan presented updates in the mayor's absence. Discussion of absorption services, projects in planning, and more."
          }
        }
      ]
    },
    {
      id: "nov4",
      date: "2025-11-04",
      hebrew_date: "י\"ג חשוון התשפ\"ו",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 9,
      absent: ["Menachem Spitz", "Talia Marcus"],
      total_speaker_turns: 312,
      agenda: [
        { num: 1, he: "תפילה לשלום הפצועים והחללים החטופים", en: "Prayer for wounded, fallen, and hostages",
          details: {
            he: "ראש המועצה פתח בציון שאין יותר צורך להתפלל לשובם של החטופים, רק להחזרת החללים לקבר ישראל. בהיעדר טליה מרכוס, חנני פייגין הקריא את התפילה.",
            en: "Mayor opened by noting that prayer is no longer needed for the return of the hostages, only for bringing the fallen to burial in Israel. With Talia Marcus absent, Hanani Feigin recited the prayer."
          }
        },
        { num: 2, he: "דבר תורה", en: "Torah teaching",
          details: {
            he: "אריאלה פרי נשאה דברי תורה (בדרך כלל ראש המועצה נושא דברי תורה).",
            en: "Ariella Perry delivered the Torah teaching; the mayor usually delivers it."
          }
        },
        { num: 3, he: "היכרות עם המבקרת החדשה - נעה דניאל", en: "Introduction of the new auditor — Noa Daniel",
          details: {
            he: "נעה דניאל הוצגה כמבקרת החדשה של המועצה, לאחר תקופה ארוכה ללא מבקר (ליקוי שצוין בדו\"ח משרד הפנים). היא נכנסה לתפקיד ב-21.10.2025.",
            en: "Noa Daniel was introduced as the council's new auditor, after a long period without one (a deficiency noted in the Interior Ministry's report). She started on Oct 21, 2025."
          }
        },
        { num: 4, he: "אישור עבודה נוספת של נעה דניאל (קריית ארבע-חברון)", en: "Approval of Noa Daniel's additional work (Kiryat Arba-Hebron)",
          details: {
            he: "נעה דניאל משמשת גם מבקרת של מועצת קריית ארבע-חברון. הסעיף מאשר רשמית את שני התפקידים בו זמנית. אושר פה אחד.",
            en: "Noa Daniel also serves as auditor for the Kiryat Arba-Hebron Council. This item formally approves her holding both positions. Approved unanimously."
          }
        },
        { num: 5, he: "אישור פרוטוקול ישיבת מועצה 9.9.25", en: "Approval of Sep 9 meeting protocol",
          details: {
            he: "חנני פייגין העלה הסתייגויות לגבי אופן רישום הפרוטוקול במקרים של דיבור חופף בין חברים. ראש המועצה הציע שכל חבר ישלח תיקונים למזכירה אוריטל.",
            en: "Hanani Feigin raised concerns about how overlapping speech is transcribed in the protocol. Mayor suggested members send corrections to secretary Orital."
          }
        },
        { num: 6, he: "אישור פרוטוקול ישיבת מועצה 30.9.25", en: "Approval of Sep 30 meeting protocol",
          details: {
            he: "אישור הפרוטוקול של ישיבת ספטמבר 30 (שראש המועצה לא נכח בה). אושר ברוב קולות.",
            en: "Approval of the Sep 30 meeting protocol (which the mayor had missed). Approved by majority."
          }
        },
        { num: 7, he: "הצבעה על חברי ועדת רווחה נוספים", en: "Additional welfare committee members",
          details: {
            he: "הוספת חברים חדשים לוועדת הרווחה של המועצה. אושר פה אחד.",
            en: "Adding new members to the council's welfare committee. Approved unanimously."
          }
        },
        { num: 8, he: "חוק עזר היטל שמירה - הארכה ל-2026-2029 בתעריף ₪13.18 למ\"ר", en: "Watch tax by-law extension 2026–2029 at ₪13.18/m²",
          details: {
            he: "הארכת תוקף חוק עזר היטל השמירה (כלומר אגרת השמירה האזרחית) משנת 2026 עד סוף 2029, בתעריף הקיים של ₪13.18 למ\"ר צמוד מדד. חנני הבהיר: \"הורדנו את זה\" - כלומר התעריף נמוך יותר מהאופציות שעלו. אושר פה אחד.",
            en: "Extends the civil-guard tax by-law from 2026 through end of 2029, at the existing rate of ₪13.18 per m² (index-linked). Hanani clarified: \"we lowered it\" — meaning the rate is lower than alternatives that were considered. Approved unanimously."
          }
        },
        { num: 9, he: "אישור שמונת נציגי הציבור (לבחירת רב לאפרת)", en: "Approval of 8 public representatives (for the chief rabbi selection)",
          details: {
            he: "תהליך בחירת רב לאפרת. אסיפת הבחירה כוללת 24 חברים: 4 נציגי מועצה, 8 נציגי השר (משרד הדתות), ו-8 נציגי ציבור. בעקבות פניית המועצה לציבור — נרשמו 50 מועמדים. המועצה מציעה לשר 8 שמות מומלצים. ראש המועצה ציין שש\"ס \"החל לדחוף את הסיפור הזה קדימה אחרי שהרדימו אותו בעבר\". אושר פה אחד.",
            en: "Rabbi-selection process for Efrat. The selection assembly comprises 24 members: 4 council reps, 8 ministerial reps (Religious Services Ministry), and 8 public reps. A public call yielded 50 candidate self-nominations. The council recommends 8 names to the minister. Mayor noted that Shas \"started pushing this forward after letting it sleep for months.\" Approved unanimously."
          }
        },
        { num: 10, he: "תב\"ר 930 - רכישת זכויות למבנה קומת המועצה", en: "TaBaR 930 — purchase of rights for the council-floor building",
          details: {
            he: "אישור תב\"ר 930 לרכישת זכויות במבנה שבו ממוקמת קומת המועצה. אושר פה אחד.",
            en: "Approval of TaBaR 930 for purchase of rights in the building housing the council floor. Approved unanimously."
          }
        },
        { num: 11, he: "עדכוני ראש המועצה - מורדות הזית", en: "Mayor updates — Mordot HaZayit project",
          details: {
            he: "הדיון הארוך והמשמעותי ביותר בישיבה. הפרויקט אושר רשמית לשיווק, אך משרד השיכון הודיע שחסר 200 מיליון ש\"ח לפיתוח התשתיות. המועצה שלחה מכתב בחודש 9: תוך 30 יום, או שמעבירים את הפרויקט לידי המועצה (יחד עם רמ\"י, ולא משרד השיכון). פוטנציאל של ~80 מיליון ש\"ח למבני ציבור ותשתיות. אבי חדידה הזהיר: \"זו טעות גדולה מאוד — זה יכול להביא אותנו לחדלות פירעון\". התאריך לעליית חוברות מכרז התעדכן מ-15.9 ל-15.11.",
            en: "The longest discussion of the meeting. The Mordot HaZayit project was formally approved for marketing, but the Housing Ministry announced a ₪200M shortfall for infrastructure development. In September the council sent a letter: within 30 days, either fix it or transfer the project to the council (jointly with RAMI, instead of the Housing Ministry). Potential ~₪80M for public buildings and infrastructure. Avi Hadida warned: \"this would be a huge mistake — it could bring us to insolvency.\" The tender-publication date slipped from Sep 15 to Nov 15."
          }
        }
      ]
    },
    {
      id: "dec2",
      date: "2025-12-02",
      hebrew_date: "י\"ב כסלו התשפ\"ו",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 11,
      total_speaker_turns: 671,
      agenda: [
        { num: 1, he: "תפילה לשלום הפצועים והחללים והחטופים", en: "Prayer for the wounded, fallen, and hostages",
          details: {
            he: "טליה מרכוס הקריאה תפילה למען הבאת החללים לקבר ישראל, בנוסח שהמליץ עליו הרב בצלאל דניאל. חנני פייגין הוסיף שזה נוסח שפרסמה הרבנות, וקרא את התפילה לשלום חיילי צה\"ל.",
            en: "Talia Marcus recited a prayer for bringing the fallen to burial in Israel, in a formula recommended by Rabbi Bezalel Daniel. Hanani Feigin clarified that this is the formula published by the rabbinate, and then recited the prayer for the welfare of IDF soldiers."
          }
        },
        { num: 2, he: "דבר תורה", en: "Torah teaching",
          details: {
            he: "ראש המועצה דובי שפלר נשא דברי תורה על פרשת וישלח, בפרט על מותה של רחל וקבורתה \"בדרך אפרתה היא בית לחם\". הוא דן בשאלה אם קבר רחל של ימינו הוא באמת קבר רחל, ובמסורת של מאות שנים של תפילה במקום.",
            en: "Mayor Dovi Shefler delivered a Torah teaching on parshat Vayishlach, focusing on Rachel's death and burial \"on the way to Ephrath, which is Bethlehem.\" He explored the question of whether the modern Rachel's Tomb is authentic, and discussed the centuries-old tradition of prayer at the site."
          }
        },
        { num: 3, he: "אישור פרוטוקול ישיבת מועצה 4.11.25", en: "Approval of Nov 4, 2025 protocol",
          details: {
            he: "אושר פה אחד. צורי דותן ואביטל כהן נעדרו מהישיבה המקורית, וטליה מרכוס לא השתתפה בהצבעה.",
            en: "Approved unanimously by those who had been present at the original meeting. Tzuri Dotan and Avital Cohen had been absent from that meeting; Talia Marcus did not participate in this vote."
          }
        },
        { num: 4, he: "אישור תאריכי ישיבות המועצה לשנת 2026", en: "Approval of 2026 council meeting dates",
          details: {
            he: "ראש המועצה הודיע שישיבת התקציב נדחתה משבועיים, מ-23.12 ל-6.1.2026. חנני פייגין הזכיר שהעיקרון הוא: יום שלישי הראשון של כל חודש לועזי. ראש המועצה ביקש שמי שיש לו בר/בת מצווה או חתונה — זו ההזדמנות לערער על תאריך. צורי דותן הצטרף לישיבה במהלך ההצבעה. אושר פה אחד.",
            en: "Mayor announced that the budget meeting was postponed by two weeks, from Dec 23 to Jan 6, 2026. Hanani Feigin noted the standing principle: first Tuesday of each Gregorian month. Mayor invited members with bar/bat mitzvah or wedding conflicts to object now rather than later. Tzuri Dotan joined the meeting during this vote. Approved unanimously."
          }
        },
        { num: 5, he: "אישור 3 דוחות בקרה: דוח מבקר 22-23 / דוח מבקר 23-24 / דוח משרד הפנים 2024", en: "Approval of 3 audit reports (auditor 22-23, auditor 23-24, Interior Ministry 2024)",
          details: {
            he: "אבי חדידה, יו\"ר ועדת ביקורת, הציג שלושה דוחות. (1) דוח משרד הפנים 2024 — הליקוי העיקרי היה שלמועצה לא היה מבקר, וזה תוקן. (2) דוח 2022-23 — כלל המלצה שנויה במחלוקת של ועדת הביקורת למניעת קיזוזי חובות לספקים מול חובות ארנונה, בניגוד לדעת המבקרת. ההצבעה הסתיימה 7-4 לטובת ההמלצה — וראש המועצה הצביע נגד. (3) דוח 2023 על מלאי — הסתבר שהמחשבים ש\"נמכרו\" היו מחשבים שאינם שמישים שניתנו בתרומה.",
            en: "Avi Hadida, audit committee chair, presented three reports. (1) Interior Ministry 2024 — the main finding was that the council had no auditor; this was fixed. (2) Auditor's report 2022-23 — included a contested committee recommendation against offsetting supplier debts against unpaid property tax, contradicting the auditor's opinion. The 7-4 vote sided with the committee — and the Mayor voted against. (3) 2023 audit on inventory — clarified that the \"computers sold\" were non-functional donated machines, not council inventory."
          }
        },
        { num: 6, he: "חידוש מסגרת חח\"ד בסך 5,500,000 ש\"ח לשנת 2026", en: "Renewal of ₪5.5M credit facility for 2026",
          details: {
            he: "הגזבר שרון הורוביץ הסביר שמדובר במסגרת אשראי לזמן קצר (חשבון חובה דביטורי) שצריך לחדש כל שנה וחצי במכרז. הפעם בנק מזרחי הציע את התנאים הטובים ביותר (פריים מינוס 0.2%), אפילו טוב יותר מבנק לאומי. חנני פייגין שאל אם המועצה מוודאת שהמינוס תמיד נמצא בחשבון הזול ביותר. אושר פה אחד.",
            en: "Treasurer Sharon Horowitz explained this is a short-term credit facility (overdraft) that must be re-tendered every 18 months. Mizrahi Bank offered the best terms (prime minus 0.2%), below Leumi's offer. Hanani Feigin asked whether the council ensures the overdraft is always held in the cheapest account. Approved unanimously."
          }
        },
        { num: 7, he: "חוק עזר עירוני לאגרת ביוב והיטל ביוב לשנת 2026", en: "Municipal sewage by-law for 2026",
          details: {
            he: "סעיף שהוסף לסדר היום בתחילת השבוע. ראש המועצה הסביר: חברת \"מי שמש\" (תאגיד הביוב של בית שמש) זכתה במכרז ארצי לסלילת קו חדש שייקח את הביוב של אפרת וגוש עציון לטיפול בבית שמש, במקום בכפר עציון. הקו כבר נסלל, אך החוזה טרם נחתם. בינתיים מחדשים את החוק הקיים. אושר פה אחד.",
            en: "Item added to the agenda mid-week. Mayor explained: \"Mei Shemesh\" (Beit Shemesh water/sewage corporation) won a national tender to lay a new pipeline that will route Efrat and Gush Etzion's sewage to a Beit Shemesh treatment facility instead of the current Kfar Etzion plant. The pipeline is already being laid, but the contract is not yet signed. Meanwhile, the existing by-law is being extended. Approved unanimously."
          }
        },
        { num: 8, he: "מפעל הפיס", en: "Mifal HaPais (national lottery allocations)",
          details: {
            he: "בפגישה שקיימו ראש המועצה, יפה והגזבר במפעל הפיס התגלו שני דברים: (1) למעלה ממיליון ש\"ח מאישור 2022 שכבים שם בלי שנמשכו — כי לא הוגשו הניירות הסופיים. הניירות הוגשו עתה. (2) מפעל הפיס מציע מקדמה של 1.84 מיליון ש\"ח לצמצום גירעון המועצה (שמוערך ב-5.1 מיליון). חנני פייגין שאל: \"כמה דברים כאלה עוד יש שאנחנו לא יודעים עליהם?\" ישי פליישר נזכר במקרה דומה בחברון. נדרשת החלטת מליאה לקבלת המקדמה.",
            en: "A meeting at Mifal HaPais surfaced two things: (1) over ₪1M from a 2022 approval was sitting unclaimed because final paperwork was never filed — the paperwork has now been submitted. (2) The lottery is offering an advance of ₪1.84M to reduce the council's deficit (estimated at ₪5.1M). Hanani Feigin asked, \"How many other such things are there that we don't know about?\" Yishai Fleisher recalled a similar case in Hebron — apartments bought in the 1990s that had been forgotten. A council resolution is required to receive the advance."
          }
        },
        { num: 9, he: "תב\"רים (תקציבי פיתוח)", en: "Capital expenditure budgets (TaBaRs)",
          details: {
            he: "אושרו 8 תב\"רים: (840) שיקום כבישים 270K — נמנע: צורי; (873) חניון מול הבריכה 280K (במקור היה מיועד לריבוד, השתנה לחניה); (919) שיקום צנרת ישן/חדש 2.4M; (931) תוכניות מניעת התמכרויות 167K; (572) מרכז ספורט 39.1M; (809) פעולות למען קהילות 838K; (932) מוגנות 120K; ו-1.84M ממפעל הפיס לצמצום הגירעון. חלק מהתב\"רים אושרו ברוב קולות, חלקם פה אחד.",
            en: "Eight capital budgets were approved: (840) road rehabilitation ₪270K — abstain: Tzuri; (873) parking lot opposite the pool ₪280K (originally for repaving, repurposed for parking); (919) pipe rehabilitation old/new ₪2.4M; (931) addiction-prevention programs ₪167K; (572) sports center ₪39.1M; (809) community-actions support ₪838K; (932) protection ₪120K; and ₪1.84M from Mifal HaPais to reduce the deficit. Some passed unanimously, some by majority."
          }
        },
        { num: 10, he: "אישור נציגי ועדת הנהגת הורים בוועדת חינוך", en: "Approval of parent representatives on the education committee",
          details: {
            he: "צורי דותן הציג חמישה נציגי הנהגת הורים חדשים: ברכה באך (אלומים), מרים שייר (עשה חיל), חגית זיידמן (אורות עציון בנות), ציפי בן צבי (אורות עציון בנים), וגיתית פטנקי (אפרת בתנופה). אביטל כהן ציינה שגיתית הייתה יו\"ר בעבר. אבי חדידה לא השתתף בהצבעה (עזב את הישיבה זמנית). אושר פה אחד.",
            en: "Tzuri Dotan presented five new parent-association reps: Bracha Bach (Alumim), Miriam Shaer (Aseh Chayil), Hagit Zeidman (Orot Etzion Banot), Tzipi Ben Tzvi (Orot Etzion Banim), and Gitit Patinki (Efrat Btenufa). Avital Cohen noted Gitit had previously chaired the committee. Avi Hadida had stepped out and did not vote. Approved unanimously."
          }
        },
        { num: 11, he: "נתוני יתרות קרנות", en: "Reserve fund balance review",
          details: {
            he: "חנני פייגין ושלמה בן צבי ביקשו שקיפות לפני אישור התקציב. הנתונים שהוצגו: סך כל הקרנות 16,154,000 ש\"ח, מתוכם 3,682,000 משוריינים לפרויקטים, נותרו 12,472,000 ש\"ח פנויים (נכון ל-20.11.2025). הגזבר הסביר שבמשך 5-6 שנים האחרונות הועברו לתקציב השוטף רק כספי קרנות ביוב. הביטוי \"הכסף האמיתי מתחבא בקרנות\" (חנני) — הגזבר ענה שאם משתמשים בקרנות זה רשום בספרים. אין דרישה להחלטה.",
            en: "Hanani Feigin and Shlomo Ben Tzvi requested transparency before approving the budget. Figures presented: total reserves ₪16,154,000, of which ₪3,682,000 is earmarked, leaving ₪12,472,000 unencumbered (as of Nov 20, 2025). Treasurer explained that over the past 5–6 years, only sewage-reserve funds have been transferred to the operating budget. Hanani: \"the real money is hidden in the reserves and we want it shown transparently.\" Treasurer: every shekel transferred is recorded by council resolution. No vote required."
          }
        },
        { num: 12, he: "דיון בנושא חוות עיטם (לבקשת מנחם ואבי)", en: "Discussion on Eitam Farm (requested by Menachem and Avi)",
          details: {
            he: "מנחם שפיץ ואבי חדידה ביקשו את הדיון. ראש המועצה הציג את מצב החווה: יהודה שרבף עלה לחווה ב-2022. כיום בחווה: כ-11 משפחות, ישיבה לבחורי שמינית (כ-15), מדרשת בנות אחרי שירות (~17), בית מדרש על הגבעה הצפונית, בריכה, מאות דונמים של חקלאות, דיר עם 100-150 ראש כבשים ועיזים, מבנה לחתונות והפנינג בקיץ. המבנים נמצאים בגבעה המזרחית, הצפונית ובמרכז החווה. הוצגו דאגות לגבי בנייה ללא היתר, אך לא נדרשה הצבעה.",
            en: "Menachem Spitz and Avi Hadida requested the discussion. Mayor presented the farm's status: Yehuda Sherbaf moved up in 2022; today the farm hosts ~11 families, a pre-army yeshiva (~15 students), a women's midrasha (~17), a beit midrash on the northern hill, a swimming pool, hundreds of dunams of agriculture, 100–150 sheep and goats, and a building used for weddings and summer events. Structures are spread across the eastern hill, northern hill, and central farm area. Concerns about unpermitted construction were raised but no vote was taken."
          }
        },
        { num: 13, he: "עדכוני ראש מועצה", en: "Mayor updates",
          details: {
            he: "הדיון העיקרי היה על משבר המים בשכונת תמר. בימי שישי בין 13:00 ל-16:00 לחץ המים יורד מ-4.5 ל-1 אטמוספירות. מהנדס המים אברהם בלאו טען שבזמן בניית תמר, דגן ומזרח הזית היה ברור שצריך להקדים בניית בריכת מים נוספת, אך הוחלט לאכלס קודם כי \"מורדות הזית אוטוטו\". ראש המועצה הביע תסכול: \"אתה כמהנדס מים אישרת למועצה לקחת סיכון, אתה המומחה, לא המועצה.\" אבי חדידה ומנחם שפיץ הציגו נתונים סותרים על מצב המים בעבר.",
            en: "The main discussion was the water crisis in the Tamar neighborhood. On Fridays between 1:00–4:00 pm, water pressure drops from 4.5 to 1 atmospheres. Water engineer Avraham Blau's theory: when Tamar, Dagan, and East Zayit neighborhoods were built, a new reservoir was supposed to be built first, but the decision was made to populate them first because \"Mordot HaZayit was just around the corner.\" Mayor expressed frustration: \"As the water engineer you let the council take the risk — you are the expert, not the council.\" Avi Hadida and Menachem Spitz offered competing recollections of past water conditions."
          }
        }
      ]
    },
    {
      id: "jan6",
      date: "2026-01-06",
      hebrew_date: "י\"ז טבת התשפ\"ו",
      title: { he: "ישיבת מועצה שלא מן המניין - אישור תקציב 2026", en: "Extraordinary Council Meeting - 2026 Budget Approval" },
      attendance_count: 8,
      absent: ["Tzuri Dotan", "Hanani Feigin", "Shlomo Ben Tzvi"],
      total_speaker_turns: 179,
      agenda: [
        { num: 1, he: "אישור תקציב המועצה לשנת 2026", en: "Approval of the 2026 council budget (₪144,258,000)",
          details: {
            he: "ישיבה שלא מן המניין שעיקרה אישור התקציב. ראש המועצה פתח בהודעה: זה התקציב השלישי תוך שנה ותשעה חודשים. גידול של 20% מ-2023 ל-2026. דגש משמעותי על שיפור פני העיר (אגף שפע). יעד אסטרטגי: הגדלת הכנסות עסקיות — כיום רק 3% מארנונה מגיע מעסקים. הגזבר נשא דברי תורה והודיע שתקציב 2025 הסתיים בלי גירעון ובלי שימוש בקרנות. אבי חדידה הצביע נגד, וטען שלא הוזמן לישיבת ההכנה. ראש המועצה: \"כל חבר מועצה שלא משקיע זמן בתקציב, מאכזב אותי.\" מנחם שפיץ הצביע בעד אך העלה שאלות על הוצאות תיירות (64K לייעוץ על גבי 5M כבר מושקעים) ואמות המים. שלושה חברים נעדרו: צורי דותן, חנני פייגין (במילואים), שלמה בן צבי. אושר ברוב 7-1.",
            en: "Extraordinary session devoted to budget approval. Mayor opened by noting this is the third budget in 21 months. Total: ₪144,258,000 — up 20% since 2023. Major emphasis on city-beautification (Shefa department). Strategic goal: grow business-tax revenue (currently only 3% of property-tax). The Treasurer delivered a Torah teaching and announced that 2025 ended without a deficit and without drawing on reserves. Avi Hadida voted against, saying he had not been invited to the executive prep meeting. Mayor: \"Any council member who does not invest time in the budget disappoints me.\" Menachem Spitz voted for, but raised concerns about tourism spending (an additional ₪64K consultant fee on top of ₪5M already invested) and the Roman aqueducts. Three members absent: Tzuri Dotan, Hanani Feigin (reserve duty), Shlomo Ben Tzvi. Passed 7–1."
          }
        }
      ]
    },
    {
      id: "feb3",
      date: "2026-02-03",
      hebrew_date: "ט\"ז שבט התשפ\"ו",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 7,
      absent: ["Tzuri Dotan", "Avi Hadida", "Avital Cohen", "Menachem Spitz"],
      total_speaker_turns: 300,
      agenda: [
        { num: 1, he: "אישור פרוטוקול ישיבת התקציב 6.1.26", en: "Approval of the Jan 6 budget meeting protocol",
          details: {
            he: "הפרוטוקול נשלח באותו יום בצהריים. תיקונים אפשריים יתקבלו עד שבועיים קדימה. חנני פייגין הודיע שכבר מצא טעות אחת. ההצבעה הסתיימה: 5 בעד (אריאלה, טליה, דנה, דובי, ישי), נמנע אחד (חנני — לא היה בישיבה המקורית), שלמה בן צבי הצהיר \"לא משתתף\". יונתן מרקוס, רמ\"ט המועצה, הסביר את ההבדל: \"נמנע זה אין לי דעה. לא משתתף זה לא הייתי. יש משמעות לנמנע כי זה יכול להפיל החלטות.\"",
            en: "Protocol was sent earlier that day. Corrections welcomed within two weeks. Hanani Feigin said he had already found one error. Vote result: 5 in favor (Ariella, Talia, Dana, Dovi, Yishai); 1 abstain (Hanani — he wasn't at the original meeting); Shlomo Ben Tzvi explicitly chose \"not participating.\" Chief of staff Yonatan Marcus explained the distinction: \"Abstain means I have no opinion. Not participating means I wasn't there. Abstain has consequences — it can defeat a motion.\""
          }
        },
        { num: 2, he: "אישור ההנחה בארנונה לנכים", en: "Disability discount on property tax (per amendment 20)",
          details: {
            he: "תיקון 20 לחוק ההסדרים במשק. שינויים: (א) ההנחה ניתנת גם מעל גיל 18 אם הילד נשאר רשום בכתובת; (ב) הוסרה דרישה להוכחת גמלת ילד נכה מביטוח לאומי; (ג) ניתן לקבל הנחה עבור יותר מילד נכה אחד; (ד) חל גם על משפחות אומנה. שלמה בן צבי שאל מי מממן — ראש המועצה ענה: \"רק הרשות. המדינה לא שמה שקל.\" יפה שטרית העריכה את כלל ההנחות בארנונה במועצה ב-4 מיליון ש\"ח לשנה (לא תוספת — זה כבר קיים). אושר פה אחד.",
            en: "Amendment 20 to the National Economy Arrangements Law. Changes: (a) discount extends past age 18 if the child remains registered at the address; (b) National Insurance \"disabled child\" allowance no longer required as proof; (c) discount can be claimed for more than one disabled child; (d) extended to foster families with disabled children. Shlomo Ben Tzvi asked who pays — Mayor: \"Only the local authority. The state doesn't put in a shekel.\" CEO Yaffa Shetrit estimated all property-tax discounts in Efrat at roughly ₪4M/year (this is not new spending — it already exists). Approved unanimously."
          }
        },
        { num: 3, he: "מדיניות עמדות פרטיות לטעינת רכב חשמלי", en: "Private EV charging-station policy",
          details: {
            he: "מסמך מדיניות שניסחה רחל המהנדסת, על בסיס הצעת מדיניות ארצית. במרכז הדיון: הצעה להגביל את משך החנייה בעמדת טעינה פרטית בשטח ציבורי ל-8 שעות. חנני פייגין התנגד — \"זה עלול ליצור סכסוכי שכנים\" (שכן יצלם, ישלח, יבקש קנס). אריאלה פרי הקשתה: \"איך אתה מנגיש את ההחלטה הזאת לתושב הפשוט, דובר האנגלית?\" יפה: \"אנחנו ניתן הדרכה לכל מי שמגיע.\" דנה שפיגל ערערה על יכולת הפיקוח של אגף הנדסה. בסופו של דבר נמחקה הגבלת 8 השעות. אושר 6-1 (נמנע: שלמה בן צבי).",
            en: "Policy document drafted by Rachel the council engineer, based on a national draft policy. Core debate: a proposed 8-hour limit on private EV-charging stations on public ground. Hanani Feigin objected — \"it could create neighbor disputes\" (one neighbor photographs another and reports them for revenge). Ariella Perry pressed: \"How are you making this decision accessible to the ordinary English-speaking resident?\" CEO Shetrit: \"We'll give guidance to anyone who comes in.\" Dana Spiegel questioned engineering department's enforcement capacity. The 8-hour clause was dropped before the vote. Passed 6–1 (abstain: Shlomo Ben Tzvi)."
          }
        },
        { num: 4, he: "תב\"רים: 572, 934, 935, 936", en: "TaBaRs 572, 934, 935, 936",
          details: {
            he: "ארבעה תב\"רים אושרו פה אחד: (572) מרכז ספורט/בריכה; (934) מצלמות ומרכיבים טכנולוגיים — דנה שאלה אם ההצבעה צריכה להגיע למצלמות; (935) הצטיידות מסגרות חינוך מיוחד ומתי\"א — כסף צבוע שהגיע פר ציוד; (936) שיפור מוכנות לחירום.",
            en: "Four capital budgets passed unanimously: (572) sports center/pool; (934) cameras and technology components — Dana asked if the vote needed to be on the cameras specifically; (935) special-education and resource-center equipment — earmarked funding received per equipment unit; (936) emergency-readiness improvements."
          }
        },
        { num: 5, he: "עדכוני ראש מועצה", en: "Mayor updates",
          details: {
            he: "מספר עדכונים: (1) פעילות שלג שתוכננה — בוטלה כי תנאי מזג האוויר לא איפשרו לצאת לשטח; (2) דיון על תביעה ייצוגית נגד חברת חשמל בעניין פיצויים, שהוכרה כייצוגית — שלקחה כשנתיים, ובסופה נדרשת הכרעה של השר או של בית המשפט; (3) עדכוני פעולות נוספות וגיוס מענקים.",
            en: "Several updates: (1) a planned snow-readiness exercise was canceled because conditions didn't permit field operations; (2) a discussion of a class-action lawsuit against the Israel Electric Corporation regarding compensation — the action took about two years and was certified as a class action, awaiting ministerial or court decision; (3) updates on operations and grant-raising."
          }
        }
      ]
    },
    {
      id: "jun30",
      date: "2024-06-30",
      hebrew_date: "כ״ד בסיוון תשפ״ד",
      title: { he: "ישיבת מועצה שלא מן המניין", en: "Extraordinary Council Meeting" },
      attendance_count: 9,
      absent: ["Orit Samuels", "Tamar Amar"],
      total_speaker_turns: 284,
      agenda: [
        { num: 1, he: "אישור צו הארנונה — חניון הקניון", en: "Approval of the property-tax (Arnona) order — mall parking",
          details: { he: "ישיבה חד-נושאית. אושר תעריף ארנונה חדש לחניונים מקורים שאינם למגורים (חניון קניון אפרת סנטר/בזית) בגובה 45 ש״ח למ״ר, כדי להוזיל עלויות לבעלי העסקים. אושר ברוב קולות — עודד רביבי הצביע נגד ואבי חדידה נמנע.", en: "Single-item meeting. Approved a new property-tax tariff for covered non-residential parking (the Efrat Center / Bazit mall lot) at NIS 45/sqm, to lower costs for shop owners. Approved by majority — Oded Ravivi voted against and Avi Hadida abstained." } }
      ]
    },
    {
      id: "jul9",
      date: "2024-07-09",
      hebrew_date: "ג׳ בתמוז תשפ״ד",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 10,
      absent: ["Orit Samuels"],
      total_speaker_turns: 473,
      agenda: [
        { num: 1, he: "הצגת דו״חות כספים — מינהלת אזור תעשייה 2022", en: "Industrial-zone authority financial reports (2022)",
          details: { he: "הצגה בלבד, ללא הצבעה.", en: "Presentation only, no vote." } },
        { num: 2, he: "דו״ח ביקורת 2021–2022 — אבטחת מידע ופרוטוקולים", en: "Audit report 2021–2022 — information security and protocols",
          details: { he: "דו״ח ועדת הביקורת בנושא אבטחת מידע ופרוטוקולים אושר פה אחד.", en: "The audit-committee report on information security and protocols was approved unanimously." } },
        { num: 3, he: "תב״רים", en: "Capital budgets (TaBaRs)",
          details: { he: "אושרו פה אחד תב״ר 811 (פעולות למען קהילות), תב״ר 833 (בטיחות בדרכים 2024) ותב״ר 866 (סיוע לרשויות לצורכי הגנה). בתב״ר נוסף (כ-640 אלף ש״ח) צורי דותן נמנע.", en: "Approved unanimously: TaBaR 811 (community actions), TaBaR 833 (road safety 2024), and TaBaR 866 (assistance to authorities for defense). On a further TaBaR (~NIS 640K) Tzuri Dotan abstained." } },
        { num: 4, he: "פתיחת חשבון בנק בבנק המזרחי", en: "Open a bank account at Bank Mizrahi",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." } },
        { num: 5, he: "אישור פרוטוקול 3.6.2024", en: "Approval of the June 3, 2024 protocol",
          details: { he: "אושר; אבי חדידה נמנע משום שלא נכח באותה ישיבה.", en: "Approved; Avi Hadida abstained because he had not attended that meeting." } },
        { num: 6, he: "מינוי נציגים למועצה דתית", en: "Appoint representatives to the Religious Council",
          details: { he: "דיון על נציגי המועצה למועצה הדתית.", en: "Discussion of the council's representatives to the Religious Council." } },
        { num: 7, he: "בקשת שלמה בן צבי — דיון בארנונה 2026–2029", en: "Shlomo Ben Tzvi's request — discussion of Arnona 2026–2029",
          details: { he: "שלמה בן צבי ביקש דיון מוקדם על מדיניות הארנונה לשנים הבאות.", en: "Shlomo Ben Tzvi requested an early discussion of property-tax policy for the coming years." } },
        { num: 8, he: "מינוי תושבים לחברי ועדות", en: "Appoint residents to committees",
          details: { he: "אושר ברוב קולות; אבי חדידה ושלמה בן צבי נמנעו. התקיימה גם הצבעה נפרדת על הרכב ועדת החינוך.", en: "Approved by majority; Avi Hadida and Shlomo Ben Tzvi abstained. A separate vote was also held on the education-committee composition." } },
        { num: 9, he: "עדכוני ראש המועצה", en: "Mayor's updates",
          details: { he: "סקירת עדכונים שוטפים של ראש המועצה.", en: "The mayor's running updates." } }
      ]
    },
    {
      id: "oct8",
      date: "2024-10-08",
      hebrew_date: "ו׳ בתשרי תשפ״ה",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 9,
      absent: ["Tzuri Dotan", "Avi Hadida"],
      total_speaker_turns: 914,
      agenda: [
        { num: 1, he: "תפילה לשלום החטופים", en: "Prayer for the hostages",
          details: { he: "טליה מרכוס נשאה תפילה לשלום החטופים.", en: "Talia Marcus recited a prayer for the hostages." } },
        { num: 2, he: "אישור פרוגרמה להקמת מלון במגרש 328 בדגן", en: "Program to build a hotel on plot 328 in Dagan",
          details: { he: "דיון בפרוגרמה להקמת מלון בשכונת דגן.", en: "Discussion of a program to build a hotel in the Dagan neighborhood." } },
        { num: 3, he: "דבר תורה", en: "Torah teaching",
          details: { he: "דבר תורה לפתיחת הישיבה.", en: "An opening Torah teaching." } },
        { num: 4, he: "חכ״ל — פרויקטים ודו״ח כספי 2023", en: "Economic company (CHC) — projects and 2023 financials",
          details: { he: "מנכ״ל החכ״ל הציג את הפרויקטים ואת הדו״ח הכספי לשנת 2023.", en: "The economic-company CEO presented its projects and the 2023 financial report." } },
        { num: 5, he: "תביעת נופי כרמים ואישור הלוואה למימון הוצאות משפט", en: "Nofei Kramim lawsuit and loan approval for legal costs",
          details: { he: "סטטוס התביעה ואישור עקרוני ללקיחת הלוואה למימון הוצאות המשפט.", en: "Status of the lawsuit and in-principle approval to take a loan to finance the legal expenses." } },
        { num: 6, he: "אישור פרוטוקול ישיבת 3.9.2024", en: "Approval of the Sep 3, 2024 protocol",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." } },
        { num: 7, he: "ניקיון הפארקים, גינון וכלבים משוטטים", en: "Park cleanliness, gardening and stray dogs",
          details: { he: "דיון לבקשת טליה מרכוס בנושא ניקיון הפארקים, הגינון והכלבים המשוטטים.", en: "Discussion, at Talia Marcus's request, of park cleanliness, gardening and stray dogs." } },
        { num: 8, he: "החלפת מורשי חתימה — אורות עציון בנים", en: "Change of signatories — Orot Etzion Boys school",
          details: { he: "אושר פה אחד; משה גוטליב נכנס במקום צבי נאמן.", en: "Approved unanimously; Moshe Gottlieb replaced Tzvi Neeman." } },
        { num: 9, he: "שקיפות ועדת תכנון ובנייה", en: "Transparency of the Planning & Building Committee",
          details: { he: "דיון בנוהל ההצבעות והשקיפות של ועדת התכנון והבנייה.", en: "Discussion of the planning committee's voting procedure and transparency." } },
        { num: 10, he: "לבקשת אבי חדידה: הנחת ארנונה לחניון הקניון", en: "At Avi Hadida's request: the mall-parking Arnona discount",
          details: { he: "הנושא נדון אף שאבי חדידה נעדר מהישיבה.", en: "The matter was discussed even though Avi Hadida was absent." } },
        { num: 11, he: "ועדת הנצחה ומינוי יו״רים לוועדות", en: "Commemoration committee and committee-chair appointments",
          details: { he: "הסמכת ועדת ההנצחה אושרה פה אחד; במינוי אביטל כהן ליו״ר ועדה — מנחם שפיץ ודנה שפיגל נמנעו. במינוי נציגי המועצה הדתית — מנחם שפיץ ושלמה בן צבי הצביעו נגד וטליה מרכוס נמנעה.", en: "The commemoration committee's mandate was approved unanimously; on appointing Avital Cohen as a committee chair, Menachem Spitz and Dana Spiegel abstained. On the Religious-Council nominees, Menachem Spitz and Shlomo Ben Tzvi voted against and Talia Marcus abstained." } },
        { num: 12, he: "תב״רים", en: "Capital budgets (TaBaRs)",
          details: { he: "אושרו פה אחד תב״ר 394 (חידוש מבני ציבור), 845 (אורות עציון בנים), 377 (חווה חקלאית), 597 (נגישות פרטנית לראייה), 328 (כיתת ותיקים), 875 (שביל הגבורה) ו-902 (הלוואת נופי כרמים).", en: "Approved unanimously: TaBaR 394 (public-building renewal), 845 (Orot Etzion Boys), 377 (agricultural farm), 597 (individual vision accessibility), 328 (seniors classroom), 875 (Heroism Trail) and 902 (Nofei Kramim loan)." } },
        { num: 13, he: "עדכוני ראש המועצה", en: "Mayor's updates",
          details: { he: "סקירת עדכונים שוטפים של ראש המועצה.", en: "The mayor's running updates." } }
      ]
    },
    {
      id: "nov5",
      date: "2024-11-05",
      hebrew_date: "ד׳ בחשוון תשפ״ה",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 7,
      absent: ["Tzuri Dotan", "Avital Cohen", "Menachem Spitz", "Dana Spiegel"],
      total_speaker_turns: 764,
      agenda: [
        { num: 1, he: "דבר תורה — שלמה בן צבי", en: "Torah teaching — Shlomo Ben Tzvi",
          details: { he: "שלמה בן צבי נשא דבר תורה לפתיחה.", en: "Shlomo Ben Tzvi gave an opening Torah teaching." } },
        { num: 2, he: "תפילה לשלום הפצועים והחטופים", en: "Prayer for the wounded and the hostages",
          details: { he: "תפילה לשלום הפצועים והחטופים.", en: "A prayer for the wounded and the hostages." } },
        { num: 3, he: "אישור פרוטוקול ישיבת 8.10.2024", en: "Approval of the Oct 8, 2024 protocol",
          details: { he: "אושר ברוב קולות; אבי חדידה נמנע.", en: "Approved by majority; Avi Hadida abstained." } },
        { num: 4, he: "תב״רים", en: "Capital budgets (TaBaRs)",
          details: { he: "אושרו פה אחד תב״ר חמ״לי צח״ש, תב״ר 509 (תצפית ניידת), 609 (גרור סולר), 709 (ציוד צח״ש אפרת) ו-809.", en: "Approved unanimously: an emergency-command TaBaR, TaBaR 509 (mobile observation post), 609 (diesel trailer), 709 (Efrat rescue equipment) and 809." } },
        { num: 5, he: "הצגת אגף שפ״ע — אורי צדוק", en: "Sanitation & maintenance (Shafa) department presentation — Uri Tzadok",
          details: { he: "אורי צדוק, מנהל אגף שפ״ע, הציג את מודל העבודה והתקציב של האגף.", en: "Uri Tzadok, head of the sanitation & maintenance department, presented its work model and budget." } },
        { num: 6, he: "לבקשת אבי חדידה: הנחת ארנונה לחניון הקניון", en: "At Avi Hadida's request: the mall-parking Arnona discount",
          details: { he: "אבי חדידה הסביר שנמנע ביוני משום שביקש שההנחה תינתן גם לתושבים ולא רק לעסקים.", en: "Avi Hadida explained that he had abstained in June because he wanted the discount extended to residents, not only businesses." } },
        { num: 7, he: "מינוי יו״רים לוועדות", en: "Appoint committee chairs",
          details: { he: "אריאלה פרי מונתה פה אחד ליו״ר ועדת הנחות.", en: "Ariella Perry was appointed unanimously as chair of the discounts committee." } },
        { num: 8, he: "עדכוני ראש המועצה", en: "Mayor's updates",
          details: { he: "סקירת עדכונים שוטפים של ראש המועצה.", en: "The mayor's running updates." } }
      ]
    },
    {
      id: "jun3",
      date: "2024-06-03",
      hebrew_date: "כ״ו באייר תשפ״ד",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 7,
      absent: ["Avi Hadida", "Yishai Fleisher", "Shlomo Ben Tzvi", "Tamar Amar"],
      total_speaker_turns: 195,
      agenda: [
        { num: 1, he: "אישור פרוטוקול ישיבת 7.5.2024", en: "Approval of the May 7, 2024 protocol",
          details: { he: "אושר ברוב קולות. עודד רביבי ואורית סמואלס הגיעו לאחר ההצבעה.", en: "Approved by majority. Oded Ravivi and Orit Samuels arrived after the vote." } },
        { num: 2, he: "הצגת איגוד ערים — אורי צדוק", en: "Cities Association presentation — Uri Tzadok",
          details: { he: "הצגת פעילות איגוד הערים לאיכות הסביבה. עיקר הדיון: התנגדות המועצה למשרפה המתוכננת מעל צומת חוסאן.", en: "Presentation of the regional environmental Cities Association. The discussion centered on the council's opposition to a planned incinerator above the Husan junction." } },
        { num: 3, he: "דיון ושאלות בנושא ארנונה", en: "Discussion and questions on property tax",
          details: { he: "הגזבר הציג את סוגיית ההעלאה החריגה בארנונה. הוצג כדיון ושאלות בלבד, ללא הצבעה.", en: "The treasurer presented the question of an exceptional property-tax increase. Held as discussion and Q&A only, with no vote." } },
        { num: 4, he: "עדכוני ראש המועצה", en: "Mayor's updates",
          details: { he: "סקירת עדכונים שוטפים של ראש המועצה.", en: "The mayor's running updates." } }
      ]
    },
    {
      id: "jun25app",
      date: "2024-06-25",
      hebrew_date: "י״ט בסיוון תשפ״ד",
      title: { he: "ישיבה שלא מן המניין — מינויים", en: "Extraordinary Meeting — appointments" },
      attendance_count: 9,
      absent: ["Avi Hadida", "Orit Samuels"],
      total_speaker_turns: 86,
      agenda: [
        { num: 1, he: "קביעת יו״ר לוועדות השונות", en: "Appoint chairs of the various committees",
          details: { he: "אושר ברוב קולות. עודד רביבי ושלמה בן צבי הצביעו נגד; תמר עמר נמנעה. עודד רביבי ביקש הצבעה נפרדת על כל ועדה.", en: "Approved by majority. Oded Ravivi and Shlomo Ben Tzvi voted against; Tamar Amar abstained. Oded Ravivi had asked for a separate vote on each committee." } },
        { num: 2, he: "מינוי חברי דירקטוריון לחכ״ל ולמתנ״ס", en: "Appoint board directors for the economic company (CHC) and community center",
          details: { he: "אושר ברוב קולות בהצבעות נפרדות; עודד רביבי נגד ותמר עמר נמנעה.", en: "Approved by majority in separate votes; Oded Ravivi against and Tamar Amar abstained." } },
        { num: 3, he: "מינוי יו״ר ועדת רפואה", en: "Appoint chair of the medical committee",
          details: { he: "יהונתן מרקוס מונה במקום ראש המועצה. אושר ברוב קולות; עודד רביבי נגד, שלמה בן צבי ותמר עמר נמנעו.", en: "Yonatan Marcus appointed in place of the mayor. Approved by majority; Oded Ravivi against, Shlomo Ben Tzvi and Tamar Amar abstained." } },
        { num: 4, he: "מינוי סגן וממלא מקום ראש המועצה", en: "Appoint deputy and acting mayor",
          details: { he: "צורי דותן מונה לסגן וממלא מקום ראש המועצה. אושר ברוב קולות; עודד רביבי, תמר עמר ושלמה בן צבי הצביעו נגד.", en: "Tzuri Dotan appointed deputy and acting mayor. Approved by majority; Oded Ravivi, Tamar Amar and Shlomo Ben Tzvi voted against." } }
      ]
    },
    {
      id: "jun25arn",
      date: "2024-06-25",
      hebrew_date: "י״ט בסיוון תשפ״ד",
      title: { he: "ישיבה שלא מן המניין — תוספת ארנונה", en: "Extraordinary Meeting — property-tax surcharge" },
      attendance_count: 10,
      absent: ["Orit Samuels"],
      total_speaker_turns: 168,
      agenda: [
        { num: 1, he: "קביעת תוספת חריגה לארנונת מגורים ועסקים", en: "Set an exceptional surcharge on residential and business property tax",
          details: { he: "אושר ברוב קולות (6 בעד, 3 נגד, נמנע 1). שלמה בן צבי, אבי חדידה ועודד רביבי הצביעו נגד; תמר עמר נמנעה. ההעלאה נדרשה לסגירת פער מול התעריף הנורמטיבי של משרד הפנים.", en: "Approved by majority (6 for, 3 against, 1 abstain). Shlomo Ben Tzvi, Avi Hadida and Oded Ravivi voted against; Tamar Amar abstained. The increase was sought to close a gap against the Interior Ministry's normative tariff." } }
      ]
    },
    {
      id: "jun25bud",
      date: "2024-06-25",
      hebrew_date: "י״ט בסיוון תשפ״ד",
      title: { he: "ישיבה שלא מן המניין — תקציב 2024", en: "Extraordinary Meeting — 2024 budget" },
      attendance_count: 10,
      absent: ["Orit Samuels"],
      total_speaker_turns: 243,
      agenda: [
        { num: 1, he: "אישור תקציב 2024", en: "Approval of the 2024 budget",
          details: { he: "אושר ברוב קולות (6 בעד, 4 נגד). עודד רביבי, תמר עמר, אבי חדידה ושלמה בן צבי הצביעו נגד. התקציב לא אושר קודם לכן בשל הבחירות. הדיון נסב גם על חלוקת תפקידים והיעדר שקיפות לטענת האופוזיציה.", en: "Approved by majority (6 for, 4 against). Oded Ravivi, Tamar Amar, Avi Hadida and Shlomo Ben Tzvi voted against. The budget had not been approved earlier because of the elections. The debate also touched on the division of roles and what the opposition called a lack of transparency." } }
      ]
    },
    {
      id: "mar31",
      date: "2024-03-31",
      hebrew_date: "כ״א באדר ב׳ תשפ״ד",
      title: { he: "ישיבת המועצה הראשונה — כינון המועצה", en: "Inaugural Council Meeting — swearing-in" },
      attendance_count: 13,
      absent: ["Orit Samuels", "Zeev Gershinsky"],
      total_speaker_turns: 22,
      agenda: [
        { num: 1, he: "פתיחת כהונת המועצה החדשה", en: "Opening of the new council's term",
          details: { he: "הישיבה הראשונה של המועצה הנבחרת. ראש המועצה דובי שפלר נשא דברי פתיחה, והוענקו תעודות הוקרה לחברי המועצה היוצאים, ובהם ראש המועצה היוצא עודד רביבי וחבר המועצה היוצא אברהם בן צבי.", en: "The newly elected council's first meeting. Mayor Dovi Shefler delivered opening remarks, and certificates of appreciation were presented to outgoing members, including outgoing mayor Oded Ravivi and outgoing member Avraham Ben Tzvi." } },
        { num: 2, he: "דיון בנושאי תכנון ובנייה", en: "Discussion of planning and building matters",
          details: { he: "דיון פתיחה בנהלי הוועדה המקומית לתכנון ובנייה ובאופן הטיפול בהתנגדויות ובערעורים. לא התקיימו הצבעות פורמליות בישיבת הכינון.", en: "An opening discussion of the local planning-and-building committee's procedures and how objections and appeals are handled. No formal votes were taken at the inaugural session." } }
      ]
    },
    {
      id: "apr15",
      date: "2024-04-15",
      hebrew_date: "ז׳ בניסן תשפ״ד",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 13,
      absent: ["Orit Samuels", "Zeev Gershinsky"],
      total_speaker_turns: 276,
      agenda: [
        { num: 1, he: "עדכוני יקל״ר ביטחון", en: "Security (RSO) updates",
          details: { he: "תדרוך ביטחוני שוטף. ללא הצבעה.", en: "A routine security briefing. No vote." } },
        { num: 2, he: "אישור פרוטוקול ישיבת 4.12.2023", en: "Approval of the Dec 4, 2023 protocol",
          details: { he: "אושר פה אחד (הצביעו החברים שנכחו באותה ישיבה).", en: "Approved unanimously (voted on by members who had attended that meeting)." } },
        { num: 3, he: "אישור פרוטוקול ישיבת 1.1.2024", en: "Approval of the Jan 1, 2024 protocol",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." } },
        { num: 4, he: "אישור דובי שפלר כנציג המועצה לאשכול יו״ש", en: "Approve Dovi Shefler as the council's rep to the Judea & Samaria regional cluster",
          details: { he: "אושר פה אחד, לצד אישור הצטרפות המועצה לאשכול רשויות יהודה ושומרון.", en: "Approved unanimously, alongside approving the council's entry into the Judea & Samaria regional authorities cluster." } },
        { num: 5, he: "אישור תאריכי ישיבות מועצה לשנת 2024", en: "Approve the 2024 council-meeting schedule",
          details: { he: "אושר פה אחד לקיים ישיבות בימי שלישי בקביעות.", en: "Approved unanimously to hold meetings regularly on Tuesdays." } },
        { num: 6, he: "חוקי עזר — אגרה והיטל ביוב", en: "By-laws — sewage fee and levy",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." } },
        { num: 7, he: "תב״רים", en: "Capital budgets (TaBaRs)",
          details: { he: "רשימת תב״רים אושרה פה אחד.", en: "A list of TaBaRs was approved unanimously." } },
        { num: 8, he: "עדכוני ראש המועצה", en: "Mayor's updates",
          details: { he: "סקירת עדכונים שוטפים של ראש המועצה.", en: "The mayor's running updates." } }
      ]
    },
    {
      id: "sep26",
      date: "2025-09-26",
      hebrew_date: "ד' תשרי התשפ\"ו",
      title: { he: "ישיבת מועצה שלא מן המניין", en: "Extraordinary Council Meeting" },
      attendance_count: 11,
      absent: [],
      total_speaker_turns: 33,
      agenda: [
        { num: 1, he: "נסיעת ראש המועצה לארה\"ב", en: "Mayor's trip to the USA",
          details: { he: "ישיבה קצרה שכונסה ביום שישי כדי לאשר את נסיעת ראש המועצה לארה\"ב במסגרת משלחת של מועצת יש\"ע, לקידום נושא הריבונות. עלות חלקה של המועצה נאמדה בכ-10,000 ש\"ח. אושר ברוב קולות (9 בעד, 2 נמנעו).", en: "A short Friday meeting convened to approve the mayor's trip to the USA as part of a Yesha Council delegation, to advance the sovereignty cause. The council's share of the cost was estimated at about ₪10,000. Approved by majority (9 for, 2 abstentions)." } }
      ]
    },
    {
      id: "jan6b",
      date: "2026-01-06",
      hebrew_date: "י\"ז טבת התשפ\"ו",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 8,
      absent: ["Tzuri Dotan", "Shlomo Ben Tzvi", "Menachem Spitz"],
      total_speaker_turns: 290,
      agenda: [
        { num: 1, he: "תפילה לשלום הפצועים והחללים החטופים", en: "Prayer for the wounded and the fallen/hostages",
          details: { he: "טליה מרכוס וחנני פייגין נשאו תפילה, כולל תפילה להבאת חלל לקבר ישראל.", en: "Talia Marcus and Hanani Feigin led the prayers, including a prayer for the return of a fallen soldier to burial in Israel." } },
        { num: 2, he: "אישור פרוטוקול ישיבת מועצה 2.12.25", en: "Approval of the Dec 2, 2025 protocol",
          details: { he: "אושר פה אחד. החברים העירו שהישיבה הקודמת הייתה ארוכה מדי.", en: "Approved unanimously. Members joked that the previous meeting had run far too long." } },
        { num: 3, he: "אישור הקצאת קרקע לבית כנסת על גג גן הילדים ברחוב נחמיה", en: "Approve land allocation for a synagogue on the kindergarten roof, Nehemiah St.",
          details: { he: "המועצה אישרה להעביר את הקרקע לוועדת הקצאות. אושר ברוב קולות (7 בעד) — אריאלה פרי הצביעה נגד מתוך התנגדות עקרונית לערבוב גן ילדים עם בית כנסת. חנני פייגין דרש שהחוזה יכלול במפורש את עלויות הבנייה מעל גן מתפקד ואת פירוק המערכת הסולארית על חשבון העמותה.", en: "The council approved transferring the plot to the allocations committee. Passed by majority (7 for) — Ariella Perry voted against on principle, opposing mixing a working kindergarten with a synagogue. Hanani Feigin demanded the contract explicitly include the costs of building over an active kindergarten and the relocation of the rooftop solar array at the association's expense." } },
        { num: 4, he: "מרכז הספורט — הצגת מאזן ביניים כספי", en: "Sports center — interim financial balance",
          details: { he: "מנכ\"לית המועצה הציגה שמרכז הספורט והבריכה סיימו את 2025 ביתרת עודף של כ-300 אלף ש\"ח (רווח נקי, ללא ההשקעה ההונית). דיון על שירות, תמחור מנויים, ותחרות צפויה מבריכת אלון שבות. ללא הצבעה.", en: "The CEO reported that the sports center and pool ended 2025 with a surplus of roughly ₪300K (net, excluding the capital investment). Discussion of service quality, membership pricing, and expected competition from an Alon Shvut pool. No vote." } },
        { num: 5, he: "עדכון מועצת הנוער", en: "Youth council update",
          details: { he: "יו\"ר מועצת הנוער אורי שיין הציג עדכון על פעילות מועצת הנוער.", en: "Youth-council chair Uri Shein presented an update on the youth council's activities." } },
        { num: 6, he: "עדכוני ראש מועצה", en: "Mayor's updates",
          details: { he: "עיקר הדיון: שכונת מורדות הזית — משרד השיכון צפוי להוציא מכרז בפברואר, עם הגדלה מ-693 ל-850 יחידות דיור כדי לפזר את עלויות הפיתוח (כ-700 אלף ש\"ח ליחידה). דיונים על הגדלת אגרות והיטלים, תיחום אתר הבנייה והפרדתו מהשכונה הקיימת מטעמי ביטחון, ומשבר המים בתמר ובזית (חסם של אבנים שאותר בצינור).", en: "Main discussion: the Mordot HaZayit neighborhood — the Housing Ministry is expected to issue a tender in February, expanding from 693 to 850 housing units to spread development costs (~₪700K per unit). Also: raising fees and levies, fencing off the construction site from the existing neighborhood for security, and the Tamar/Zayit water crisis (a rock blockage detected in the supply pipe)." } }
      ]
    },
    {
      id: "apr14",
      date: "2026-04-14",
      hebrew_date: "כ\"ז ניסן התשפ\"ו",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 9,
      absent: ["Avi Hadida", "Shlomo Ben Tzvi"],
      total_speaker_turns: 69,
      agenda: [
        { num: 1, he: "דבר תורה", en: "Torah teaching",
          details: { he: "ישי יעקב פליישר נשא דבר תורה במוצאי יום השואה, וסיפר על מפגש עם הכתבת כריסטיאן אמנפור על משמעות דגל ישראל. ראש המועצה חיבר זאת לפרשת תזריע-מצורע.", en: "Yishai Fleisher gave a Torah teaching on the close of Holocaust Remembrance Day, recounting an encounter with journalist Christiane Amanpour over the meaning of the Israeli flag. The mayor tied it to the weekly Torah portion." } },
        { num: 2, he: "אישור פרוטוקול ישיבת המועצה מן המניין 10.3.26", en: "Approval of the Mar 10, 2026 protocol",
          details: { he: "אושר פה אחד.", en: "Approved unanimously." } },
        { num: 3, he: "עדכוני ראש מועצה", en: "Mayor's updates",
          details: { he: "ראש המועצה סקר: המשבר סביב 'כוכב יהודה' (עליית קבוצת עמותת נחלה, שכוללת אנשים מחוות עיטם, לשלוחה בין החווה לצומת תקוע) ושחרור תושב אפרת ממעצר בית; בית הטהרה בבית העלמין כפר עציון שבנייתו הסתיימה (כ-2.15 מיליון ש\"ח דרך קרן אפרת); חפירת חלקת קבר חדשה (כ-300 מקומות, מספיק לכ-7 שנים); אישור צפוי של משרד הדתות להקמת מועצה דתית (במשותף עם קריית ארבע); הכנת קרקע לשכונת קרוואנים חדשה; ומקלטים ומיגוניות. אריאלה פרי בירכה את מנחם שפיץ לרגל בחירת נכדו, ארי שפיץ, שנפצע בעזה, להדליק משואה ביום העצמאות.", en: "The mayor reviewed: the 'Kochav Yehuda' crisis (a Nachala-association group, including people from Eitam Farm, ascending a ridge between the farm and the Tekoa junction) and the release of an Efrat resident from house arrest; the purity house at the Kfar Etzion cemetery, now built (~₪2.15M via the Efrat Fund); digging of a new burial section (~300 plots, enough for ~7 years); the Religious Affairs Ministry's expected approval of a religious council (jointly with Kiryat Arba); ground preparation for a new caravan neighborhood; and bomb shelters. Ariella Perry congratulated Menachem Spitz on his grandson Ari Spitz — wounded in Gaza — being chosen to light a torch on Independence Day." } }
      ]
    },
    {
      id: "may12",
      date: "2026-05-12",
      hebrew_date: "כ\"ה אייר התשפ\"ו",
      title: { he: "ישיבת מועצה מן המניין", en: "Regular Council Meeting" },
      attendance_count: 7,
      absent: ["Shlomo Ben Tzvi", "Avi Hadida", "Avital Cohen", "Talia Marcus"],
      total_speaker_turns: 224,
      agenda: [
        { num: 1, he: "דבר תורה", en: "Torah teaching",
          details: { he: "דבר תורה לפתיחת הישיבה, סביב פרשת השבוע וחג השבועות הקרב.", en: "An opening Torah teaching, tied to the weekly portion and the approaching Shavuot festival." } },
        { num: 2, he: "אישור פרוטוקול ישיבת מועצה מן המניין 14.4.26", en: "Approval of the Apr 14, 2026 protocol",
          details: { he: "אושר ברוב קולות (6 בעד); חנני פייגין נמנע.", en: "Approved by majority (6 for); Hanani Feigin abstained." } },
        { num: 3, he: "עדכון שכר", en: "Salary update",
          details: { he: "אושר פה אחד עדכון שכר של רויטל קולין ב-2.5%.", en: "A 2.5% salary update for staffer Reuvital Kolin was approved unanimously." } },
        { num: 4, he: "אישור תב\"ר 941 — פעילות נגד אלימות במשפחה", en: "Approve TaBaR 941 — domestic-violence prevention",
          details: { he: "אושר פה אחד תב\"ר 941 לפעילות נגד אלימות במשפחה.", en: "TaBaR 941, funding activity against domestic violence, was approved unanimously." } },
        { num: 5, he: "אישור העסקת קבלן לגרירת רכבים נטושים", en: "Approve hiring a contractor to tow abandoned vehicles",
          details: { he: "לאחר שנכשלו ארבעה מכרזים קודמים, אושר פה אחד להעסיק קבלן לגרירת רכבים נטושים ללא מכרז.", en: "After four prior tenders failed, the council unanimously approved hiring a vehicle-towing contractor without a tender." } },
        { num: 6, he: "אישור תיקון חוק עזר אגרת מבני ציבור", en: "Approve amendment to the public-buildings fee by-law",
          details: { he: "עדכון התעריפים של אגרת והיטל מבני ציבור, שנועד לחזק את קרנות מבני הציבור הדלות של המועצה כדי לאפשר בנייה ציבורית בשכונות חדשות וישנות. אושר פה אחד. צורי דותן ציין שגם התעריף המעודכן נמוך — פרויקט של 512 יח\"ד מניב כ-15 מיליון ש\"ח בלבד.", en: "An update to public-buildings fees and levies, meant to rebuild the council's thin public-buildings reserves so it can fund public construction in new and old neighborhoods. Approved unanimously. Tzuri Dotan noted that even the updated rate is low — a 512-unit project yields only about ₪15M." } },
        { num: 7, he: "סקירה — ועדת קליטה (ישי פליישר)", en: "Review — absorption committee (Yishai Fleisher)",
          details: { he: "ישי פליישר סקר את פעילות ועדת הקליטה: עלייה לאפרת, הקושי הגובר בלימוד עברית לדוברי אנגלית, ואולפני עברית למבוגרים הפועלים בבית ספר אלומים בדגן. ללא הצבעה.", en: "Yishai Fleisher reviewed the absorption committee's work: aliyah to Efrat, the growing difficulty English-speakers face learning Hebrew, and adult Hebrew ulpan classes running at the Alumim school in Dagan. No vote." } },
        { num: 8, he: "קמפיין שבועות של קרן אפרת (יונתן מרקוס)", en: "Keren Efrat Shavuot campaign (Yonatan Marcus)",
          details: { he: "יונתן מרקוס הציג את קמפיין השבועות של קרן אפרת. ללא הצבעה.", en: "Yonatan Marcus presented the Efrat Fund's Shavuot fundraising campaign. No vote." } },
        { num: 9, he: "עדכוני ראש מועצה", en: "Mayor's updates",
          details: { he: "עיקרי העדכונים: המועצה הדתית החדשה נכנסה לתוקף ב-1 במאי, וב-3 במאי נבחר פה אחד הרב דוד מרקוס לראש המועצה הדתית — שניגש מיד לסוגיית הרחבת בית העלמין; 15 מתוך 40 אוטובוסים חדשים (מונעי גז) כבר פעילים בקווי האזור; פגישה נוספת במשרד השיכון על מורדות הזית, עם יעד לצאת לשיווק של לפחות 400 יח\"ד תוך חודשיים; וסיכום אירועי יום העצמאות (כולל בעיית תרסיסי השלג).", en: "Highlights: the new religious council took effect on May 1, and on May 3 Rabbi David Marcus was elected (unanimously) to head it — immediately taking on the urgent cemetery-expansion issue; 15 of 40 new gas-powered buses are already running on regional lines; another Housing Ministry meeting on Mordot HaZayit, with a target to market at least 400 units within two months; and an Independence Day events recap (including a snow-spray safety problem)." } }
      ]
    }
  ],

  // Each vote records position for every voting member. Possible values: "for", "against", "abstain", "not_voting", "absent"
  votes: [
    {
      id: "vm12a",
      meeting: "may12",
      title: { he: "אישור פרוטוקול ישיבת מועצה 14.4.26", en: "Approval of the Apr 14, 2026 protocol" },
      result: { he: "עבר; חנני פייגין נמנע", en: "Passed; Hanani Feigin abstained" },
      controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "abstain", "avi-hadida": "absent", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "absent", "talia-marcus": "absent" }
    },
    {
      id: "vm12b",
      meeting: "may12",
      title: { he: "עדכון שכר רויטל קולין ב-2.5%", en: "2.5% salary update for Reuvital Kolin" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "absent", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "absent", "talia-marcus": "absent" }
    },
    {
      id: "vm12c",
      meeting: "may12",
      title: { he: "אישור תב\"ר 941 — פעילות נגד אלימות במשפחה", en: "Approve TaBaR 941 — domestic-violence prevention" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "absent", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "absent", "talia-marcus": "absent" }
    },
    {
      id: "vm12d",
      meeting: "may12",
      title: { he: "אישור העסקת קבלן לגרירת רכבים נטושים (ללא מכרז)", en: "Approve hiring a vehicle-towing contractor (no tender)" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "absent", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "absent", "talia-marcus": "absent" }
    },
    {
      id: "vm12e",
      meeting: "may12",
      title: { he: "אישור תיקון חוק עזר אגרת מבני ציבור", en: "Approve amendment to the public-buildings fee by-law" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "absent", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "absent", "talia-marcus": "absent" }
    },
    {
      id: "vs26",
      meeting: "sep26",
      title: { he: "אישור נסיעת ראש המועצה לארה\"ב (משלחת מועצת יש\"ע)", en: "Approve the mayor's trip to the USA (Yesha Council delegation)" },
      result: { he: "עבר; אבי חדידה ומנחם שפיץ נמנעו", en: "Passed; Avi Hadida and Menachem Spitz abstained" },
      controversy: 2,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "abstain",
        "dana-spiegel": "for",
        "menachem-spitz": "abstain",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "for",
        "talia-marcus": "for"
      }
    },
    {
      id: "vj6b1",
      meeting: "jan6b",
      title: { he: "אישור פרוטוקול ישיבת מועצה 2.12.25", en: "Approval of the Dec 2, 2025 protocol" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "absent",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vj6b2",
      meeting: "jan6b",
      title: { he: "אישור הקצאת קרקע לבית כנסת על גג גן הילדים ברחוב נחמיה", en: "Approve land allocation for a synagogue on the kindergarten roof (Nehemiah St.)" },
      result: { he: "עבר (7 בעד); אריאלה פרי נגד", en: "Passed (7 for); Ariella Perry against" },
      controversy: 3,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "absent",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "against",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "va14",
      meeting: "apr14",
      title: { he: "אישור פרוטוקול ישיבת המועצה מן המניין 10.3.26", en: "Approval of the Mar 10, 2026 protocol" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "absent",
        "dana-spiegel": "for",
        "menachem-spitz": "for",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vf1",
      meeting: "feb4",
      title: { he: "מינוי אבי חדידה ליו\"ר ועדת ביקורת ושלמה בן צבי כחבר", en: "Appoint Avi Hadida audit committee chair, Shlomo Ben Tzvi as member" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vf2",
      meeting: "feb4",
      title: { he: "מינוי אבי וישי לוועדת הפיקוח", en: "Appoint Avi and Yishai to oversight committee" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vf3",
      meeting: "feb4",
      title: { he: "אישור פרוטוקול 23.12.2024", en: "Approval of Dec 23, 2024 protocol" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vf4",
      meeting: "feb4",
      title: { he: "אישור פרוטוקול 07.01.2025", en: "Approval of Jan 7, 2025 protocol" },
      result: { he: "עבר; אבי חדידה וחנני פייגין נמנעו", en: "Passed; Avi Hadida and Hanani Feigin abstained" },
      controversy: 2,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "abstain",
        "avi-hadida": "abstain",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vf5",
      meeting: "feb4",
      title: { he: "התנגדות לשינוי שמות רחובות", en: "Opposition to street-name changes" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 2,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vf6",
      meeting: "feb4",
      title: { he: "חוק עזר אגרת שילוט", en: "Signage fee by-law" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vf7",
      meeting: "feb4",
      title: { he: "אישור מסכי פרסום", en: "Approval of advertising screens" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 2,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vf8",
      meeting: "feb4",
      title: { he: "תב\"ר 888 - רכב קב\"ט", en: "TaBaR 888 — security officer vehicle" },
      result: { he: "עבר; אביטל נגד", en: "Passed; Avital against" },
      controversy: 3,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "against",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vf9",
      meeting: "feb4",
      title: { he: "תב\"ר 309 - טרקטורון כיבוי אש", en: "TaBaR 309 — firefighting ATV" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "va1",
      meeting: "apr8",
      title: { he: "אישור פרוטוקול 4.3.25", en: "Approval of Mar 4 protocol" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "absent",
        "hanani-feigin": "absent",
        "avi-hadida": "absent",
        "dana-spiegel": "for",
        "menachem-spitz": "for",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "for",
        "talia-marcus": "for"
      }
    },
    {
      id: "va2",
      meeting: "apr8",
      title: { he: "פתיחת חשבון בנק לבית ספר החווה החקלאית", en: "Open bank account for Agricultural Farm school" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "absent",
        "hanani-feigin": "absent",
        "avi-hadida": "absent",
        "dana-spiegel": "for",
        "menachem-spitz": "for",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "for",
        "talia-marcus": "for"
      }
    },
    {
      id: "va3",
      meeting: "apr8",
      title: { he: "אישור יו\"ר וחברי ועדת שמות", en: "Approve Names Committee chair and members" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "absent",
        "hanani-feigin": "absent",
        "avi-hadida": "absent",
        "dana-spiegel": "for",
        "menachem-spitz": "for",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "for",
        "talia-marcus": "for"
      }
    },
    {
      id: "va4",
      meeting: "apr8",
      title: { he: "תוספת לקריטריונים להנצחה - שביל הגבורה", en: "Additional memorial criteria — Heroism Path" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "absent",
        "hanani-feigin": "absent",
        "avi-hadida": "absent",
        "dana-spiegel": "for",
        "menachem-spitz": "for",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "for",
        "talia-marcus": "for"
      }
    },
    {
      id: "va5",
      meeting: "apr8",
      title: { he: "צירוף אריאלה פרי לוועדת הנצחה", en: "Add Ariella Perry to memorial committee" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "absent",
        "hanani-feigin": "absent",
        "avi-hadida": "absent",
        "dana-spiegel": "for",
        "menachem-spitz": "for",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "for",
        "talia-marcus": "for"
      }
    },
    {
      id: "vm1",
      meeting: "may6",
      title: { he: "אישור פרוטוקול 8.4.25", en: "Approval of Apr 8 protocol" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "absent",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "for",
        "talia-marcus": "for"
      }
    },
    {
      id: "vm2",
      meeting: "may6",
      title: { he: "מיחזור הלוואה 14.5 מ ש\"ח", en: "Refinance ₪14.5M loan" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 2,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "absent",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "for",
        "talia-marcus": "for"
      }
    },
    {
      id: "vm3",
      meeting: "may6",
      title: { he: "תב\"ר 11.26 מ ש\"ח לשיקום דרכים", en: "TaBaR ₪11.26M road rehabilitation" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 2,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "absent",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "for",
        "talia-marcus": "for"
      }
    },
    {
      id: "vm4",
      meeting: "may6",
      title: { he: "תב\"ר עיצוב ושיפור חזית", en: "TaBaR — facade design and improvement" },
      result: { he: "עבר (7 בעד, 2 נמנעו)", en: "Passed (7 for, 2 abstain)" },
      controversy: 2,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "abstain",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "absent",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "abstain",
        "talia-marcus": "for"
      }
    },
    {
      id: "vm5",
      meeting: "may6",
      title: { he: "החלפת מזכירת בית הספר תמר", en: "Replace Tamar school secretary" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "absent",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "for",
        "talia-marcus": "for"
      }
    },
    {
      id: "vm6",
      meeting: "may6",
      title: { he: "שינויים בוועדת שמות", en: "Changes to Names Committee" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "absent",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "for",
        "talia-marcus": "for"
      }
    },
    {
      id: "vm7",
      meeting: "may6",
      title: { he: "החלפת חבר הנהלת המתנ\"ס", en: "Replace community-center board member" },
      result: { he: "עבר; שלמה נמנע", en: "Passed; Shlomo abstained" },
      controversy: 2,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "absent",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "abstain",
        "talia-marcus": "for"
      }
    },
    {
      id: "vm8",
      meeting: "may6",
      title: { he: "מינוי שלמה וצורי לוועדת מכרזים", en: "Appoint Shlomo and Tzuri to selection committee" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "absent",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "for",
        "talia-marcus": "for"
      }
    },
    {
      id: "vm9",
      meeting: "may6",
      title: { he: "הארכת חוק עזר ביוב עד 31.12.2025", en: "Extend sewage by-law through Dec 31, 2025" },
      result: { he: "אושר", en: "Approved" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "absent",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "for",
        "talia-marcus": "for"
      }
    },
    {
      id: "vm10",
      meeting: "may6",
      title: { he: "אישור חברי ועדת כספים", en: "Approve finance committee members" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "absent",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "for",
        "talia-marcus": "for"
      }
    },
    {
      id: "vg1",
      meeting: "jun10",
      title: { he: "אישור פרוטוקול ישיבת 6.5.25", en: "Approval of May 6 meeting protocol" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for",
        "avi-hadida": "absent", "dana-spiegel": "for", "menachem-spitz": "for",
        "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "absent",
        "shlomo-bentzvi": "for", "talia-marcus": "for"
      }
    },
    {
      id: "vg2",
      meeting: "jun10",
      title: { he: "תב\"ר 1.84M ש\"ח לתנועת העזרא בתמר", en: "TaBaR ₪1.84M for Ezra youth movement in Tamar" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for",
        "avi-hadida": "absent", "dana-spiegel": "for", "menachem-spitz": "for",
        "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "absent",
        "shlomo-bentzvi": "for", "talia-marcus": "for"
      }
    },
    {
      id: "vg3",
      meeting: "jun10",
      title: { he: "תוכנית פעולה מול מכינת נטע שורק (3 מישורים)", en: "Netah Sorek pre-army academy action plan (3 fronts)" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 2,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for",
        "avi-hadida": "absent", "dana-spiegel": "for", "menachem-spitz": "for",
        "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "absent",
        "shlomo-bentzvi": "for", "talia-marcus": "for"
      }
    },
    {
      id: "vg4",
      meeting: "jun10",
      title: { he: "דחיית ישיבת המועצה הבאה ל-15.7", en: "Push next meeting to July 15" },
      result: { he: "עבר 7-1 (1 נמנע)", en: "Passed 7-1 (1 abstain)" },
      controversy: 2,
      note: { he: "הוויכוח היחיד של הישיבה. אחר כך הוחלט על 22.7 בהסכמה כללית.", en: "The meeting's only split vote. Later rescheduled to July 22 by consent." },
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "against", "hanani-feigin": "abstain",
        "avi-hadida": "absent", "dana-spiegel": "for", "menachem-spitz": "for",
        "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "absent",
        "shlomo-bentzvi": "for", "talia-marcus": "for"
      }
    },
    {
      id: "vg5",
      meeting: "jun10",
      title: { he: "הארכת כהונת יוסי קרוטמר ראש אגף חינוך עד סוף דצמבר 2025", en: "Extend Yossi Krotmer (Education Dept head) tenure through Dec 2025" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for",
        "avi-hadida": "absent", "dana-spiegel": "for", "menachem-spitz": "for",
        "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "absent",
        "shlomo-bentzvi": "for", "talia-marcus": "for"
      }
    },
    {
      id: "vj1",
      meeting: "jul22",
      title: { he: "הסדרת תנועה בצומת דוד המלך-רחל אימנו", en: "Traffic regulation at David HaMelech-Rachel Imenu junction" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "absent",
        "hanani-feigin": "for",
        "avi-hadida": "absent",
        "dana-spiegel": "for",
        "menachem-spitz": "for",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vj2",
      meeting: "jul22",
      title: { he: "אישור פרוטוקול 10.6.25", en: "Approval of June 10 protocol" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "absent",
        "hanani-feigin": "for",
        "avi-hadida": "absent",
        "dana-spiegel": "for",
        "menachem-spitz": "for",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vj3",
      meeting: "jul22",
      title: { he: "אישור מינוי ושכר אמיר בן גל - מנהל אגף חינוך", en: "Approval of Amir Ben Gal as Education Department head" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "absent",
        "hanani-feigin": "for",
        "avi-hadida": "absent",
        "dana-spiegel": "for",
        "menachem-spitz": "for",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vj4",
      meeting: "jul22",
      title: { he: "אישור מינוי ושכר נעה דניאל - מבקרת המועצה", en: "Approval of Noa Daniel as council auditor" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "absent",
        "hanani-feigin": "for",
        "avi-hadida": "absent",
        "dana-spiegel": "for",
        "menachem-spitz": "for",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vj5",
      meeting: "jul22",
      title: { he: "עדכון תאריך ישיבת מועצה ל-9.9", en: "Reschedule next meeting to Sep 9" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "absent",
        "hanani-feigin": "for",
        "avi-hadida": "absent",
        "dana-spiegel": "for",
        "menachem-spitz": "for",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vj6",
      meeting: "jul22",
      title: { he: "תב\"ר 924 - הנגשת אמות המים", en: "TaBaR 924 — Roman aqueducts accessibility" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "absent",
        "hanani-feigin": "for",
        "avi-hadida": "absent",
        "dana-spiegel": "for",
        "menachem-spitz": "for",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vj7",
      meeting: "jul22",
      title: { he: "תב\"ר 869 - השמשת קומת המועצה בסנטר אפרת", en: "TaBaR 869 — fit out the council floor at Efrat Center" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "absent",
        "hanani-feigin": "for",
        "avi-hadida": "absent",
        "dana-spiegel": "for",
        "menachem-spitz": "for",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vsp1",
      meeting: "sep9",
      title: { he: "אישור פרוטוקול 22.7.25", en: "Approval of July 22 protocol" },
      result: { he: "עבר; אבי חדידה נמנע", en: "Passed; Avi Hadida abstained" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "abstain",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "absent",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vsp2",
      meeting: "sep9",
      title: { he: "תב\"ר 927 - 12K ש\"ח מזהירות בדרכים", en: "TaBaR 927 — ₪12K from Road Safety Authority" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "for",
        "ariella-perry": "for",
        "yishai-fleisher": "absent",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vsp3",
      meeting: "sep9",
      title: { he: "תב\"ר 928-111508 - קייטנות חופש קיץ", en: "TaBaR 928-111508 — summer camp funding" },
      result: { he: "עבר; אביטל נגד", en: "Passed; Avital against" },
      controversy: 3,
      note: { he: "אביטל כהן הצביעה נגד בטענה שהרישום בשיטת \"כל הקודם זוכה\" לא הוגן לחד-הוריות, ילדים עם צרכים מיוחדים, ומחוננים.", en: "Avital Cohen voted against, arguing that first-come-first-served registration is unfair to single-parent families, special-needs and gifted children." },
      positions: {
        "dovi-shefler": "for",
        "tzuri-dotan": "for",
        "hanani-feigin": "for",
        "avi-hadida": "for",
        "dana-spiegel": "for",
        "menachem-spitz": "absent",
        "avital-cohen": "against",
        "ariella-perry": "for",
        "yishai-fleisher": "absent",
        "shlomo-bentzvi": "absent",
        "talia-marcus": "for"
      }
    },
    {
      id: "vs1",
      meeting: "sep30",
      title: { he: "עדכון תקציב 2025 - קיצוץ ל-137.79M ש\"ח", en: "2025 Budget Update — cut to ₪137.79M" },
      result: { he: "עבר 5-2 (2 נמנעו)", en: "Passed 5-2 (2 abstain)" },
      controversy: 4,
      note: { he: "הצבעה משמעותית; שני חברים הצביעו נגד ועוד שניים נמנעו. ראש המועצה ואביטל נעדרו.", en: "A meaningful split; two members voted against and two abstained. Mayor and Avital were absent." },
      positions: {
        "dovi-shefler": "absent", "tzuri-dotan": "for", "hanani-feigin": "for",
        "avi-hadida": "against", "dana-spiegel": "abstain", "menachem-spitz": "for",
        "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "against", "talia-marcus": "abstain"
      }
    },
    {
      id: "vs2",
      meeting: "sep30",
      title: { he: "הצטרפות לתוכנית ערים בריאות", en: "Joining the Healthy Cities program" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "absent", "tzuri-dotan": "for", "hanani-feigin": "for",
        "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for",
        "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "for"
      }
    },
    {
      id: "vs3",
      meeting: "sep30",
      title: { he: "שינוי מורשי חתימה", en: "Change of authorized signatories" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "absent", "tzuri-dotan": "for", "hanani-feigin": "for",
        "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for",
        "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "for"
      }
    },
    {
      id: "vs4",
      meeting: "sep30",
      title: { he: "תמר שרייגר ליו\"ר ועדת תחבורה ותנועה", en: "Tamar Schreiger as chair of Transportation Committee" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "absent", "tzuri-dotan": "for", "hanani-feigin": "for",
        "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for",
        "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "for"
      }
    },
    {
      id: "vs5",
      meeting: "sep30",
      title: { he: "אישור פרוטוקול ישיבת 25.9.25", en: "Approval of Sep 25 extraordinary protocol" },
      result: { he: "עבר", en: "Passed" },
      controversy: 1,
      positions: {
        "dovi-shefler": "absent", "tzuri-dotan": "for", "hanani-feigin": "for",
        "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for",
        "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "for"
      }
    },
    {
      id: "vs6",
      meeting: "sep30",
      title: { he: "תב\"ר 929 - מערכות LPR לשערי היישוב", en: "TaBaR 929 — LPR systems at settlement gates" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "absent", "tzuri-dotan": "for", "hanani-feigin": "for",
        "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for",
        "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "for"
      }
    },
    {
      id: "vn1",
      meeting: "nov4",
      title: { he: "אישור עבודה נוספת של נעה דניאל (קריית ארבע)", en: "Approval of Noa Daniel's additional work at Kiryat Arba" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for",
        "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "absent",
        "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "absent"
      }
    },
    {
      id: "vn2",
      meeting: "nov4",
      title: { he: "אישור פרוטוקול ישיבת 9.9.25", en: "Approval of Sep 9 meeting protocol" },
      result: { he: "אושר", en: "Approved" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for",
        "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "absent",
        "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "absent"
      }
    },
    {
      id: "vn3",
      meeting: "nov4",
      title: { he: "אישור פרוטוקול ישיבת 30.9.25", en: "Approval of Sep 30 meeting protocol" },
      result: { he: "אושר", en: "Approved" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for",
        "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "absent",
        "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "absent"
      }
    },
    {
      id: "vn4",
      meeting: "nov4",
      title: { he: "חברים נוספים לוועדת רווחה", en: "Additional welfare committee members" },
      result: { he: "אושר", en: "Approved" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for",
        "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "absent",
        "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "absent"
      }
    },
    {
      id: "vn5",
      meeting: "nov4",
      title: { he: "חוק עזר היטל שמירה 2026-2029 (₪13.18/מ\"ר)", en: "Watch-tax by-law 2026–2029 (₪13.18/m²)" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 2,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for",
        "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "absent",
        "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "absent"
      }
    },
    {
      id: "vn6",
      meeting: "nov4",
      title: { he: "8 נציגי ציבור (להצעה לשר לבחירת רב)", en: "8 public representatives (proposed to the minister for rabbi selection)" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 2,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for",
        "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "absent",
        "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "absent"
      }
    },
    {
      id: "vn7",
      meeting: "nov4",
      title: { he: "תב\"ר 930 - רכישת זכויות למבנה קומת המועצה", en: "TaBaR 930 — rights purchase for the council-floor building" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for",
        "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "absent",
        "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "absent"
      }
    },
    {
      id: "v1",
      meeting: "dec2",
      title: { he: "אישור פרוטוקול 4.11.25", en: "Approval of Nov 4 protocol" },
      result: { he: "פה אחד", en: "Unanimous (of those present at original meeting)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "absent", "hanani-feigin": "for",
        "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for",
        "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "not_voting"
      }
    },
    {
      id: "v2",
      meeting: "dec2",
      title: { he: "אישור תאריכי ישיבות 2026", en: "Approval of 2026 meeting dates" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "v3",
      meeting: "dec2",
      title: { he: "דוח ועדת ביקורת - משרד הפנים 2024", en: "Audit committee report - Interior Ministry 2024" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "v4",
      meeting: "dec2",
      title: { he: "דוח מבקר 2022-23 כולל המלצה למניעת קיזוזי חובות לספקים וארנונה", en: "Audit report 2022-23 INCLUDING the controversial recommendation against debt-offsets" },
      result: { he: "עבר (7-4)", en: "Passed 7-4 — the mayor lost this vote" },
      controversy: 5,
      note: { he: "המלצה זו אומצה בניגוד לעמדת המבקרת. ראש המועצה הצביע נגד.", en: "The committee's recommendation contradicted the (then) auditor's opinion. The mayor and 3 others voted against; 7 members supported the recommendation." },
      positions: {
        "dovi-shefler": "against", "tzuri-dotan": "for", "hanani-feigin": "against",
        "avi-hadida": "for", "dana-spiegel": "against", "menachem-spitz": "for",
        "avital-cohen": "against", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "for"
      }
    },
    {
      id: "v5",
      meeting: "dec2",
      title: { he: "דוח מבקר 2023 - נושא מלאי / אינוונטר", en: "Audit report 2023 - inventory issue" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "v6",
      meeting: "dec2",
      title: { he: "חידוש מסגרת חח\"ד 5.5 מ' ש\"ח", en: "Renew ₪5.5M credit facility for 2026" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "v7",
      meeting: "dec2",
      title: { he: "חוק עזר אגרת ביוב 2026", en: "Sewage by-law for 2026" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "v8",
      meeting: "dec2",
      title: { he: "תב\"ר 840 - שיקום כבישים ₪270K", en: "TaBaR 840 - road rehabilitation ₪270K" },
      result: { he: "עבר; נמנע: צורי דותן", en: "Passed; abstain: Tzuri Dotan" },
      controversy: 2,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "abstain", "hanani-feigin": "for",
        "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for",
        "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "for"
      }
    },
    {
      id: "v9",
      meeting: "dec2",
      title: { he: "תב\"ר 873 - חניון מול הבריכה ₪280K", en: "TaBaR 873 - parking lot opposite the pool ₪280K" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "v10",
      meeting: "dec2",
      title: { he: "תב\"ר 919 - שיקום צנרת ישן/חדש ₪2.4M", en: "TaBaR 919 - old-vs-new pipe rehabilitation ₪2.4M" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "v11",
      meeting: "dec2",
      title: { he: "תב\"ר 931 - תוכניות מניעת התמכרויות ₪167K", en: "TaBaR 931 - addiction-prevention programs ₪167K" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "v12",
      meeting: "dec2",
      title: { he: "תב\"ר 572 - מרכז ספורט ₪39.1M", en: "TaBaR 572 - sports center ₪39.1M" },
      result: { he: "עבר", en: "Passed" },
      controversy: 2,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "v13",
      meeting: "dec2",
      title: { he: "תב\"ר 809 - פעולות למען קהילות ₪838K", en: "TaBaR 809 - community-actions support ₪838K" },
      result: { he: "עבר", en: "Passed" },
      controversy: 2,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "v14",
      meeting: "dec2",
      title: { he: "תב\"ר 932 - מוגנות ₪120K", en: "TaBaR 932 - protection ₪120K" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "v15",
      meeting: "dec2",
      title: { he: "שימוש בכספי מפעל הפיס לצמצום הגירעון", en: "Use Mifal HaPais funds to reduce the deficit" },
      result: { he: "עבר", en: "Passed" },
      controversy: 2,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "v16",
      meeting: "dec2",
      title: { he: "5 נציגי הנהגת הורים בוועדת החינוך", en: "5 parent representatives on the education committee" },
      result: { he: "פה אחד", en: "Unanimous" },
      controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "v17",
      meeting: "jan6",
      title: { he: "אישור תקציב המועצה לשנת 2026 (144,258,000 ₪)", en: "Approval of 2026 council budget (₪144,258,000)" },
      result: { he: "עבר; 7 בעד, 1 נגד (אבי חדידה)", en: "Passed; 7 for, 1 against (Avi Hadida)" },
      controversy: 4,
      note: { he: "ההצבעה היחידה כנגד התקציב; שלושה חברים נעדרו (צורי, חנני, שלמה)", en: "The single dissenting vote on the budget; three members absent (Tzuri, Hanani, Shlomo)." },
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "absent", "hanani-feigin": "absent",
        "avi-hadida": "against", "dana-spiegel": "for", "menachem-spitz": "for",
        "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "absent", "talia-marcus": "for"
      }
    },
    {
      id: "v18",
      meeting: "feb3",
      title: { he: "אישור פרוטוקול ישיבת תקציב 6.1.26", en: "Approval of Jan 6 budget protocol" },
      result: { he: "עבר; נמנע: חנני; לא משתתף: שלמה", en: "Passed; abstain: Hanani; not participating: Shlomo" },
      controversy: 2,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "absent", "hanani-feigin": "abstain",
        "avi-hadida": "absent", "dana-spiegel": "for", "menachem-spitz": "absent",
        "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "not_voting", "talia-marcus": "for"
      }
    },
    {
      id: "v19",
      meeting: "feb3",
      title: { he: "הנחה בארנונה לנכים (תיקון 20)", en: "Property-tax disability discount (amendment 20)" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "absent", "hanani-feigin": "for",
        "avi-hadida": "absent", "dana-spiegel": "for", "menachem-spitz": "absent",
        "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "for"
      }
    },
    {
      id: "v20",
      meeting: "feb3",
      title: { he: "מדיניות עמדות פרטיות לטעינת רכב חשמלי", en: "Private EV charging-station policy" },
      result: { he: "עבר; נמנע: שלמה בן צבי", en: "Passed; abstain: Shlomo Ben Tzvi" },
      controversy: 3,
      note: { he: "דיון נרחב לגבי החלת הגבלת 8 שעות, שבסופו הוסרה. אריאלה העלתה את שאלת הנגישות לדוברי אנגלית.", en: "Substantial debate over an 8-hour parking restriction (later removed). Ariella raised the issue of accessibility for English-speaking residents." },
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "absent", "hanani-feigin": "for",
        "avi-hadida": "absent", "dana-spiegel": "for", "menachem-spitz": "absent",
        "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "abstain", "talia-marcus": "for"
      }
    },
    {
      id: "v21",
      meeting: "feb3",
      title: { he: "תב\"ר 572 - מרכז ספורט/בריכה", en: "TaBaR 572 - sports center/pool" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "absent", "hanani-feigin": "for",
        "avi-hadida": "absent", "dana-spiegel": "for", "menachem-spitz": "absent",
        "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "for"
      }
    },
    {
      id: "v22",
      meeting: "feb3",
      title: { he: "תב\"ר 934 - מצלמות ומרכיבים טכנולוגיים", en: "TaBaR 934 - cameras and tech components" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "absent", "hanani-feigin": "for",
        "avi-hadida": "absent", "dana-spiegel": "for", "menachem-spitz": "absent",
        "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "for"
      }
    },
    {
      id: "v23",
      meeting: "feb3",
      title: { he: "תב\"ר 935 - הצטיידות חינוך מיוחד ומתי\"א", en: "TaBaR 935 - special-education and resource-center equipment" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "absent", "hanani-feigin": "for",
        "avi-hadida": "absent", "dana-spiegel": "for", "menachem-spitz": "absent",
        "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "for"
      }
    },
    {
      id: "v24",
      meeting: "feb3",
      title: { he: "תב\"ר 936 - שיפור מוכנות לחירום", en: "TaBaR 936 - emergency-readiness improvement" },
      result: { he: "פה אחד", en: "Unanimous (of those present)" },
      controversy: 1,
      positions: {
        "dovi-shefler": "for", "tzuri-dotan": "absent", "hanani-feigin": "for",
        "avi-hadida": "absent", "dana-spiegel": "for", "menachem-spitz": "absent",
        "avital-cohen": "absent", "ariella-perry": "for", "yishai-fleisher": "for",
        "shlomo-bentzvi": "for", "talia-marcus": "for"
      }
    },
    {
      id: "vj30_1", meeting: "jun30",
      title: { he: "צו ארנונה — תעריף לחניון מקורה בקניון (45 ש״ח/מ״ר)", en: "Property-tax order — covered mall-parking tariff (NIS 45/sqm)" },
      result: { he: "עבר (7 בעד, נגד 1, נמנע 1)", en: "Passed (7 for, 1 against, 1 abstain)" },
      note: { he: "עודד רביבי נגד; אבי חדידה נמנע.", en: "Oded Ravivi against; Avi Hadida abstained." },
      controversy: 3,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "abstain", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "oded-ravivi": "against" }
    },
    {
      id: "vj9_1", meeting: "jul9",
      title: { he: "דו״ח ביקורת 2021–2022 — אבטחת מידע ופרוטוקולים", en: "Audit report 2021–2022 — information security & protocols" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "oded-ravivi": "for", "tamar-amar": "for" }
    },
    {
      id: "vj9_2", meeting: "jul9",
      title: { he: "תב״ר 811 — פעולות למען קהילות", en: "TaBaR 811 — community actions" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "oded-ravivi": "for", "tamar-amar": "for" }
    },
    {
      id: "vj9_3", meeting: "jul9",
      title: { he: "תב״ר 833 — בטיחות בדרכים 2024", en: "TaBaR 833 — road safety 2024" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "oded-ravivi": "for", "tamar-amar": "for" }
    },
    {
      id: "vj9_4", meeting: "jul9",
      title: { he: "תב״ר 866 — סיוע לרשויות לצורכי הגנה", en: "TaBaR 866 — assistance to authorities for defense" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "oded-ravivi": "for", "tamar-amar": "for" }
    },
    {
      id: "vj9_5", meeting: "jul9",
      title: { he: "תב״ר נוסף (כ-640 אלף ש״ח)", en: "Further TaBaR (~NIS 640K)" },
      result: { he: "עבר; צורי דותן נמנע", en: "Passed; Tzuri Dotan abstained" },
      note: { he: "אביטל כהן לא נכחה בהצבעה זו.", en: "Avital Cohen was not present for this vote." },
      controversy: 2,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "abstain", "hanani-feigin": "for", "avi-hadida": "for", "avital-cohen": "not_voting", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "oded-ravivi": "for", "tamar-amar": "for" }
    },
    {
      id: "vj9_6", meeting: "jul9",
      title: { he: "פתיחת חשבון בנק בבנק המזרחי", en: "Open a bank account at Bank Mizrahi" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "oded-ravivi": "for", "tamar-amar": "for" }
    },
    {
      id: "vj9_7", meeting: "jul9",
      title: { he: "אישור פרוטוקול 3.6.2024", en: "Approval of the June 3, 2024 protocol" },
      result: { he: "עבר; אבי חדידה נמנע", en: "Passed; Avi Hadida abstained" }, controversy: 2,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "abstain", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "oded-ravivi": "for", "tamar-amar": "for" }
    },
    {
      id: "vj9_8", meeting: "jul9",
      title: { he: "מינוי תושבים לחברי ועדות", en: "Appoint residents to committees" },
      result: { he: "עבר; אבי חדידה ושלמה בן צבי נמנעו", en: "Passed; Avi Hadida and Shlomo Ben Tzvi abstained" }, controversy: 2,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "abstain", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "abstain", "oded-ravivi": "for", "tamar-amar": "for" }
    },
    {
      id: "vo8_1", meeting: "oct8",
      title: { he: "אישור פרוטוקול ישיבת 3.9.2024", en: "Approval of the Sep 3, 2024 protocol" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vo8_2", meeting: "oct8",
      title: { he: "החלפת מורשי חתימה — אורות עציון בנים", en: "Change of signatories — Orot Etzion Boys" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vo8_3", meeting: "oct8",
      title: { he: "מינוי אביטל כהן ליו״ר ועדה", en: "Appoint Avital Cohen as committee chair" },
      result: { he: "עבר; מנחם שפיץ ודנה שפיגל נמנעו", en: "Passed; Menachem Spitz and Dana Spiegel abstained" }, controversy: 2,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "dana-spiegel": "abstain", "menachem-spitz": "abstain", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vo8_4", meeting: "oct8",
      title: { he: "הסמכת ועדת הנצחה", en: "Authorize the commemoration committee" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vo8_5", meeting: "oct8",
      title: { he: "מינוי נציגים למועצה הדתית (4 שמות)", en: "Appoint Religious-Council representatives (4 names)" },
      result: { he: "עבר (נגד 2, נמנע 1)", en: "Passed (2 against, 1 abstain)" },
      note: { he: "מנחם שפיץ ושלמה בן צבי נגד; טליה מרכוס נמנעה.", en: "Menachem Spitz and Shlomo Ben Tzvi against; Talia Marcus abstained." },
      controversy: 3,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "dana-spiegel": "for", "menachem-spitz": "against", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "against", "talia-marcus": "abstain" }
    },
    {
      id: "vo8_6", meeting: "oct8",
      title: { he: "תב״ר 394 — חידוש מבני ציבור", en: "TaBaR 394 — public-building renewal" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vo8_7", meeting: "oct8",
      title: { he: "תב״ר 845 — אורות עציון בנים", en: "TaBaR 845 — Orot Etzion Boys" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vo8_8", meeting: "oct8",
      title: { he: "תב״ר 377 — חווה חקלאית", en: "TaBaR 377 — agricultural farm" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vo8_9", meeting: "oct8",
      title: { he: "תב״ר 597 — נגישות פרטנית לראייה", en: "TaBaR 597 — individual vision accessibility" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vo8_10", meeting: "oct8",
      title: { he: "תב״ר 328 — כיתת ותיקים", en: "TaBaR 328 — seniors classroom" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vo8_11", meeting: "oct8",
      title: { he: "תב״ר 875 — שביל הגבורה", en: "TaBaR 875 — Heroism Trail" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vo8_12", meeting: "oct8",
      title: { he: "תב״ר 902 — הלוואת נופי כרמים", en: "TaBaR 902 — Nofei Kramim loan" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "dana-spiegel": "for", "menachem-spitz": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vn5_1", meeting: "nov5",
      title: { he: "אישור פרוטוקול ישיבת 8.10.2024", en: "Approval of the Oct 8, 2024 protocol" },
      result: { he: "עבר; אבי חדידה נמנע", en: "Passed; Avi Hadida abstained" }, controversy: 2,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "avi-hadida": "abstain", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vn5_2", meeting: "nov5",
      title: { he: "תב״ר חמ״לי צח״ש", en: "TaBaR — emergency command posts" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "avi-hadida": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vn5_3", meeting: "nov5",
      title: { he: "תב״ר 509 — תצפית ניידת", en: "TaBaR 509 — mobile observation post" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "avi-hadida": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vn5_4", meeting: "nov5",
      title: { he: "תב״ר 609 — גרור סולר", en: "TaBaR 609 — diesel trailer" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "avi-hadida": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vn5_5", meeting: "nov5",
      title: { he: "תב״ר 709 — ציוד צח״ש אפרת", en: "TaBaR 709 — Efrat rescue equipment" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "avi-hadida": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vn5_6", meeting: "nov5",
      title: { he: "תב״ר 809", en: "TaBaR 809" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "avi-hadida": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vn5_7", meeting: "nov5",
      title: { he: "מינוי אריאלה פרי ליו״ר ועדת הנחות", en: "Appoint Ariella Perry chair of the discounts committee" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "hanani-feigin": "for", "avi-hadida": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "talia-marcus": "for" }
    },
    {
      id: "vj3_1", meeting: "jun3",
      title: { he: "אישור פרוטוקול ישיבת 7.5.2024", en: "Approval of the May 7, 2024 protocol" },
      result: { he: "עבר", en: "Passed" },
      note: { he: "עודד רביבי ואורית סמואלס הגיעו לאחר ההצבעה.", en: "Oded Ravivi and Orit Samuels arrived after the vote." },
      controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avital-cohen": "for", "ariella-perry": "for", "oded-ravivi": "not_voting", "orit-samuels": "not_voting" }
    },
    {
      id: "vj25app_1", meeting: "jun25app",
      title: { he: "קביעת יו״ר לוועדות השונות", en: "Appoint chairs of the various committees" },
      result: { he: "עבר (6 בעד, 2 נגד, נמנע 1)", en: "Passed (6 for, 2 against, 1 abstain)" },
      note: { he: "עודד רביבי ושלמה בן צבי נגד; תמר עמר נמנעה.", en: "Oded Ravivi and Shlomo Ben Tzvi against; Tamar Amar abstained." },
      controversy: 3,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "against", "oded-ravivi": "against", "tamar-amar": "abstain" }
    },
    {
      id: "vj25app_2", meeting: "jun25app",
      title: { he: "מינוי חברי דירקטוריון לחכ״ל ולמתנ״ס", en: "Appoint board directors (CHC & community center)" },
      result: { he: "עבר", en: "Passed" },
      note: { he: "עודד רביבי נגד; תמר עמר נמנעה.", en: "Oded Ravivi against; Tamar Amar abstained." },
      controversy: 2,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "oded-ravivi": "against", "tamar-amar": "abstain" }
    },
    {
      id: "vj25app_3", meeting: "jun25app",
      title: { he: "מינוי יו״ר ועדת רפואה (יהונתן מרקוס)", en: "Appoint medical-committee chair (Yonatan Marcus)" },
      result: { he: "עבר", en: "Passed" },
      note: { he: "עודד רביבי נגד; שלמה בן צבי ותמר עמר נמנעו.", en: "Oded Ravivi against; Shlomo Ben Tzvi and Tamar Amar abstained." },
      controversy: 2,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "abstain", "oded-ravivi": "against", "tamar-amar": "abstain" }
    },
    {
      id: "vj25app_4", meeting: "jun25app",
      title: { he: "מינוי סגן וממלא מקום ראש המועצה (צורי דותן)", en: "Appoint deputy/acting mayor (Tzuri Dotan)" },
      result: { he: "עבר (5 בעד, 3 נגד)", en: "Passed (5 for, 3 against)" },
      note: { he: "עודד רביבי, תמר עמר ושלמה בן צבי נגד.", en: "Oded Ravivi, Tamar Amar and Shlomo Ben Tzvi against." },
      controversy: 3,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "not_voting", "hanani-feigin": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "against", "oded-ravivi": "against", "tamar-amar": "against" }
    },
    {
      id: "vj25arn_1", meeting: "jun25arn",
      title: { he: "תוספת חריגה לארנונת מגורים ועסקים", en: "Exceptional surcharge on residential & business property tax" },
      result: { he: "עבר (6 בעד, 3 נגד, נמנע 1)", en: "Passed (6 for, 3 against, 1 abstain)" },
      note: { he: "שלמה בן צבי, אבי חדידה ועודד רביבי נגד; תמר עמר נמנעה.", en: "Shlomo Ben Tzvi, Avi Hadida and Oded Ravivi against; Tamar Amar abstained." },
      controversy: 3,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "against", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "against", "oded-ravivi": "against", "tamar-amar": "abstain" }
    },
    {
      id: "vj25bud_1", meeting: "jun25bud",
      title: { he: "אישור תקציב 2024", en: "Approval of the 2024 budget" },
      result: { he: "עבר (6 בעד, 4 נגד)", en: "Passed (6 for, 4 against)" },
      note: { he: "עודד רביבי, תמר עמר, אבי חדידה ושלמה בן צבי נגד.", en: "Oded Ravivi, Tamar Amar, Avi Hadida and Shlomo Ben Tzvi against." },
      controversy: 3,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "against", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "against", "oded-ravivi": "against", "tamar-amar": "against" }
    },
    {
      id: "va15_1", meeting: "apr15",
      title: { he: "אישור פרוטוקול ישיבת 4.12.2023", en: "Approval of the Dec 4, 2023 protocol" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "oded-ravivi": "for", "tamar-amar": "for", "menachem-spitz": "for", "efrat-gantz": "for", "hanoch-wolfe": "for" }
    },
    {
      id: "va15_2", meeting: "apr15",
      title: { he: "אישור פרוטוקול ישיבת 1.1.2024", en: "Approval of the Jan 1, 2024 protocol" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "oded-ravivi": "for", "tamar-amar": "for", "menachem-spitz": "for", "efrat-gantz": "for", "hanoch-wolfe": "for" }
    },
    {
      id: "va15_3", meeting: "apr15",
      title: { he: "אישור דובי שפלר כנציג לאשכול יו״ש", en: "Approve Dovi Shefler as rep to the J&S cluster" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "oded-ravivi": "for", "tamar-amar": "for", "menachem-spitz": "for", "efrat-gantz": "for", "hanoch-wolfe": "for" }
    },
    {
      id: "va15_4", meeting: "apr15",
      title: { he: "אישור תאריכי ישיבות מועצה 2024", en: "Approve the 2024 council-meeting schedule" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "oded-ravivi": "for", "tamar-amar": "for", "menachem-spitz": "for", "efrat-gantz": "for", "hanoch-wolfe": "for" }
    },
    {
      id: "va15_5", meeting: "apr15",
      title: { he: "חוקי עזר — אגרה והיטל ביוב", en: "By-laws — sewage fee and levy" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "oded-ravivi": "for", "tamar-amar": "for", "menachem-spitz": "for", "efrat-gantz": "for", "hanoch-wolfe": "for" }
    },
    {
      id: "va15_6", meeting: "apr15",
      title: { he: "תב״רים", en: "Capital budgets (TaBaRs)" },
      result: { he: "פה אחד", en: "Unanimous" }, controversy: 1,
      positions: { "dovi-shefler": "for", "tzuri-dotan": "for", "hanani-feigin": "for", "avi-hadida": "for", "avital-cohen": "for", "ariella-perry": "for", "yishai-fleisher": "for", "shlomo-bentzvi": "for", "oded-ravivi": "for", "tamar-amar": "for", "menachem-spitz": "for", "efrat-gantz": "for", "hanoch-wolfe": "for" }
    }
  ],

  topics: [
    {
      id: "synagogue-allocation",
      he: "הקצאת קרקע לבית כנסת על גג גן ילדים",
      en: "Synagogue land allocation on a kindergarten roof",
      summary: { he: "המועצה אישרה (7-1) להעביר את גג גן הילדים ברחוב נחמיה לוועדת הקצאות לטובת בית כנסת, לאחר פנייה של אנשי חב\"ד. אריאלה פרי הצביעה נגד מתוך התנגדות עקרונית לערבוב גן ילדים פעיל עם בית כנסת.", en: "The council approved (7-1) transferring the kindergarten roof on Nehemiah St. to the allocations committee for a synagogue, following a request from the local Chabad community. Ariella Perry voted against, opposing on principle the mixing of an active kindergarten with a synagogue." },
      meetings: ["jan6b"],
      speakers: ["dovi-shefler", "ariella-perry", "hanani-feigin", "avi-hadida", "yishai-fleisher"],
      detail: {
        he: "באפרת כבר אושרו בעבר שלושה בתי כנסת על גגות גני ילדים. בינואר 2026 ביקש ראש המועצה לאשר עוד אחד — על גג גן ברחוב נחמיה פינת דוד המלך, מול המרכז המסחרי בדקל — לאחר פנייה של אנשי חב\"ד שצר להם המקום במקלט הדקל. ההצבעה היא רק על העברת הקרקע לוועדת הקצאות, שתפרסם קריטריונים פתוחים לכל עמותה. ההצבעה עברה 7-1. אריאלה פרי הייתה היחידה שהתנגדה, מטעמים עקרוניים של הפרדת מרחבים. חנני פייגין תמך אך דרש שהחוזה יבהיר מראש את העלויות הנוספות שבבנייה מעל גן מתפקד (מנופים, שעות עבודה מוגבלות) ואת פירוק והעברת המערכת הסולארית על חשבון העמותה. הגזבר שרון הורוביץ הוסיף שצריך לגבות את הכסף מהעמותה מראש ולהבהיר שלא תהיה תמיכה נוספת מקרן מבני ציבור.",
        en: "Efrat had previously approved three synagogues on kindergarten rooftops. In January 2026 the mayor asked to approve another — on a kindergarten roof at Nehemiah/David HaMelech, opposite the Dekel commercial center — after a request from the local Chabad community, whose space in the Dekel shelter had long been too small. The vote was only on transferring the plot to the allocations committee, which would publish criteria open to any association. It passed 7-1. Ariella Perry was the lone objector, on the principle of keeping spaces separate. Hanani Feigin supported it but demanded the contract spell out in advance the extra costs of building above a working kindergarten (cranes, restricted work hours) and the dismantling and relocation of the rooftop solar array at the association's expense. Treasurer Sharon Horowitz added that the money should be collected from the association up front, and that it should be made clear there would be no further support from the public-buildings fund."
      },
      speaker_positions: [
        { speaker_id: "ariella-perry",
          position: { he: "ההצבעה היחידה נגד. אמרה שגן ילדים צריך להישאר גן ילדים, ושהמרחב צריך להיות ברור; הזכירה גם את ההורים, הילדים והפועלים הערבים באתר. הדגישה שאין לזה דבר נגד חב\"ד אלא התנגדות עקרונית.", en: "The only 'no' vote. Said a kindergarten should stay a kindergarten and the space should be unambiguous; also raised the parents, the children, and the Arab workers on site. Stressed it was nothing against Chabad but a matter of principle." },
          quote: { he: "אני לא חושבת שצריך לערבב שמחה בשמחה.", en: "I don't think you should mix one good thing into another." } },
        { speaker_id: "dovi-shefler",
          position: { he: "הציג את הבקשה. סיפר שכבר 6-7 שנים הוא מחפש פתרונות קרקע לבית הכנסת, ושברוב המקומות זה נכשל בגלל התנגדויות תושבים — ולכן שמח שכאן נמצא פתרון ללא התנגדות.", en: "Brought the request. Said he had spent 6-7 years looking for land solutions for the synagogue, and that most options failed over residents' objections — so he was glad to find one here with no opposition." } },
        { speaker_id: "hanani-feigin",
          position: { he: "תמך, אך דרש שהחוזה יכלול מראש את העלויות הנוספות של בנייה מעל גן מתפקד ואת פירוק המערכת הסולארית על חשבון העמותה, כדי שלא יהיו הפתעות.", en: "Supported it, but insisted the contract include up front the extra costs of building over a working kindergarten and the relocation of the solar array at the association's expense, to avoid surprises." } },
        { speaker_id: "yishai-fleisher",
          position: { he: "תמך בחום. סיפר שהוא מתפלל במקום, שהוא מלא בשבתות ומביא שמחה ואור ליישוב, ושחב\"ד תורם הרבה לקהילה.", en: "Warmly supportive. Said he prays there, that it is packed on Shabbat and brings joy and light to the community, and that Chabad contributes much to the town." } }
      ]
    },
    {
      id: "mayor-us-trip",
      he: "נסיעת ראש המועצה לארה\"ב",
      en: "Mayor's trip to the USA",
      summary: { he: "ישיבה מיוחדת שכונסה בספטמבר 2025 כדי לאשר את נסיעת ראש המועצה לארה\"ב במסגרת משלחת מועצת יש\"ע לקידום נושא הריבונות. אושר ברוב קולות (9 בעד), אבי חדידה ומנחם שפיץ נמנעו.", en: "A special meeting convened in September 2025 to approve the mayor's trip to the USA as part of a Yesha Council delegation promoting the sovereignty cause. Approved by majority (9 for); Avi Hadida and Menachem Spitz abstained." },
      meetings: ["sep26"],
      speakers: ["dovi-shefler", "hanani-feigin", "avi-hadida", "menachem-spitz"],
      detail: {
        he: "על פי הנהלים, נסיעת ראש מועצה לחו\"ל מחייבת אישור מליאה. הנסיעה הוצגה כחלק ממשלחת רשמית של מועצת יש\"ע במטרה לקדם את נושא הריבונות, וחלקה של מועצת אפרת בעלות נאמד בכ-10,000 ש\"ח. הדיון היה קצר; חנני פייגין שאל על העלות. ההצבעה הסתיימה ב-9 בעד ו-2 נמנעים (אבי חדידה ומנחם שפיץ).",
        en: "By regulation, a mayor's trip abroad requires plenum approval. The trip was presented as part of an official Yesha Council delegation aimed at advancing the sovereignty cause, with Efrat's share of the cost estimated at roughly ₪10,000. The discussion was brief; Hanani Feigin asked about the cost. The vote ended 9 in favor with 2 abstentions (Avi Hadida and Menachem Spitz)."
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "ביקש את אישור המליאה לנסיעה, והציג אותה כחלק ממשלחת מועצת יש\"ע לקידום הריבונות.", en: "Asked the plenum to approve the trip, presenting it as part of a Yesha Council delegation to advance sovereignty." } },
        { speaker_id: "avi-hadida",
          position: { he: "נמנע בהצבעה.", en: "Abstained in the vote." } },
        { speaker_id: "menachem-spitz",
          position: { he: "נמנע בהצבעה.", en: "Abstained in the vote." } }
      ]
    },
    {
      id: "palestinian-workers",
      he: "פועלים פלסטינים במרחב הציבורי",
      en: "Palestinian workers in the public space",
      summary: { he: "האם פועלים פלסטינים נכנסים שוב לאפרת ולעסקים מקומיים? חנני פייגין דרש דיון ציבורי שקוף בנושא; ראש המועצה השיב שמדיניות ההכנסה לאתרי בנייה כבר הוכרזה ושלעת עתה אף חנות לא נעזרה בהיתר.", en: "Are Palestinian workers being permitted back into Efrat businesses? Hanani Feigin demanded a public, transparent discussion; the mayor responded that the construction-site policy was already announced and that, as of the meeting, no shop has used the new shop-and-renovation permission." },
      meetings: ["feb4", "dec2", "jan6b"],
      speakers: ["hanani-feigin", "dovi-shefler", "yishai-fleisher", "avital-cohen"],
      detail: {
        he: "אחד הנושאים השנויים ביותר במחלוקת באפרת — וגם אחד שהציבור הכי פחות יודע עליו. בפברואר 2025 חנני פייגין העלה אותו במפורש לפרוטוקול: יש מגמה — מהמח\"ט, מבעלי עסקים מקומיים, ומראש המועצה עצמו — להחזיר פועלים ערבים למרחב הציבורי באפרת. הוא לא התנגד עקרונית, אבל דרש שהמהלך יקרה בגלוי, על דרך המלך, בידיעת התושבים. ראש המועצה השיב שהמדיניות לגבי אתרי בנייה כבר הוכרזה ולא השתנתה, ושכשיתחיל ביצוע של הכנסת פועלים לחנויות ולשיפוצים תצא הודעה לתושבים מראש — אבל נכון לפברואר 2025, אף חנות לא ניצלה את ההיתר שהמח\"ט נתן. בדצמבר 2025 צצו אזכורים נוספים: בדיון על תב\"ר 809 (פעולות בשיבת ציון) שאל ישי פליישר אם הקבלן יעסיק \"ערבים או סינים\". יפה שטרית ענתה: \"ערבים ישראלים\". חנני העיר: \"בדגן זה עובדים זרים — הודים, סרילנקים\". בדיון על חוות עיטם הגזבר ציין שיש פלסטינים בסמיכות לחווה ושהבאת מים אליה היא \"סיכון מחושב\".",
        en: "One of Efrat's most charged topics — and one residents seem to know least about. In February 2025 Hanani Feigin put it on the record: there is a trend — from the IDF brigade commander, from local business owners, and from the mayor himself — to re-introduce Arab workers into Efrat's public space. He did not oppose it on principle but demanded the move happen openly, with residents' knowledge. The mayor replied that the construction-site policy had already been announced and was unchanged, and that when workers start being brought into shops and renovations a public notice will go out first — but as of February 2025 no shop had used the brigade commander's new permission. In December 2025 the issue surfaced again: during the discussion of TaBaR 809 (community works in Shivat Tzion), Yishai Fleisher asked whether the contractor would employ \"Arabs or Chinese.\" CEO Yaffa Shetrit answered \"Israeli Arabs.\" Hanani added: \"In Dagan it's foreign workers — Indians, Sri Lankans.\" In the Eitam Farm discussion the treasurer noted that Palestinians are nearby and that delivering water to the farm is \"a calculated risk.\""
      },
      speaker_positions: [
        { speaker_id: "hanani-feigin",
          position: { he: "העלה את הנושא במפורש לפרוטוקול בפברואר 2025. ביקש שהמהלך יהיה שקוף ובידיעת התושבים, לא בשקט. הוא לא התנגד עקרונית אלא דרש שקיפות.", en: "Put the issue on the record in February 2025. Asked for the policy move to be transparent and known to residents, not done quietly. He did not oppose it on principle — he demanded openness." },
          quote: { he: "המהלך הזה קורה עכשיו, בשקט.", en: "The whole thing is happening now, quietly." } },
        { speaker_id: "dovi-shefler",
          position: { he: "התעקש שהמדיניות לגבי אתרי בנייה כבר הוכרזה בעבר ולא השתנתה. אמר שאם יתחיל ביצוע של הכנסת פועלים לחנויות ולשיפוצים תצא הודעה מראש — אבל לטענתו אף חנות לא ביקשה לעשות זאת בפועל.", en: "Insisted that the construction-site policy had been publicly announced in the past and not changed. Said a notice would go out before any shop actually started using the new permission — but argued that no shop had actually asked to do so." },
          quote: { he: "אז בכוח אני אודיע שמכניסים פועלים אפילו שאף חנות לא מכניסה?", en: "Should I forcibly announce that workers are being brought in when no shop is bringing any in?" } },
        { speaker_id: "yishai-fleisher",
          position: { he: "בדיון על תב\"ר 809 בדצמבר 2025 שאל אם הקבלן יעסיק \"ערבים או סינים\". הוסיף שילדיו פוחדים מקבלנים שעובדים בקצה הרחוב שלו.", en: "In the December 2025 TaBaR 809 discussion asked whether the contractor would employ \"Arabs or Chinese.\" Added that his children were afraid of construction workers at the end of his street." } },
        { speaker_id: "avital-cohen",
          position: { he: "הגיבה לחנני בדיון על חוות עיטם בנושא תושבים שמשלמים ארנונה ובמרחב הציבורי שצמוד לפלסטינים.", en: "Engaged with Hanani during the Eitam Farm discussion on the question of who pays property tax and the proximity of public space to Palestinian residents." } }
      ]
    },
    {
      id: "budget",
      he: "תקציב 2026",
      en: "2026 Budget",
      summary: { he: "תקציב 144.258 מיליון ש\"ח, גידול של 20% מ-2023, עם דגש על שיפור פני העיר ונטיעת הכנסות עסקיות. אושר ברוב 7-1.", en: "₪144.258M total budget, 20% growth since 2023, emphasizing city beautification and growing business-tax revenue. Approved 7-1." },
      meetings: ["jan6", "feb3"],
      speakers: ["dovi-shefler", "avi-hadida", "menachem-spitz", "talia-marcus"],
      detail: {
        he: "התקציב לשנת 2026 הוא התקציב השלישי שאושר תוך 21 חודשים — דבר חריג שהמועצה התלוננה עליו בעצמה. תקציב 2025 הסתיים בלי גירעון ובלי שימוש בקרנות. הדגשים בתקציב 2026: שיפור פני העיר (אגף שפע — ניקיון, גינון, מים), הגדלת הכנסות מארנונת עסקים (כיום רק 3%), וגיוס מענקים. ההצבעה התקיימה ב-6.1.2026 עם 8 נוכחים מתוך 11. הצבעת אישור הפרוטוקול ב-3.2.2026 הוסיפה רבדים של מחלוקת.",
        en: "The 2026 budget is the third the council has had to approve within 21 months — an unusual cadence the members themselves complained about. The 2025 budget closed with no deficit and without drawing on reserves. 2026 emphases: city beautification (Shefa department — cleaning, gardening, water), growing business-tax revenue (currently only 3%), and grant-raising. The vote happened on Jan 6, 2026, with 8 of 11 members present. The Feb 3 vote on whether to approve the meeting protocol added another layer of dissent."
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "הציג את התקציב, הדגיש את הגידול של 20% מ-2023 ואת הסיום ללא גירעון של 2025. הביע אכזבה מחבר מועצה שמתנגד לתקציב מבלי להשתתף בעבודת ההכנה.", en: "Presented the budget, emphasized the 20% growth since 2023 and the deficit-free 2025 closing. Expressed disappointment at a member opposing the budget without joining the prep work." },
          quote: { he: "כל חבר מועצה שלא משקיע זמן בתקציב, מאכזב אותי.", en: "Any council member who doesn't invest time in the budget disappoints me." } },
        { speaker_id: "avi-hadida",
          position: { he: "ההצבעה היחידה נגד. טען שלא הוזמן לישיבת ההכנה (\"זו ישיבת קואליציה?\") ולא קיבל מספיק זמן ללמוד את המסמך. הציג את עצמו במפורש כאופוזיציה.", en: "Cast the only \"no\" vote. Said he wasn't invited to the prep meeting (\"is this a coalition meeting?\") and wasn't given enough time to study the document. Explicitly positioned himself as opposition." },
          quote: { he: "אם אתה רוצה את התמיכה שלי... אבל להזמין לפחות שאני אכנס לדבר הזה. ואם זו ההתייחסות לאופוזיציה, בסדר.", en: "If you want my support… at least invite me into the discussion. If this is the way the opposition is treated, fine." } },
        { speaker_id: "menachem-spitz",
          position: { he: "הצביע בעד, אך העלה הסתייגויות — בעיקר ייעוץ תיירותי של 64,000 ש\"ח על גבי 5 מיליון שכבר הושקעו, ושאלה על השקעות בעתיד באמות המים.", en: "Voted in favor, but raised reservations — particularly a ₪64K tourism consultant fee on top of ₪5M already invested, and questions about future spending on the Roman aqueducts." } },
        { speaker_id: "talia-marcus",
          position: { he: "הצביעה בעד, אך ביקשה שבעתיד יישלח דף התקציב מוקדם יותר, \"כי לי אישית עכשיו קשה לעבור על זה\".", en: "Voted in favor, but asked that future budget documents be sent earlier, \"because it's hard for me personally to go through this now.\"" } }
      ]
    },
    {
      id: "eitam-farm",
      he: "חוות עיטם",
      en: "Eitam Farm",
      summary: { he: "דיון נרחב לבקשת מנחם שפיץ ואבי חדידה על מעמד החווה, התושבים, הישיבה והפעילות בה. החווה מוחזקת מאז 2022, כיום 11 משפחות, ישיבה (15 בחורים), מדרשה (17 בנות), חקלאות וכבשים.", en: "Extensive discussion requested by Menachem Spitz and Avi Hadida about the farm's status. Held since 2022, now home to ~11 families, a yeshiva (~15 students), a women's midrasha (~17), agriculture and livestock." },
      meetings: ["dec2", "apr14"],
      speakers: ["dovi-shefler", "menachem-spitz", "avi-hadida"],
      detail: {
        he: "חוות עיטם היא נקודת התיישבות סמוכה לאפרת. מאז 2022 פועלת בה קבוצה בראשות יהודה שרבף, ובהדרגה צמחו בה מבנים: ישיבת בוגרי שמינית, מדרשת בנות, בריכה, חדר לחזיון אור-קולי, מבנה לחתונות, חקלאות (מאות דונמים), ודיר עם 100-150 ראש כבשים ועיזים. הדיון התמקד בעובדות, ולא הסתיים בהצבעה. עלו דאגות לגבי בנייה חדשה ולגבי מי בעצם נמצא בחווה כיום.",
        en: "Eitam Farm is an outpost-style settlement adjacent to Efrat. Since 2022 it has been run by a group led by Yehuda Sherbaf, and has grown gradually: a pre-army yeshiva, a women's midrasha, a swimming pool, an audio-visual room, a wedding hall, hundreds of dunams of agriculture, and 100–150 sheep and goats. The discussion focused on facts and did not end in a vote. Concerns were raised about new construction and about who is actually living there now."
      },
      speaker_positions: [
        { speaker_id: "menachem-spitz",
          position: { he: "ביקש את הדיון יחד עם אבי חדידה. הציג עמדה ביקורתית-זהירה: ביקש להבין כמה משפחות בדיוק, כמה קרוואנים, כמה בנים בישיבה.", en: "Co-requested the discussion. Cautious-critical stance — asked exactly how many families, caravans, and yeshiva students." } },
        { speaker_id: "avi-hadida",
          position: { he: "ביקש את הדיון יחד עם מנחם. שאל על המבנים החדשים, על האולם שנבנה לאחרונה, ועל סך תושבי החווה.", en: "Co-requested the discussion. Asked about new structures, a hall that was recently built, and total population." } },
        { speaker_id: "dovi-shefler",
          position: { he: "הציג נתונים מפורטים על החווה וסקר את צמיחתה בתקופה של 3.5 שנים.", en: "Provided detailed data on the farm and reviewed its growth over 3.5 years." } }
      ]
    },
    {
      id: "audit-disputes",
      he: "דוחות מבקר וקיזוזי חובות",
      en: "Audit reports and debt offsets",
      summary: { he: "הצבעה שנויה במחלוקת 7-4: רוב המועצה אימץ את המלצת ועדת הביקורת למניעת קיזוזי חובות לספקים מול חובות ארנונה, בניגוד לדעת המבקרת. ראש המועצה הצביע נגד.", en: "Split 7-4: a majority adopted the audit committee's recommendation against offsetting supplier debts against property-tax debts, contradicting the (then) auditor's opinion. The mayor voted against." },
      meetings: ["dec2"],
      speakers: ["dovi-shefler", "avi-hadida", "hanani-feigin", "tzuri-dotan", "menachem-spitz"],
      detail: {
        he: "ההמלצה השנויה במחלוקת: כאשר ספק נותן שירות למועצה ובמקביל חייב למועצה ארנונה, האם המועצה רשאית 'לקזז' את החוב מהתשלום לספק? המבקרת אמרה שכן; ועדת הביקורת בראשות אבי חדידה המליצה לא. ההצבעה הסתיימה 7-4: ראש המועצה, חנני, אביטל ודנה הצביעו עם המבקרת; השאר עם הוועדה. זה היה ההצבעה היחידה ב-3 הישיבות שבה ראש המועצה היה במיעוט.",
        en: "The contested recommendation: when a supplier owes property tax to the council, may the council 'offset' the debt from the supplier payment? The auditor said yes; the audit committee chaired by Avi Hadida recommended no. Vote split 7-4: Mayor, Hanani, Avital, Dana sided with the auditor; the other seven sided with the committee. The only vote in the 3 meetings where the Mayor was in the minority."
      },
      speaker_positions: [
        { speaker_id: "avi-hadida",
          position: { he: "כיו\"ר ועדת ביקורת, הניע את ההמלצה נגד הקיזוזים.", en: "As audit committee chair, drove the recommendation against offsetting." } },
        { speaker_id: "dovi-shefler",
          position: { he: "הצביע נגד ההמלצה והעדיף את עמדת המבקרת. איבד את ההצבעה.", en: "Voted against the recommendation, siding with the auditor. Lost the vote." } },
        { speaker_id: "hanani-feigin",
          position: { he: "הצביע נגד ההמלצה (עם ראש המועצה).", en: "Voted against the recommendation (with the Mayor)." },
          quote: { he: "אני בעד לקזז.", en: "I'm in favor of offsetting." } },
        { speaker_id: "tzuri-dotan",
          position: { he: "הצביע בעד ההמלצה (נגד ראש המועצה).", en: "Voted for the recommendation (against the Mayor)." } },
        { speaker_id: "menachem-spitz",
          position: { he: "הצביע בעד ההמלצה.", en: "Voted for the recommendation." } }
      ]
    },
    {
      id: "ev-charging",
      he: "מדיניות טעינת רכב חשמלי",
      en: "EV charging-station policy",
      summary: { he: "דיון על מדיניות חדשה לעמדות טעינה פרטיות במרחב הציבורי. אושר עם הסרת תנאי 8 השעות. שלמה בן צבי נמנע.", en: "New policy for private EV charging stations on public ground. Approved after the 8-hour rule was removed. Shlomo Ben Tzvi abstained." },
      meetings: ["feb3"],
      speakers: ["dovi-shefler", "hanani-feigin", "dana-spiegel", "shlomo-bentzvi", "ariella-perry", "yishai-fleisher"],
      detail: {
        he: "המסמך נכתב על ידי רחל המהנדסת על בסיס הצעת מדיניות ארצית. הדיון התמקד בשתי שאלות: כמה זמן רכב יכול לחנות בעמדה כזו (8 שעות הוצע, בסוף נמחק), ומה לעשות עם תושבים שכבר הקימו עמדות.",
        en: "The document was drafted by Rachel the council engineer based on a national draft. The debate had two axes: how long a car may stay at such a station (8 hours was proposed and dropped), and what to do about existing installations."
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "הניע את אישור המסמך. הסכים להוריד את ההגבלה של 8 שעות.", en: "Drove the policy through. Agreed to drop the 8-hour limit." } },
        { speaker_id: "hanani-feigin",
          position: { he: "הצביע בעד, אך הוביל את הביקורת על מגבלת 8 השעות.", en: "Voted in favor but led criticism of the 8-hour clause." } },
        { speaker_id: "ariella-perry",
          position: { he: "הצביעה בעד אך העלתה שאלה חשובה: איך מנגישים את ההחלטה לתושב דובר האנגלית?", en: "Voted in favor but raised the English-speaker accessibility question." },
          quote: { he: "איך אתה מנגיש את ההחלטה הזאת עכשיו פה, לתושב הפשוט, דובר האנגלית?", en: "How do you make this decision accessible to the ordinary English-speaking resident?" } },
        { speaker_id: "dana-spiegel",
          position: { he: "הצביעה בעד אך הקשתה על יכולת האכיפה.", en: "Voted in favor but pressed on enforcement capacity." } },
        { speaker_id: "shlomo-bentzvi",
          position: { he: "נמנע.", en: "Abstained." } },
        { speaker_id: "yishai-fleisher",
          position: { he: "הצביע בעד.", en: "Voted in favor." } }
      ]
    },
    {
      id: "mordot-hazayit",
      he: "מורדות הזית - מאבק תכנוני",
      en: "Mordot HaZayit — planning battle",
      summary: { he: "פרויקט הבנייה הגדול של אפרת תקוע: משרד השיכון אישר לשיווק אך הודיע שחסר 200 מיליון ש\"ח לפיתוח. המועצה דורשת להעביר את הפרויקט אליה.", en: "Efrat's major construction project is stuck: Housing Ministry approved for marketing but reported a ₪200M shortfall. Council demands the project be transferred to it." },
      meetings: ["nov4", "jan6b", "may12"],
      speakers: ["dovi-shefler", "avi-hadida", "hanani-feigin", "dana-spiegel", "yishai-fleisher"],
      detail: {
        he: "פרויקט בנייה גדול בדרום אפרת. אושר רשמית לשיווק, אך משרד השיכון הודיע שחסר 200 מיליון ש\"ח לפיתוח התשתיות. בחודש 9 שלחה המועצה מכתב עם דרישה: תוך 30 יום או פתרון, או שמעבירים את הפרויקט אליה (יחד עם רמ\"י). פוטנציאל של ~80 מיליון ש\"ח למבני ציבור ותשתיות. תאריך פרסום המכרז התעדכן מ-15.9 ל-15.11.",
        en: "Major construction project in southern Efrat. Officially approved for marketing, but the Housing Ministry announced a ₪200M shortfall for infrastructure. In September the council sent a letter demanding either a solution within 30 days, or the project be transferred to the council (jointly with RAMI). Potential ~₪80M for public buildings and infrastructure. Tender date slipped from Sep 15 to Nov 15."
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "הוביל את המהלך להעביר את הפרויקט מידי משרד השיכון. ראה בכך הזדמנות לרווח של ~80 מיליון ש\"ח למועצה.", en: "Led the move to transfer the project from the Housing Ministry. Saw it as an opportunity for ~₪80M to the council." } },
        { speaker_id: "avi-hadida",
          position: { he: "אזהרה חריפה: \"זו טעות גדולה מאוד — זה יכול להביא אותנו לחדלות פירעון\". דרש דיון רשמי לפני קבלת ההחלטה.", en: "Strong warning: \"this would be a huge mistake — it could bring us to insolvency.\" Demanded formal debate before any decision." } },
        { speaker_id: "hanani-feigin",
          position: { he: "הזהיר את הציבור: \"כל מי שמוכר היום דירות שם הוא שרלטן\".", en: "Warned the public: \"anyone selling apartments there today is a fraud.\"" } },
        { speaker_id: "dana-spiegel",
          position: { he: "שאלה אם העיכוב קשור גם בממצאים הארכיאולוגיים. תשובה: לא, רק לסיפור 200 המיליון.", en: "Asked if the delay related to archaeological findings. Answer: no, only to the ₪200M issue." } },
        { speaker_id: "yishai-fleisher",
          position: { he: "הביע הפתעה: \"לא ידעתי שאפשר להתנתק ממשרד השיכון\".", en: "Expressed surprise: \"I didn't know we could disconnect from the Housing Ministry.\"" } }
      ]
    },
    {
      id: "budget-rounds",
      he: "סבבי תקציב — 2025 ו-2026",
      en: "Budget rounds — 2025 and 2026",
      summary: { he: "המועצה הצביעה על תקציב פעמיים בתוך 3 חודשים: עדכון תקציב 2025 בסוף ספטמבר (5-2-2) ותקציב 2026 בינואר (7-1). שניהם היו הצבעות שנויות במחלוקת.", en: "The council voted on budget twice in 3 months: 2025 update in late September (5-2-2) and 2026 budget in January (7-1). Both rounds were contested." },
      meetings: ["dec23", "sep30", "jan6", "feb3"],
      speakers: ["dovi-shefler", "tzuri-dotan", "avi-hadida", "menachem-spitz", "talia-marcus", "shlomo-bentzvi", "dana-spiegel"],
      detail: {
        he: "בשלוש ישיבות נדון התקציב: (1) ספטמבר 30 — עדכון תקציב 2025 בקיצוץ ל-137.79 מיליון ש\"ח (5 בעד, 2 נגד, 2 נמנעו). ראש המועצה ואביטל נעדרו. (2) ינואר 6 — אישור תקציב 2026 בסך 144.258 מיליון ש\"ח (7-1, אבי חדידה נגד). שלושה נעדרו. (3) פברואר 3 — אישור פרוטוקול 6.1.26 (5-1 עם חנני נמנע). תקציב 2025 הסתיים ללא גירעון.",
        en: "Three meetings dealt with the budget: (1) Sep 30 — 2025 budget update cut to ₪137.79M (5-2 with 2 abstaining). Mayor and Avital were absent. (2) Jan 6 — 2026 budget of ₪144.258M (7-1, Avi Hadida against). Three members absent. (3) Feb 3 — protocol approval (5-1 with Hanani abstaining). The 2025 budget closed without deficit."
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "הניע את אישור תקציב 2026, הצביע נגד עדכון 2025 (לא נכח). ביטא תסכול מחבר מועצה שמתנגד מבלי להשתתף בעבודה.", en: "Drove the 2026 budget approval; did not vote on the 2025 update (absent). Expressed frustration at a member opposing without participating." },
          quote: { he: "כל חבר מועצה שלא משקיע זמן בתקציב, מאכזב אותי.", en: "Any council member who doesn't invest time in the budget disappoints me." } },
        { speaker_id: "tzuri-dotan",
          position: { he: "ניהל את הצבעת קיצוץ 2025. נעדר מאישור 2026.", en: "Chaired the 2025-cut vote. Missed the 2026 approval." } },
        { speaker_id: "avi-hadida",
          position: { he: "התנגד עקבית: הצביע נגד עדכון 2025 ונגד תקציב 2026.", en: "Consistent opposition: voted against the 2025 update AND against the 2026 budget." },
          quote: { he: "אם זו ההתייחסות לאופוזיציה, בסדר.", en: "If this is the way the opposition is treated, fine." } },
        { speaker_id: "menachem-spitz",
          position: { he: "הצביע בעד שני התקציבים, אך העלה הסתייגויות תקציביות לגבי תיירות.", en: "Voted for both budgets, but raised tourism-spending reservations." } },
        { speaker_id: "shlomo-bentzvi",
          position: { he: "הצביע נגד עדכון 2025; נעדר מאישור 2026.", en: "Voted against the 2025 update; absent from the 2026 approval." } },
        { speaker_id: "dana-spiegel",
          position: { he: "נמנעה בעדכון 2025, הצביעה בעד תקציב 2026.", en: "Abstained on the 2025 update, voted for the 2026 budget." } },
        { speaker_id: "talia-marcus",
          position: { he: "נמנעה בעדכון 2025, הצביעה בעד תקציב 2026.", en: "Abstained on the 2025 update, voted for the 2026 budget." } }
      ]
    },
    {
      id: "capital-projects",
      he: "תב\"רים ופרויקטים",
      en: "Capital projects (TaBaRs)",
      summary: { he: "ב-24 הישיבות אושרו 40+ תב\"רים מתועדים. הגדול ביניהם: מרכז ספורט ובריכה ₪39.1 מ' ש\"ח. כולל גם שיקום כבישים (₪11.26M + ₪270K), צנרת (₪2.4M), LPR לשערים, מצלמות, חינוך מיוחד, ומוכנות לחירום.", en: "Across the 24 meetings, 40+ documented TaBaRs were approved. Largest: sports center &amp; pool ₪39.1M. Others include road rehab (₪11.26M + ₪270K), pipes (₪2.4M), LPR gates, cameras, special education, and emergency readiness." },
      meetings: ["apr15", "jul9", "oct8", "nov5", "dec3", "jan7", "sep30", "nov4", "dec2", "feb3", "may12"],
      speakers: ["dovi-shefler", "tzuri-dotan", "avi-hadida"],
      detail: {
        he: "כל תב\"ר שנדון ב-14 הישיבות, לפי סדר כרונולוגי:<br><ul style='margin:8px 0 0 0;padding-right:18px;line-height:2;'><li><strong>תב\"ר 888</strong> — רכב לקב\"ט (פבר׳ 2025) — עלות לא פורטה — ברוב קולות (אביטל נגד)</li><li><strong>תב\"ר 903</strong> — טרקטורון כיבוי אש (פבר׳ 2025) — עלות לא פורטה — פה אחד</li><li><strong>תב\"ר שיקום דרכים</strong> — ₪11.26 מיליון (אפר׳ 2025) — פה אחד</li><li><strong>תב\"ר עיצוב חזית</strong> — עלות לא פורטה (אפר׳ 2025) — ברוב (7 בעד, 2 נמנעו)</li><li><strong>תב\"ר תנועת העזרא בתמר</strong> — ₪1,844,375 (יוני 2025) — פה אחד</li><li><strong>תב\"ר 927</strong> — מענק זהירות בדרכים ₪12,000 (ספט׳ 2025) — פה אחד</li><li><strong>תב\"ר 928</strong> — קייטנות חופש קיץ (ספט׳ 2025) — ברוב (אביטל נגד)</li><li><strong>תב\"ר 929</strong> — מערכות LPR לשערי היישוב (ספט׳ 2025) — פה אחד</li><li><strong>תב\"ר 924</strong> — הנגשת אמות המים העתיקות (נוב׳ 2025) — עלות לא פורטה — פה אחד</li><li><strong>תב\"ר 869</strong> — השמשת קומת המועצה בסנטר אפרת (נוב׳ 2025) — עלות לא פורטה — פה אחד</li><li><strong>תב\"ר 930</strong> — רכישת זכויות בבניין קומת המועצה (נוב׳ 2025) — עלות לא פורטה — פה אחד</li><li><strong>תב\"ר 840</strong> — שיקום כבישים ₪270,000 (דצמ׳ 2025) — צורי נמנע</li><li><strong>תב\"ר 873</strong> — חניון מול הבריכה ₪280,000 (דצמ׳ 2025) — פה אחד</li><li><strong>תב\"ר 919</strong> — שיקום צנרת ישן/חדש ₪2,400,000 (דצמ׳ 2025) — פה אחד</li><li><strong>תב\"ר 931</strong> — תוכניות מניעת התמכרויות ₪167,000 (דצמ׳ 2025) — פה אחד</li><li><strong>תב\"ר 572</strong> — מרכז ספורט ובריכה ₪39,100,000 (דצמ׳ 2025 + פבר׳ 2026) — פה אחד</li><li><strong>תב\"ר 809</strong> — פעולות למען קהילות ₪838,000 (דצמ׳ 2025) — פה אחד</li><li><strong>תב\"ר 932</strong> — מוגנות ₪120,000 (דצמ׳ 2025) — פה אחד</li><li><strong>מקדמת מפעל הפיס</strong> — ₪1,840,000 לצמצום גירעון (דצמ׳ 2025) — פה אחד</li><li><strong>תב\"ר 934</strong> — מצלמות ומרכיבים טכנולוגיים (פבר׳ 2026) — עלות לא פורטה — פה אחד</li><li><strong>תב\"ר 935</strong> — הצטיידות חינוך מיוחד ומתי\"א (פבר׳ 2026) — עלות לא פורטה — פה אחד</li><li><strong>תב\"ר 936</strong> — שיפור מוכנות לחירום (פבר׳ 2026) — עלות לא פורטה — פה אחד</li></ul>",
        en: "All TaBaRs (capital budgets) discussed across the 14 meetings, in chronological order:<br><ul style='margin:8px 0 0 0;padding-left:18px;line-height:2;'><li><strong>TaBaR 888</strong> — Security officer vehicle (Feb 2025) — cost not specified — majority (Avital against)</li><li><strong>TaBaR 903</strong> — Firefighting ATV (Feb 2025) — cost not specified — unanimous</li><li><strong>TaBaR road rehabilitation</strong> — ₪11,260,000 (Apr 2025) — unanimous</li><li><strong>TaBaR facade design &amp; improvement</strong> — cost not specified (Apr 2025) — majority (7 for, 2 abstain)</li><li><strong>TaBaR Ezra Youth Movement, Tamar</strong> — ₪1,844,375 (Jun 2025) — unanimous</li><li><strong>TaBaR 927</strong> — Road Safety Authority grant ₪12,000 (Sep 2025) — unanimous</li><li><strong>TaBaR 928</strong> — Summer camp funding (Sep 2025) — majority (Avital against)</li><li><strong>TaBaR 929</strong> — LPR license-plate recognition at settlement gates (Sep 2025) — unanimous</li><li><strong>TaBaR 924</strong> — Roman aqueducts accessibility (Nov 2025) — cost not specified — unanimous</li><li><strong>TaBaR 869</strong> — Fit-out of council floor at Efrat Center (Nov 2025) — cost not specified — unanimous</li><li><strong>TaBaR 930</strong> — Purchase of building rights, council floor (Nov 2025) — cost not specified — unanimous</li><li><strong>TaBaR 840</strong> — Road rehabilitation ₪270,000 (Dec 2025) — Tzuri abstained</li><li><strong>TaBaR 873</strong> — Parking lot opposite the pool ₪280,000 (Dec 2025) — unanimous</li><li><strong>TaBaR 919</strong> — Pipe rehabilitation (old/new network) ₪2,400,000 (Dec 2025) — unanimous</li><li><strong>TaBaR 931</strong> — Addiction-prevention programs ₪167,000 (Dec 2025) — unanimous</li><li><strong>TaBaR 572</strong> — Sports center &amp; pool ₪39,100,000 (Dec 2025 + Feb 2026) — unanimous</li><li><strong>TaBaR 809</strong> — Community-actions support ₪838,000 (Dec 2025) — unanimous</li><li><strong>TaBaR 932</strong> — Protection ₪120,000 (Dec 2025) — unanimous</li><li><strong>Mifal HaPais advance</strong> — ₪1,840,000 for deficit reduction (Dec 2025) — unanimous</li><li><strong>TaBaR 934</strong> — Cameras &amp; technology components (Feb 2026) — cost not specified — unanimous</li><li><strong>TaBaR 935</strong> — Special-education &amp; resource-center equipment (Feb 2026) — cost not specified — unanimous</li><li><strong>TaBaR 936</strong> — Emergency-readiness improvement (Feb 2026) — cost not specified — unanimous</li></ul>"
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "הניע את כל אישורי התב\"רים יחד עם הגזבר.", en: "Drove all TaBaR approvals alongside the treasurer." } },
        { speaker_id: "tzuri-dotan",
          position: { he: "ההסתייגות היחידה — נמנע בתב\"ר 840 (כבישים).", en: "The only holdout — abstained on TaBaR 840 (roads)." } },
        { speaker_id: "avi-hadida",
          position: { he: "הצביע בעד רוב התב\"רים. שאל שאלות פרטניות ודרש דיוק רישום.", en: "Voted for most TaBaRs. Asked detailed questions and insisted on accurate transcription." } }
      ]
    },
    {
      id: "social-services",
      he: "רווחה והנחות",
      en: "Welfare and discounts",
      summary: { he: "הנחה בארנונה לנכים (תיקון 20), חברים נוספים לוועדת רווחה. שני הסעיפים אושרו פה אחד.", en: "Property-tax disability discount (amendment 20), additional welfare committee members. Both approved unanimously." },
      meetings: ["nov4", "feb3"],
      speakers: ["dovi-shefler", "hanani-feigin", "ariella-perry", "yishai-fleisher", "shlomo-bentzvi"],
      detail: {
        he: "תיקון 20 לחוק ההסדרים מרחיב זכאות מעבר לגיל 18 ומבטל את הצורך בגמלת ילד נכה כתנאי. המדינה מטילה את העלות במלואה על הרשות (~4 מיליון ש\"ח לשנה).",
        en: "Amendment 20 expands eligibility past age 18 and removes the National Insurance allowance requirement. The state imposes the cost in full on the local authority (~₪4M/year)."
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "\"רק הרשות. המדינה לא שמה שקל\" — לגבי מימון ההנחות.", en: "\"Only the local authority. The state doesn't put in a shekel\" — on funding." } },
        { speaker_id: "hanani-feigin",
          position: { he: "שאל אם זה מוסיף תקציבית.", en: "Asked about budgetary impact." } },
        { speaker_id: "ariella-perry",
          position: { he: "הסבירה שביטוח לאומי מיידע את הרשות אוטומטית.", en: "Explained that National Insurance informs the authority automatically." } },
        { speaker_id: "yishai-fleisher",
          position: { he: "הקשה על המצב שבו המדינה מחייבת אך לא משלמת.", en: "Pressed on the state mandating but not paying." } },
        { speaker_id: "shlomo-bentzvi",
          position: { he: "שאל מי מממן.", en: "Asked who funds it." } }
      ]
    },
    {
      id: "rabbi-selection",
      he: "בחירת רב לאפרת",
      en: "Chief rabbi selection",
      summary: { he: "תהליך בחירת רב לאפרת. אסיפת הבחירה: 24 חברים (4 נציגי מועצה + 8 נציגי השר + 8 נציגי ציבור). 50 מועמדים נרשמו כנציגי ציבור.", en: "Process for selecting Efrat's chief rabbi. Selection assembly: 24 members (4 council reps + 8 ministerial + 8 public). 50 candidates registered as public reps." },
      meetings: ["nov4", "may12"],
      speakers: ["dovi-shefler", "hanani-feigin"],
      detail: {
        he: "בנובמבר אישרה המועצה את 8 הנציגים שיציעו לשר הדתות. ראש המועצה ציין שש\"ס \"החל לדחוף את הסיפור הזה קדימה אחרי שהרדימו אותו בעבר\".",
        en: "In November the council approved the 8 reps it will propose to the Religious Services Minister. Mayor noted Shas \"started pushing this forward after letting it sleep.\""
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "הוביל את הסעיף; הסביר את המבנה המספרי של 24 הנציגים.", en: "Led the item; explained the 24-rep structure." } },
        { speaker_id: "hanani-feigin",
          position: { he: "הוסיף: \"פנינו לציבור וניגשו 50 אנשים להציע את עצמם\".", en: "Added: \"a public call yielded 50 candidate self-nominations.\"" } }
      ]
    },
    {
      id: "credit-sewage",
      he: "אשראי וחוקי עזר",
      en: "Credit & by-laws",
      summary: { he: "חידוש מסגרת אשראי ₪5.5M, חוק עזר אגרת ביוב 2026, חוק עזר היטל שמירה 2026-2029. כולם אושרו פה אחד.", en: "₪5.5M credit facility renewal, 2026 sewage by-law, 2026-2029 watch-tax by-law. All approved unanimously." },
      meetings: ["nov4", "dec2", "may12"],
      speakers: ["dovi-shefler", "hanani-feigin", "avi-hadida", "shlomo-bentzvi"],
      detail: {
        he: "סעיפים תפעוליים: (1) מסגרת אשראי — בנק מזרחי בפריים מינוס 0.2%. (2) חוק העזר לאגרת ביוב — חברת \"מי שמש\" עומדת לקבל את הביוב במקום כפר עציון. (3) חוק עזר היטל שמירה — תעריף ₪13.18 למ\"ר עד 2029.",
        en: "Operational items: (1) Credit facility — Mizrahi Bank at prime minus 0.2%. (2) Sewage by-law — Mei Shemesh Corp will receive sewage instead of Kfar Etzion. (3) Watch-tax by-law — ₪13.18/m² rate through 2029."
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "הציג את הסעיפים והסביר את הרקע התפעולי.", en: "Presented the items and explained operational background." } },
        { speaker_id: "hanani-feigin",
          position: { he: "שאל שאלות על תנאי ההלוואה וההיטל.", en: "Asked questions about the banking terms and the watch-tax rate." } },
        { speaker_id: "avi-hadida",
          position: { he: "התעניין במצב הביוב והעלה שאלות פרקטיות.", en: "Asked about sewage plant fate and practical issues." } },
        { speaker_id: "shlomo-bentzvi",
          position: { he: "שאל אם המתקן בכפר עציון ימשיך לקבל מים.", en: "Asked whether the Kfar Etzion plant will still receive flow." } }
      ]
    },
    {
      id: "tamar-water",
      he: "משבר המים בשכונת תמר",
      en: "Tamar neighborhood water crisis",
      summary: { he: "בימי שישי בין 13:00 ל-16:00 לחץ המים בשכונת תמר צונח מ-4.5 ל-1 אטמוספירות. לפי המהנדס היה צריך להקדים בריכת מים — אך הוחלט לאכלס תחילה.", en: "On Fridays between 1-4pm, water pressure in the Tamar neighborhood drops from 4.5 to 1 atmospheres. Per the engineer, a reservoir should have been built first — but the council chose to populate the neighborhoods anyway." },
      meetings: ["dec2", "jan6b"],
      speakers: ["dovi-shefler", "avi-hadida", "menachem-spitz"],
      detail: {
        he: "כשנבנו תמר, דגן ומזרח הזית, מהנדס המים אברהם בלאו אמר שצריך להקדים בריכת מים נוספת. בפועל הוחלט לאכלס קודם, בנימוק ש\"מורדות הזית אוטוטו\". כיום בימי שישי, בזמן השיא לבישול ולמקלחות לפני שבת, לחץ המים בתמר צונח. ראש המועצה הביע תסכול מכך שמהנדס המקצועי אישר למועצה לקחת את הסיכון.",
        en: "When Tamar, Dagan, and East Zayit were built, water engineer Avraham Blau said a new reservoir had to be built first. The council chose to populate first, reasoning that \"Mordot HaZayit is just around the corner.\" Today, on Friday afternoons during the pre-Shabbat peak demand, water pressure in Tamar drops to approximately 1 atmosphere. The mayor said the professional engineer should not have let the council take this risk."
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "הציג את בעיית הלחץ ואמר שהמהנדס בלאו לא היה צריך לאשר את הסיכון. הציג נתונים על ירידת הלחץ.", en: "Presented the pressure-drop data and said engineer Blau should not have approved the risk." },
          quote: { he: "אתה כמהנדס מים אישרת למועצה לקחת סיכון. אתה המומחה, לא המועצה.", en: "As the water engineer you let the council take that risk. You're the expert, not the council." } },
        { speaker_id: "avi-hadida",
          position: { he: "ערער על גרסת ראש המועצה. אמר שבזמן שהוא היה תושב לא היו בעיות מים, ושהבעיה החריפה לאחרונה.", en: "Disputed the mayor's account. Said that when he was a resident there were no water problems and the issue is recent." } },
        { speaker_id: "menachem-spitz",
          position: { he: "תמך בגרסת אבי. ציין שהיו עבודות מסביב לרשת ושייתכן שהן קשורות לבעיה.", en: "Backed Avi's view. Noted that there had been infrastructure works in the area which may be related." } }
      ]
    },
    {
      id: "mifal-hapais",
      he: "מפעל הפיס - כסף שנשכח",
      en: "Mifal HaPais — forgotten money",
      summary: { he: "בפגישה במפעל הפיס נחשפו שני דברים: מיליון ש\"ח שמחכה לקבלה משנת 2022, ועוד 1.84 מיליון שמוצע כמקדמה לצמצום הגירעון. \"כמה דברים כאלה עוד יש?\"", en: "A visit to the national lottery revealed two things: over ₪1M waiting to be claimed from a 2022 grant, plus another ₪1.84M offered as an advance to reduce the deficit. \"How many other such things are there?\"" },
      meetings: ["dec2"],
      speakers: ["dovi-shefler", "hanani-feigin", "yishai-fleisher", "avi-hadida"],
      detail: {
        he: "ראש המועצה, יפה והגזבר נסעו לבקר במפעל הפיס. שם התגלה: 1. למעלה ממיליון ש\"ח מאישור 2022 שכב שם בלי שנמשך כי הניירות הסופיים לא הוגשו. 2. מפעל הפיס מציע מקדמה של 1.84 מיליון ש\"ח לצמצום הגירעון של כ-5 מיליון. ישי פליישר השווה לסיפור דומה בחברון שבו ראש מועצה חדש מצא דירות שהיישוב קנה בשנות ה-90 ונשכחו.",
        en: "The mayor, CEO Yaffa Shetrit, and the treasurer visited Mifal HaPais. Two things surfaced: 1. over ₪1M from a 2022 grant was sitting unclaimed because final paperwork was never filed. 2. The lottery offered a ₪1.84M advance to reduce the council's roughly ₪5M deficit. Yishai Fleisher drew a parallel to a similar Hebron case where a new mayor discovered apartments the town bought in the 1990s and forgot about."
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "הציג את ההתגלות ואת הצעת מפעל הפיס. הסביר שהם פנו אליהם בעצמם.", en: "Presented the discovery and the lottery's offer. Noted the council reached out itself." } },
        { speaker_id: "hanani-feigin",
          position: { he: "שאל כמה כסף נוסף קיים שאיננו יודעים עליו.", en: "Asked how much additional unclaimed funding may exist." },
          quote: { he: "כמה דברים כאלה עוד יש שאנחנו לא יודעים עליהם?", en: "How many other such things are there that we don't know about?" } },
        { speaker_id: "yishai-fleisher",
          position: { he: "השווה לסיפור דומה בחברון.", en: "Drew a parallel to a similar case in Hebron." } },
        { speaker_id: "avi-hadida",
          position: { he: "ציין שחלק מהכסף כבר היה קיים — חסרה רק חתימה אחרונה.", en: "Noted that some money was already there — it only needed a final signature." } }
      ]
    },
    {
      id: "efrat-beclick",
      he: "אפרת בקליק - הקניון הדיגיטלי",
      en: "Efrat BeClick — the digital marketplace",
      summary: { he: "פרויקט הדגל של המחלקה לקידום עסקים: אפליקציה וקניון דיגיטלי לעסקים מקומיים. מומן ממענק של משרד הפנים.", en: "Flagship project of the business-promotion department: an app and digital marketplace for local businesses, funded by an Interior Ministry grant." },
      meetings: ["sep30"],
      speakers: ["tzuri-dotan"],
      detail: {
        he: "טובית לייכטר (מנהלת המחלקה לקידום ורישוי עסקים) וגידי פייטן (יועץ אסטרטגי ארגוני שעובד עם המועצה 3-4 שנים) הציגו את 'אפרת בקליק'. הפרויקט מומן במסגרת מענק של משרד הפנים. הוצגה תוכנית עבודה והוצג סרטון של האפליקציה. ההצגה התקיימה בישיבה שראש המועצה נעדר ממנה.",
        en: "Tovit Leichter (Head of Business Promotion & Licensing) and Gidi Faytan (an organizational consultant who has worked with the council for 3-4 years) presented 'Efrat BeClick'. Funded by an Interior Ministry grant. A work plan and demo video were shown. The presentation happened at a meeting the mayor missed."
      },
      speaker_positions: [
        { speaker_id: "tzuri-dotan",
          position: { he: "ניהל את הדיון בהיעדר ראש המועצה. הגביל את זמן המצגים ופתח לשאלות.", en: "Chaired the session in the mayor's absence. Time-boxed the presenters and opened the floor for questions." } }
      ]
    },
    {
      id: "audit-change",
      he: "מבקרת חדשה למועצה",
      en: "New council auditor",
      summary: { he: "נעה דניאל הוצגה כמבקרת חדשה לאחר תקופה ארוכה ללא מבקר — ליקוי שצוין בדוח משרד הפנים. היא משמשת גם מבקרת בקריית ארבע-חברון.", en: "Noa Daniel was introduced as the new auditor after a long period without one — a deficiency flagged in the Interior Ministry's report. She also serves as auditor for the Kiryat Arba-Hebron council." },
      meetings: ["nov4"],
      speakers: ["dovi-shefler"],
      detail: {
        he: "המועצה הייתה ללא מבקר במשך תקופה ארוכה, ליקוי שצוין במפורש בדוח משרד הפנים לשנת 2024. נעה דניאל נכנסה לתפקיד ב-21 באוקטובר 2025. היא משמשת במקביל גם מבקרת של מועצת קריית ארבע-חברון, וסעיף ה'עבודה הנוספת' אושר פה אחד בנובמבר.",
        en: "The council lacked an auditor for a long period — a deficiency expressly noted in the Interior Ministry's 2024 report. Noa Daniel started on Oct 21, 2025. She also serves as auditor for the Kiryat Arba-Hebron Council, and the 'additional work' approval passed unanimously in November."
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "הציג את נעה דניאל ואת אישור העבודה הנוספת.", en: "Introduced Noa Daniel and the additional-work approval." } }
      ]
    },
    {
      id: "security-gates",
      he: "אבטחה ומערכות בשערים",
      en: "Security and gate systems",
      summary: { he: "תב\"ר 929 — מערכות זיהוי לוחיות רישוי (LPR) לשערי היישוב, ותב\"ר 934 — מצלמות ומרכיבים טכנולוגיים נוספים. שניהם אושרו פה אחד.", en: "TaBaR 929 — license-plate recognition (LPR) systems at settlement gates, and TaBaR 934 — additional cameras and tech components. Both approved unanimously." },
      meetings: ["sep30", "feb3"],
      speakers: ["avi-hadida", "dana-spiegel"],
      detail: {
        he: "שני תב\"רים נפרדים לחיזוק האבטחה: LPR בשערים (ספטמבר) ומצלמות נוספות (פברואר). אבי חדידה הקפיד על תיעוד מדויק — הוא דרש שהפרוטוקול ירשום 'פה אחד' ולא 'רוב קולות' כשההצבעה הייתה אכן פה אחד. דנה שאלה אם ההצבעה צריכה ספציפית להגיע למצלמות או שזה כלול בתב\"ר.",
        en: "Two separate capital budgets for security: LPR at gates (Sep) and additional cameras (Feb). Avi Hadida insisted on accurate transcription — he demanded the protocol record 'unanimous' rather than 'majority' when the vote was in fact unanimous. Dana asked whether the vote should specifically address cameras or if that was rolled into the TaBaR."
      },
      speaker_positions: [
        { speaker_id: "avi-hadida",
          position: { he: "דרש דיוק רישום: 'פה אחד, לא רוב קולות' — והפרוטוקול תוקן.", en: "Demanded accurate transcription: 'unanimous, not majority' — and the protocol was corrected." } },
        { speaker_id: "dana-spiegel",
          position: { he: "שאלה הליכית על אופן ההצבעה.", en: "Asked a procedural question about how the vote should be cast." } }
      ]
    },
    {
      id: "procedure",
      he: "פרוטוקול ודיני נוהל",
      en: "Procedure and protocol discipline",
      summary: { he: "ויכוחים חוזרים על איכות רישום הפרוטוקול, על ההבדל בין 'נמנע' ל'לא משתתף', ועל הזמנת חברי מועצה לישיבות הכנה.", en: "Recurring debates over protocol-transcription quality, the difference between 'abstain' and 'not participating,' and inviting members to prep meetings." },
      meetings: ["sep30", "nov4", "feb3"],
      speakers: ["hanani-feigin", "avi-hadida", "talia-marcus", "shlomo-bentzvi"],
      detail: {
        he: "נושא חוזר. חנני פייגין הקפיד לבדוק את הפרוטוקול ולמצוא טעויות. אבי הקפיד על דיוק הצבעות. בפברואר 3, רמ\"ט המועצה הסביר: 'נמנע זה אין לי דעה. לא משתתף זה לא הייתי. יש משמעות לנמנע כי זה יכול להפיל החלטות.' שלמה בן צבי בחר במכוון 'לא משתתף' באישור הפרוטוקול. טליה הציעה לעבור לישיבות ב-Teams עם תמלול אוטומטי במקום זום.",
        en: "Recurring theme. Hanani scrutinized protocols for errors. Avi insisted on accurate vote records. On Feb 3 the chief of staff explained: 'Abstain means I have no opinion. Not participating means I wasn't there. Abstain has consequences — it can defeat a motion.' Shlomo Ben Tzvi deliberately chose 'not participating' on a protocol approval. Talia suggested switching from Zoom to Teams for auto-transcription."
      },
      speaker_positions: [
        { speaker_id: "hanani-feigin",
          position: { he: "ביקורת מתמדת על איכות הפרוטוקול.", en: "Persistent criticism of protocol-transcription quality." } },
        { speaker_id: "avi-hadida",
          position: { he: "דרש דיוק בהצבעות.", en: "Demanded precision in vote records." } },
        { speaker_id: "talia-marcus",
          position: { he: "הציעה לעבור מ-Zoom ל-Teams בגלל התמלול האוטומטי.", en: "Suggested switching from Zoom to Teams for automatic transcription." } },
        { speaker_id: "shlomo-bentzvi",
          position: { he: "בחר במכוון 'לא משתתף' באישור פרוטוקול 6.1.", en: "Deliberately chose 'not participating' on the Jan 6 protocol approval." } }
      ]
    },
    {
      id: "council-committees",
      he: "ועדות ונציגי ציבור",
      en: "Committees and public representatives",
      summary: { he: "מינויים בוועדות: יו\"ר ועדת תחבורה, נציגי הנהגת הורים בוועדת חינוך, חברים נוספים לוועדת רווחה, ו-8 נציגי ציבור לבחירת רב.", en: "Committee appointments: Transportation chair, parent reps on Education, additional welfare-committee members, 8 public reps for rabbi selection." },
      meetings: ["sep30", "nov4", "dec2"],
      speakers: ["tzuri-dotan", "dovi-shefler", "avital-cohen"],
      detail: {
        he: "סדרת מינויים פורמליים שאושרו כמעט תמיד פה אחד: תמר שרייגר ליו\"ר ועדת תחבורה (ספטמבר), חמישה נציגי הנהגת הורים חדשים לוועדת חינוך (דצמבר), חברים נוספים לוועדת רווחה (נובמבר), ושמונה נציגי ציבור שיוצעו לשר הדתות לבחירת רב (נובמבר). הציבור הציע עצמו ב-50 מועמדים.",
        en: "A series of formal appointments, nearly all approved unanimously: Tamar Schreiger as Transportation chair (Sep), five new parent-association reps on the Education committee (Dec), additional welfare-committee members (Nov), and eight public reps proposed to the Religious Services Minister for rabbi selection (Nov). The public produced 50 self-nominations."
      },
      speaker_positions: [
        { speaker_id: "tzuri-dotan",
          position: { he: "הציג בדצמבר את חמשת נציגי הנהגת ההורים החדשים, כל אחד מבית ספר אחר.", en: "In December presented the five new parent-association reps, one per school." } },
        { speaker_id: "dovi-shefler",
          position: { he: "הוביל את אישור 8 נציגי הציבור לבחירת רב.", en: "Led the approval of 8 public reps for rabbi selection." } },
        { speaker_id: "avital-cohen",
          position: { he: "הזכירה שגיתית פטנקי, אחת הנציגות, הייתה יו\"ר בעבר.", en: "Mentioned that Gitit Patinki, one of the reps, had previously chaired the committee." } }
      ]
    },
    {
      id: "youth-prayer",
      he: "ענייני קהילה ותפילה",
      en: "Community and ceremonial items",
      summary: { he: "תפילה לחללים ולחטופים, דברי תורה, אישור פרוטוקולים.", en: "Opening prayers, Torah teachings, protocol approvals." },
      meetings: ["sep30", "nov4", "dec2", "feb3", "apr14"],
      speakers: ["dovi-shefler", "talia-marcus", "hanani-feigin", "ariella-perry"],
      detail: {
        he: "המועצה פותחת כל ישיבה בתפילה ובדבר תורה. בנובמבר 4 ציין ראש המועצה שאין יותר צורך להתפלל לשובם של חטופים אלא רק להחזרת חללים. אריאלה פרי נשאה דבר תורה בנובמבר.",
        en: "Every meeting opens with a prayer and Torah teaching. In November the mayor noted that prayer is no longer needed for the return of hostages, only for bringing the fallen to burial. Ariella Perry delivered the Torah teaching in November."
      },
      speaker_positions: [
        { speaker_id: "talia-marcus",
          position: { he: "מובילה את התפילה. כשהיא נעדרת, חנני פייגין מקריא הכל.", en: "Leads the opening prayer. When she's absent, Hanani Feigin recites them all." } },
        { speaker_id: "hanani-feigin",
          position: { he: "מקריא את התפילה לחיילי צה\"ל; ממלא מקום כשטליה נעדרת.", en: "Recites the prayer for IDF soldiers; fills in when Talia is absent." } },
        { speaker_id: "dovi-shefler",
          position: { he: "בדרך כלל נושא דבר תורה. בדצמבר — פרשת וישלח על קבר רחל באפרת.", en: "Usually delivers the Torah teaching. In December — parshat Vayishlach on Rachel's tomb in Ephrath." } },
        { speaker_id: "ariella-perry",
          position: { he: "נשאה דבר תורה בנובמבר 4.", en: "Delivered the Torah teaching on November 4." } }
      ]
    },
    {
      id: "welfare-dept-review",
      he: "סקירת מחלקת רווחה",
      en: "Welfare department review",
      summary: { he: "סקירת פעילות מחלקת הרווחה ותכניות לשנת 2025, שהוצגה בישיבת ינואר 2025.", en: "Review of welfare department activities and plans for 2025, presented at the January 2025 meeting." },
      meetings: ["jan7"],
      speakers: ["dovi-shefler", "dana-spiegel"],
      detail: {
        he: "מחלקת הרווחה הציגה את פעילותה בשנה החולפת ואת תכניות העבודה לשנת 2025, כולל שירותי תמיכה לתושבים.",
        en: "The welfare department presented its activities over the past year and work plans for 2025, including resident support services."
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "הוביל את הדיון בסקירת הרווחה.", en: "Led the discussion on the welfare review." } },
        { speaker_id: "dana-spiegel",
          position: { he: "השתתפה בדיון על שירותי הרווחה.", en: "Participated in the welfare services discussion." } }
      ]
    },
    {
      id: "youth-dept-review",
      he: "סקירת מחלקת נוער",
      en: "Youth department review",
      summary: { he: "סקירת פעילות מחלקת הנוער ותכניות לשנת 2025, שהוצגה בישיבת דצמבר 2024.", en: "Review of youth department activities and plans for 2025, presented at the December 2024 meeting." },
      meetings: ["dec3"],
      speakers: ["dovi-shefler", "avital-cohen"],
      detail: {
        he: "מחלקת הנוער הציגה פעילויות השנה ותכניות לשנת 2025, כולל פעולות נוער בתקופת המלחמה.",
        en: "The youth department presented its year's activities and plans for 2025, including youth activities during the war period."
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "ניהל את הדיון בסקירת הנוער.", en: "Chaired the youth department review discussion." } },
        { speaker_id: "avital-cohen",
          position: { he: "השתתפה בדיון על פעילויות הנוער.", en: "Participated in youth activities discussion." } }
      ]
    },
    {
      id: "budget-2025-approval",
      he: "אישור תקציב 2025",
      en: "Budget 2025 approval",
      summary: { he: "הישיבה הדחופה של דצמבר 23 כונסה לשם אישור תקציב 2025. כל 11 חברי המועצה נכחו.", en: "The extraordinary December 23 meeting was convened solely to approve the 2025 budget. All 11 council members were present." },
      meetings: ["dec23"],
      speakers: ["dovi-shefler", "avi-hadida", "tzuri-dotan", "shlomo-bentzvi"],
      detail: {
        he: "ישיבה שלא מן המניין שכונסה לאישור תקציב 2025. נוכחות מלאה — כל 11 חברי המועצה השתתפו. ההצבעה עברה.",
        en: "An extraordinary meeting convened for the sole purpose of approving the 2025 budget. Full attendance — all 11 council members present. The vote passed."
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "הניע את אישור תקציב 2025.", en: "Drove the approval of the 2025 budget." } },
        { speaker_id: "avi-hadida",
          position: { he: "השתתף בדיון התקציבי.", en: "Participated in budget discussion." } },
        { speaker_id: "shlomo-bentzvi",
          position: { he: "השתתף בישיבת התקציב.", en: "Attended the budget meeting." } }
      ]
    },
    {
      id: "social-solidarity",
      he: "סולידריות חברתית",
      en: "Social solidarity",
      summary: { he: "דיון בהעמקת תחושת הסולידריות החברתית בקהילת אפרת בתקופת המלחמה.", en: "Discussion on deepening community solidarity in Efrat during wartime." },
      meetings: ["dec3"],
      speakers: ["dovi-shefler", "hanani-feigin", "talia-marcus"],
      detail: {
        he: "בישיבת דצמבר 2024 התקיים דיון על חיזוק הסולידריות החברתית בקהילה, בפרט בתקופת מלחמת חרבות ברזל.",
        en: "The December 2024 meeting included a discussion on strengthening social solidarity in the community, particularly in the context of the Iron Swords war."
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "הוביל את הדיון בסולידריות קהילתית.", en: "Led the discussion on community solidarity." } },
        { speaker_id: "hanani-feigin",
          position: { he: "השתתף בדיון על חיזוק הקהילה.", en: "Participated in the community strengthening discussion." } },
        { speaker_id: "talia-marcus",
          position: { he: "השתתפה בדיון על סולידריות חברתית.", en: "Participated in the social solidarity discussion." } }
      ]
    },
    {
      id: "education-director-extension",
      he: "הארכת כהונת מנהל חינוך",
      en: "Extension of education director term",
      summary: { he: "הצעה לאישור הארכת כהונת מנהל החינוך, שעלתה בישיבת ינואר 2025.", en: "Proposal to extend the education director's term, raised at the January 2025 meeting." },
      meetings: ["jan7"],
      speakers: ["dovi-shefler", "avital-cohen", "ariella-perry"],
      detail: {
        he: "בינואר 2025 הוצעה הארכת כהונת מנהל החינוך. ההצעה עלתה לדיון ואושרה.",
        en: "In January 2025, an extension of the education director's term was proposed. The proposal was discussed and approved."
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "הציג את ההצעה להארכת כהונת המנהל.", en: "Presented the proposal for the director's term extension." } },
        { speaker_id: "avital-cohen",
          position: { he: "השתתפה בדיון על מינויי חינוך.", en: "Participated in the education appointments discussion." } },
        { speaker_id: "ariella-perry",
          position: { he: "השתתפה בדיון על הארכת הכהונה.", en: "Participated in the term extension discussion." } }
      ]
    },
    {
      id: "education-youth",
      he: "חינוך ונוער",
      en: "Education & youth",
      summary: { he: "נושא חוזר בכל 14 הישיבות: מינויי מנהלי חינוך, סקר מועצת הנוער, תב\"ר לתנועת העזרא, מחלוקת הקייטנות, מכינת נטע שורק, וסקירת שנת הלימודים. אחד הנושאים הבולטים בסדר היום.", en: "A recurring thread across the meetings: education director appointments, a youth-council needs survey, Ezra Youth Movement funding, a contested summer-camp TaBaR, Netah Sorek pre-army academy, and the school-year opening review." },
      meetings: ["dec3", "jan7", "may6", "jun10", "jul22", "sep9", "feb3"],
      speakers: ["dovi-shefler", "avital-cohen", "ariella-perry", "dana-spiegel"],
      detail: {
        he: "חינוך ונוער צצו בחמישה הקשרים נפרדים לאורך השנה:<br><ul style='margin:8px 0 0 0;padding-right:18px;line-height:2;'><li><strong>סקירת מחלקת הנוער (דצמ׳ 2024)</strong> — סקירה כוללת של פעילות מחלקת הנוער ותכניות לשנת 2025.</li><li><strong>הארכת כהונת מנהל החינוך (ינו׳ 2025)</strong> — הארכת כהונתו של יוסי קרוטמר עד להתחלת כהונתו של מחליפו. אושר פה אחד.</li><li><strong>סקר מיפוי צרכי הנוער (מאי 2025)</strong> — אורי שיין, יו\"ר מועצת הנוער, הציג סקר מקיף על צרכי הנוער באפרת. נדונו המסקנות וההשלכות.</li><li><strong>תב\"ר תנועת העזרא בתמר ₪1,844,375 (יוני 2025)</strong> — מימון לתנועת הנוער הדתי-ציוני בשכונת תמר. אושר פה אחד.</li><li><strong>מכינת נטע שורק (יוני 2025)</strong> — המועצה אישרה פה אחד לפעול ב-3 מישורים מול המכינה הצבאית-קדם שמתכננת לפעול בתמר.</li><li><strong>מינוי אמיר בן גל ראש אגף חינוך (יולי 2025)</strong> — בן גל מונה רשמית להחליף את קרוטמר. אושר פה אחד.</li><li><strong>סקירת פתיחת שנת הלימודים (ספט׳ 2025)</strong> — אמיר בן גל סקר מספרי תלמידים, צוותי הוראה, ובניית כיתות חדשות.</li><li><strong>תב\"ר 928 — קייטנות קיץ (ספט׳ 2025)</strong> — אביטל כהן הצביעה נגד בטענה שרישום \"כל הקודם זוכה\" הוא \"זוועה\" ולא הוגן לילדים עם צרכים מיוחדים, חד-הוריות ומחוננים. עבר ברוב (אביטל נגד).</li><li><strong>תב\"ר 935 — הצטיידות חינוך מיוחד ומתי\"א (פבר׳ 2026)</strong> — ציוד למסגרות חינוך מיוחד. אושר פה אחד.</li></ul>",
        en: "Education and youth appeared in five separate threads across the year:<br><ul style='margin:8px 0 0 0;padding-left:18px;line-height:2;'><li><strong>Youth department review (Dec 2024)</strong> — Comprehensive overview of youth department activities and plans for 2025.</li><li><strong>Education director extension (Jan 2025)</strong> — Yossi Krotmer's tenure extended pending his replacement. Approved unanimously.</li><li><strong>Youth-council needs survey (May 2025)</strong> — Ori Shein, Youth Council chair, presented a survey mapping youth needs across Efrat. Conclusions and implications were discussed.</li><li><strong>TaBaR Ezra Youth Movement, Tamar ₪1,844,375 (Jun 2025)</strong> — Funding for the religious-Zionist youth movement in the Tamar neighborhood. Approved unanimously.</li><li><strong>Netah Sorek pre-army academy (Jun 2025)</strong> — Council unanimously approved acting on 3 fronts regarding the pre-army academy planning to operate in Tamar.</li><li><strong>Amir Ben Gal appointed Education Dept head (Jul 2025)</strong> — Ben Gal formally replacing Krotmer. Approved unanimously.</li><li><strong>School-year opening review (Sep 2025)</strong> — Ben Gal briefed the council on student numbers, teaching staff, and new classroom construction.</li><li><strong>TaBaR 928 — Summer camp funding (Sep 2025)</strong> — Avital Cohen voted against, arguing first-come-first-served registration is \"horrible\" and unfair to special-needs children, single-parent families, and gifted children. Passed by majority (Avital against).</li><li><strong>TaBaR 935 — Special-education &amp; resource-centre equipment (Feb 2026)</strong> — Equipment for special-education frameworks. Approved unanimously.</li></ul>"
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "הוביל את כל מינויי החינוך ואת אישורי התב\"רים הקשורים לנוער.", en: "Led all education appointments and youth-related TaBaR approvals." } },
        { speaker_id: "avital-cohen",
          position: { he: "הצביעה נגד תב\"ר הקייטנות: \"זוועה\" — שיטת הרישום \"כל הקודם זוכה\" מפלה ילדים עם צרכים מיוחדים, חד-הוריות ומחוננים.", en: "Voted against the summer-camp TaBaR: called first-come-first-served registration \"horrible\" and discriminatory against special-needs, single-parent, and gifted families." } },
        { speaker_id: "ariella-perry",
          position: { he: "השתתפה בדיון על מינוי ראש אגף החינוך.", en: "Participated in the education department head appointment discussion." } },
        { speaker_id: "dana-spiegel",
          position: { he: "שאלה שאלות הבהרה על תב\"ר הציוד לחינוך המיוחד.", en: "Asked clarifying questions on the special-education equipment TaBaR." } }
      ]
    },
    {
      id: "mall-parking-arnona",
      he: "ארנונת חניון הקניון (בזית)",
      en: "Mall-parking property tax (Bazit)",
      summary: { he: "ביוני 2024 אישרה המועצה תעריף ארנונה מוזל לחניון המקורה בקניון אפרת סנטר (בזית) כדי להקל על בעלי העסקים. עודד רביבי הצביע נגד ואבי חדידה נמנע — וחזר לנושא פעמיים (אוקטובר ונובמבר 2024) בטענה שההנחה צריכה להגיע גם לתושבים ולא רק לעסקים.", en: "In June 2024 the council approved a reduced property-tax tariff for the covered parking lot at the Efrat Center (Bazit) mall to ease costs for shop owners. Oded Ravivi voted against and Avi Hadida abstained — and Hadida brought it back twice (October and November 2024), arguing the discount should also reach residents, not only businesses." },
      meetings: ["jun30", "oct8", "nov5"],
      speakers: ["dovi-shefler", "avi-hadida", "oded-ravivi", "shlomo-bentzvi", "hanani-feigin"],
      detail: {
        he: "בישיבה שלא מן המניין ב-30 ביוני 2024 הביא ראש המועצה דובי שפלר צו ארנונה חדש: תעריף של 45 ש״ח למ״ר על חניונים מקורים שאינם למגורים, שמטרתו להוזיל את העלות לבעלי העסקים בקניון אפרת סנטר (בזית). ההצעה אושרה ברוב קולות (7 בעד), אך עודד רביבי הצביע נגד — ההצבעה היחידה נגד — ושאל מי בעצם משלם את הארנונה. אבי חדידה נמנע. הנושא חזר לשולחן פעמיים: באוקטובר ובנובמבר 2024 ביקש אבי חדידה לדון מחדש בהנחה, בטענה שהיא צריכה להיטיב גם עם התושבים ולא רק עם העסקים — וזו הסיבה שנמנע ביוני.",
        en: "At the extraordinary meeting of June 30, 2024, Mayor Dovi Shefler brought a new property-tax order: a NIS 45/sqm tariff on covered non-residential parking, meant to lower costs for shop owners at the Efrat Center (Bazit) mall. It passed by majority (7 in favor), but Oded Ravivi voted against — the lone 'no' — and questioned who actually pays the tax. Avi Hadida abstained. The issue returned twice: in October and November 2024 Avi Hadida asked to re-open the discount, arguing it should benefit residents and not only businesses — the reason he had abstained in June."
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "הציג וקידם את התעריף המוזל כהקלה לבעלי העסקים בקניון.", en: "Presented and championed the reduced tariff as relief for the mall's shop owners." } },
        { speaker_id: "avi-hadida",
          position: { he: "נמנע ביוני וחזר לנושא באוקטובר ובנובמבר; טען שההנחה צריכה להגיע גם לתושבים, לא רק לעסקים.", en: "Abstained in June and re-raised it in October and November; argued the discount should reach residents too, not only businesses." },
          quote: { he: "אני לא נגד להוזיל לעסקים, אבל כדאי לעשות את זה גם לתושבים.", en: "I'm not against lowering it for businesses, but it should be done for residents too." } },
        { speaker_id: "oded-ravivi",
          position: { he: "ההצבעה היחידה נגד; הטיל ספק במנגנון ושאל מי משלם בפועל את הארנונה.", en: "The only 'no' vote; questioned the mechanism and asked who actually pays the tax." },
          quote: { he: "מי משלם את הארנונה?", en: "Who pays the property tax?" } }
      ]
    },
    {
      id: "post-election-2024",
      he: "צוהר 2024: מינויים, ארנונה ותקציב אחרי הבחירות",
      en: "Post-election 2024: appointments, property tax and budget",
      summary: { he: "מיד אחרי הבחירות התכנסה המועצה ב-25 ביוני 2024 לשלוש ישיבות מיוחדות ברצף — מינוי יו״רים ודירקטוריונים, מינוי צורי דותן לסגן, תוספת ארנונה חריגה ואישור תקציב 2024. בכולן נחשף קו שבר ברור: קואליציה של שישה (דובי שפלר, צורי דותן, חנני פייגין, אביטל כהן, אריאלה פרי וישי פליישר) מול גוש אופוזיציה (עודד רביבי, שלמה בן צבי, אבי חדידה ותמר עמר).", en: "Right after the elections, the council met on June 25, 2024 for three back-to-back special meetings — appointing committee and board chairs, naming Tzuri Dotan deputy mayor, levying an exceptional property-tax surcharge, and approving the 2024 budget. All revealed a clear fault line: a six-member coalition (Dovi Shefler, Tzuri Dotan, Hanani Feigin, Avital Cohen, Ariella Perry and Yishai Fleisher) against an opposition bloc (Oded Ravivi, Shlomo Ben Tzvi, Avi Hadida and Tamar Amar)." },
      meetings: ["jun25app", "jun25arn", "jun25bud"],
      speakers: ["dovi-shefler", "oded-ravivi", "shlomo-bentzvi", "avi-hadida", "tamar-amar", "tzuri-dotan"],
      detail: {
        he: "ב-25 ביוני 2024, זמן קצר אחרי הבחירות המקומיות, קיימה המועצה החדשה שלוש ישיבות שלא מן המניין באותו יום. בראשונה חולקו התפקידים: יו״רים לוועדות, דירקטוריונים לחכ״ל ולמתנ״ס, ומינוי צורי דותן לסגן וממלא מקום ראש המועצה — כולם עברו ברוב של שישה מול התנגדות של עודד רביבי, שלמה בן צבי ותמר עמר, שדרשו הצבעות נפרדות וטענו לחלוקת ג׳ובים. בשנייה אושרה תוספת ארנונה חריגה (6–3, נמנעת אחת) שנדרשה לסגירת פער מול התעריף הנורמטיבי של משרד הפנים — שלמה בן צבי, אבי חדידה ועודד רביבי התנגדו. בשלישית אושר תקציב 2024 (6–4) שלא ניתן היה לאשרו קודם בשל הבחירות; גוש האופוזיציה הצביע נגד, בטענה שאינו שותף ושאין די שקיפות, אך חלקו הדגיש שהתנגדות לתקציב אינה דבר שצריך להתנצל עליו.",
        en: "On June 25, 2024, shortly after the municipal elections, the new council held three extraordinary meetings on the same day. The first carved up the roles: committee chairs, boards for the economic company and community center, and Tzuri Dotan as deputy/acting mayor — all passing by a six-vote majority over objections from Oded Ravivi, Shlomo Ben Tzvi and Tamar Amar, who demanded separate votes and alleged a carve-up of positions. The second levied an exceptional property-tax surcharge (6–3, one abstention) needed to close a gap against the Interior Ministry's normative tariff — Shlomo Ben Tzvi, Avi Hadida and Oded Ravivi opposed. The third approved the 2024 budget (6–4), which could not be passed earlier because of the elections; the opposition bloc voted no, saying they were not partners and that transparency was lacking, though some stressed that opposing a budget is nothing to apologize for."
      },
      speaker_positions: [
        { speaker_id: "dovi-shefler",
          position: { he: "הוביל את שלוש ההצבעות והעמיד את הרוב הקואליציוני; הציג את תוספת הארנונה כהכרח מול משרד הפנים ואת התקציב כחיוני אף שלא אושר בזמן בשל הבחירות.", en: "Led all three votes and marshalled the coalition majority; framed the tax surcharge as a necessity vis-à-vis the Interior Ministry and the budget as essential despite its delay caused by the elections." } },
        { speaker_id: "oded-ravivi",
          position: { he: "התנגד בעקביות — דרש הצבעות נפרדות על כל ועדה והצביע נגד המינויים, תוספת הארנונה והתקציב.", en: "Opposed consistently — demanded separate votes per committee and voted against the appointments, the tax surcharge and the budget." } },
        { speaker_id: "shlomo-bentzvi",
          position: { he: "מקול האופוזיציה הבולטים; הצביע נגד המינויים, נגד תוספת הארנונה ונגד התקציב.", en: "Among the most vocal opposition voices; voted against the appointments, the tax surcharge and the budget." } },
        { speaker_id: "avi-hadida",
          position: { he: "הצביע נגד תוספת הארנונה ונגד תקציב 2024, בטענה שאין שיתוף ושקיפות מספקת.", en: "Voted against the tax surcharge and the 2024 budget, arguing there was insufficient inclusion and transparency." } },
        { speaker_id: "tamar-amar",
          position: { he: "נמנעה במינויים והצביעה נגד התקציב; אמרה שבתקציב שהיא מאשרת לא ברור לאן הכסף הולך.", en: "Abstained on the appointments and voted against the budget; said that in the budget she was asked to approve it was unclear where the money goes." } }
      ]
    },
  ],

  // Notable on-record quotations (paraphrased translations from the Hebrew, kept short)
  key_moments: [
    {
      meeting: "sep30",
      topic: "budget-rounds",
      who: "avi-hadida",
      he: "אני מצביע נגד עדכון התקציב. הקיצוץ הזה לא נכון.",
      en: "I vote against the budget update. This cut is not the right move."
    },
    {
      meeting: "nov4",
      topic: "mordot-hazayit",
      who: "avi-hadida",
      he: "זו טעות גדולה מאוד — זה יכול להביא אותנו לחדלות פירעון.",
      en: "This would be a huge mistake — it could bring us to insolvency."
    },
    {
      meeting: "dec2",
      topic: "audit-disputes",
      who: "dovi-shefler",
      he: "ברוב קולות מליאת המועצה קיבלה את המלצות ועדת הביקורת, כולל ההמלצה שהוועדה הציעה נגד המבקר.",
      en: "By majority vote, the council adopted the audit committee's recommendations — including the recommendation the committee made against the auditor's position."
    },
    {
      meeting: "jan6",
      topic: "budget-rounds",
      who: "avi-hadida",
      he: "אם אתה רוצה את התמיכה שלי... אבל להזמין לפחות שאני אכנס לדבר הזה. ואם זו ההתייחסות לאופוזיציה, בסדר.",
      en: "If you want my support... at least invite me into the discussion. If this is the way the opposition is treated, fine."
    },
    {
      meeting: "feb3",
      topic: "ev-charging",
      who: "ariella-perry",
      he: "איך אתה מנגיש את ההחלטה הזאת עכשיו פה, לתושב הפשוט, דובר האנגלית?",
      en: "How do you make this decision accessible to the ordinary English-speaking resident?"
    }
  ]
};