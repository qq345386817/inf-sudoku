import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const locales = [
  ['en', '', 'English', ['One puzzle.', 'A clearer mind.'], 'Free to play · No sign-up', 'Sudoku guides', 'Skip to content'],
  ['zh-Hans', 'zh-Hans', '简体中文', ['一格一格，', '找回专注。'], '免费在线玩 · 无需注册', '数独指南', '跳至正文'],
  ['zh-Hant', 'zh-Hant', '繁體中文', ['一格一格，', '找回專注。'], '免費線上玩 · 無需註冊', '數獨指南', '跳至正文'],
  ['ja', 'ja', '日本語', ['ひとマスずつ、', '心を整える。'], '無料でプレイ · 登録不要', '数独ガイド', '本文へ移動'],
  ['ko', 'ko', '한국어', ['한 칸씩,', '차분하게 집중.'], '무료 플레이 · 가입 불필요', '스도쿠 가이드', '본문으로 이동'],
  ['de', 'de', 'Deutsch', ['Ein Rätsel.', 'Ein klarer Kopf.'], 'Kostenlos spielen · Ohne Konto', 'Sudoku-Ratgeber', 'Zum Inhalt'],
  ['fr', 'fr', 'Français', ['Une grille.', 'L’esprit plus clair.'], 'Gratuit · Sans inscription', 'Guides Sudoku', 'Aller au contenu'],
  ['es', 'es', 'Español', ['Un puzzle.', 'Una mente clara.'], 'Gratis · Sin registro', 'Guías de Sudoku', 'Saltar al contenido'],
  ['it', 'it', 'Italiano', ['Un puzzle.', 'Una mente serena.'], 'Gratis · Senza registrazione', 'Guide al Sudoku', 'Vai al contenuto'],
  ['ru', 'ru', 'Русский', ['Одна игра.', 'Ясные мысли.'], 'Бесплатно · Без регистрации', 'О судоку', 'Перейти к содержимому'],
  ['ar', 'ar', 'العربية', ['لغز واحد،', 'وذهن أكثر صفاءً.'], 'لعب مجاني · من دون حساب', 'أدلة سودوكو', 'انتقل إلى المحتوى']
];
const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
const guideNames = ['daily-sudoku-focus', 'printable-sudoku-puzzles', 'infinite-sudoku-generator'];

for (const [code, folder, , heading, caption, guideHeading, skip] of locales) {
  const prefix = folder ? '../' : '';
  const directory = path.join(root, folder);
  for (const filename of fs.readdirSync(directory).filter(name => name.endsWith('.html') && !name.startsWith('google'))) {
    const file = path.join(directory, filename);
    let html = fs.readFileSync(file, 'utf8');
    const route = filename === 'index.html' ? '' : filename.replace(/\.html$/, '');
    const match = html.match(/<nav class="nav"[^>]*>([\s\S]*?)<\/nav>/);
    if (!match) throw new Error(`Missing navigation: ${file}`);
    const links = [...match[1].matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)]
      .filter(link => !link[1].includes('nav-download'));
    if (links.length !== 5) throw new Error(`Unexpected navigation: ${file}`);
    const playText = links[1][2];
    const nav = links.map(link => {
      const href = link[1].match(/href="([^"]+)"/)[1];
      const current = (route === '' && href === './') || href === route;
      return `<a href="${href}"${current ? ' aria-current="page"' : ''}>${link[2]}</a>`;
    }).join('');
    const oldLabel = html.match(/<label class="language-switch">[\s\S]*?<span>([^<]+)<\/span>/);
    const languageLabel = oldLabel?.[1] || 'Language';
    const options = locales.map(([otherCode, otherFolder, name]) => {
      const target = `${prefix}${otherFolder ? otherFolder + '/' : ''}${route}` || './';
      return `<option value="${target}"${otherCode === code ? ' selected' : ''}>${name}</option>`;
    }).join('');
    const label = `<label class="language-switch"><span>${languageLabel}</span><select aria-label="${languageLabel}" onchange="if (this.value) window.location.href=this.value">${options}</select></label>`;
    // Remove an already refreshed header label before replacing its navigation.
    html = html.replace(/(<\/nav>)\s*<label class="language-switch">[\s\S]*?<\/label>/, '$1');
    html = html.replace(/<nav class="nav"[^>]*>[\s\S]*?<\/nav>/, `<nav class="nav" aria-label="${code === 'en' ? 'Primary navigation' : languageLabel}">${nav}</nav>${label}`);
    if (!html.includes('style/refresh.css')) html = html.replace('</head>', `  <link rel="stylesheet" href="${prefix}style/refresh.css">\n</head>`);
    html = html.replace(/<body([^>]*)>/, (_, attrs) => `<body${attrs.replace(/ data-site-design="[^"]*"/g, '')} data-site-design="focus-2026">`);
    if (code === 'ar') html = html.replace(/<html([^>]*)>/, (_, attrs) => `<html${attrs.replace(/ dir="[^"]*"/, '')} dir="rtl">`);
    const mainId = html.match(/<main[^>]*id="([^"]+)"/)?.[1] || 'main-content';
    if (!html.match(/<main[^>]*id=/)) html = html.replace('<main', '<main id="main-content"');
    html = html.replace(/\s*<a class="skip-link"[^>]*>[\s\S]*?<\/a>/, '');
    html = html.replace(/(<body[^>]*>)/, `$1\n  <a class="skip-link" href="#${mainId}">${skip}</a>`);

    if (route === '') {
      html = html.replace(/<section class="hero">([\s\S]*?)<h1>[\s\S]*?<\/h1>/, (_, start) => `<section class="hero">${start}<h1><span>${heading[0]}</span><span>${heading[1]}</span></h1>`);
      const store = html.match(/<a class="button (?:primary|secondary) store"[^>]*>[\s\S]*?<\/a>/)?.[0];
      if (!store) throw new Error(`Missing App Store action: ${file}`);
      const download = store.replace('button primary store', 'button secondary store');
      html = html.replace(/<div class="actions">[\s\S]*?<\/div>/, `<div class="actions"><a class="button web-play" href="play">${playText}${arrow}</a>${download}</div>`);
      if (!html.includes('class="platforms"')) html = html.replace(/(<div class="actions">[\s\S]*?<\/div>)/, '$1\n            <p class="platforms">iPhone · iPad · Mac · Apple TV</p>');
      if (!html.includes('class="preview-heading"')) {
        const mark = '<span class="preview-mark" aria-hidden="true">' + '<i></i>'.repeat(9) + '</span>';
        html = html.replace(/(<div class="product-panel"[^>]*>)/, `$1<div class="preview-heading"><strong>Infinity Sudoku</strong>${mark}</div>`);
      }
      html = html.replace(/<div class="sudoku-grid"[^>]*>/, '<div class="sudoku-grid" aria-hidden="true">');
      html = html.replace(/<div class="preview-caption">[\s\S]*?<\/div>/, '');
      html = html.replace(/(<div class="stats">[\s\S]*?<\/div>)/, `$1<div class="preview-caption"><span>${caption}</span><a href="play">${playText}<span aria-hidden="true">↗</span></a></div>`);
      const guides = guideNames.map(name => {
        const content = fs.readFileSync(path.join(directory, `${name}.html`), 'utf8');
        const title = content.match(/<h1>([\s\S]*?)<\/h1>/)?.[1];
        const intro = content.match(/<p class="lead">([\s\S]*?)<\/p>/)?.[1];
        if (!title || !intro) throw new Error(`Missing localized guide copy: ${name}/${code}`);
        return `<article class="feature guide-card"><strong><a href="${name}">${title}</a></strong><p>${intro}</p></article>`;
      }).join('');
      const section = `<section class="section guides-section"><h2>${guideHeading}</h2><div class="feature-grid">${guides}</div></section>`;
      if (html.includes('class="section guides-section"')) html = html.replace(/<section class="section guides-section">[\s\S]*?<\/section>/, section);
      else if (html.includes('href="daily-sudoku-focus"')) html = html.replace(/<section class="section"><h2>[^<]*<\/h2><div class="feature-grid two">[\s\S]*?<\/section>/, section);
      else html = html.replace('</main>', `${section}\n      </main>`);
      let index = 0;
      html = html.replace(/<span class="section-index"[^>]*>[^<]*<\/span>/g, '');
      html = html.replace(/(<section class="section(?: guides-section)?">)/g, (_, tag) => `${tag}<span class="section-index" aria-hidden="true">${String(++index).padStart(2, '0')}</span>`);
    }
    html = html.replace(/<footer class="footer">([\s\S]*?)<\/footer>/, (_, content) => {
      const original = content.match(/^<span>([\s\S]*?)<\/span>/)?.[1] || content;
      return `<footer class="footer"><span>${original}</span><a href="play">${playText}<span aria-hidden="true">&nbsp;↗</span></a></footer>`;
    });
    fs.writeFileSync(file, html);
  }
}
console.log('Refreshed 88 localized pages: shared navigation, homepage hierarchy, guide links, accessibility and theme.');
