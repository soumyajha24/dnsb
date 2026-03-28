function markActiveNav() {
  const known = new Set(['index.html', 'about.html', 'services.html', 'rates.html', 'downloads.html', 'contact.html']);
  let cur = location.pathname.split('/').filter(Boolean).pop() || 'index.html';
  if (!known.has(cur)) cur = 'index.html';
  cur = cur.toLowerCase();
  document.querySelectorAll('.nav-links a[href], #mob-nav a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('http')) return;
    const t = href.split('/').pop().split('#')[0].toLowerCase();
    a.classList.toggle('nav-active', t === cur);
  });
}

const siteComponentsReady = (async () => {
  const hm = document.getElementById('header-mount');
  const fm = document.getElementById('footer-mount');
  if (!hm || !fm) return;
  try {
    const [h, f] = await Promise.all([
      fetch('components/header.html').then(r => { if (!r.ok) throw new Error(r.status); return r.text(); }),
      fetch('components/footer.html').then(r => { if (!r.ok) throw new Error(r.status); return r.text(); })
    ]);
    hm.innerHTML = h;
    fm.innerHTML = f;
    markActiveNav();
  } catch (e) {
    console.warn('DNSB: could not load header/footer (use a local server, not file://).', e);
  }
})().finally(() => {
  if (typeof window.applyI18n === 'function') window.applyI18n();
  bindDirectionsLinks();
});

function bindDirectionsLinks() {
  document.querySelectorAll('a.bc-dir[href="#"]').forEach((a) => {
    const card = a.closest('.branch-card, .b-card');
    const addr = card && card.querySelector('.bc-addr, .b-addr');
    if (addr) {
      a.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(addr.textContent.trim());
    }
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bindDirectionsLinks);
} else {
  bindDirectionsLinks();
}

(function initBgCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, pts = [];

  function resizeCanvas() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Pt {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W; this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.22; this.vy = (Math.random() - 0.5) * 0.22;
      this.r = Math.random() * 1.2 + 0.4; this.a = Math.random() * 0.3 + 0.05;
    }
    tick() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
  }
  for (let i = 0; i < 80; i++) pts.push(new Pt());

  function drawBg() {
    ctx.clearRect(0, 0, W, H);
    const theme = document.documentElement.getAttribute('data-theme');
    const col = theme === 'light' ? '0,80,180' : '0,212,255';

    const g1 = ctx.createRadialGradient(W * 0.25, H * 0.2, 0, W * 0.25, H * 0.2, W * 0.6);
    g1.addColorStop(0, theme === 'light' ? 'rgba(0,100,200,0.06)' : 'rgba(0,60,120,0.12)');
    g1.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g1; ctx.fillRect(0, 0, W, H);

    const g2 = ctx.createRadialGradient(W * 0.8, H * 0.75, 0, W * 0.8, H * 0.75, W * 0.45);
    g2.addColorStop(0, theme === 'light' ? 'rgba(0,139,110,0.04)' : 'rgba(0,196,160,0.07)');
    g2.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H);

    pts.forEach(p => {
      p.tick();
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col},${p.a})`; ctx.fill();
    });
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(${col},${0.055 * (1 - d / 110)})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawBg);
  }
  drawBg();
})();

function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('dnsb-theme', t);
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme');
  applyTheme(cur === 'dark' ? 'light' : 'dark');
}
(function initTheme() {
  const saved = localStorage.getItem('dnsb-theme');
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved);
    return;
  }
  applyTheme('light');
})();

function onHeaderScroll() {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', scrollY > 40);
  const top = document.getElementById('to-top');
  if (top) top.classList.toggle('vis', scrollY > 500);
}
siteComponentsReady.then(() => {
  window.addEventListener('scroll', onHeaderScroll);
  onHeaderScroll();
});

function openMob() {
  const el = document.getElementById('mob-nav');
  if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeMob() {
  const el = document.getElementById('mob-nav');
  if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
}
