import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const origin = 'https://inf-sudoku.luopeike.com';
export const productContent = JSON.parse(fs.readFileSync(path.join(root, 'scripts/product-content.json'), 'utf8'));
export const escapeHTML = text => String(text).replace(/[&<>"']/g, character => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[character]));
const paragraph = text => `<p>${escapeHTML(text)}</p>`;
const section = (heading, body) => `<section class="section"><h2>${escapeHTML(heading)}</h2>${body}</section>`;
const schema = data => `<script type="application/ld+json">\n${JSON.stringify(data, null, 2).replace(/</g, '\\u003c')}\n  </script>`;

export function appFAQs(copy) {
  return copy.questions.map((question, index) => [question, [copy.candidates.body, copy.history, copy.themes.body, copy.print, copy.web][index]]);
}

function metadata(html, title, description, structuredData) {
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHTML(title)}</title>`);
  for (const [attribute, key, value] of [['name', 'description', description], ['property', 'og:title', title], ['property', 'og:description', description], ['name', 'twitter:title', title], ['name', 'twitter:description', description]]) {
    const tag = `<meta ${attribute}="${key}" content="${escapeHTML(value)}">`;
    const pattern = new RegExp(`<meta ${attribute}="${key}"[^>]*>`);
    html = pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `  ${tag}\n</head>`);
  }
  html = html.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
  return html.replace('</head>', `  ${schema(structuredData)}\n</head>`);
}

export function updateProductPages() {
  const runtimeCopy = {};
  for (const [code, copy] of Object.entries(productContent.locales)) {
    const folder = code === 'en' ? '' : code;
    const directory = path.join(root, folder);
    const baseURL = `${origin}/${folder ? folder + '/' : ''}`;
    runtimeCopy[code] = {continueApple: copy.name, appBody: copy.promo};
    const platformBody = Object.entries(copy.platforms).map(([platform, body]) => `<article class="feature"><strong>${{ios:'iPhone · iPad', mac:'Mac', tv:'Apple TV'}[platform]}</strong>${paragraph(body)}</article>`).join('');
    const platformSection = `<!-- APP_PLATFORMS_START -->${section(copy.platformTitle, `<div class="feature-grid">${platformBody}</div>${paragraph(copy.print)}`)}<!-- APP_PLATFORMS_END -->`;

    const homeFile = path.join(directory, 'index.html');
    let home = fs.readFileSync(homeFile, 'utf8');
    home = home.replace(/<p class="lead">[\s\S]*?<\/p>/, `<p class="lead">${escapeHTML(copy.intro)}</p>`);
    const features = [copy.daily, copy.candidates, copy.themes].map(feature => `<article class="feature"><strong>${escapeHTML(feature.title)}</strong>${paragraph(feature.body)}</article>`).join('');
    home = home.replace(/(<section class="section">[\s\S]*?<h2>[^<]*<\/h2>)<div class="feature-grid">[\s\S]*?<\/div>/, `$1<div class="feature-grid">${features}</div>`);
    home = home.replace(/<!-- APP_PLATFORMS_START -->[\s\S]*?<!-- APP_PLATFORMS_END -->\s*/g, '');
    home = home.replace('<section class="section guides-section">', `${platformSection}\n        <section class="section guides-section">`);
    const appSchema = {
      '@context':'https://schema.org', '@type':'SoftwareApplication', '@id':`${baseURL}#app`,
      name:copy.name, description:copy.promo, url:baseURL, inLanguage:code,
      applicationCategory:'GameApplication', operatingSystem:'iOS, iPadOS, macOS, tvOS',
      image:`${origin}/favicon/android-chrome-512x512.png`, sameAs:[`https://apps.apple.com/app/id${productContent.appId}`],
      featureList:[copy.daily.body, copy.candidates.body, copy.themes.body, copy.print],
      offers:{'@type':'Offer', price:'0', priceCurrency:'USD'}
    };
    home = metadata(home, `${copy.name} | ${copy.subtitle}`, copy.promo, appSchema);
    fs.writeFileSync(homeFile, home);

    for (const route of ['help', 'daily-sudoku-focus', 'printable-sudoku-puzzles', 'infinite-sudoku-generator']) {
      const file = path.join(directory, `${route}.html`);
      let html = fs.readFileSync(file, 'utf8');
      const oldMain = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
      if (!oldMain) throw new Error(`Missing article: ${file}`);
      const kicker = oldMain.match(/<p class="kicker">[\s\S]*?<\/p>/)?.[0] || '';
      const oldTitle = oldMain.match(/<h1>([\s\S]*?)<\/h1>/)?.[1];
      const store = oldMain.match(/<a class="button (?:primary|secondary) store"[^>]*>[\s\S]*?<\/a>/)?.[0] || '';
      const cta = oldMain.match(/<!-- WEB_PLAY_CTA_START -->[\s\S]*?<!-- WEB_PLAY_CTA_END -->/)?.[0] || '';
      let title, lead, body, faq;
      if (route === 'help') {
        title = oldTitle;
        lead = copy.intro;
        faq = appFAQs(copy);
        body = [copy.daily, copy.candidates, copy.themes].map(feature => section(feature.title, paragraph(feature.body))).join('');
        body += section(copy.platformTitle, Object.entries(copy.platforms).map(([platform, text]) => `<h3>${{ios:'iPhone · iPad', mac:'Mac', tv:'Apple TV'}[platform]}</h3>${paragraph(text)}`).join(''));
        body += `<section class="section play-faq"><h2>${escapeHTML(copy.faqTitle)}</h2>${faq.map(([question, answer]) => `<details><summary>${escapeHTML(question)}</summary>${paragraph(answer)}</details>`).join('')}</section>`;
      } else if (route === 'daily-sudoku-focus') {
        title = copy.dailyHeading;
        lead = copy.daily.body;
        body = section(copy.questions[1], paragraph(copy.history)) + section(copy.themes.title, paragraph(copy.themes.body));
      } else if (route === 'printable-sudoku-puzzles') {
        title = copy.printHeading;
        lead = copy.print;
        body = section('iPhone · iPad', paragraph(copy.platforms.ios)) + section('Mac', paragraph(copy.platforms.mac));
      } else {
        title = oldTitle;
        lead = copy.intro;
        body = section(copy.candidates.title, paragraph(copy.candidates.body)) + section(copy.questions[4], paragraph(copy.web));
      }
      const main = `${kicker}<h1>${escapeHTML(title)}</h1><p class="lead">${escapeHTML(lead)}</p>${body}${store ? `<p>${store}</p>` : ''}${cta}`;
      html = html.replace(/(<main\b[^>]*>)[\s\S]*?<\/main>/, (_, tag) => `${tag}${main}</main>`);
      const pageSchema = {'@context':'https://schema.org', '@type':'WebPage', name:title, description:lead, url:`${baseURL}${route}`, inLanguage:code};
      const structuredData = faq ? {'@context':'https://schema.org', '@graph':[
        pageSchema,
        {'@type':'FAQPage', '@id':`${baseURL}${route}#faq`, inLanguage:code, mainEntity:faq.map(([question, answer]) => ({'@type':'Question', name:question, acceptedAnswer:{'@type':'Answer', text:answer}}))}
      ]} : pageSchema;
      html = metadata(html, `${title} | ${copy.name}`, lead, structuredData);
      fs.writeFileSync(file, html);
    }
  }
  fs.writeFileSync(path.join(root, 'scripts/product-copy.js'), `// Generated from product-content.json by generate-play-pages.mjs.\nwindow.InfinitySudokuProductCopy = ${JSON.stringify(runtimeCopy, null, 2)};\n`);
  const sitemapFile = path.join(root, 'sitemap.xml');
  let sitemap = fs.readFileSync(sitemapFile, 'utf8');
  sitemap = sitemap.replace(/<url>[\s\S]*?<\/url>/g, entry => {
    const location = entry.match(/<loc>([^<]*)<\/loc>/)?.[1];
    const route = location?.replace(origin, '').split('/').filter(Boolean).at(-1) || '';
    if (!['', ...Object.keys(productContent.locales).filter(code => code !== 'en'), 'play', 'help', 'daily-sudoku-focus', 'printable-sudoku-puzzles', 'infinite-sudoku-generator'].includes(route)) return entry;
    return entry.replace(/\s*<lastmod>[^<]*<\/lastmod>/g, '').replace('</loc>', `</loc>\n    <lastmod>${productContent.updated}</lastmod>`);
  });
  fs.writeFileSync(sitemapFile, sitemap);
}
