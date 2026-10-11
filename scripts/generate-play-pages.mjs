import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appStoreURL = "https://apps.apple.com/app/id6673897515";

const locales = [
  { code: "en", folder: "", name: "English", home: "Home", play: "Play", help: "Help", support: "Support", privacy: "Privacy", language: "Language", title: "Play Sudoku Online | Infinity Sudoku 9x9", description: "Play a fresh 9x9 Sudoku puzzle online for free. Choose Easy, Medium, or Hard, use notes and hints, and start instantly without an account.", heading: "Play Sudoku", intro: "A fresh puzzle, a quiet screen, and no account required.", howTitle: "Sudoku that starts instantly", howBody: "Choose a difficulty and play in your browser. Use Notes for candidates, Hint when you are stuck, or the keyboard for a faster flow. Your board stays only in this page and is not saved.", footer: "Infinity Sudoku 9x9 - a calmer way to play." },
  { code: "zh-Hans", folder: "zh-Hans", name: "简体中文", home: "首页", play: "在线玩", help: "帮助", support: "支持", privacy: "隐私", language: "语言", title: "在线玩数独 | Infinity Sudoku 9x9", description: "免费在线玩全新的 9x9 数独。选择容易、中等或困难难度，使用候选和提示，无需账户即可开始。", heading: "在线玩数独", intro: "打开即玩，无需账户，也不会保存棋盘记录。", howTitle: "打开网页，立即开始数独", howBody: "选择难度即可在浏览器中游玩。候选模式可以记录数字，卡住时可以使用提示，也支持键盘操作。棋盘只保留在当前页面，不会保存。", footer: "Infinity Sudoku 9x9 - 更安静的数独体验。" },
  { code: "zh-Hant", folder: "zh-Hant", name: "繁體中文", home: "首頁", play: "線上玩", help: "幫助", support: "支援", privacy: "隱私", language: "語言", title: "線上玩數獨 | Infinity Sudoku 9x9", description: "免費線上玩全新的 9x9 數獨。選擇容易、中等或困難難度，使用候選和提示，無需帳戶即可開始。", heading: "線上玩數獨", intro: "開啟即玩，無需帳戶，也不會儲存棋盤記錄。", howTitle: "開啟網頁，立即開始數獨", howBody: "選擇難度即可在瀏覽器中遊玩。候選模式可記錄數字，卡住時可使用提示，也支援鍵盤操作。棋盤只保留在目前頁面，不會儲存。", footer: "Infinity Sudoku 9x9 - 更安靜的數獨體驗。" },
  { code: "ja", folder: "ja", name: "日本語", home: "ホーム", play: "プレイ", help: "ヘルプ", support: "サポート", privacy: "プライバシー", language: "言語", title: "オンライン数独 | Infinity Sudoku 9x9", description: "無料の9x9数独をオンラインでプレイ。初級・中級・上級を選び、メモやヒントを使って、アカウントなしですぐに始められます。", heading: "数独をプレイ", intro: "アカウント不要。開いてすぐに静かな一局を楽しめます。", howTitle: "すぐに始められる数独", howBody: "難易度を選んでブラウザですぐにプレイ。メモ、ヒント、キーボード操作に対応しています。盤面はこのページだけに保持され、保存されません。", footer: "Infinity Sudoku 9x9 - 落ち着いて楽しめる数独。" },
  { code: "ko", folder: "ko", name: "한국어", home: "홈", play: "플레이", help: "도움말", support: "지원", privacy: "개인정보", language: "언어", title: "온라인 스도쿠 플레이 | Infinity Sudoku 9x9", description: "새로운 9x9 스도쿠를 무료로 온라인에서 즐기세요. 쉬움, 보통, 어려움 난이도와 메모, 힌트를 계정 없이 사용할 수 있습니다.", heading: "스도쿠 플레이", intro: "계정 없이 바로 시작하는 조용한 스도쿠 한 판.", howTitle: "바로 시작하는 스도쿠", howBody: "난이도를 선택해 브라우저에서 플레이하세요. 메모, 힌트, 키보드 입력을 지원합니다. 보드는 현재 페이지에만 유지되며 저장되지 않습니다.", footer: "Infinity Sudoku 9x9 - 더 차분한 스도쿠." },
  { code: "de", folder: "de", name: "Deutsch", home: "Start", play: "Spielen", help: "Hilfe", support: "Support", privacy: "Datenschutz", language: "Sprache", title: "Sudoku online spielen | Infinity Sudoku 9x9", description: "Spiele kostenlos ein neues 9x9-Sudoku online. Wähle Leicht, Mittel oder Schwer und nutze Notizen und Hinweise ganz ohne Konto.", heading: "Sudoku spielen", intro: "Ein neues Rätsel, ein ruhiger Bildschirm und kein Konto nötig.", howTitle: "Sudoku, das sofort startet", howBody: "Wähle eine Schwierigkeit und spiele im Browser. Nutze Notizen, Hinweise oder die Tastatur. Das Spielfeld bleibt nur auf dieser Seite und wird nicht gespeichert.", footer: "Infinity Sudoku 9x9 - entspannter Sudoku spielen." },
  { code: "fr", folder: "fr", name: "Français", home: "Accueil", play: "Jouer", help: "Aide", support: "Assistance", privacy: "Confidentialité", language: "Langue", title: "Jouer au Sudoku en ligne | Infinity Sudoku 9x9", description: "Jouez gratuitement à une nouvelle grille de Sudoku 9x9. Choisissez Facile, Moyen ou Difficile et utilisez les notes et indices sans créer de compte.", heading: "Jouer au Sudoku", intro: "Une nouvelle grille, un écran paisible et aucun compte requis.", howTitle: "Un Sudoku qui démarre instantanément", howBody: "Choisissez une difficulté et jouez dans votre navigateur. Utilisez les notes, un indice ou le clavier. Votre grille reste uniquement sur cette page et n’est pas enregistrée.", footer: "Infinity Sudoku 9x9 - une façon plus calme de jouer." },
  { code: "es", folder: "es", name: "Español", home: "Inicio", play: "Jugar", help: "Ayuda", support: "Soporte", privacy: "Privacidad", language: "Idioma", title: "Jugar Sudoku online | Infinity Sudoku 9x9", description: "Juega gratis a un nuevo Sudoku 9x9 online. Elige Fácil, Medio o Difícil y usa notas y pistas sin crear una cuenta.", heading: "Jugar Sudoku", intro: "Un tablero nuevo, una pantalla tranquila y sin necesidad de cuenta.", howTitle: "Sudoku listo al instante", howBody: "Elige una dificultad y juega en el navegador. Usa notas, pistas o el teclado. El tablero solo permanece en esta página y no se guarda.", footer: "Infinity Sudoku 9x9 - una forma más tranquila de jugar." },
  { code: "it", folder: "it", name: "Italiano", home: "Inizio", play: "Gioca", help: "Aiuto", support: "Supporto", privacy: "Privacy", language: "Lingua", title: "Gioca a Sudoku online | Infinity Sudoku 9x9", description: "Gioca gratis a un nuovo Sudoku 9x9 online. Scegli Facile, Medio o Difficile e usa note e suggerimenti senza creare un account.", heading: "Gioca a Sudoku", intro: "Un nuovo schema, uno schermo tranquillo e nessun account richiesto.", howTitle: "Sudoku pronto all’istante", howBody: "Scegli una difficoltà e gioca nel browser. Usa note, suggerimenti o la tastiera. Lo schema resta solo in questa pagina e non viene salvato.", footer: "Infinity Sudoku 9x9 - un modo più tranquillo di giocare." },
  { code: "ru", folder: "ru", name: "Русский", home: "Главная", play: "Играть", help: "Помощь", support: "Поддержка", privacy: "Конфиденциальность", language: "Язык", title: "Играть в судоку онлайн | Infinity Sudoku 9x9", description: "Играйте бесплатно в новое судоку 9x9 онлайн. Выберите лёгкий, средний или сложный уровень, используйте заметки и подсказки без регистрации.", heading: "Играть в судоку", intro: "Новая головоломка, спокойный экран и никакой регистрации.", howTitle: "Судоку, которое запускается сразу", howBody: "Выберите сложность и играйте в браузере. Используйте заметки, подсказки или клавиатуру. Поле хранится только на этой странице и не сохраняется.", footer: "Infinity Sudoku 9x9 - более спокойный способ играть." },
  { code: "ar", folder: "ar", name: "العربية", home: "الرئيسية", play: "العب", help: "المساعدة", support: "الدعم", privacy: "الخصوصية", language: "اللغة", dir: "rtl", title: "العب سودوكو عبر الإنترنت | Infinity Sudoku 9x9", description: "العب لغز سودوكو 9x9 جديدًا مجانًا عبر الإنترنت. اختر المستوى السهل أو المتوسط أو الصعب واستخدم الملاحظات والتلميحات من دون حساب.", heading: "العب سودوكو", intro: "لغز جديد وشاشة هادئة من دون الحاجة إلى حساب.", howTitle: "سودوكو يبدأ فورًا", howBody: "اختر مستوى الصعوبة والعب في المتصفح. استخدم الملاحظات أو التلميح أو لوحة المفاتيح. تبقى اللوحة في هذه الصفحة فقط ولا يتم حفظها.", footer: "Infinity Sudoku 9x9 - طريقة أكثر هدوءًا للعب." }
];

const seoContent = {
  en: {
    overviewTitle: "Free online 9x9 Sudoku",
    overview: "Play a freshly generated classic Sudoku puzzle directly in your browser. Each board uses the standard 9x9 grid and has one solution, with no sign-up, download, or saved history required.",
    featuresTitle: "Choose the way you want to solve",
    features: [
      ["Three difficulty levels", "Start with Easy, move to Medium, or choose Hard when you want fewer given numbers."],
      ["Notes and hints", "Add candidate numbers to empty cells, erase a move, undo changes, or reveal one correct number when you are stuck."],
      ["Mouse, touch, and keyboard", "Select cells on screen or use number and arrow keys for a faster solving flow on desktop."],
    ],
    faqTitle: "Online Sudoku questions",
    faqs: [
      ["Is this online Sudoku free?", "Yes. The browser game is free to play and does not require an account."],
      ["Is my puzzle saved?", "No. The puzzle stays only in the current page. Reloading or closing it starts a new session."],
      ["What is available in the app?", "The Apple app adds daily challenges, challenge history, themes, printing, and other native features for iPhone, iPad, Mac, and Apple TV."],
    ],
    ctaTitle: "Play Sudoku online",
    ctaBody: "Start a free 9x9 Sudoku in your browser with Easy, Medium, or Hard difficulty. No account is required.",
    ctaLink: "Start a puzzle",
  },
  "zh-Hans": {
    overviewTitle: "免费在线玩 9x9 数独",
    overview: "直接在浏览器中开始一道全新生成的经典数独。每道题均采用标准 9x9 宫格并且只有一个解，无需注册、无需下载，也不会保存历史记录。",
    featuresTitle: "按自己的方式解题",
    features: [
      ["三种难度", "从容易开始，继续挑战中等，或选择给定数字更少的困难模式。"],
      ["候选与提示", "在空格中记录候选数字，也可以撤销、擦除，卡住时揭示一个正确数字。"],
      ["触控与键盘", "可以点击或触摸格子，也可在桌面设备上使用数字键和方向键快速操作。"],
    ],
    faqTitle: "在线数独常见问题",
    faqs: [
      ["在线数独免费吗？", "免费。网页版无需账户，打开即可开始。"],
      ["棋盘会被保存吗？", "不会。棋盘只存在于当前页面，刷新或关闭页面后会开始新的会话。"],
      ["App 版还有哪些功能？", "Apple 平台 App 另有每日挑战、挑战历史、主题、打印等原生功能，支持 iPhone、iPad、Mac 和 Apple TV。"],
    ],
    ctaTitle: "在线玩数独",
    ctaBody: "在浏览器中免费开始一道 9x9 数独，可选容易、中等或困难难度，无需账户。",
    ctaLink: "开始一局",
  },
  "zh-Hant": {
    overviewTitle: "免費線上玩 9x9 數獨",
    overview: "直接在瀏覽器中開始一道全新產生的經典數獨。每道題均採用標準 9x9 宮格並且只有一個解，無需註冊、無需下載，也不會儲存歷史記錄。",
    featuresTitle: "用自己的方式解題",
    features: [
      ["三種難度", "從容易開始，繼續挑戰中等，或選擇已知數字更少的困難模式。"],
      ["候選與提示", "在空格中記錄候選數字，也可以復原、清除，卡住時揭示一個正確數字。"],
      ["觸控與鍵盤", "可以點擊或觸控格子，也可在桌面裝置上使用數字鍵和方向鍵快速操作。"],
    ],
    faqTitle: "線上數獨常見問題",
    faqs: [
      ["線上數獨免費嗎？", "免費。網頁版無需帳戶，開啟即可開始。"],
      ["棋盤會被儲存嗎？", "不會。棋盤只存在於目前頁面，重新整理或關閉頁面後會開始新的遊戲。"],
      ["App 版還有哪些功能？", "Apple 平台 App 另有每日挑戰、挑戰記錄、主題、列印等原生功能，支援 iPhone、iPad、Mac 和 Apple TV。"],
    ],
    ctaTitle: "線上玩數獨",
    ctaBody: "在瀏覽器中免費開始一道 9x9 數獨，可選容易、中等或困難難度，無需帳戶。",
    ctaLink: "開始一局",
  },
  ja: {
    overviewTitle: "無料のオンライン9x9数独",
    overview: "ブラウザで新しく生成されたクラシック数独をすぐにプレイできます。各問題は標準の9x9盤面で解は一つ。登録、ダウンロード、履歴保存は不要です。",
    featuresTitle: "自分に合った解き方を選ぶ",
    features: [
      ["3つの難易度", "初級から始め、中級へ進み、より少ない数字で挑む上級も選べます。"],
      ["メモとヒント", "候補数字を記録し、取り消しや消去を使い、行き詰まったら正しい数字を一つ表示できます。"],
      ["タッチとキーボード", "画面でマスを選ぶほか、デスクトップでは数字キーと矢印キーで素早く操作できます。"],
    ],
    faqTitle: "オンライン数独について",
    faqs: [
      ["無料で遊べますか？", "はい。ブラウザ版は無料で、アカウントも必要ありません。"],
      ["問題は保存されますか？", "保存されません。盤面は現在のページだけにあり、再読み込みや終了で新しいセッションになります。"],
      ["アプリ版には何がありますか？", "Apple向けアプリでは、デイリーチャレンジ、履歴、テーマ、印刷などをiPhone、iPad、Mac、Apple TVで利用できます。"],
    ],
    ctaTitle: "オンラインで数独をプレイ",
    ctaBody: "初級・中級・上級から選び、無料の9x9数独をブラウザですぐに始められます。アカウントは不要です。",
    ctaLink: "問題を始める",
  },
  ko: {
    overviewTitle: "무료 온라인 9x9 스도쿠",
    overview: "브라우저에서 새로 생성된 클래식 스도쿠를 바로 플레이하세요. 각 퍼즐은 표준 9x9 보드와 하나의 해답을 가지며 가입, 다운로드, 기록 저장이 필요 없습니다.",
    featuresTitle: "원하는 방식으로 풀기",
    features: [
      ["세 가지 난이도", "쉬움으로 시작하고 보통으로 올라가거나, 주어진 숫자가 더 적은 어려움을 선택하세요."],
      ["메모와 힌트", "빈 칸에 후보 숫자를 적고 실행 취소와 지우기를 사용하거나 막힐 때 정답 하나를 확인할 수 있습니다."],
      ["터치와 키보드", "화면에서 칸을 선택하거나 데스크톱에서 숫자 키와 방향키로 빠르게 조작할 수 있습니다."],
    ],
    faqTitle: "온라인 스도쿠 질문",
    faqs: [
      ["온라인 스도쿠는 무료인가요?", "네. 브라우저 게임은 무료이며 계정이 필요하지 않습니다."],
      ["퍼즐이 저장되나요?", "아니요. 보드는 현재 페이지에만 있으며 새로고침하거나 닫으면 새 세션이 시작됩니다."],
      ["앱에는 어떤 기능이 있나요?", "Apple 앱은 iPhone, iPad, Mac, Apple TV에서 일일 도전, 도전 기록, 테마, 인쇄 등의 기능을 제공합니다."],
    ],
    ctaTitle: "온라인 스도쿠 플레이",
    ctaBody: "쉬움, 보통, 어려움 중에서 선택해 무료 9x9 스도쿠를 브라우저에서 시작하세요. 계정은 필요하지 않습니다.",
    ctaLink: "퍼즐 시작",
  },
  de: {
    overviewTitle: "Kostenloses 9x9-Sudoku online",
    overview: "Spiele ein frisch erzeugtes klassisches Sudoku direkt im Browser. Jedes Rätsel nutzt das übliche 9x9-Raster und hat genau eine Lösung – ohne Anmeldung, Download oder gespeicherten Verlauf.",
    featuresTitle: "Löse das Rätsel auf deine Art",
    features: [
      ["Drei Schwierigkeitsstufen", "Beginne mit Leicht, wechsle zu Mittel oder wähle Schwer mit weniger vorgegebenen Zahlen."],
      ["Notizen und Hinweise", "Trage Kandidaten ein, mache Züge rückgängig, lösche Eingaben oder decke bei Bedarf eine richtige Zahl auf."],
      ["Touch und Tastatur", "Wähle Felder am Bildschirm oder nutze auf dem Desktop Zahlen- und Pfeiltasten für schnelleres Spielen."],
    ],
    faqTitle: "Fragen zum Online-Sudoku",
    faqs: [
      ["Ist das Online-Sudoku kostenlos?", "Ja. Das Spiel im Browser ist kostenlos und benötigt kein Konto."],
      ["Wird mein Rätsel gespeichert?", "Nein. Das Rätsel bleibt nur auf der aktuellen Seite. Beim Neuladen oder Schließen beginnt eine neue Sitzung."],
      ["Was bietet die App?", "Die Apple-App ergänzt tägliche Herausforderungen, Verlauf, Designs, Drucken und weitere native Funktionen für iPhone, iPad, Mac und Apple TV."],
    ],
    ctaTitle: "Sudoku online spielen",
    ctaBody: "Starte kostenlos ein 9x9-Sudoku im Browser und wähle Leicht, Mittel oder Schwer. Kein Konto erforderlich.",
    ctaLink: "Rätsel starten",
  },
  fr: {
    overviewTitle: "Sudoku 9x9 gratuit en ligne",
    overview: "Jouez directement dans votre navigateur à une grille de Sudoku classique nouvellement générée. Chaque grille 9x9 possède une solution unique, sans inscription, téléchargement ni historique enregistré.",
    featuresTitle: "Résolvez à votre façon",
    features: [
      ["Trois niveaux", "Commencez en Facile, passez à Moyen ou choisissez Difficile avec moins de chiffres donnés."],
      ["Notes et indices", "Ajoutez des candidats, annulez ou effacez un coup, ou révélez un chiffre correct lorsque vous êtes bloqué."],
      ["Tactile et clavier", "Sélectionnez les cases à l’écran ou utilisez les touches numériques et fléchées sur ordinateur."],
    ],
    faqTitle: "Questions sur le Sudoku en ligne",
    faqs: [
      ["Ce Sudoku en ligne est-il gratuit ?", "Oui. Le jeu dans le navigateur est gratuit et ne demande aucun compte."],
      ["Ma grille est-elle enregistrée ?", "Non. La grille reste uniquement sur la page actuelle. La recharger ou la fermer démarre une nouvelle session."],
      ["Que propose l’application ?", "L’app Apple ajoute les défis quotidiens, l’historique, les thèmes, l’impression et d’autres fonctions natives sur iPhone, iPad, Mac et Apple TV."],
    ],
    ctaTitle: "Jouer au Sudoku en ligne",
    ctaBody: "Lancez gratuitement une grille 9x9 dans votre navigateur en Facile, Moyen ou Difficile. Aucun compte requis.",
    ctaLink: "Commencer une grille",
  },
  es: {
    overviewTitle: "Sudoku 9x9 gratis online",
    overview: "Juega directamente en el navegador a un Sudoku clásico recién generado. Cada tablero usa la cuadrícula 9x9 estándar y tiene una única solución, sin registro, descarga ni historial guardado.",
    featuresTitle: "Resuelve a tu manera",
    features: [
      ["Tres dificultades", "Empieza en Fácil, continúa con Medio o elige Difícil para jugar con menos números iniciales."],
      ["Notas y pistas", "Añade candidatos, deshaz o borra movimientos y revela un número correcto cuando te quedes atascado."],
      ["Pantalla y teclado", "Selecciona casillas con ratón o toque y usa números y flechas para jugar más rápido en el ordenador."],
    ],
    faqTitle: "Preguntas sobre el Sudoku online",
    faqs: [
      ["¿Este Sudoku online es gratis?", "Sí. El juego del navegador es gratuito y no necesita una cuenta."],
      ["¿Se guarda mi partida?", "No. El tablero permanece solo en la página actual. Al recargar o cerrarla comienza una sesión nueva."],
      ["¿Qué incluye la app?", "La app de Apple añade retos diarios, historial, temas, impresión y otras funciones nativas para iPhone, iPad, Mac y Apple TV."],
    ],
    ctaTitle: "Jugar Sudoku online",
    ctaBody: "Empieza gratis un Sudoku 9x9 en el navegador y elige Fácil, Medio o Difícil. No necesitas cuenta.",
    ctaLink: "Empezar un tablero",
  },
  it: {
    overviewTitle: "Sudoku 9x9 gratuito online",
    overview: "Gioca direttamente nel browser a un Sudoku classico appena generato. Ogni schema usa la griglia 9x9 standard e ha un’unica soluzione, senza registrazione, download o cronologia salvata.",
    featuresTitle: "Risolvi come preferisci",
    features: [
      ["Tre difficoltà", "Inizia con Facile, passa a Medio oppure scegli Difficile con meno numeri iniziali."],
      ["Note e suggerimenti", "Aggiungi candidati, annulla o cancella una mossa e rivela un numero corretto quando sei bloccato."],
      ["Tocco e tastiera", "Seleziona le celle sullo schermo oppure usa numeri e frecce per giocare più velocemente sul computer."],
    ],
    faqTitle: "Domande sul Sudoku online",
    faqs: [
      ["Questo Sudoku online è gratuito?", "Sì. Il gioco nel browser è gratuito e non richiede un account."],
      ["Lo schema viene salvato?", "No. Lo schema resta solo nella pagina corrente. Ricaricandola o chiudendola inizia una nuova sessione."],
      ["Cosa offre l’app?", "L’app Apple aggiunge sfide giornaliere, cronologia, temi, stampa e altre funzioni native per iPhone, iPad, Mac e Apple TV."],
    ],
    ctaTitle: "Gioca a Sudoku online",
    ctaBody: "Avvia gratis un Sudoku 9x9 nel browser e scegli Facile, Medio o Difficile. Non serve un account.",
    ctaLink: "Inizia uno schema",
  },
  ru: {
    overviewTitle: "Бесплатное судоку 9x9 онлайн",
    overview: "Играйте в новое классическое судоку прямо в браузере. Каждая головоломка использует стандартное поле 9x9 и имеет единственное решение — без регистрации, загрузки и сохранения истории.",
    featuresTitle: "Решайте удобным способом",
    features: [
      ["Три уровня сложности", "Начните с лёгкого, перейдите к среднему или выберите сложный уровень с меньшим числом подсказок."],
      ["Заметки и подсказки", "Записывайте кандидатов, отменяйте и стирайте ходы или откройте одну правильную цифру, если зашли в тупик."],
      ["Сенсорный экран и клавиатура", "Выбирайте клетки на экране или используйте цифры и стрелки для быстрой игры на компьютере."],
    ],
    faqTitle: "Вопросы об онлайн-судоку",
    faqs: [
      ["Онлайн-судоку бесплатное?", "Да. Игра в браузере бесплатна и не требует учётной записи."],
      ["Сохраняется ли головоломка?", "Нет. Поле существует только на текущей странице. После перезагрузки или закрытия начнётся новый сеанс."],
      ["Что доступно в приложении?", "Приложение Apple добавляет ежедневные испытания, историю, темы, печать и другие функции для iPhone, iPad, Mac и Apple TV."],
    ],
    ctaTitle: "Играть в судоку онлайн",
    ctaBody: "Начните бесплатное судоку 9x9 в браузере, выбрав лёгкий, средний или сложный уровень. Регистрация не нужна.",
    ctaLink: "Начать игру",
  },
  ar: {
    overviewTitle: "سودوكو 9x9 مجانية عبر الإنترنت",
    overview: "العب لغز سودوكو كلاسيكيًا جديدًا مباشرة في المتصفح. تستخدم كل لعبة شبكة 9x9 القياسية ولها حل واحد، من دون تسجيل أو تنزيل أو حفظ للسجل.",
    featuresTitle: "حل اللغز بالطريقة التي تناسبك",
    features: [
      ["ثلاثة مستويات", "ابدأ بالسهل ثم انتقل إلى المتوسط، أو اختر الصعب مع أرقام أولية أقل."],
      ["ملاحظات وتلميحات", "أضف الأرقام المرشحة وتراجع عن الخطوات أو امسحها، واكشف رقمًا صحيحًا إذا توقفت."],
      ["اللمس ولوحة المفاتيح", "اختر الخانات على الشاشة أو استخدم الأرقام ومفاتيح الأسهم للعب بسرعة على الكمبيوتر."],
    ],
    faqTitle: "أسئلة عن سودوكو عبر الإنترنت",
    faqs: [
      ["هل سودوكو عبر الإنترنت مجانية؟", "نعم. لعبة المتصفح مجانية ولا تحتاج إلى حساب."],
      ["هل يتم حفظ اللغز؟", "لا. تبقى اللوحة في الصفحة الحالية فقط، ويبدأ تشغيل جديد عند إعادة التحميل أو الإغلاق."],
      ["ما الذي يقدمه التطبيق؟", "يضيف تطبيق Apple تحديات يومية وسجل التحديات والسمات والطباعة وميزات أصلية أخرى على iPhone وiPad وMac وApple TV."],
    ],
    ctaTitle: "العب سودوكو عبر الإنترنت",
    ctaBody: "ابدأ سودوكو 9x9 مجانية في المتصفح واختر السهل أو المتوسط أو الصعب. لا حاجة إلى حساب.",
    ctaLink: "ابدأ اللغز",
  },
};

function pageURL(locale) {
  return `https://inf-sudoku.luopeike.com/${locale.folder ? `${locale.folder}/` : ""}play`;
}

function alternateLinks() {
  return `${locales.map((locale) => `  <link rel="alternate" hreflang="${locale.code}" href="${pageURL(locale)}">`).join("\n")}
  <link rel="alternate" hreflang="x-default" href="https://inf-sudoku.luopeike.com/play">`;
}

function languageOptions(current, prefix) {
  return locales.map((locale) => {
    const value = locale.folder ? `${prefix}${locale.folder}/play` : `${prefix}play`;
    return `<option value="${value}"${locale.code === current.code ? " selected" : ""}>${locale.name}</option>`;
  }).join("");
}

function pageHTML(locale) {
  const prefix = locale.folder ? "../" : "";
  const homeHref = locale.folder ? `../${locale.folder}/` : "./";
  const dir = locale.dir ? ` dir="${locale.dir}"` : "";
  const content = seoContent[locale.code];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://inf-sudoku.luopeike.com/#website",
        name: "Infinity Sudoku 9x9",
        url: "https://inf-sudoku.luopeike.com/",
        inLanguage: locale.code,
      },
      {
        "@type": "WebApplication",
        "@id": `${pageURL(locale)}#webapp`,
        name: "Infinity Sudoku 9x9 Online",
        description: locale.description,
        url: pageURL(locale),
        applicationCategory: "GameApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript",
        inLanguage: locale.code,
        isAccessibleForFree: true,
        isPartOf: { "@id": "https://inf-sudoku.luopeike.com/#website" },
        featureList: content.features.map(([title]) => title),
        sameAs: [appStoreURL],
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    ],
  };
  return `<!DOCTYPE html>
<html lang="${locale.code}"${dir}>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${locale.description}">
  <meta name="robots" content="index,follow">
  <meta property="og:title" content="${locale.title}">
  <meta property="og:description" content="${locale.description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${pageURL(locale)}">
  <meta property="og:image" content="https://inf-sudoku.luopeike.com/favicon/android-chrome-512x512.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="https://inf-sudoku.luopeike.com/favicon/android-chrome-512x512.png">
  <link rel="canonical" href="${pageURL(locale)}">
${alternateLinks()}
  <link rel="apple-touch-icon" sizes="180x180" href="${prefix}favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="${prefix}favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="${prefix}favicon/favicon-16x16.png">
  <link rel="manifest" href="${prefix}favicon/site.webmanifest">
  <meta name="theme-color" content="#0f8fb8">
  <link rel="stylesheet" href="${prefix}style/base.css">
  <link rel="stylesheet" href="${prefix}style/game.css">
  <title>${locale.title}</title>
  <script type="application/ld+json">
${JSON.stringify(structuredData, null, 2)}
  </script>
</head>
<body class="game-body">
  <div class="page game-page">
    <div class="container">
      <header class="topbar">
        <a class="brand" href="${homeHref}" aria-label="Infinity Sudoku home">
          <img src="${prefix}favicon/apple-touch-icon.png" alt="">
          <span>Infinity Sudoku 9x9</span>
        </a>
        <nav class="nav" aria-label="Primary"><a href="${homeHref}">${locale.home}</a><a href="play" aria-current="page">${locale.play}</a><a href="help">${locale.help}</a><a href="support">${locale.support}</a><a href="privacy-policy">${locale.privacy}</a><label class="language-switch"><span>${locale.language}</span><select aria-label="${locale.language}" onchange="if (this.value) window.location.href=this.value">${languageOptions(locale, prefix)}</select></label></nav>
      </header>
      <main id="sudoku-game" class="game-layout game-loading">
        <section class="game-stage" aria-labelledby="play-heading">
          <div class="board-frame">
            <div id="sudoku-board" class="game-board" role="grid" aria-label="Sudoku puzzle"></div>
          </div>
        </section>
        <aside class="game-controls">
          <h1 id="play-heading" data-i18n="playTitle">${locale.heading}</h1>
          <p class="game-intro" data-i18n="intro">${locale.intro}</p>
          <div class="game-status" aria-live="polite">
            <span><svg class="status-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V14h3v6H4Zm6 0V9h3v11h-3Zm6 0V4h3v16h-3Z" fill="currentColor"/></svg><span id="game-level">Medium</span></span>
            <span><svg class="status-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg><span id="game-timer">00:00</span></span>
          </div>
          <div class="difficulty-control" role="group" aria-label="Difficulty" data-i18n-label="difficulty">
            <button class="difficulty-button" type="button" data-difficulty="easy" aria-pressed="false" data-i18n="easy">Easy</button>
            <button class="difficulty-button" type="button" data-difficulty="medium" aria-pressed="true" data-i18n="medium">Medium</button>
            <button class="difficulty-button" type="button" data-difficulty="hard" aria-pressed="false" data-i18n="hard">Hard</button>
          </div>
          <div class="number-pad" role="group" aria-label="Number input" data-i18n-label="numberInput">
            ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => `<button class="number-button" type="button" data-number="${number}" aria-label="${number}">${number}</button>`).join("\n            ")}
          </div>
          <div class="tool-row" role="group" aria-label="Tools">
            <button class="tool-button" type="button" data-action="undo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 7-5 5 5 5"/><path d="M5 12h8a6 6 0 0 1 6 6"/></svg><span data-i18n="undo">Undo</span></button>
            <button class="tool-button" type="button" data-action="notes" aria-pressed="false"><span class="mode-dot"></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 20 4.2-1 10.7-10.7a2.1 2.1 0 0 0-3-3L5.2 16 4 20Z"/><path d="m14.8 6.4 3 3"/></svg><span data-i18n="notes">Notes</span></button>
            <button class="tool-button" type="button" data-action="erase"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 15 8.8-8.8a2 2 0 0 1 2.8 0l2.2 2.2a2 2 0 0 1 0 2.8L9 20H5l-2-2 1-3Z"/><path d="m10 19-5-5"/></svg><span data-i18n="erase">Erase</span></button>
            <button class="tool-button" type="button" data-action="hint"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6M10 21h4"/><path d="M8.5 14.5A7 7 0 1 1 15.5 14.5C14.5 15.3 14 16 14 17h-4c0-1-.5-1.7-1.5-2.5Z"/></svg><span data-i18n="hint">Hint</span></button>
          </div>
          <button class="new-game-button" type="button" data-action="new" data-i18n="newPuzzle">New puzzle</button>
          <p id="game-message" class="game-message" role="status" aria-live="polite"></p>
          <div id="completion-panel" class="completion-panel" role="status" hidden><strong data-i18n="complete">Puzzle complete</strong><p id="completion-text"></p></div>
          <div class="native-promo">
            <img src="${prefix}favicon/apple-touch-icon.png" alt="">
            <div><strong data-i18n="continueApple">Continue on every Apple screen</strong><p data-i18n="appBody">Get daily challenges, history, themes, printing, and more in the app.</p><a class="button primary store" href="${appStoreURL}" target="_blank" rel="noopener"><img class="store-icon" src="${prefix}images/app-store-icon.svg" alt=""><span data-i18n="download">Download on the App Store</span></a></div>
          </div>
        </aside>
      </main>
      <section class="play-copy" aria-labelledby="play-copy-heading">
        <div class="play-copy-intro"><h2 id="play-copy-heading">${content.overviewTitle}</h2><p>${content.overview}</p></div>
        <div class="play-guide" aria-labelledby="play-features-heading"><h2 id="play-features-heading">${content.featuresTitle}</h2><div class="play-feature-grid">${content.features.map(([title, body]) => `<article><h3>${title}</h3><p>${body}</p></article>`).join("")}</div></div>
        <div class="play-faq" aria-labelledby="play-faq-heading"><h2 id="play-faq-heading">${content.faqTitle}</h2>${content.faqs.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join("")}</div>
      </section>
      <noscript><section class="section"><p>JavaScript is required to play Sudoku in the browser.</p></section></noscript>
      <footer class="footer">${locale.footer}</footer>
    </div>
  </div>
  <script src="${prefix}scripts/sudoku-game.js" defer></script>
</body>
</html>
`;
}

function updateSupportingPages(locale) {
  const content = seoContent[locale.code];
  const block = `<!-- WEB_PLAY_CTA_START --><section class="section app-cta"><div><h2>${content.ctaTitle}</h2><p>${content.ctaBody}</p></div><a class="button web-play" href="play">${content.ctaLink}</a></section><!-- WEB_PLAY_CTA_END -->`;
  for (const filename of ["daily-sudoku-focus.html", "infinite-sudoku-generator.html", "printable-sudoku-puzzles.html", "help.html"]) {
    const file = path.join(root, locale.folder, filename);
    let html = fs.readFileSync(file, "utf8");
    html = html.replace(/<!-- WEB_PLAY_CTA_START -->[\s\S]*?<!-- WEB_PLAY_CTA_END -->/g, "");
    html = html.replace("</main>", `${block}</main>`);
    fs.writeFileSync(file, html);
  }
}

function writeLlmsFile() {
  const localizedPlayPages = locales.map((locale) => `- [${locale.name}](${pageURL(locale)})`).join("\n");
  const content = `# Infinity Sudoku 9x9

> Infinity Sudoku is a free browser-based 9x9 Sudoku game and a native Sudoku app for iPhone, iPad, Mac, and Apple TV.

## Primary pages

- [Play Sudoku online](https://inf-sudoku.luopeike.com/play): Free Easy, Medium, and Hard 9x9 puzzles with notes, hints, undo, erase, touch, and keyboard controls. No account is required, and browser games are not saved.
- [Infinity Sudoku app](https://inf-sudoku.luopeike.com/): Product overview and App Store download.
- [Help](https://inf-sudoku.luopeike.com/help): Supported platforms and app features.
- [Support](https://inf-sudoku.luopeike.com/support): Product support information.
- [Privacy](https://inf-sudoku.luopeike.com/privacy-policy): Privacy information for the website and app.

## Guides

- [Daily Sudoku focus](https://inf-sudoku.luopeike.com/daily-sudoku-focus)
- [Infinite Sudoku generator](https://inf-sudoku.luopeike.com/infinite-sudoku-generator)
- [Printable Sudoku puzzles](https://inf-sudoku.luopeike.com/printable-sudoku-puzzles)

## Product facts

- The web game generates classic 9x9 Sudoku puzzles with a unique solution.
- The browser version stores no account or puzzle history.
- Daily challenges, challenge history, themes, printing, and other native features are available in the Apple app.
- The App Store listing is https://apps.apple.com/app/id6673897515.

## Localized online game

${localizedPlayPages}
`;
  fs.writeFileSync(path.join(root, "llms.txt"), content);
}

function updateHomepage(locale) {
  const file = path.join(root, locale.folder, "index.html");
  let html = fs.readFileSync(file, "utf8");
  const homeAnchor = `<a href="./">${locale.home}</a>`;
  const playAnchor = `<a href="play">${locale.play}</a>`;
  if (!html.includes(playAnchor)) html = html.replace(homeAnchor, `${homeAnchor}${playAnchor}`);

  if (!html.includes("web-play")) {
    const storePattern = /(<a class="button primary store"[^>]*>[\s\S]*?<\/a>)(\s*<\/div>)/;
    html = html.replace(storePattern, `$1\n              <a class="button web-play" href="play">${locale.play}</a>$2`);
  }
  fs.writeFileSync(file, html);
}

function updateSiteNavigation(locale) {
  const homeAnchor = `<a href="./">${locale.home}</a>`;
  const playAnchor = `<a href="play">${locale.play}</a>`;
  for (const filename of ["daily-sudoku-focus.html", "help.html", "infinite-sudoku-generator.html", "printable-sudoku-puzzles.html", "privacy-policy.html", "support.html"]) {
    const file = path.join(root, locale.folder, filename);
    let html = fs.readFileSync(file, "utf8");
    if (!html.includes(playAnchor)) html = html.replace(homeAnchor, `${homeAnchor}${playAnchor}`);
    fs.writeFileSync(file, html);
  }
}

for (const locale of locales) {
  const directory = path.join(root, locale.folder);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, "play.html"), pageHTML(locale));
  updateHomepage(locale);
  updateSiteNavigation(locale);
  updateSupportingPages(locale);
}

writeLlmsFile();

const alternateXML = locales.map((locale) => `    <xhtml:link rel="alternate" hreflang="${locale.code}" href="${pageURL(locale)}" />`).join("\n");
const playEntries = locales.map((locale) => `  <url>\n    <loc>${pageURL(locale)}</loc>\n${alternateXML}\n    <xhtml:link rel="alternate" hreflang="x-default" href="https://inf-sudoku.luopeike.com/play" />\n    <changefreq>weekly</changefreq>\n  </url>`).join("\n");
const playBlock = `<!-- PLAY_PAGES_START -->\n${playEntries}\n<!-- PLAY_PAGES_END -->`;
const sitemapPath = path.join(root, "sitemap.xml");
let sitemap = fs.readFileSync(sitemapPath, "utf8");
if (/<!-- PLAY_PAGES_START -->[\s\S]*<!-- PLAY_PAGES_END -->/.test(sitemap)) {
  sitemap = sitemap.replace(/<!-- PLAY_PAGES_START -->[\s\S]*<!-- PLAY_PAGES_END -->/, playBlock);
} else {
  sitemap = sitemap.replace("</urlset>", `${playBlock}\n</urlset>`);
}
fs.writeFileSync(sitemapPath, sitemap);

console.log(`Generated ${locales.length} localized play pages, supporting links, and llms.txt.`);
