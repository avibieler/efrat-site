// Renders the topics list + search (shared by index.html and index.html)
(function() {
  const list = document.getElementById('topics-list');
  const meetingLabels = {
    feb4:  { he: '4.2.2025',  en: 'Feb 4, 2025' },
    apr8:  { he: '8.4.2025',  en: 'Apr 8, 2025' },
    may6:  { he: '6.5.2025',  en: 'May 6, 2025' },
    jun10: { he: '10.6.2025', en: 'Jun 10, 2025' },
    jul22: { he: '22.7.2025', en: 'Jul 22, 2025' },
    sep9:  { he: '9.9.2025',  en: 'Sep 9, 2025' },
    sep30: { he: '30.9.2025', en: 'Sep 30, 2025' },
    nov4:  { he: '4.11.2025', en: 'Nov 4, 2025' },
    dec2:  { he: '2.12.2025', en: 'Dec 2, 2025' },
    jan6:  { he: '6.1.2026',  en: 'Jan 6, 2026' },
    feb3:  { he: '3.2.2026',  en: 'Feb 3, 2026' }
  };
  COUNCIL_DATA.topics.forEach(t => {
    const speakers = t.speakers.map(id => COUNCIL_DATA.members.find(m => m.id === id)).filter(Boolean);
    const speakerPositions = (t.speaker_positions || []).map(sp => {
      const m = COUNCIL_DATA.members.find(x => x.id === sp.speaker_id);
      if (!m) return '';
      return `
        <div class="speaker-position">
          <div class="sp-header">
            <div class="sp-avatar">${EfratSite.initials(m.en)}</div>
            <div>
              <div class="sp-name">
                <span class="inline-toggle-lang"><span data-lang="he">${m.he}</span><span data-lang="en">${m.en}</span></span>
              </div>
            </div>
          </div>
          <div class="sp-position">
            <span class="inline-toggle-lang"><span data-lang="he">${sp.position.he}</span><span data-lang="en">${sp.position.en}</span></span>
          </div>
          ${sp.quote ? `<div class="sp-quote">
            "<span class="inline-toggle-lang"><span data-lang="he">${sp.quote.he}</span><span data-lang="en">${sp.quote.en}</span></span>"
          </div>` : ''}
        </div>
      `;
    }).join('');

    const item = document.createElement('details');
    item.className = 'expand-item';
    item.id = 'topic-' + t.id;
    item.style.marginBottom = '12px';
    item.dataset.searchText = [
      t.he, t.en, t.summary.he, t.summary.en,
      t.detail ? t.detail.he : '',
      t.detail ? t.detail.en : '',
      (t.speaker_positions || []).map(sp =>
        (sp.position?.he || '') + ' ' + (sp.position?.en || '') + ' ' +
        (sp.quote?.he || '') + ' ' + (sp.quote?.en || '')
      ).join(' '),
      t.speakers.map(id => {
        const m = COUNCIL_DATA.members.find(x => x.id === id);
        return m ? (m.he + ' ' + m.en) : '';
      }).join(' ')
    ].join(' ').toLowerCase();
    item.innerHTML = `
      <summary>
        <span class="item-title">
          <div style="font-size:1.05rem;font-weight:600;">
            <span class="inline-toggle-lang"><span data-lang="he">${t.he}</span><span data-lang="en">${t.en}</span></span>
          </div>
            ${t.meetings.map(mid => { const _mt = COUNCIL_DATA.meetings.find(x => x.id === mid); const _d = _mt ? EfratSite.fmtDate(_mt.date) : mid; const lbl = { he: _d, en: _d }; return `<span class="tag" style="margin-${document.dir==='rtl'?'left':'right'}:6px;"><span class="inline-toggle-lang"><span data-lang="he">${lbl.he}</span><span data-lang="en">${lbl.en}</span></span></span>`; }).join('')}
            <span style="font-size:0.85rem;color:var(--ink);">
              <span class="inline-toggle-lang"><span data-lang="he">${t.summary.he}</span><span data-lang="en">${t.summary.en}</span></span>
            </span>
          </div>
        </span>
      </summary>
      <div class="item-body">
        ${t.detail ? `<div class="toggle-lang" style="font-size:0.96rem;line-height:1.7;">
          <div data-lang="he">${t.detail.he}</div>
          <div data-lang="en">${t.detail.en}</div>
        </div>` : ''}
        ${speakerPositions ? `
          <h4 style="margin:18px 0 8px;font-size:0.95rem;">
            <span class="inline-toggle-lang"><span data-lang="he">מה אמר כל דובר עיקרי</span><span data-lang="en">What each major speaker said</span></span>
          </h4>
          ${speakerPositions}
        ` : ''}
      </div>
    `;
    list.appendChild(item);
  });

  const saved = (function(){ try { return localStorage.getItem('efrat-lang') || 'he'; } catch(e){ return 'he'; }})();
  document.querySelectorAll('.toggle-lang, .inline-toggle-lang').forEach(el => {
    el.classList.add(saved);
  });

  // ---- Search ----
  const search = document.getElementById('topic-search');
  const empty = document.getElementById('topics-empty');
  const items = Array.from(list.querySelectorAll('details.expand-item'));

  function setPlaceholder() {
    const lang = document.documentElement.getAttribute('lang') || 'he';
    search.placeholder = lang === 'he' ? 'חיפוש בנושאים, דוברים, ציטוטים...' : 'Search topics, speakers, quotes...';
  }
  setPlaceholder();
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.addEventListener('click', () => setTimeout(setPlaceholder, 50));
  });

  function applyFilter() {
    const q = search.value.trim().toLowerCase();
    let visible = 0;
    items.forEach(el => {
      const match = !q || el.dataset.searchText.includes(q);
      el.style.display = match ? '' : 'none';
      if (match) {
        visible++;
        if (q && q.length > 1) el.open = true;
      } else {
        el.open = false;
      }
    });
    empty.style.display = visible === 0 ? '' : 'none';
  }
  search.addEventListener('input', applyFilter);

  // Auto-open the topic when arriving via #topic-<id> hash
  function openFromHash() {
    if (location.hash && location.hash.startsWith('#topic-')) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.open = true;
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }
  openFromHash();
  window.addEventListener('hashchange', openFromHash);
})();
