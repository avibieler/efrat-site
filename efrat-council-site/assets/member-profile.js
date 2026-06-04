// Renders an individual member profile based on the data-member-id on #profile
(function() {
  const root = document.getElementById('profile');
  if (!root) return;
  const id = root.dataset.memberId;
  const m = COUNCIL_DATA.members.find(x => x.id === id);
  if (!m) { root.innerHTML = '<p>Member not found</p>'; return; }

  const meetings = COUNCIL_DATA.meetings.slice().sort((a,b)=>a.date.localeCompare(b.date));
  const myVotes = COUNCIL_DATA.votes.map(v => ({ v, pos: v.positions[id] }));
  const mayor = COUNCIL_DATA.members.find(x => x.role.en.toLowerCase().includes('mayor'));

  // Voting stats vs mayor
  let same = 0, total = 0;
  COUNCIL_DATA.votes.forEach(v => {
    const my = v.positions[id], may = v.positions[mayor.id];
    if (!my || !may || my === 'absent' || my === 'not_voting' || may === 'absent' || may === 'not_voting') return;
    total++;
    if (my === may) same++;
  });
  const alignPct = total ? Math.round(100 * same / total) : 0;

  // Vote tallies
  const tally = { for: 0, against: 0, abstain: 0, not_voting: 0, absent: 0 };
  myVotes.forEach(({pos}) => { if (pos) tally[pos]++; });

  // Total speaker turns + attendance — dynamic across however many meetings exist
  const meetingIds = meetings.map(mt => mt.id);
  const totalSpeaks = meetingIds.reduce((s, k) => s + (m.speaker_turns[k] || 0), 0);
  const meetingsAttended = meetingIds.filter(k => m.attendance[k]).length;
  const totalMeetings = meetingIds.length;

  root.innerHTML = `
    <div style="display:flex;gap:16px;align-items:center;margin-bottom:16px;flex-wrap:wrap;">
      <a href="../members.html" style="color:var(--muted);font-size:0.9rem;">
        <span class="inline-toggle-lang"><span data-lang="he">← חזרה לכל חברי המועצה</span><span data-lang="en">← Back to all members</span></span>
      </a>
    </div>

    <section class="hero" style="display:flex;gap:24px;align-items:center;flex-wrap:wrap;">
      <div class="avatar" style="width:80px;height:80px;border-radius:50%;background:var(--accent-soft);color:var(--accent);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.8rem;flex-shrink:0;">${EfratSite.initials(m.en)}</div>
      <div style="flex:1;min-width:220px;">
        <h2 style="margin:0;font-size:2rem;">
          <span class="inline-toggle-lang"><span data-lang="he">${m.he}</span><span data-lang="en">${m.en}</span></span>
        </h2>
        <div style="color:var(--muted);font-size:1rem;margin-top:4px;">
          <span class="inline-toggle-lang"><span data-lang="he">${m.role.he}</span><span data-lang="en">${m.role.en}</span></span>

        </div>
      </div>
    </section>

    <div class="stat-grid">
      <div class="stat">
        <div class="v">${meetingsAttended}/${totalMeetings}</div>
        <div class="l"><span class="inline-toggle-lang"><span data-lang="he">ישיבות שנכח</span><span data-lang="en">Meetings attended</span></span></div>
      </div>
      <div class="stat">
        <div class="v">${totalSpeaks}</div>
        <div class="l"><span class="inline-toggle-lang"><span data-lang="he">תורות דיבור</span><span data-lang="en">Speaker turns</span></span></div>
      </div>
      <div class="stat">
        <div class="v">${tally.for}</div>
        <div class="l"><span class="inline-toggle-lang"><span data-lang="he">הצביע בעד</span><span data-lang="en">Voted "For"</span></span></div>
      </div>
      <div class="stat">
        <div class="v">${tally.against}</div>
        <div class="l"><span class="inline-toggle-lang"><span data-lang="he">הצביע נגד</span><span data-lang="en">Voted "Against"</span></span></div>
      </div>
      <div class="stat">
        <div class="v">${tally.abstain + tally.not_voting}</div>
        <div class="l"><span class="inline-toggle-lang"><span data-lang="he">נמנע / לא הצביע</span><span data-lang="en">Abstain / N.P.</span></span></div>
      </div>
      ${m.id !== mayor.id ? `
      <div class="stat">
        <div class="v">${alignPct}%</div>
        <div class="l"><span class="inline-toggle-lang"><span data-lang="he">תאימות עם ראש המועצה</span><span data-lang="en">Alignment with mayor</span></span></div>
      </div>` : ''}
    </div>

    <section>
      <h3 class="section-title">
        <span class="inline-toggle-lang"><span data-lang="he">איך אנחנו רואים את החבר/ה הזה/הזו</span><span data-lang="en">How we read this member</span></span>
      </h3>
      <p style="font-size:1rem;line-height:1.7;">
        <span class="inline-toggle-lang"><span data-lang="he">${m.note.he}</span><span data-lang="en">${m.note.en}</span></span>
      </p>
    </section>

    <section>
      <h3 class="section-title">
        <span class="inline-toggle-lang"><span data-lang="he">נוכחות לפי ישיבה</span><span data-lang="en">Attendance by meeting</span></span>
      </h3>
      <table class="votes" style="font-size:0.92rem;">
        <tr>
          <th style="text-align:start;"><span class="inline-toggle-lang"><span data-lang="he">ישיבה</span><span data-lang="en">Meeting</span></span></th>
          <th><span class="inline-toggle-lang"><span data-lang="he">נכח?</span><span data-lang="en">Present?</span></span></th>
          <th><span class="inline-toggle-lang"><span data-lang="he">תורות דיבור</span><span data-lang="en">Speaker turns</span></span></th>
        </tr>
        ${meetings.map(mt => `
          <tr>
            <td class="title">
              <span class="inline-toggle-lang">
                <span data-lang="he">${mt.title.he} — ${mt.date}</span>
                <span data-lang="en">${mt.title.en} — ${mt.date}</span>
              </span>
            </td>
            <td>${m.attendance[mt.id] ? '✓' : '–'}</td>
            <td>${m.speaker_turns[mt.id]}</td>
          </tr>
        `).join('')}
      </table>
    </section>

    <section>
      <h3 class="section-title">
        <span class="inline-toggle-lang"><span data-lang="he">איך הצביע/ה בכל הצבעה</span><span data-lang="en">Every vote</span></span>
      </h3>
      <table class="votes" style="font-size:0.9rem;">
        <tr>
          <th style="text-align:start;"><span class="inline-toggle-lang"><span data-lang="he">הצבעה</span><span data-lang="en">Vote</span></span></th>
          <th><span class="inline-toggle-lang"><span data-lang="he">עמדה</span><span data-lang="en">Position</span></span></th>
          <th><span class="inline-toggle-lang"><span data-lang="he">תוצאה</span><span data-lang="en">Outcome</span></span></th>
        </tr>
        ${myVotes.map(({v, pos}) => `
          <tr>
            <td class="title">
              <span class="inline-toggle-lang"><span data-lang="he">${v.title.he}</span><span data-lang="en">${v.title.en}</span></span>
            </td>
            <td class="cell-${pos || 'absent'}">
              <span class="inline-toggle-lang">
                <span data-lang="he">${EfratSite.posLabel(pos || 'absent','he')}</span>
                <span data-lang="en">${EfratSite.posLabel(pos || 'absent','en')}</span>
              </span>
            </td>
            <td>
              <span class="inline-toggle-lang"><span data-lang="he">${v.result.he}</span><span data-lang="en">${v.result.en}</span></span>
            </td>
          </tr>
        `).join('')}
      </table>
    </section>
  `;

  const saved = (function(){ try { return localStorage.getItem('efrat-lang') || 'he'; } catch(e){ return 'he'; }})();
  document.querySelectorAll('.toggle-lang, .inline-toggle-lang').forEach(el => {
    el.classList.add(saved);
  });
})();
