/* Abu Qamis — демо. Данные о товарах взяты из постов Telegram-канала @abu_qamis. */

const WA_BROTHERS = '79896683106';
const WA_SISTERS = '79886553740';

const CATS = [
  { id: 'hood', name: 'С капюшоном', note: 'Марокканские и египетские' },
  { id: 'classic', name: 'Классические', note: 'Дубайские, египетские, с коротким рукавом' },
  { id: 'pak', name: 'Пакистанки', note: 'Льняные комплекты' },
  { id: 'velvet', name: 'Вельвет', note: 'Тёплые комплекты с карманами' },
];

// look: base — long | set; sl — long | short; deco — moroccan | planka | buttons | omani | zip
const PRODUCTS = [
  {
    id: 'marok', cat: 'hood', name: 'Марокканский камис', price: 6800, badge: 'Новинка', fabric: 'Дышащая ткань',
    facts: ['Производство Египет', 'Капюшон и молния на груди', 'Плетёная вышивка на груди и манжетах'],
    look: { base: 'long', sl: 'long', hood: 1, deco: 'moroccan', tex: 'plain' },
    colors: [{ n: 'Тёмно-серый', c: '#3d3d41', t: '#131315', ph: ['marok-1', 'marok-2', 'marok-3'] }],
  },
  {
    id: 'velvet', cat: 'velvet', name: 'Вельветовый комплект', price: 7000, badge: 'Новинка', fabric: 'Вельвет',
    facts: ['Капюшон и функциональные карманы', 'Эластичные манжеты на рукавах и штанах', 'Молния на рукаве для удобства омовения', 'Свободный крой'],
    look: { base: 'set', sl: 'long', hood: 1, deco: 'zip', cargo: 1, pocket: 1, tex: 'velvet' },
    colors: [
      { n: 'Тёмно-зелёный', c: '#27403a', t: '#16241f', ph: ['velvet-green-1', 'velvet-green-2', 'velvet-green-3'] },
      { n: 'Шоколад', c: '#44312a', t: '#241813', ph: ['velvet-brown-1', 'velvet-brown-2', 'velvet-brown-3'] },
      { n: 'Серый', c: '#7c8089', t: '#4b4e55', ph: ['velvet-grey-1', 'velvet-grey-2', 'velvet-grey-3'] },
      { n: 'Графит', c: '#4a4b4f', t: '#28282b', ph: ['velvet-graphite-1', 'velvet-graphite-2', 'velvet-graphite-3'] },
    ],
  },
  {
    id: 'nov', cat: 'hood', name: 'Камис с капюшоном «Новинка 2026»', short: 'Камис «Новинка 2026»', price: 6800, badge: 'Новинка', fabric: 'Лёгкая ткань',
    facts: ['Лёгкий, приятный на ощупь материал', 'Капюшон и молния на груди', 'Вышивка в тон ткани'],
    look: { base: 'long', sl: 'long', hood: 1, deco: 'moroccan', tex: 'linen' },
    colors: [{ n: 'Графит', c: '#35363b', t: '#121214', ph: ['nov-1', 'nov-2', 'nov-3'] }],
  },
  {
    id: 'pak', cat: 'pak', name: 'Пакистанка льняная', price: 6500, fabric: 'Лён',
    facts: ['Материал лён, ткань дышащая', 'Очень лёгкая и приятная', 'Производство Египет', 'Доступно во всех размерах'],
    look: { base: 'set', sl: 'long', hood: 1, deco: 'zip', pocket: 1, tex: 'linen' },
    colors: [
      { n: 'Бордовый', c: '#64202f', t: '#3b111b', ph: ['pak-burgundy-1', 'pak-burgundy-2', 'pak-burgundy-3'] },
      { n: 'Бежевый', c: '#d3c3a4', t: '#9c8a68', ph: ['pak-beige-1', 'pak-beige-2', 'pak-beige-3'] },
      { n: 'Индиго', c: '#2d4662', t: '#182a3d', ph: ['pak-indigo-1', 'pak-indigo-2', 'pak-indigo-3'] },
      { n: 'Хаки', c: '#62654c', t: '#3c3e2d', ph: ['pak-khaki-1', 'pak-khaki-2', 'pak-khaki-3'] },
      { n: 'Серый', c: '#80807f', t: '#505050', ph: ['pak-grey-1', 'pak-grey-2'] },
      { n: 'Серо-бежевый', c: '#9d9486', t: '#665f54', ph: ['pak-taupe-1', 'pak-taupe-2', 'pak-taupe-3'] },
    ],
  },
  {
    id: 'saudi', cat: 'classic', name: 'Камис с заклёпками', price: 6000, fabric: 'Плотная гладкая ткань',
    facts: ['Аккуратный пошив', 'Удобные заклёпки на груди', 'Воротник-стойка и манжеты', 'Есть разные расцветки'],
    look: { base: 'long', sl: 'long', collar: 'stand', deco: 'buttons', pocket: 1, tex: 'plain' },
    colors: [{ n: 'Светло-серый', c: '#b9bcc3', t: '#55585f', ph: ['saudi-1', 'saudi-2', 'saudi-3'] }],
  },
  {
    id: 'egl', cat: 'classic', name: 'Египетский камис льняной', short: 'Египетский камис', price: 4200, fabric: 'Лён',
    facts: ['Лён, на ощупь приятный и дышащий', 'Вышитая планка', 'Короткий рукав', 'Доступны все размеры'],
    look: { base: 'long', sl: 'short', collar: 'round', deco: 'planka', tex: 'linen' },
    colors: [
      { n: 'Бежевый', c: '#cfc09f', t: '#86654a', ph: ['egl-beige-1', 'egl-beige-2'] },
      { n: 'Песочный', c: '#bb9d74', t: '#77583b', ph: ['egl-sand-1', 'egl-sand-2'] },
      { n: 'Чёрный', c: '#222226', t: '#6d6d76', ph: ['egl-black-1', 'egl-black-2'] },
    ],
  },
  {
    id: 'egh', cat: 'hood', name: 'Египетский камис с капюшоном', short: 'Египетский с капюшоном', price: 4800, fabric: 'Дышащая ткань',
    facts: ['Лёгкий и удобный для повседневного образа', 'Комфортная посадка', 'Приятная на ощупь ткань', 'Производство Египет'],
    look: { base: 'long', sl: 'long', hood: 1, deco: 'planka', tex: 'linen' },
    colors: [{ n: 'Тёмно-синий', c: '#252f42', t: '#52648e', ph: ['egh-1', 'egh-2', 'egh-3'] }],
  },
  {
    id: 'dubai', cat: 'classic', name: 'Дубайский камис', price: 4800, fabric: 'Дышащая ткань',
    facts: ['Материал дышащий', 'Декоративная строчка на груди', 'Производство Египет'],
    look: { base: 'long', sl: 'long', collar: 'round', deco: 'omani', tex: 'plain' },
    colors: [{ n: 'Шоколад', c: '#4e2e28', t: '#7a4a40', ph: ['dubai-1', 'dubai-2', 'dubai-3'] }],
  },
  {
    id: 'short', cat: 'classic', name: 'Камис с короткими рукавами', short: 'Камис с коротким рукавом', price: 5490, fabric: 'Лён',
    facts: ['Материал лён, ткань дышащая', 'Контрастный воротник-стойка', 'Производство Египет', 'Доступно во всех размерах'],
    look: { base: 'long', sl: 'short', collar: 'stand', deco: 'buttons', trimSleeve: 1, tex: 'linen' },
    colors: [
      { n: 'Синий', c: '#38527f', t: '#cdbb96', price: 5500, ph: ['short-blue-1', 'short-blue-2'] },
      { n: 'Тёмно-зелёный', c: '#25423e', t: '#6a6a70', price: 5490, ph: ['short-green-1', 'short-green-2'] },
    ],
  },
  {
    id: 'hood', cat: 'hood', name: 'Камис с капюшоном', price: 4800, fabric: 'Лёгкая ткань',
    facts: ['Лёгкий, приятный на ощупь материал', 'Капюшон и застёжка на кнопках', 'Вышивка в тон ткани'],
    look: { base: 'long', sl: 'long', hood: 1, deco: 'moroccan', tex: 'plain' },
    colors: [{ n: 'Чёрный', c: '#222125', t: '#0c0c0d', ph: ['hood-1', 'hood-2', 'hood-3'] }],
  },
];

const IMG_POS = { 'marok-2': 'center', 'velvet-green-3': '50% 60%' };
const $ = (s, r = document) => r.querySelector(s);
const img = (n) => `assets/img/${n}.jpg`;
const pos = (n) => IMG_POS[n] || 'top';
const rub = (n) => n.toLocaleString('ru-RU') + ' ₽';
const priceOf = (p, ci) => p.colors[ci].price || p.price;
const waLink = (num, p, ci) =>
  `https://wa.me/${num}?text=` + encodeURIComponent(`Ас-саляму алейкум! Хочу заказать: ${p.name}, цвет «${p.colors[ci].n.toLowerCase()}», ${rub(priceOf(p, ci))}. Подскажите по размеру.`);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Силуэт и одежда ---------- */

const H = 780;
const mir = (s) => s + `<g transform="translate(400 0) scale(-1 1)">${s}</g>`;
const pc = (d, v = 'cloth') =>
  `<path d="${d}" style="fill:var(--${v})"/><path class="tx" d="${d}" fill="none"/><path d="${d}" fill="url(#shade)"/>`;
const layer = (name, html) => `<g data-l="${name}" style="display:none">${html}</g>`;
const trim = (d, w, dash = '') =>
  `<path d="${d}" fill="none" style="stroke:var(--trim)" stroke-width="${w}" ${dash ? `stroke-dasharray="${dash}"` : ''} stroke-linecap="round" stroke-linejoin="round"/>`;

function zigzag() {
  let d = 'M193 154';
  for (let y = 162, i = 1; y <= 262; y += 8, i++) d += `L${i % 2 ? 207 : 193} ${y}`;
  return d;
}

function buildFigure() {
  const body = `
    <g fill="url(#skin)" stroke="rgba(201,164,106,.28)" stroke-width="1">
      <ellipse cx="200" cy="78" rx="34" ry="42"/>
      <path d="M186 112V142Q200 150 214 142V112Z"/>
      <path d="M136 152C160 138 240 138 264 152L258 400H142Z"/>
      ${mir('<path d="M138 152C116 158 106 184 104 226L94 392C92 416 98 436 107 436C116 436 120 420 121 400L138 250Z"/>')}
      ${mir('<path d="M142 392H198L194 726H160Z"/>')}
      ${mir('<ellipse cx="174" cy="738" rx="27" ry="11"/>')}
    </g>`;

  const garment = `
    ${layer('pants', mir(pc('M136 440H199L197 700C185 708 160 708 150 700Z') + pc('M150 697C160 705 186 705 197 697L196 716C184 722 162 722 152 716Z', 'cloth2')))}
    ${layer('cargo', mir(pc('M130 528H172V590H132Z', 'cloth2') + '<path d="M128 522H174V540H129Z" fill="rgba(0,0,0,.28)"/>'))}
    ${layer('long', pc('M134 150C160 138 240 138 266 150L292 690Q200 706 108 690Z') + '<path d="M200 330V698" stroke="rgba(0,0,0,.22)" stroke-width="1"/>')}
    ${layer('tunic', pc('M134 150C160 138 240 138 266 150L280 476Q200 492 120 476Z'))}
    ${layer('sl-long', mir(pc('M136 150C110 158 100 186 97 226L84 404L128 410L142 256Z')))}
    ${layer('sl-set', mir(pc('M136 150C108 158 96 190 92 230L80 392C92 402 118 404 130 396L142 256Z') + pc('M86 394C96 402 116 403 126 397L124 412C114 417 98 416 88 410Z', 'cloth2')))}
    ${layer('sl-short', mir(pc('M136 150C112 158 102 180 99 214L94 292L138 298L142 240Z')))}
    ${layer('trim-sleeve', mir(trim('M95 289L138 295', 5)))}
    ${layer('hood', pc('M160 152C154 122 176 116 188 134L200 162L212 134C224 116 246 122 240 152C228 140 212 154 200 176C188 154 172 140 160 152Z', 'cloth2'))}
    ${layer('stand', '<path d="M181 134Q200 149 219 134L220 150Q200 166 180 150Z" style="fill:var(--trim)"/>')}
    ${layer('round', trim('M170 143Q200 168 230 143', 3))}
    ${layer('d-moroccan', trim('M200 156V318', 15, '2 2.6') + trim('M191 156V316a9 9 0 0 0 18 0V156', 1.2) + '<path d="M200 156V300" stroke="rgba(255,255,255,.28)" stroke-width="1.2"/>' + mir(trim('M86 397L128 403', 7, '2 2.6')))}
    ${layer('d-planka', '<rect x="188" y="146" width="24" height="124" fill="rgba(0,0,0,.14)"/>' + trim('M188 146V270H212V146', 1.6) + trim(zigzag(), 1.6))}
    ${layer('d-buttons', '<rect x="191" y="148" width="18" height="160" fill="rgba(0,0,0,.12)" stroke="rgba(0,0,0,.28)" stroke-width=".8"/>' + [174, 210, 246, 282].map((y) => `<circle cx="200" cy="${y}" r="3.2" style="fill:var(--trim)"/>`).join(''))}
    ${layer('d-omani', trim('M142 168L200 246L258 168', 3.5, '1.5 2.4') + trim('M200 150V330', 3.5, '1.5 2.4'))}
    ${layer('d-zip', trim('M200 158V248', 2.4) + '<rect x="197" y="246" width="6" height="11" rx="1.5" style="fill:var(--trim)"/>')}
    ${layer('pocket', '<rect x="222" y="196" width="34" height="40" rx="2" fill="rgba(0,0,0,.1)" stroke="rgba(0,0,0,.32)" stroke-width="1"/>')}`;

  return `
  <svg viewBox="0 0 400 ${H}" role="img" aria-label="Силуэт с примеркой одежды">
    <defs>
      <linearGradient id="skin" x1="0" x2="1"><stop offset="0" stop-color="#17130f"/><stop offset=".5" stop-color="#2c251d"/><stop offset="1" stop-color="#17130f"/></linearGradient>
      <linearGradient id="shade" x1="0" x2="1">
        <stop offset="0" stop-color="#000" stop-opacity=".38"/><stop offset=".38" stop-color="#fff" stop-opacity=".07"/>
        <stop offset=".62" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".38"/>
      </linearGradient>
      <pattern id="rib" width="5" height="5" patternUnits="userSpaceOnUse"><path d="M1 0V5" stroke="#000" stroke-opacity=".3" stroke-width="1.6"/><path d="M3.4 0V5" stroke="#fff" stroke-opacity=".07" stroke-width="1"/></pattern>
      <pattern id="linen" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M0 1.5H6M0 4.5H6" stroke="#fff" stroke-opacity=".06" stroke-width=".7"/><path d="M1.5 0V6M4.5 0V6" stroke="#000" stroke-opacity=".12" stroke-width=".7"/></pattern>
      <clipPath id="reveal"><rect id="revealRect" x="-20" y="0" width="440" height="0"/></clipPath>
    </defs>
    ${body}
    <g id="garment" clip-path="url(#reveal)" stroke="rgba(255,255,255,.09)" stroke-width=".8">${garment}</g>
    <line id="scan" x1="60" x2="340" y1="0" y2="0" stroke="#e3c690" stroke-width="1.5" opacity="0"/>
  </svg>`;
}

function darken(hex, k) {
  const n = parseInt(hex.slice(1), 16);
  const f = (v) => Math.round(v * (1 - k)).toString(16).padStart(2, '0');
  return '#' + f(n >> 16) + f((n >> 8) & 255) + f(n & 255);
}

const figure = $('#figure');
figure.innerHTML = buildFigure();
const svg = $('svg', figure);
const revealRect = $('#revealRect', svg);
const scan = $('#scan', svg);
let animToken = 0;

function setReveal(h) {
  revealRect.setAttribute('height', h);
  scan.setAttribute('y1', h);
  scan.setAttribute('y2', h);
  scan.setAttribute('opacity', h > 4 && h < H - 70 ? 0.9 : 0);
}

function applyLook(look, color) {
  const on = new Set([look.base === 'set' ? 'tunic' : 'long']);
  if (look.base === 'set') on.add('pants');
  if (look.cargo) on.add('cargo');
  on.add(look.sl === 'short' ? 'sl-short' : look.base === 'set' ? 'sl-set' : 'sl-long');
  if (look.trimSleeve) on.add('trim-sleeve');
  if (look.hood) on.add('hood');
  if (look.collar) on.add(look.collar);
  if (look.deco === 'planka' && !look.hood) on.add('round');
  if (look.deco) on.add('d-' + look.deco);
  if (look.pocket) on.add('pocket');
  svg.querySelectorAll('[data-l]').forEach((g) => (g.style.display = on.has(g.dataset.l) ? '' : 'none'));
  svg.style.setProperty('--cloth', color.c);
  svg.style.setProperty('--cloth2', darken(color.c, 0.24));
  svg.style.setProperty('--trim', color.t);
  const tex = look.tex === 'velvet' ? 'url(#rib)' : look.tex === 'linen' ? 'url(#linen)' : 'none';
  svg.querySelectorAll('.tx').forEach((p) => p.setAttribute('fill', tex));
}

function tween(from, to, ms, token) {
  return new Promise((done) => {
    const t0 = performance.now();
    const timer = setInterval(() => {
      if (token !== animToken) { clearInterval(timer); return done(false); }
      const k = Math.min(1, (performance.now() - t0) / ms);
      const e = 1 - Math.pow(1 - k, 3);
      setReveal(from + (to - from) * e);
      if (k >= 1) { clearInterval(timer); done(true); }
    }, 16);
  });
}

async function dress(look, color) {
  const token = ++animToken;
  if (reduced) { applyLook(look, color); setReveal(H); return; }
  const cur = +revealRect.getAttribute('height');
  if (cur > 0 && !(await tween(cur, 0, 320, token))) return;
  applyLook(look, color);
  await tween(0, H, 1200, token);
}

/* ---------- Примерка на главном экране ---------- */

const fit = { pi: 0, ci: 0 };
let autoTimer = null;

function renderDots(el, p, ci, onPick) {
  el.innerHTML = p.colors.length > 1
    ? p.colors.map((c, i) => `<button class="dot${i === ci ? ' is-on' : ''}" style="background:${c.c}" title="${c.n}" aria-label="${c.n}" data-i="${i}"></button>`).join('')
    : '';
  el.onclick = (e) => { const b = e.target.closest('.dot'); if (b) onPick(+b.dataset.i); };
}

function showFit(pi, ci = 0) {
  fit.pi = (pi + PRODUCTS.length) % PRODUCTS.length;
  fit.ci = ci;
  const p = PRODUCTS[fit.pi];
  const c = p.colors[ci];
  $('#fitName').textContent = p.short || p.name;
  $('#fitColor').textContent = c.n;
  $('#fitPrice').textContent = rub(priceOf(p, ci));
  $('#fitPhoto').src = img(c.ph[0]);
  $('#fitPhoto').style.objectPosition = pos(c.ph[0]);
  $('#fitPhoto').alt = p.name;
  $('#fitOrder').href = waLink(WA_BROTHERS, p, ci);
  $('#fitCount').textContent = `${String(fit.pi + 1).padStart(2, '0')} / ${String(PRODUCTS.length).padStart(2, '0')}`;
  renderDots($('#fitDots'), p, ci, (i) => { stopAuto(); showFit(fit.pi, i); });
  dress(p.look, c);
}

function stopAuto() { clearInterval(autoTimer); autoTimer = null; }
function startAuto() {
  if (reduced) return;
  autoTimer = setInterval(() => { if (!document.hidden) showFit(fit.pi + 1); }, 5200);
}

$('#fitPrev').onclick = () => { stopAuto(); showFit(fit.pi - 1); };
$('#fitNext').onclick = () => { stopAuto(); showFit(fit.pi + 1); };
$('#fitPhotoBtn').onclick = () => { stopAuto(); openModal(fit.pi, fit.ci); };

function tryOn(pi, ci) {
  stopAuto();
  $('#fit').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
  setTimeout(() => showFit(pi, ci), reduced ? 0 : 450);
}

/* ---------- Коллекции и каталог ---------- */

let filter = 'all';
const cardColor = {}; // выбранный цвет по id товара

function renderCollections() {
  $('#colls').innerHTML = CATS.map((cat) => {
    const items = PRODUCTS.filter((p) => p.cat === cat.id);
    const cover = items[0].colors[0].ph[0];
    return `<button class="coll rv" data-filter="${cat.id}">
      <div class="coll__img"><img src="${img(cover)}" style="object-position:${pos(cover)}" alt="${cat.name}" loading="lazy"></div>
      <div class="coll__body"><span><b>${cat.name}</b><small>${cat.note}</small></span><span class="coll__go">→</span></div>
    </button>`;
  }).join('');
}

function renderFilters() {
  const all = [{ id: 'all', name: 'Все' }, ...CATS];
  $('#filters').innerHTML = all.map((c) => `<button class="chip${c.id === filter ? ' is-on' : ''}" data-filter="${c.id}">${c.name}</button>`).join('');
}

function renderGrid() {
  $('#grid').innerHTML = PRODUCTS.map((p, pi) => {
    if (filter !== 'all' && p.cat !== filter) return '';
    const ci = cardColor[p.id] || 0;
    const ph = p.colors[ci].ph[0];
    const dots = p.colors.length > 1
      ? `<div class="dots" style="margin:0">${p.colors.map((c, i) => `<button class="dot${i === ci ? ' is-on' : ''}" style="background:${c.c}" title="${c.n}" aria-label="${c.n}" data-color="${i}"></button>`).join('')}</div>`
      : `<span class="card__meta">${p.colors[0].n}</span>`;
    return `<article class="card" data-pi="${pi}">
      <button class="card__img" data-act="open" aria-label="${p.name}">
        <img src="${img(ph)}" style="object-position:${pos(ph)}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
      </button>
      <div class="card__body">
        <h3 class="card__name">${p.name}</h3>
        <p class="card__meta">${p.fabric}</p>
        <div class="card__row"><span class="card__price">${rub(priceOf(p, ci))}</span>${dots}</div>
        <div class="card__btns">
          <button data-act="try">Примерить</button>
          <button class="is-dark" data-act="open">Подробнее</button>
        </div>
      </div>
    </article>`;
  }).join('');
}

function setFilter(id) {
  filter = id;
  renderFilters();
  renderGrid();
}

$('#grid').addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (!card) return;
  const pi = +card.dataset.pi;
  const p = PRODUCTS[pi];
  const dot = e.target.closest('[data-color]');
  if (dot) { cardColor[p.id] = +dot.dataset.color; renderGrid(); return; }
  const act = e.target.closest('[data-act]')?.dataset.act;
  if (act === 'try') tryOn(pi, cardColor[p.id] || 0);
  if (act === 'open') openModal(pi, cardColor[p.id] || 0);
});

document.addEventListener('click', (e) => {
  const f = e.target.closest('[data-filter]');
  if (!f) return;
  setFilter(f.dataset.filter);
  if (!f.classList.contains('chip')) {
    e.preventDefault();
    $('#catalog').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  }
});

/* ---------- Окно товара ---------- */

const modal = $('#modal');

function openModal(pi, ci = 0, photo = 0) {
  const p = PRODUCTS[pi];
  const c = p.colors[ci];
  modal.innerHTML = `
    <button class="modal__x" data-m="close" aria-label="Закрыть">×</button>
    <div class="modal__in">
      <div class="modal__gal">
        <img class="modal__main" src="${img(c.ph[photo])}" style="object-position:${pos(c.ph[photo])}" alt="${p.name}">
        <div class="modal__thumbs">${c.ph.map((n, i) => `<button class="${i === photo ? 'is-on' : ''}" data-m="photo" data-i="${i}"><img src="${img(n)}" alt=""></button>`).join('')}</div>
      </div>
      <div class="modal__info">
        <p class="eyebrow" style="margin:0">${CATS.find((x) => x.id === p.cat).name}</p>
        <h3>${p.name}</h3>
        <p class="modal__price">${rub(priceOf(p, ci))}</p>
        <ul class="modal__facts">${p.facts.map((f) => `<li>${f}</li>`).join('')}</ul>
        <div>
          <p class="modal__label">Цвет: ${c.n}</p>
          <div class="dots">${p.colors.map((x, i) => `<button class="dot${i === ci ? ' is-on' : ''}" style="background:${x.c}" title="${x.n}" aria-label="${x.n}" data-m="color" data-i="${i}"></button>`).join('')}</div>
        </div>
        <div class="modal__btns">
          <a class="btn btn--gold" href="${waLink(WA_BROTHERS, p, ci)}" target="_blank" rel="noopener">Заказать в WhatsApp · братья</a>
          <a class="btn btn--ghost" href="${waLink(WA_SISTERS, p, ci)}" target="_blank" rel="noopener">Заказать в WhatsApp · сёстры</a>
          <button class="btn btn--ghost" data-m="try">Примерить на силуэте</button>
        </div>
        <p class="modal__note">Размер и наличие уточним в переписке. Доставка по СНГ.</p>
      </div>
    </div>`;
  modal.onclick = (e) => {
    if (e.target === modal) return modal.close();
    const b = e.target.closest('[data-m]');
    if (!b) return;
    const m = b.dataset.m;
    if (m === 'close') modal.close();
    if (m === 'photo') openModal(pi, ci, +b.dataset.i);
    if (m === 'color') openModal(pi, +b.dataset.i);
    if (m === 'try') { modal.close(); tryOn(pi, ci); }
  };
  if (!modal.open) modal.showModal();
}

/* ---------- Шапка, меню, появление блоков ---------- */

const header = $('#header');
addEventListener('scroll', () => header.classList.toggle('is-scrolled', scrollY > 8), { passive: true });

const burger = $('#burger');
const nav = $('#nav');
burger.onclick = () => {
  const open = nav.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', open);
};
nav.onclick = () => { nav.classList.remove('is-open'); burger.setAttribute('aria-expanded', false); };

function watchReveal() {
  const els = document.querySelectorAll('.rv:not(.is-in)');
  if (!('IntersectionObserver' in window)) return els.forEach((el) => el.classList.add('is-in'));
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
}

/* ---------- Запуск ---------- */

$('#statModels').textContent = PRODUCTS.length;
$('#statColors').textContent = PRODUCTS.reduce((n, p) => n + p.colors.length, 0);
renderCollections();
renderFilters();
renderGrid();
document.querySelectorAll('.feat, .head, .about__text, .quote__in, .cta__in').forEach((el) => el.classList.add('rv'));
watchReveal();
const startModel = PRODUCTS.findIndex((p) => p.id === new URLSearchParams(location.search).get('model'));
showFit(Math.max(0, startModel));
if (startModel < 0) startAuto();
