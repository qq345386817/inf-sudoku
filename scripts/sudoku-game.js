(() => {
  "use strict";

  const translations = {
    en: {
      playTitle: "Play Sudoku", intro: "A fresh puzzle, a quiet screen, and no account required.", easy: "Easy", medium: "Medium", hard: "Hard",
      difficulty: "Difficulty", numberInput: "Number input", undo: "Undo", notes: "Notes", erase: "Erase", hint: "Hint", newPuzzle: "New puzzle",
      download: "Download on the App Store",
      boardLabel: "Sudoku puzzle", ready: "Select a cell, then enter a number.", generating: "Preparing a fresh puzzle…", noUndo: "Nothing to undo yet.",
      chooseCell: "Choose an empty cell first.", noteOn: "Notes are on.", noteOff: "Notes are off.", hintPlaced: "A correct number was revealed.",
      complete: "Puzzle complete", completeBody: "Beautifully solved in {time}.", howTitle: "Sudoku that starts instantly", howBody: "Choose a difficulty and play in your browser. Use Notes for candidates, Hint when you are stuck, or the keyboard for a faster flow. Your board stays only in this page and is not saved.",
      fixedCell: "fixed", editableCell: "editable", empty: "empty", value: "value", candidates: "notes", row: "row", column: "column"
    },
    "zh-Hans": {
      playTitle: "在线玩数独", intro: "打开即玩，无需账户，也不会保存棋盘记录。", easy: "容易", medium: "中等", hard: "困难",
      difficulty: "难度", numberInput: "数字输入", undo: "撤销", notes: "候选", erase: "擦除", hint: "提示", newPuzzle: "新棋盘",
      download: "在 App Store 下载",
      boardLabel: "数独棋盘", ready: "选择一个格子，然后输入数字。", generating: "正在生成新棋盘…", noUndo: "暂无可撤销的操作。",
      chooseCell: "请先选择一个空格。", noteOn: "候选模式已开启。", noteOff: "候选模式已关闭。", hintPlaced: "已填入一个正确数字。",
      complete: "挑战完成", completeBody: "用时 {time}，漂亮地完成了棋盘。", howTitle: "打开网页，立即开始数独", howBody: "选择难度即可在浏览器中游玩。候选模式可以记录数字，卡住时可以使用提示，也支持键盘操作。棋盘只保留在当前页面，不会保存。",
      fixedCell: "固定数字", editableCell: "可填写", empty: "空", value: "数字", candidates: "候选", row: "行", column: "列"
    },
    "zh-Hant": {
      playTitle: "線上玩數獨", intro: "開啟即玩，無需帳戶，也不會儲存棋盤記錄。", easy: "容易", medium: "中等", hard: "困難",
      difficulty: "難度", numberInput: "數字輸入", undo: "復原", notes: "候選", erase: "清除", hint: "提示", newPuzzle: "新棋盤",
      download: "在 App Store 下載",
      boardLabel: "數獨棋盤", ready: "選擇一個格子，然後輸入數字。", generating: "正在產生新棋盤…", noUndo: "暫無可復原的操作。",
      chooseCell: "請先選擇一個空格。", noteOn: "候選模式已開啟。", noteOff: "候選模式已關閉。", hintPlaced: "已填入一個正確數字。",
      complete: "挑戰完成", completeBody: "用時 {time}，漂亮地完成了棋盤。", howTitle: "開啟網頁，立即開始數獨", howBody: "選擇難度即可在瀏覽器中遊玩。候選模式可記錄數字，卡住時可使用提示，也支援鍵盤操作。棋盤只保留在目前頁面，不會儲存。",
      fixedCell: "固定數字", editableCell: "可填寫", empty: "空", value: "數字", candidates: "候選", row: "列", column: "欄"
    },
    ja: {
      playTitle: "数独をプレイ", intro: "アカウント不要。開いてすぐに静かな一局を楽しめます。", easy: "初級", medium: "中級", hard: "上級",
      difficulty: "難易度", numberInput: "数字入力", undo: "元に戻す", notes: "メモ", erase: "消去", hint: "ヒント", newPuzzle: "新しい問題",
      download: "App Storeからダウンロード",
      boardLabel: "数独盤", ready: "マスを選んで数字を入力してください。", generating: "新しい問題を準備中…", noUndo: "元に戻せる操作はありません。",
      chooseCell: "先に空いているマスを選んでください。", noteOn: "メモがオンです。", noteOff: "メモがオフです。", hintPlaced: "正しい数字を1つ表示しました。",
      complete: "完成しました", completeBody: "{time}で美しく解けました。", howTitle: "すぐに始められる数独", howBody: "難易度を選んでブラウザですぐにプレイ。メモ、ヒント、キーボード操作に対応しています。盤面はこのページだけに保持され、保存されません。",
      fixedCell: "固定", editableCell: "入力可能", empty: "空", value: "数字", candidates: "メモ", row: "行", column: "列"
    },
    ko: {
      playTitle: "스도쿠 플레이", intro: "계정 없이 바로 시작하는 조용한 스도쿠 한 판.", easy: "쉬움", medium: "보통", hard: "어려움",
      difficulty: "난이도", numberInput: "숫자 입력", undo: "실행 취소", notes: "메모", erase: "지우기", hint: "힌트", newPuzzle: "새 퍼즐",
      download: "App Store에서 다운로드",
      boardLabel: "스도쿠 보드", ready: "칸을 선택하고 숫자를 입력하세요.", generating: "새 퍼즐을 준비하는 중…", noUndo: "취소할 동작이 없습니다.",
      chooseCell: "빈 칸을 먼저 선택하세요.", noteOn: "메모가 켜졌습니다.", noteOff: "메모가 꺼졌습니다.", hintPlaced: "정답 숫자 하나를 표시했습니다.",
      complete: "퍼즐 완성", completeBody: "{time} 만에 멋지게 풀었습니다.", howTitle: "바로 시작하는 스도쿠", howBody: "난이도를 선택해 브라우저에서 플레이하세요. 메모, 힌트, 키보드 입력을 지원합니다. 보드는 현재 페이지에만 유지되며 저장되지 않습니다.",
      fixedCell: "고정", editableCell: "입력 가능", empty: "비어 있음", value: "숫자", candidates: "메모", row: "행", column: "열"
    },
    de: {
      playTitle: "Sudoku spielen", intro: "Ein neues Rätsel, ein ruhiger Bildschirm und kein Konto nötig.", easy: "Leicht", medium: "Mittel", hard: "Schwer",
      difficulty: "Schwierigkeit", numberInput: "Zahleneingabe", undo: "Zurück", notes: "Notizen", erase: "Löschen", hint: "Hinweis", newPuzzle: "Neues Rätsel",
      download: "Im App Store laden",
      boardLabel: "Sudoku-Raster", ready: "Wähle ein Feld und gib eine Zahl ein.", generating: "Ein neues Rätsel wird vorbereitet…", noUndo: "Noch nichts zum Rückgängigmachen.",
      chooseCell: "Wähle zuerst ein leeres Feld.", noteOn: "Notizen sind aktiviert.", noteOff: "Notizen sind deaktiviert.", hintPlaced: "Eine richtige Zahl wurde aufgedeckt.",
      complete: "Rätsel gelöst", completeBody: "Wunderschön gelöst in {time}.", howTitle: "Sudoku, das sofort startet", howBody: "Wähle eine Schwierigkeit und spiele im Browser. Nutze Notizen, Hinweise oder die Tastatur. Das Spielfeld bleibt nur auf dieser Seite und wird nicht gespeichert.",
      fixedCell: "vorgegeben", editableCell: "bearbeitbar", empty: "leer", value: "Wert", candidates: "Notizen", row: "Zeile", column: "Spalte"
    },
    fr: {
      playTitle: "Jouer au Sudoku", intro: "Une nouvelle grille, un écran paisible et aucun compte requis.", easy: "Facile", medium: "Moyen", hard: "Difficile",
      difficulty: "Difficulté", numberInput: "Saisie des chiffres", undo: "Annuler", notes: "Notes", erase: "Effacer", hint: "Indice", newPuzzle: "Nouvelle grille",
      download: "Télécharger sur l’App Store",
      boardLabel: "Grille de Sudoku", ready: "Sélectionnez une case, puis saisissez un chiffre.", generating: "Préparation d’une nouvelle grille…", noUndo: "Rien à annuler pour le moment.",
      chooseCell: "Choisissez d’abord une case vide.", noteOn: "Les notes sont activées.", noteOff: "Les notes sont désactivées.", hintPlaced: "Un chiffre correct a été révélé.",
      complete: "Grille terminée", completeBody: "Résolue avec élégance en {time}.", howTitle: "Un Sudoku qui démarre instantanément", howBody: "Choisissez une difficulté et jouez dans votre navigateur. Utilisez les notes, un indice ou le clavier. Votre grille reste uniquement sur cette page et n’est pas enregistrée.",
      fixedCell: "fixe", editableCell: "modifiable", empty: "vide", value: "valeur", candidates: "notes", row: "ligne", column: "colonne"
    },
    es: {
      playTitle: "Jugar Sudoku", intro: "Un tablero nuevo, una pantalla tranquila y sin necesidad de cuenta.", easy: "Fácil", medium: "Medio", hard: "Difícil",
      difficulty: "Dificultad", numberInput: "Entrada de números", undo: "Deshacer", notes: "Notas", erase: "Borrar", hint: "Pista", newPuzzle: "Nuevo tablero",
      download: "Descargar en App Store",
      boardLabel: "Tablero de Sudoku", ready: "Elige una casilla e introduce un número.", generating: "Preparando un tablero nuevo…", noUndo: "Todavía no hay nada que deshacer.",
      chooseCell: "Elige primero una casilla vacía.", noteOn: "Las notas están activadas.", noteOff: "Las notas están desactivadas.", hintPlaced: "Se ha revelado un número correcto.",
      complete: "Tablero completado", completeBody: "Resuelto con elegancia en {time}.", howTitle: "Sudoku listo al instante", howBody: "Elige una dificultad y juega en el navegador. Usa notas, pistas o el teclado. El tablero solo permanece en esta página y no se guarda.",
      fixedCell: "fija", editableCell: "editable", empty: "vacía", value: "valor", candidates: "notas", row: "fila", column: "columna"
    },
    it: {
      playTitle: "Gioca a Sudoku", intro: "Un nuovo schema, uno schermo tranquillo e nessun account richiesto.", easy: "Facile", medium: "Medio", hard: "Difficile",
      difficulty: "Difficoltà", numberInput: "Inserimento numeri", undo: "Annulla", notes: "Note", erase: "Cancella", hint: "Suggerimento", newPuzzle: "Nuovo schema",
      download: "Scarica su App Store",
      boardLabel: "Griglia Sudoku", ready: "Seleziona una casella e inserisci un numero.", generating: "Preparazione di un nuovo schema…", noUndo: "Niente da annullare per ora.",
      chooseCell: "Seleziona prima una casella vuota.", noteOn: "Le note sono attive.", noteOff: "Le note sono disattivate.", hintPlaced: "È stato rivelato un numero corretto.",
      complete: "Schema completato", completeBody: "Risolto magnificamente in {time}.", howTitle: "Sudoku pronto all’istante", howBody: "Scegli una difficoltà e gioca nel browser. Usa note, suggerimenti o la tastiera. Lo schema resta solo in questa pagina e non viene salvato.",
      fixedCell: "fissa", editableCell: "modificabile", empty: "vuota", value: "valore", candidates: "note", row: "riga", column: "colonna"
    },
    ru: {
      playTitle: "Играть в судоку", intro: "Новая головоломка, спокойный экран и никакой регистрации.", easy: "Легко", medium: "Средне", hard: "Сложно",
      difficulty: "Сложность", numberInput: "Ввод цифр", undo: "Отменить", notes: "Заметки", erase: "Стереть", hint: "Подсказка", newPuzzle: "Новая игра",
      download: "Загрузить в App Store",
      boardLabel: "Поле судоку", ready: "Выберите клетку и введите цифру.", generating: "Готовим новую головоломку…", noUndo: "Отменять пока нечего.",
      chooseCell: "Сначала выберите пустую клетку.", noteOn: "Заметки включены.", noteOff: "Заметки выключены.", hintPlaced: "Открыта одна правильная цифра.",
      complete: "Головоломка решена", completeBody: "Прекрасный результат за {time}.", howTitle: "Судоку, которое запускается сразу", howBody: "Выберите сложность и играйте в браузере. Используйте заметки, подсказки или клавиатуру. Поле хранится только на этой странице и не сохраняется.",
      fixedCell: "заданная", editableCell: "изменяемая", empty: "пусто", value: "значение", candidates: "заметки", row: "строка", column: "столбец"
    },
    ar: {
      playTitle: "العب سودوكو", intro: "لغز جديد وشاشة هادئة من دون الحاجة إلى حساب.", easy: "سهل", medium: "متوسط", hard: "صعب",
      difficulty: "الصعوبة", numberInput: "إدخال الأرقام", undo: "تراجع", notes: "ملاحظات", erase: "مسح", hint: "تلميح", newPuzzle: "لغز جديد",
      download: "تنزيل من App Store",
      boardLabel: "لوحة سودوكو", ready: "اختر خانة ثم أدخل رقمًا.", generating: "جارٍ إعداد لغز جديد…", noUndo: "لا يوجد ما يمكن التراجع عنه بعد.",
      chooseCell: "اختر خانة فارغة أولًا.", noteOn: "وضع الملاحظات مفعّل.", noteOff: "وضع الملاحظات متوقف.", hintPlaced: "تم إظهار رقم صحيح.",
      complete: "اكتمل اللغز", completeBody: "تم الحل بإتقان خلال {time}.", howTitle: "سودوكو يبدأ فورًا", howBody: "اختر مستوى الصعوبة والعب في المتصفح. استخدم الملاحظات أو التلميح أو لوحة المفاتيح. تبقى اللوحة في هذه الصفحة فقط ولا يتم حفظها.",
      fixedCell: "ثابتة", editableCell: "قابلة للتحرير", empty: "فارغة", value: "القيمة", candidates: "ملاحظات", row: "الصف", column: "العمود"
    }
  };

  const htmlLanguage = document.documentElement.lang || "en";
  const language = translations[htmlLanguage] ? htmlLanguage : htmlLanguage.split("-")[0];
  const productCopy = window.InfinitySudokuProductCopy || {};
  const t = {...(translations[language] || translations.en), ...(productCopy[language] || productCopy.en)};
  const difficultyBlanks = { easy: 38, medium: 46, hard: 52 };
  const boardElement = document.querySelector("#sudoku-board");
  const gameRoot = document.querySelector("#sudoku-game");
  if (!boardElement || !gameRoot) return;

  let solution = [];
  let puzzle = [];
  let values = [];
  let notes = Array.from({ length: 81 }, () => new Set());
  let selectedIndex = -1;
  let difficulty = "medium";
  let notesMode = false;
  let undoStack = [];
  let startedAt = 0;
  let timerID = 0;
  let finished = false;

  const timerElement = document.querySelector("#game-timer");
  const levelElement = document.querySelector("#game-level");
  const messageElement = document.querySelector("#game-message");
  const completionElement = document.querySelector("#completion-panel");
  const completionTextElement = document.querySelector("#completion-text");
  const notesButton = document.querySelector('[data-action="notes"]');
  const undoButton = document.querySelector('[data-action="undo"]');
  const newGameButton = document.querySelector('[data-action="new"]');

  function translateInterface() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (t[key]) element.textContent = t[key];
    });
    document.querySelectorAll("[data-i18n-label]").forEach((element) => {
      const key = element.dataset.i18nLabel;
      if (t[key]) element.setAttribute("aria-label", t[key]);
    });
  }

  function shuffle(input) {
    const result = [...input];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
  }

  function groupedOrder() {
    return shuffle([0, 1, 2]).flatMap((group) => shuffle([0, 1, 2]).map((item) => group * 3 + item));
  }

  function createSolution() {
    const digits = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const rows = groupedOrder();
    const columns = groupedOrder();
    return rows.flatMap((row) => columns.map((column) => digits[(row * 3 + Math.floor(row / 3) + column) % 9]));
  }

  function candidatesFor(board, index) {
    const row = Math.floor(index / 9);
    const column = index % 9;
    const used = new Set();
    for (let cursor = 0; cursor < 9; cursor += 1) {
      used.add(board[row * 9 + cursor]);
      used.add(board[cursor * 9 + column]);
    }
    const startRow = Math.floor(row / 3) * 3;
    const startColumn = Math.floor(column / 3) * 3;
    for (let y = startRow; y < startRow + 3; y += 1) {
      for (let x = startColumn; x < startColumn + 3; x += 1) used.add(board[y * 9 + x]);
    }
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((value) => !used.has(value));
  }

  function countSolutions(board, limit = 2) {
    let bestIndex = -1;
    let bestCandidates = null;
    for (let index = 0; index < 81; index += 1) {
      if (board[index] !== 0) continue;
      const candidates = candidatesFor(board, index);
      if (candidates.length === 0) return 0;
      if (!bestCandidates || candidates.length < bestCandidates.length) {
        bestIndex = index;
        bestCandidates = candidates;
        if (candidates.length === 1) break;
      }
    }
    if (bestIndex === -1) return 1;
    let count = 0;
    for (const candidate of bestCandidates) {
      board[bestIndex] = candidate;
      count += countSolutions(board, limit - count);
      board[bestIndex] = 0;
      if (count >= limit) return count;
    }
    return count;
  }

  function carvePuzzle(completed, targetBlanks) {
    const board = [...completed];
    let blanks = 0;
    for (const index of shuffle([...Array(81).keys()])) {
      const previous = board[index];
      board[index] = 0;
      if (countSolutions([...board], 2) === 1) {
        blanks += 1;
        if (blanks >= targetBlanks) break;
      } else {
        board[index] = previous;
      }
    }
    return board;
  }

  function generatePuzzle(targetBlanks) {
    let best = null;
    for (let attempt = 0; attempt < 4; attempt += 1) {
      const completed = createSolution();
      const candidate = carvePuzzle(completed, targetBlanks);
      if (!best || candidate.filter((value) => value === 0).length > best.puzzle.filter((value) => value === 0).length) {
        best = { solution: completed, puzzle: candidate };
      }
      if (candidate.filter((value) => value === 0).length >= targetBlanks) return { solution: completed, puzzle: candidate };
    }
    return best;
  }

  function snapshot() {
    return { values: [...values], notes: notes.map((set) => [...set]) };
  }

  function restore(snapshotValue) {
    values = [...snapshotValue.values];
    notes = snapshotValue.notes.map((items) => new Set(items));
    finished = false;
    completionElement.hidden = true;
    render();
  }

  function pushUndo() {
    undoStack.push(snapshot());
    if (undoStack.length > 120) undoStack.shift();
  }

  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
    const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  function elapsedSeconds() {
    return Math.max(0, Math.floor((performance.now() - startedAt) / 1000));
  }

  function updateTimer() {
    timerElement.textContent = formatTime(elapsedSeconds());
  }

  function startTimer() {
    window.clearInterval(timerID);
    startedAt = performance.now();
    updateTimer();
    timerID = window.setInterval(updateTimer, 1000);
  }

  function announce(message) {
    messageElement.textContent = message;
  }

  function cellLabel(index) {
    const row = Math.floor(index / 9) + 1;
    const column = (index % 9) + 1;
    const fixed = puzzle[index] !== 0;
    const value = values[index];
    const parts = [`${t.row} ${row}`, `${t.column} ${column}`, fixed ? t.fixedCell : t.editableCell];
    parts.push(value ? `${t.value} ${value}` : t.empty);
    if (notes[index].size) parts.push(`${t.candidates}: ${[...notes[index]].sort().join(", ")}`);
    return parts.join(", ");
  }

  function makeNotes(index) {
    const notesElement = document.createElement("span");
    notesElement.className = "cell-notes";
    for (let value = 1; value <= 9; value += 1) {
      const item = document.createElement("span");
      item.textContent = notes[index].has(value) ? String(value) : "";
      notesElement.append(item);
    }
    return notesElement;
  }

  function render() {
    const selectedValue = selectedIndex >= 0 ? values[selectedIndex] : 0;
    const selectedRow = selectedIndex >= 0 ? Math.floor(selectedIndex / 9) : -1;
    const selectedColumn = selectedIndex >= 0 ? selectedIndex % 9 : -1;
    const selectedBox = selectedIndex >= 0 ? Math.floor(selectedRow / 3) * 3 + Math.floor(selectedColumn / 3) : -1;
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < 81; index += 1) {
      const row = Math.floor(index / 9);
      const column = index % 9;
      const box = Math.floor(row / 3) * 3 + Math.floor(column / 3);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "sudoku-cell";
      button.dataset.index = String(index);
      button.setAttribute("role", "gridcell");
      button.setAttribute("aria-label", cellLabel(index));
      button.setAttribute("aria-selected", index === selectedIndex ? "true" : "false");
      if (row === selectedRow || column === selectedColumn || box === selectedBox) button.classList.add("is-peer");
      if (selectedValue && values[index] === selectedValue) button.classList.add("is-same");
      if (index === selectedIndex) button.classList.add("is-selected");
      if (puzzle[index] !== 0) button.classList.add("is-fixed");
      else if (values[index] !== 0) button.classList.add("is-user");
      if (values[index] !== 0 && puzzle[index] === 0 && values[index] !== solution[index]) button.classList.add("is-wrong");
      if (values[index] !== 0) button.textContent = String(values[index]);
      else if (notes[index].size) button.append(makeNotes(index));
      fragment.append(button);
    }
    boardElement.replaceChildren(fragment);
    undoButton.disabled = undoStack.length === 0;
    notesButton.setAttribute("aria-pressed", notesMode ? "true" : "false");
    document.querySelectorAll(".number-button").forEach((button) => {
      const number = Number(button.dataset.number);
      button.classList.toggle("is-active", selectedValue === number);
      button.disabled = values.filter((value) => value === number).length >= 9;
    });
  }

  function selectCell(index, focus = false) {
    selectedIndex = Math.max(0, Math.min(80, index));
    render();
    if (focus) boardElement.querySelector(`[data-index="${selectedIndex}"]`)?.focus();
  }

  function removeCandidateFromPeers(index, value) {
    const row = Math.floor(index / 9);
    const column = index % 9;
    const startRow = Math.floor(row / 3) * 3;
    const startColumn = Math.floor(column / 3) * 3;
    for (let cursor = 0; cursor < 9; cursor += 1) {
      notes[row * 9 + cursor].delete(value);
      notes[cursor * 9 + column].delete(value);
    }
    for (let y = startRow; y < startRow + 3; y += 1) {
      for (let x = startColumn; x < startColumn + 3; x += 1) notes[y * 9 + x].delete(value);
    }
  }

  function enterNumber(number) {
    if (selectedIndex < 0 || puzzle[selectedIndex] !== 0 || finished) {
      announce(t.chooseCell);
      return;
    }
    pushUndo();
    if (notesMode) {
      if (values[selectedIndex] !== 0) values[selectedIndex] = 0;
      if (notes[selectedIndex].has(number)) notes[selectedIndex].delete(number);
      else notes[selectedIndex].add(number);
    } else {
      values[selectedIndex] = number;
      notes[selectedIndex].clear();
      if (number === solution[selectedIndex]) removeCandidateFromPeers(selectedIndex, number);
    }
    announce(t.ready);
    render();
    checkCompletion();
  }

  function eraseSelected() {
    if (selectedIndex < 0 || puzzle[selectedIndex] !== 0 || finished) {
      announce(t.chooseCell);
      return;
    }
    if (values[selectedIndex] === 0 && notes[selectedIndex].size === 0) return;
    pushUndo();
    values[selectedIndex] = 0;
    notes[selectedIndex].clear();
    render();
  }

  function revealHint() {
    if (finished) return;
    let index = selectedIndex;
    if (index < 0 || puzzle[index] !== 0 || values[index] === solution[index]) {
      index = values.findIndex((value, candidateIndex) => puzzle[candidateIndex] === 0 && value !== solution[candidateIndex]);
    }
    if (index < 0) return;
    pushUndo();
    selectedIndex = index;
    values[index] = solution[index];
    notes[index].clear();
    removeCandidateFromPeers(index, solution[index]);
    announce(t.hintPlaced);
    render();
    checkCompletion();
  }

  function checkCompletion() {
    if (!values.every((value, index) => value === solution[index])) return;
    finished = true;
    window.clearInterval(timerID);
    const time = formatTime(elapsedSeconds());
    updateTimer();
    completionTextElement.textContent = t.completeBody.replace("{time}", time);
    completionElement.hidden = false;
    announce(t.complete);
  }

  function newGame() {
    gameRoot.classList.add("game-loading");
    newGameButton.disabled = true;
    announce(t.generating);
    window.clearInterval(timerID);
    window.setTimeout(() => {
      const generated = generatePuzzle(difficultyBlanks[difficulty]);
      solution = generated.solution;
      puzzle = generated.puzzle;
      values = [...puzzle];
      notes = Array.from({ length: 81 }, () => new Set());
      selectedIndex = puzzle.findIndex((value) => value === 0);
      notesMode = false;
      undoStack = [];
      finished = false;
      completionElement.hidden = true;
      levelElement.textContent = t[difficulty];
      document.querySelectorAll(".difficulty-button").forEach((button) => {
        button.setAttribute("aria-pressed", button.dataset.difficulty === difficulty ? "true" : "false");
      });
      startTimer();
      render();
      announce(t.ready);
      gameRoot.classList.remove("game-loading");
      newGameButton.disabled = false;
    }, 20);
  }

  boardElement.addEventListener("click", (event) => {
    const cell = event.target.closest(".sudoku-cell");
    if (cell) selectCell(Number(cell.dataset.index));
  });

  document.querySelector(".number-pad")?.addEventListener("click", (event) => {
    const button = event.target.closest(".number-button");
    if (button) enterNumber(Number(button.dataset.number));
  });

  document.querySelector(".difficulty-control")?.addEventListener("click", (event) => {
    const button = event.target.closest(".difficulty-button");
    if (!button || button.dataset.difficulty === difficulty) return;
    difficulty = button.dataset.difficulty;
    newGame();
  });

  document.querySelector(".tool-row")?.addEventListener("click", (event) => {
    const button = event.target.closest(".tool-button");
    if (!button) return;
    if (button.dataset.action === "undo") {
      const previous = undoStack.pop();
      if (previous) restore(previous);
      else announce(t.noUndo);
    }
    if (button.dataset.action === "notes") {
      notesMode = !notesMode;
      announce(notesMode ? t.noteOn : t.noteOff);
      render();
    }
    if (button.dataset.action === "erase") eraseSelected();
    if (button.dataset.action === "hint") revealHint();
  });

  newGameButton.addEventListener("click", newGame);

  document.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey || event.target.matches("select, a")) return;
    if (/^[1-9]$/.test(event.key)) {
      event.preventDefault();
      enterNumber(Number(event.key));
      return;
    }
    if (["Backspace", "Delete", "0"].includes(event.key)) {
      event.preventDefault();
      eraseSelected();
      return;
    }
    const directions = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -9, ArrowDown: 9 };
    if (directions[event.key]) {
      event.preventDefault();
      selectCell((selectedIndex < 0 ? 0 : selectedIndex) + directions[event.key], true);
      return;
    }
    if (event.key.toLowerCase() === "n") {
      event.preventDefault();
      notesButton.click();
    }
  });

  translateInterface();
  boardElement.setAttribute("aria-label", t.boardLabel);
  newGame();
})();
