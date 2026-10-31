/*
  Cảnh minh họa cho cột phải của thumbnail (cover.html, trường `scene`): dựng từ nội dung bài, có nhãn ngắn,
  để hình nói được ý chính của bài thay vì một biểu tượng đơn. Vẽ trong khung 600×600, template co dãn vào cột.
  Dạng dữ liệu:
    scene: {type: 'flow' | 'funnel' | 'hub' | 'merge', items: [{n | visual, label, sub}], center: {visual, label}}
    flow   : dòng thời gian dọc, 3–8 mục; mỗi mục là số thứ tự (n) hoặc hình (visual), nhãn ≤ 22 ký tự, sub ≤ 26
    funnel : phễu dọc 3–5 tầng, nhãn trong tầng ≤ 18, sub ≤ 22; tầng cuối tô màu nhấn
    hub    : center ở giữa, 3–6 items quanh, nhãn ≤ 14
    merge  : đúng 2 items ở trên hợp vào center ở dưới; nhãn ≤ 16, sub ≤ 20
  Màu lấy theo bảng màu đang áp. Mọi chữ phải lấy từ bài.
*/
(function(){
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
  const FONT = "font-family=\"'Be Vietnam Pro',system-ui,sans-serif\"";
  const warnings = [];

  function pict(name, x, y, size){
    const v = window.SOHO_VISUALS && window.SOHO_VISUALS[name];
    if (!v){ warnings.push(`visual không hợp lệ trong scene: ${name}`); return ''; }
    return v.svg.replace(/^<svg[^>]*>/, `<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="0 0 200 200">`);
  }
  function node(cx, cy, S, item, last){
    const r = S * 0.22;
    const stroke = last ? 'var(--red)' : 'var(--line)';
    let inner = '';
    if (item.visual) inner = pict(item.visual, cx - S * 0.3, cy - S * 0.3, S * 0.6);
    else inner = `<text x="${cx}" y="${cy + S * 0.16}" text-anchor="middle" font-size="${S * 0.46}" font-weight="800" fill="${last ? 'var(--paper)' : 'var(--ink)'}" ${FONT}>${esc(item.n ?? '')}</text>`;
    const fill = (!item.visual && last) ? 'var(--red)' : 'var(--white)';
    return `<rect x="${cx - S / 2}" y="${cy - S / 2}" width="${S}" height="${S}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${last ? 6 : 3}"/>${inner}`;
  }
  const text = (x, y, s, size, weight, fill, anchor = 'start') => s ? `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fill}" ${FONT}>${esc(s)}</text>` : '';
  function check(items, min, max, labelMax, subMax){
    if (!Array.isArray(items) || items.length < min || items.length > max) warnings.push(`scene cần ${min}–${max} items, hiện ${items ? items.length : 0}`);
    (items || []).forEach(it => {
      if ((it.label || '').length > labelMax) warnings.push(`nhãn "${it.label}" dài hơn ${labelMax} ký tự`);
      if ((it.sub || '').length > subMax) warnings.push(`sub "${it.sub}" dài hơn ${subMax} ký tự`);
    });
  }

  const BUILD = {
    flow(sc){
      const items = sc.items || []; check(items, 3, 8, 22, 26);
      const n = items.length;
      const S = n <= 4 ? 120 : Math.min(96, Math.floor(500 / Math.max(n - 1, 1) * 0.78));
      // Giữ cả ô đầu và ô cuối trong khung 600 (bản gốc đặt tâm ở 50 và 550 nên ô 120 bị cắt mép)
      const top = Math.max(50, S / 2 + 8), bottom = Math.min(550, 600 - S / 2 - 8);
      const x = 100, out = [`<path d="M${x} ${top}V${bottom}" stroke="var(--line)" stroke-width="6"/>`];
      items.forEach((it, i) => {
        const cy = n === 1 ? 300 : top + (bottom - top) * i / (n - 1);
        const last = i === n - 1;
        out.push(node(x, cy, S, it, last));
        const lx = x + S / 2 + 28;
        const hasSub = !!it.sub;
        out.push(text(lx, cy + (hasSub ? 2 : 11), it.label, Math.min(30, S * 0.34), 700, 'var(--ink)'));
        out.push(text(lx, cy + 30, it.sub, Math.min(22, S * 0.26), 500, 'var(--ink-3)'));
      });
      return out.join('');
    },
    funnel(sc){
      const items = sc.items || []; check(items, 3, 5, 18, 22);
      const n = items.length, gap = 14, H = Math.floor((520 - gap * (n - 1)) / n), out = [];
      items.forEach((it, i) => {
        const w = 560 - (560 - 220) * i / Math.max(n - 1, 1), y = 40 + i * (H + gap), last = i === n - 1;
        out.push(`<rect x="${300 - w / 2}" y="${y}" width="${w}" height="${H}" rx="18" fill="${last ? 'var(--red)' : 'var(--paper-2)'}"/>`);
        const col = last ? 'var(--paper)' : 'var(--ink)', sub = last ? 'var(--paper)' : 'var(--ink-3)';
        out.push(text(300, y + H / 2 + (it.sub ? -2 : 10), it.label, 28, 700, col, 'middle'));
        out.push(text(300, y + H / 2 + 26, it.sub, 20, 500, sub, 'middle'));
      });
      return out.join('');
    },
    hub(sc){
      const items = sc.items || []; check(items, 3, 6, 14, 0);
      const c = sc.center || {}; if (!c.visual && c.n == null) warnings.push('scene hub cần center {visual, label}');
      const out = [], R = 215, S = 92;
      items.forEach((it, i) => {
        const a = -Math.PI / 2 + i * 2 * Math.PI / items.length;
        const cx = 300 + R * Math.cos(a), cy = 290 + R * Math.sin(a);
        out.push(`<path d="M300 290L${cx} ${cy}" stroke="var(--line)" stroke-width="5"/>`);
        out.push(node(cx, cy, S, it, false));
        out.push(text(cx, cy + S / 2 + 28, it.label, 20, 600, 'var(--ink-2)', 'middle'));
      });
      out.push(node(300, 290, 150, c, true));
      out.push(text(300, 290 + 75 + 36, c.label, 28, 700, 'var(--ink)', 'middle'));
      return out.join('');
    },
    merge(sc){
      const items = sc.items || []; check(items, 2, 2, 16, 20);
      const c = sc.center || {}; const out = [], S = 150;
      const pts = [[150, 150], [450, 150]];
      items.forEach((it, i) => {
        const [cx, cy] = pts[i] || [300, 150];
        out.push(`<path d="M${cx} ${cy + S / 2 + 72}C${cx} ${cy + 200},300 ${cy + 150},300 ${cy + 240}" fill="none" stroke="var(--ink-3)" stroke-width="6"/>`);
        out.push(node(cx, cy, S, it, false));
        out.push(text(cx, cy + S / 2 + 32, it.label, 26, 700, 'var(--ink)', 'middle'));
        out.push(text(cx, cy + S / 2 + 58, it.sub, 20, 500, 'var(--ink-3)', 'middle'));
      });
      out.push(`<path d="M300 380l-14-22h28z" fill="var(--ink-3)"/>`);
      out.push(node(300, 470, 170, c, true));
      out.push(text(300, 470 + 85 + 36, c.label, 28, 700, 'var(--ink)', 'middle'));
      return out.join('');
    }
  };

  // Trả về {svg, warnings}. svg là chuỗi <svg viewBox="0 0 600 600">...</svg>
  window.buildScene = function(scene){
    warnings.length = 0;
    const build = scene && BUILD[scene.type];
    if (!build){ return {svg: '', warnings: [`scene.type không hợp lệ: ${scene && scene.type} (dùng flow, funnel, hub, merge)`]}; }
    const body = build(scene);
    return {svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet">${body}</svg>`, warnings: [...warnings]};
  };
})();
