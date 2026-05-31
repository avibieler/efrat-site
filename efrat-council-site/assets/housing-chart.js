// Renders the Efrat housing transactions chart (Chart.js)
// Stacked bars by price bracket, line overlay for avg ₪/m², half-year periods.
(function() {
  function periodKey(dateStr) {
    const [d, m, y] = dateStr.split("/").map(Number);
    return y * 10 + (m <= 6 ? 1 : 2);
  }
  function periodLabel(dateStr, lang) {
    const [d, m, y] = dateStr.split("/").map(Number);
    if (lang === 'en') {
      return (m <= 6 ? "Jan–Jun " : "Jul–Dec ") + y;
    }
    return (m <= 6 ? "ינו–יונ " : "יול–דצ ") + y;
  }

  function buildData(lang) {
    const map = {};
    HOUSING_RAW.forEach(row => {
      const [id, addr, area, date, price, type] = row;
      const k = periodKey(date);
      if (!map[k]) {
        map[k] = { k, label: periodLabel(date, lang), priceSum: 0, areaSum: 0 };
        HOUSING_BRACKETS.forEach(b => { map[k][b.key] = 0; });
      }
      const bucket = HOUSING_BRACKETS.find(b => b.test(price));
      if (bucket) map[k][bucket.key]++;
      if (area > 0) {
        map[k].priceSum += price;
        map[k].areaSum += area;
      }
    });
    return Object.values(map).sort((a, b) => a.k - b.k);
  }

  let chartInstance = null;
  function renderChart() {
    const lang = document.documentElement.getAttribute('lang') || 'he';
    const canvas = document.getElementById('housing-chart');
    if (!canvas || !window.Chart) return;
    const periods = buildData(lang);
    const labels = periods.map(p => p.label);
    const barDatasets = HOUSING_BRACKETS.map(b => ({
      type: 'bar',
      label: lang === 'en' ? b.label_en : b.label_he,
      data: periods.map(p => p[b.key]),
      backgroundColor: b.color,
      borderColor: b.color,
      borderWidth: 0,
      stack: 'price',
      yAxisID: 'y',
      order: 2
    }));
    const ppsmDataset = {
      type: 'line',
      label: lang === 'en' ? 'Avg ₪/m²' : 'ממוצע ₪/מ"ר',
      data: periods.map(p => p.areaSum > 0 ? Math.round(p.priceSum / p.areaSum) : null),
      borderColor: '#1a1a1a',
      backgroundColor: '#1a1a1a',
      borderWidth: 2.5,
      pointRadius: 3.5,
      pointBackgroundColor: '#1a1a1a',
      pointBorderColor: '#fff',
      pointBorderWidth: 1.5,
      tension: 0.25,
      yAxisID: 'y1',
      order: 1
    };
    if (chartInstance) chartInstance.destroy();
    chartInstance = new Chart(canvas, {
      data: {
        labels,
        datasets: [...barDatasets, ppsmDataset]
      },
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
                  const v = ctx.parsed.y;
                  return ctx.dataset.label + ': ' + (v ? '₪' + v.toLocaleString() : '—');
                }
                return ctx.dataset.label + ': ' + ctx.parsed.y;
              },
              afterBody: function(items) {
                const total = items
                  .filter(it => it.dataset.type === 'bar')
                  .reduce((s, it) => s + (it.parsed.y || 0), 0);
                return [lang === 'en' ? 'Total: ' + total : 'סה"כ: ' + total];
              }
            }
          }
        },
        scales: {
          x: {
            stacked: true,
            ticks: { font: { size: 10 }, maxRotation: 45, minRotation: 45 },
            grid: { display: false }
          },
          y: {
            stacked: true,
            position: 'left',
            title: { display: true, text: lang === 'en' ? 'Transactions' : 'עסקאות', font: { size: 11 }, color: '#888' },
            ticks: { font: { size: 11 }, color: '#888' },
            grid: { color: '#f0efe8' }
          },
          y1: {
            position: 'right',
            title: { display: true, text: lang === 'en' ? '₪/m²' : '₪/מ"ר', font: { size: 11 }, color: '#e05555' },
            ticks: { font: { size: 11 }, color: '#e05555', callback: v => '₪' + (v/1000).toFixed(0) + 'K' },
            grid: { display: false }
          }
        }
      }
    });
  }

  function init() {
    if (!window.Chart) {
      setTimeout(init, 100);
      return;
    }
    renderChart();
    // Re-render on lang toggle
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.addEventListener('click', () => setTimeout(renderChart, 50));
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
