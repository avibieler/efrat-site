// Renders a GitHub-style daily outage calendar.
// Each square = one day. Yellow = power outage, Blue = water outage, Green = both.
(function() {
  function fmtDate(d) {
    return d.toISOString().slice(0, 10);
  }
  function build() {
    const container = document.getElementById('outage-calendar');
    if (!container) return;
    if (typeof OUTAGE_EVENTS === 'undefined') return;

    // Build a per-day map: date → { water: bool, power: bool, notes: [] }
    const dayMap = {};
    OUTAGE_EVENTS.forEach(ev => {
      if (!dayMap[ev.date]) dayMap[ev.date] = { water: false, power: false, events: [] };
      dayMap[ev.date][ev.type] = true;
      dayMap[ev.date].events.push(ev);
    });

    // Calendar window: from first Sunday on/before earliest event to last Saturday on/after today (or last event)
    const dates = Object.keys(dayMap).sort();
    const startDate = new Date(dates[0]);
    // Back up to Sunday
    while (startDate.getDay() !== 0) startDate.setDate(startDate.getDate() - 1);
    // Extend window to about 1 month past last event (or today, whichever is later)
    const today = new Date();
    const lastEvent = new Date(dates[dates.length - 1]);
    const endTarget = lastEvent > today ? lastEvent : today;
    const endDate = new Date(endTarget);
    endDate.setDate(endDate.getDate() + 14);
    while (endDate.getDay() !== 6) endDate.setDate(endDate.getDate() + 1);

    // Build columns (one per week), each containing 7 day cells (Sun-Sat)
    const weeks = [];
    let cursor = new Date(startDate);
    let currentWeek = [];
    while (cursor <= endDate) {
      currentWeek.push(new Date(cursor));
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      cursor.setDate(cursor.getDate() + 1);
    }
    if (currentWeek.length) weeks.push(currentWeek);

    // Determine month labels by which week the 1st of each month falls in
    const monthLabels = {}; // week index → 'Sep' / 'Jan'
    const monthNamesEn = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const monthNamesHe = ['ינו','פבר','מרץ','אפר','מאי','יוני','יולי','אוג','ספט','אוק','נוב','דצמ'];
    let lastMonth = -1;
    weeks.forEach((week, wi) => {
      const firstDay = week[0];
      if (firstDay.getMonth() !== lastMonth) {
        monthLabels[wi] = { month: firstDay.getMonth(), year: firstDay.getFullYear() };
        lastMonth = firstDay.getMonth();
      }
    });

    const lang = document.documentElement.getAttribute('lang') || 'he';
    const dayNamesEn = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
    const dayNamesHe = ['', 'ב', '', 'ד', '', 'ו', ''];
    const dayLabels = lang === 'he' ? dayNamesHe : dayNamesEn;
    const monthNames = lang === 'he' ? monthNamesHe : monthNamesEn;

    // Render SVG-ish using divs for hover interactivity
    let html = '<div class="cal-wrap">';
    // Month labels row
    html += '<div class="cal-months">';
    html += '<div class="cal-corner"></div>';
    weeks.forEach((week, wi) => {
      const lbl = monthLabels[wi];
      html += `<div class="cal-month-cell">${lbl ? monthNames[lbl.month] : ''}</div>`;
    });
    html += '</div>';
    // Body: row per weekday, day labels on the left (or right for RTL)
    html += '<div class="cal-body">';
    html += '<div class="cal-day-labels">';
    for (let d = 0; d < 7; d++) {
      html += `<div class="cal-day-label">${dayLabels[d] || ''}</div>`;
    }
    html += '</div>';
    html += '<div class="cal-grid">';
    weeks.forEach(week => {
      html += '<div class="cal-week">';
      week.forEach(dt => {
        const key = fmtDate(dt);
        const ev = dayMap[key];
        let cls = 'cal-cell';
        let title = '';
        if (ev) {
          if (ev.water && ev.power) cls += ' cal-both';
          else if (ev.water) cls += ' cal-water';
          else if (ev.power) cls += ' cal-power';
          const dateStr = dt.toLocaleDateString(lang === 'he' ? 'he-IL' : 'en-GB');
          const types = [];
          if (ev.water) types.push(lang === 'he' ? 'מים' : 'water');
          if (ev.power) types.push(lang === 'he' ? 'חשמל' : 'power');
          title = dateStr + ' — ' + types.join(' + ') + '\n\n' + ev.events.map(e => lang === 'he' ? e.note_he : e.note_en).join('\n');
        } else {
          const dateStr = dt.toLocaleDateString(lang === 'he' ? 'he-IL' : 'en-GB');
          title = dateStr;
        }
        html += `<div class="${cls}" title="${title.replace(/"/g, '&quot;')}" data-date="${key}"></div>`;
      });
      html += '</div>';
    });
    html += '</div></div>';

    // Legend
    const labels = lang === 'he'
      ? { water: 'מים', power: 'חשמל', both: 'שניהם', none: 'ללא דיווח' }
      : { water: 'Water', power: 'Power', both: 'Both', none: 'No report' };
    html += '<div class="cal-legend">';
    html += `<span><span class="cal-cell cal-static"></span>${labels.none}</span>`;
    html += `<span><span class="cal-cell cal-water cal-static"></span>${labels.water}</span>`;
    html += `<span><span class="cal-cell cal-power cal-static"></span>${labels.power}</span>`;
    html += `<span><span class="cal-cell cal-both cal-static"></span>${labels.both}</span>`;
    html += '</div>';

    html += '</div>';
    container.innerHTML = html;
  }

  function init() {
    build();
    // Re-render on language change
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.addEventListener('click', () => setTimeout(build, 50));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
