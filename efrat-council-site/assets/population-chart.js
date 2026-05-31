// Renders Efrat age-group population change as % change from 2009 baseline.
// Groups: 0-4, 5-19, 20-29, 30-64 (merged), 65+
(function() {
  var chartInstance = null;

  var GROUPS = [
    { labelHe: '0–4',   labelEn: '0–4',   color: '#5fa07b', dash: [],         width: 2, col: function(row){ return row[1]; } },
    { labelHe: '5–19',  labelEn: '5–19',  color: '#1f6d8c', dash: [8,4],      width: 2, col: function(row){ return row[2]; } },
    { labelHe: '20–29', labelEn: '20–29', color: '#b18a3a', dash: [3,3],      width: 2, col: function(row){ return row[3]; } },
    { labelHe: '30–64', labelEn: '30–64', color: '#7a6235', dash: [10,3,2,3], width: 2, col: function(row){ return row[4]+row[5]; } },
    { labelHe: '65+',        labelEn: '65+',        color: '#5b6f87', dash: [],         width: 3, col: function(row){ return row[6]; } }
  ];

  function buildLegend(lang) {
    var el = document.getElementById('pop-chart-legend');
    if (!el) return;
    el.innerHTML = '';
    GROUPS.forEach(function(g, i) {
      var label = lang === 'he' ? g.labelHe : g.labelEn;
      var dashStr = g.dash.length ? g.dash.join(' ') : 'none';
      var item = document.createElement('span');
      item.id = 'pop-leg-' + i;
      item.style.cssText = 'display:flex;align-items:center;gap:6px;cursor:pointer;font-size:12px;';
      item.innerHTML =
        '<svg width="24" height="12" aria-hidden="true">' +
          '<line x1="0" y1="6" x2="24" y2="6" stroke="' + g.color + '" stroke-width="' + g.width + '" stroke-dasharray="' + dashStr + '"/>' +
        '</svg>' +
        '<span>' + label + '</span>';
      item.addEventListener('click', function() {
        if (!chartInstance) return;
        var meta = chartInstance.getDatasetMeta(i);
        meta.hidden = !meta.hidden;
        item.style.opacity = meta.hidden ? '0.3' : '1';
        chartInstance.update();
      });
      el.appendChild(item);
    });
  }

  function render() {
    var canvas = document.getElementById('pop-chart');
    if (!canvas || typeof POPULATION_BY_AGE === 'undefined' || !window.Chart) return;

    var lang = document.documentElement.getAttribute('lang') || 'he';
    var years = POPULATION_BY_AGE.map(function(r){ return r[0]; });

    var datasets = GROUPS.map(function(g) {
      var base = g.col(POPULATION_BY_AGE[0]);
      var data = POPULATION_BY_AGE.map(function(row) {
        return Math.round((g.col(row) - base) / base * 1000) / 10;
      });
      return {
        label: lang === 'he' ? g.labelHe : g.labelEn,
        data: data,
        borderColor: g.color,
        borderDash: g.dash,
        borderWidth: g.width,
        backgroundColor: g.color + '18',
        tension: 0.3,
        fill: false,
        pointRadius: 2.5,
        pointHoverRadius: 5
      };
    });

    buildLegend(lang);

    if (chartInstance) chartInstance.destroy();
    chartInstance = new Chart(canvas, {
      type: 'line',
      data: { labels: years, datasets: datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#fff',
            titleColor: '#1e2a36',
            bodyColor: '#1e2a36',
            borderColor: '#e3e1da',
            borderWidth: 1,
            padding: 10,
            callbacks: {
              label: function(ctx) {
                var v = ctx.parsed.y;
                return ' ' + ctx.dataset.label + ': ' + (v > 0 ? '+' : '') + v.toFixed(1) + '%';
              }
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              font: { size: 11 },
              maxRotation: 0,
              autoSkip: false,
              callback: function(v, i) { return years[i] % 3 === 0 ? years[i] : ''; }
            }
          },
          y: {
            grid: { color: '#f0efe8' },
            ticks: {
              font: { size: 11 },
              callback: function(v) { return v + '%'; }
            },
            title: {
              display: true,
              text: lang === 'he' ? 'שינוי מ-2009' : '% change from 2009',
              font: { size: 11 },
              color: '#888'
            }
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
