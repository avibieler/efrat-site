// Shared site logic for language toggle + chart drawing
(function() {
  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('.toggle-lang, .inline-toggle-lang').forEach(el => {
      el.classList.remove('he', 'en');
      el.classList.add(lang);
    });
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    try { localStorage.setItem('efrat-lang', lang); } catch (e) {}
  }
  function initLang() {
    let saved = 'he';
    try { saved = localStorage.getItem('efrat-lang') || 'he'; } catch (e) {}
    applyLang(saved);
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.addEventListener('click', () => {
        var lang = b.dataset.lang; // 'he' or 'en'
        // Push a GTM dataLayer event so a tag can fire on each language click
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'language_toggle', language: lang });
        applyLang(lang);
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
  } else {
    initLang();
  }

  // Expose helpers globally
  window.EfratSite = {
    fmtDate(iso) { if (!iso) return ''; var p = String(iso).split('-'); return p.length === 3 ? p[2] + '-' + p[1] + '-' + p[0].slice(2) : iso; },
    initials(name) {
      return name.split(/\s+/).map(n => n[0]).slice(0, 2).join('').toUpperCase();
    },
    cellClass(pos) { return 'cell-' + (pos || 'absent'); },
    posLabel(pos, lang) {
      const m = {
        for:      { he: 'בעד',      en: 'For' },
        against:  { he: 'נגד',      en: 'Against' },
        abstain:  { he: 'נמנע',     en: 'Abstain' },
        not_voting:{ he: 'לא משתתף', en: 'N/P' },
        absent:   { he: 'נעדר',     en: 'Absent' }
      };
      return m[pos] ? m[pos][lang] : '';
    }
  };
})();
