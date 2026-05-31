// Renders Efrat active asking-listings by price bracket in 6-month buckets + avg asking ₪/m² line.
// Mirrors the housing-chart.js pattern. Source: WhatsApp real-estate groups (not comprehensive).
(function() {
  var SUPPLY_BRACKETS = [
    { label_he: '< ₪2M',     label_en: '< ₪2M',     color: '#a8d8f0', idx: 2 },
    { label_he: '₪2–2.5M',   label_en: '₪2–2.5M',   color: '#4e9af1', idx: 3 },
    { label_he: '₪2.5–3M',   label_en: '₪2.5–3M',   color: '#3dbf8a', idx: 4 },
    { label_he: '₪3–3.5M',   label_en: '₪3–3.5M',   color: '#f5c842', idx: 5 },
    { label_he: '₪3.5–4M',   label_en: '₪3.5–4M',   color: '#f58c42', idx: 6 },
    { label_he: '₪4–4.5M',   label_en: '₪4–4.5M',   color: '#e05555', idx: 7 },
    { label_he: '> ₪4.5M',   label_en: '> ₪4.5M',   color: '#9b59b6', idx: 8 }
  ];

  function bucketKey(row) { return row[0] + (row[1] <= 6 ? '-H1' : '-H2'); }
  function bucketLabel(key, lang) {
    var parts = key.split('-');
    var y = parts[0], h = parts[1];
    if (lang === 'he') {
      return (h === 'H1' ? 'ינו–יונ ' : 'יול–דצ ') + y;
    }
    return (h === 'H1' ? 'Jan–Jun ' : 'Jul–Dec ') + y;
  }

  function sum(arr) {
    return arr.reduce(function(a,b){return a+b;},0);
  }

  function avg(arr) {
    return arr.length ? sum(arr) / arr.length : 0;
  }

  var chartInstance = null;

  function render() {
    var canvas = document.getElementById('supply-chart');
    if (!canvas || typeof SUPPLY_MONTHLY === 'undefined' || !window.Chart) return;

    var lang = document.documentElement.getAttribute('lang') || 'he';

    var buckets = {};
    SUPPLY_MONTHLY.forEach(function(row) {
      var k = bucketKey(row);
      if (!buckets[k]) buckets[k] = [];
      buckets[k].push(row);
    });
    var keys = Object.keys(buckets).sort();
    var labels = keys.map(function(k) { return bucketLabel(k, lang); });

    var barDatasets = SUPPLY_BRACKETS.map(function(b) {
      return {
        type: 'bar',
        label: lang === 'he' ? b.label_he : b.label_en,
        data: keys.map(function(k) {
          return sum(buckets[k].map(function(r){return r[b.idx];}));
        }),
        backgroundColor: b.color,
        borderColor: b.color,
        borderWidth: 0,
        stack: 'supply',
        yAxisID: 'y',
        order: 2
      };
    });

    var ppsmData = keys.map(function(k) {
      var vals = buckets[k].map(function(r){return r[9];}).filter(function(v){return v && v < 100000;});
      return vals.length ? Math.round(avg(vals)) : null;
    });

    var ppsmLabel = lang === 'he' ? 'מחיר מבוקש ממוצע למ"ר' : 'Avg asking ₪/m²';
    var lineDataset = {
      type: 'line',
      label: ppsmLabel,
      data: ppsmData,
      borderColor: '#1a1a1a',
      backgroundColor: '#1a1a1a',
      borderWidth: 2.5,
      pointRadius: 4,
      pointBackgroundColor: '#1a1a1a',
      pointBorderColor: '#fff',
      pointBorderWidth: 1.5,
      tension: 0.25,
      spanGaps: true,
      yAxisID: 'y1',
      order: 1
    };

    if (chartInstance) chartInstance.destroy();
    chartInstance = new Chart(canvas, {
      data: { labels: labels, datasets: barDatasets.concat([lineDataset]) },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: {
            position: 'bottom',
            labels: { font: { size: 11 }, boxWidth: 14, padding: 10 }
          },
          tooltip: {
            backgroundColor: '#fff',
            titleColor: '#1e2a36',
            bodyColor: '#1e2a36',
            borderColor: '#e3e1da',
            borderWidth: 1,
            padding: 10,
            cornerRadius: 6,
            titleFont: { weight: '600', size: 13 },
            bodyFont: { size: 12 },
            callbacks: {
              label: function(ctx) {
                if (ctx.dataset.type === 'line') {
                  var v = ctx.parsed.y;
                  return ctx.dataset.label + ': ' + (v ? '₪' + Math.round(v).toLocaleString() : '—');
                }
                if (ctx.parsed.y === 0) return null;
                return ctx.dataset.label + ': ' + ctx.parsed.y;
              },
              afterBody: function(items) {
                var total = items.filter(function(i){return i.dataset.type==='bar';})
                  .reduce(function(s,i){return s+(i.parsed.y||0);},0);
                if (total <= 0) return [];
                return [(lang === 'he' ? 'סה"כ: ' : 'Total: ') + total];
              }
            }
          }
        },
        scales: {
          x: {
            stacked: true,
            grid: { display: false },
            ticks: { font: { size: 10 }, maxRotation: 45, minRotation: 45 }
          },
          y: {
            stacked: true,
            position: 'left',
            title: {
              display: true,
              text: lang === 'he' ? 'מודעות פעילות (סה"כ לתקופה)' : 'Total active listings (period)',
              font: { size: 11 }, color: '#888'
            },
            ticks: { font: { size: 11 }, color: '#888' },
            grid: { color: '#f0efe8' }
          },
          y1: {
            position: 'right',
            title: {
              display: true,
              text: lang === 'he' ? '₪/מ"ר (מבוקש)' : '₪/m² (asking)',
              font: { size: 11 }, color: '#e05555'
            },
            ticks: {
              font: { size: 11 }, color: '#e05555',
              callback: function(v) { return '₪' + Math.round(v/1000) + 'K'; }
            },
            grid: { display: false },
            min: 10000,
            max: 32000
          }
        }
      }
    });
  }

  function init() {
    if (!window.Chart) { setTimeout(init, 100); return; }
    render();
    document.querySelectorAll('.lang-toggle button').forEach(function(b) {
      b.addEventListener('click', function() { setTimeout(render, 50); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
