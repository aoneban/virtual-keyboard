const data = [
  {
    keyCode: 'Backquote', caseDownEn: '`', caseUpEn: '~', capsEn: '`', shiftcapsEn: '~', caseDownRu: 'ё', caseUpRu: 'Ё', capsRu: 'Ё', shiftcapsRu: 'ё',
  },
  {
    keyCode: 'Digit1', caseDownEn: '1', caseUpEn: '!', capsEn: '1', shiftcapsEn: '!', caseDownRu: '1', caseUpRu: '!', capsRu: '1', shiftcapsRu: '!',
  },
  {
    keyCode: 'Digit2', caseDownEn: '2', caseUpEn: '@', capsEn: '2', shiftcapsEn: '@', caseDownRu: '2', caseUpRu: '"', capsRu: '2', shiftcapsRu: '"',
  },
  {
    keyCode: 'Digit3', caseDownEn: '3', caseUpEn: '#', capsEn: '3', shiftcapsEn: '#', caseDownRu: '3', caseUpRu: '№', capsRu: '3', shiftcapsRu: '№',
  },
  {
    keyCode: 'Digit4', caseDownEn: '4', caseUpEn: '$', capsEn: '4', shiftcapsEn: '$', caseDownRu: '4', caseUpRu: ';', capsRu: '4', shiftcapsRu: ';',
  },
  {
    keyCode: 'Digit5', caseDownEn: '5', caseUpEn: '%', capsEn: '5', shiftcapsEn: '%', caseDownRu: '5', caseUpRu: '%', capsRu: '5', shiftcapsRu: '%',
  },
  {
    keyCode: 'Digit6', caseDownEn: '6', caseUpEn: '^', capsEn: '6', shiftcapsEn: '^', caseDownRu: '6', caseUpRu: ':', capsRu: '6', shiftcapsRu: ':',
  },
  {
    keyCode: 'Digit7', caseDownEn: '7', caseUpEn: '&', capsEn: '7', shiftcapsEn: '&', caseDownRu: '7', caseUpRu: '?', capsRu: '7', shiftcapsRu: '?',
  },
  {
    keyCode: 'Digit8', caseDownEn: '8', caseUpEn: '*', capsEn: '8', shiftcapsEn: '*', caseDownRu: '8', caseUpRu: '*', capsRu: '8', shiftcapsRu: '*',
  },
  {
    keyCode: 'Digit9', caseDownEn: '9', caseUpEn: '(', capsEn: '9', shiftcapsEn: '(', caseDownRu: '9', caseUpRu: '(', capsRu: '9', shiftcapsRu: '(',
  },
  {
    keyCode: 'Digit0', caseDownEn: '0', caseUpEn: ')', capsEn: '0', shiftcapsEn: ')', caseDownRu: '0', caseUpRu: ')', capsRu: '0', shiftcapsRu: ')',
  },
  {
    keyCode: 'Minus', caseDownEn: '-', caseUpEn: '_', capsEn: '-', shiftcapsEn: '_', caseDownRu: '-', caseUpRu: '_', capsRu: '-', shiftcapsRu: '_',
  },
  {
    keyCode: 'Equal', caseDownEn: '=', caseUpEn: '+', capsEn: '=', shiftcapsEn: '+', caseDownRu: '=', caseUpRu: '+', capsRu: '=', shiftcapsRu: '+',
  },
  {
    keyCode: 'Backspace', caseDownEn: 'Backspace', caseUpEn: 'Backspace', capsEn: 'Backspace', shiftcapsEn: 'Backspace', caseDownRu: 'Backspace', caseUpRu: 'Backspace', capsRu: 'Backspace', shiftcapsRu: 'Backspace',
  },
  {
    keyCode: 'Tab', caseDownEn: 'Tab', caseUpEn: 'Tab', capsEn: 'Tab', shiftcapsEn: 'Tab', caseDownRu: 'Tab', caseUpRu: 'Tab', capsRu: 'Tab', shiftcapsRu: 'Tab',
  },
  {
    keyCode: 'KeyQ', caseDownEn: 'q', caseUpEn: 'Q', capsEn: 'Q', shiftcapsEn: 'q', caseDownRu: 'й', caseUpRu: 'Й', capsRu: 'Й', shiftcapsRu: 'й',
  },
  {
    keyCode: 'KeyW', caseDownEn: 'w', caseUpEn: 'W', capsEn: 'W', shiftcapsEn: 'w', caseDownRu: 'ц', caseUpRu: 'Ц', capsRu: 'Ц', shiftcapsRu: 'ц',
  },
  {
    keyCode: 'KeyE', caseDownEn: 'e', caseUpEn: 'E', capsEn: 'E', shiftcapsEn: 'e', caseDownRu: 'у', caseUpRu: 'У', capsRu: 'У', shiftcapsRu: 'у',
  },
  {
    keyCode: 'KeyR', caseDownEn: 'r', caseUpEn: 'R', capsEn: 'R', shiftcapsEn: 'r', caseDownRu: 'к', caseUpRu: 'К', capsRu: 'К', shiftcapsRu: 'к',
  },
  {
    keyCode: 'KeyT', caseDownEn: 't', caseUpEn: 'T', capsEn: 'T', shiftcapsEn: 't', caseDownRu: 'е', caseUpRu: 'Е', capsRu: 'Е', shiftcapsRu: 'е',
  },
  {
    keyCode: 'KeyY', caseDownEn: 'y', caseUpEn: 'Y', capsEn: 'Y', shiftcapsEn: 'y', caseDownRu: 'н', caseUpRu: 'Н', capsRu: 'Н', shiftcapsRu: 'н',
  },
  {
    keyCode: 'KeyU', caseDownEn: 'u', caseUpEn: 'U', capsEn: 'U', shiftcapsEn: 'u', caseDownRu: 'г', caseUpRu: 'Г', capsRu: 'Г', shiftcapsRu: 'г',
  },
  {
    keyCode: 'KeyI', caseDownEn: 'i', caseUpEn: 'I', capsEn: 'I', shiftcapsEn: 'i', caseDownRu: 'ш', caseUpRu: 'Ш', capsRu: 'Ш', shiftcapsRu: 'ш',
  },
  {
    keyCode: 'KeyO', caseDownEn: 'o', caseUpEn: 'O', capsEn: 'O', shiftcapsEn: 'o', caseDownRu: 'щ', caseUpRu: 'Щ', capsRu: 'Щ', shiftcapsRu: 'щ',
  },
  {
    keyCode: 'KeyP', caseDownEn: 'p', caseUpEn: 'P', capsEn: 'P', shiftcapsEn: 'p', caseDownRu: 'з', caseUpRu: 'З', capsRu: 'З', shiftcapsRu: 'з',
  },
  {
    keyCode: 'BracketLeft', caseDownEn: '[', caseUpEn: '{', capsEn: '[', shiftcapsEn: '{', caseDownRu: 'х', caseUpRu: 'Х', capsRu: 'Х', shiftcapsRu: 'х',
  },
  {
    keyCode: 'BracketRight', caseDownEn: ']', caseUpEn: '}', capsEn: ']', shiftcapsEn: '}', caseDownRu: 'ъ', caseUpRu: 'Ъ', capsRu: 'Ъ', shiftcapsRu: 'ъ',
  },
  {
    keyCode: 'Backslash', caseDownEn: '\\', caseUpEn: '|', capsEn: '\\', shiftcapsEn: '||', caseDownRu: '\\', caseUpRu: '/', capsRu: '\\', shiftcapsRu: '/',
  },
  {
    keyCode: 'Delete', caseDownEn: 'Del', caseUpEn: 'Del', capsEn: 'Del', shiftcapsEn: 'Del', caseDownRu: 'Del', caseUpRu: 'Del', capsRu: 'Del', shiftcapsRu: 'Del',
  },
  {
    keyCode: 'CapsLock', caseDownEn: 'CapsLock', caseUpEn: 'CapsLock', capsEn: 'CapsLock', shiftcapsEn: 'CapsLock', caseDownRu: 'CapsLock', caseUpRu: 'CapsLock', capsRu: 'CapsLock', shiftcapsRu: 'CapsLock',
  },
  {
    keyCode: 'KeyA', caseDownEn: 'a', caseUpEn: 'A', capsEn: 'A', shiftcapsEn: 'a', caseDownRu: 'ф', caseUpRu: 'Ф', capsRu: 'Ф', shiftcapsRu: 'ф',
  },
  {
    keyCode: 'KeyS', caseDownEn: 's', caseUpEn: 'S', capsEn: 'S', shiftcapsEn: 's', caseDownRu: 'ы', caseUpRu: 'Ы', capsRu: 'Ы', shiftcapsRu: 'ы',
  },
  {
    keyCode: 'KeyD', caseDownEn: 'd', caseUpEn: 'D', capsEn: 'D', shiftcapsEn: 'd', caseDownRu: 'в', caseUpRu: 'В', capsRu: 'В', shiftcapsRu: 'в',
  },
  {
    keyCode: 'KeyF', caseDownEn: 'f', caseUpEn: 'F', capsEn: 'F', shiftcapsEn: 'f', caseDownRu: 'а', caseUpRu: 'А', capsRu: 'А', shiftcapsRu: 'а',
  },
  {
    keyCode: 'KeyG', caseDownEn: 'g', caseUpEn: 'G', capsEn: 'G', shiftcapsEn: 'g', caseDownRu: 'п', caseUpRu: 'П', capsRu: 'П', shiftcapsRu: 'п',
  },
  {
    keyCode: 'KeyH', caseDownEn: 'h', caseUpEn: 'H', capsEn: 'H', shiftcapsEn: 'h', caseDownRu: 'р', caseUpRu: 'Р', capsRu: 'Р', shiftcapsRu: 'р',
  },
  {
    keyCode: 'KeyJ', caseDownEn: 'j', caseUpEn: 'J', capsEn: 'J', shiftcapsEn: 'j', caseDownRu: 'о', caseUpRu: 'О', capsRu: 'О', shiftcapsRu: 'о',
  },
  {
    keyCode: 'KeyK', caseDownEn: 'k', caseUpEn: 'K', capsEn: 'K', shiftcapsEn: 'k', caseDownRu: 'л', caseUpRu: 'Л', capsRu: 'Л', shiftcapsRu: 'л',
  },
  {
    keyCode: 'KeyL', caseDownEn: 'l', caseUpEn: 'L', capsEn: 'L', shiftcapsEn: 'l', caseDownRu: 'д', caseUpRu: 'Д', capsRu: 'Д', shiftcapsRu: 'д',
  },
  {
    keyCode: 'Semicolon', caseDownEn: ';', caseUpEn: ':', capsEn: ';', shiftcapsEn: ':', caseDownRu: 'ж', caseUpRu: 'Ж', capsRu: 'Ж', shiftcapsRu: 'ж',
  },
  {
    keyCode: 'Quote', caseDownEn: '\'', caseUpEn: '"', capsEn: '\'', shiftcapsEn: '"', caseDownRu: 'э', caseUpRu: 'Э', capsRu: 'Э', shiftcapsRu: 'э',
  },
  {
    keyCode: 'Enter', caseDownEn: 'Enter', caseUpEn: 'Enter', capsEn: 'Enter', shiftcapsEn: 'Enter', caseDownRu: 'Enter', caseUpRu: 'Enter', capsRu: 'Enter', shiftcapsRu: 'Enter',
  },
  {
    keyCode: 'ShiftLeft', caseDownEn: 'Shift', caseUpEn: 'Shift', capsEn: 'Shift', shiftcapsEn: 'Shift', caseDownRu: 'Shift', caseUpRu: 'Shift', capsRu: 'Shift', shiftcapsRu: 'Shift',
  },
  {
    keyCode: 'KeyZ', caseDownEn: 'z', caseUpEn: 'Z', capsEn: 'Z', shiftcapsEn: 'z', caseDownRu: 'я', caseUpRu: 'Я', capsRu: 'Я', shiftcapsRu: 'я',
  },
  {
    keyCode: 'KeyX', caseDownEn: 'x', caseUpEn: 'X', capsEn: 'X', shiftcapsEn: 'x', caseDownRu: 'ч', caseUpRu: 'Ч', capsRu: 'Ч', shiftcapsRu: 'ч',
  },
  {
    keyCode: 'KeyC', caseDownEn: 'c', caseUpEn: 'C', capsEn: 'C', shiftcapsEn: 'c', caseDownRu: 'с', caseUpRu: 'С', capsRu: 'С', shiftcapsRu: 'с',
  },
  {
    keyCode: 'KeyV', caseDownEn: 'v', caseUpEn: 'V', capsEn: 'V', shiftcapsEn: 'v', caseDownRu: 'м', caseUpRu: 'М', capsRu: 'М', shiftcapsRu: 'м',
  },
  {
    keyCode: 'KeyB', caseDownEn: 'b', caseUpEn: 'B', capsEn: 'B', shiftcapsEn: 'b', caseDownRu: 'и', caseUpRu: 'И', capsRu: 'И', shiftcapsRu: 'и',
  },
  {
    keyCode: 'KeyN', caseDownEn: 'n', caseUpEn: 'N', capsEn: 'N', shiftcapsEn: 'n', caseDownRu: 'т', caseUpRu: 'Т', capsRu: 'Т', shiftcapsRu: 'т',
  },
  {
    keyCode: 'KeyM', caseDownEn: 'm', caseUpEn: 'M', capsEn: 'M', shiftcapsEn: 'm', caseDownRu: 'ь', caseUpRu: 'Ь', capsRu: 'Ь', shiftcapsRu: 'ь',
  },
  {
    keyCode: 'Comma', caseDownEn: ',', caseUpEn: '<', capsEn: ',', shiftcapsEn: '<', caseDownRu: 'б', caseUpRu: 'Б', capsRu: 'Б', shiftcapsRu: 'б',
  },
  {
    keyCode: 'Period', caseDownEn: '.', caseUpEn: '>', capsEn: '.', shiftcapsEn: '>', caseDownRu: 'ю', caseUpRu: 'Ю', capsRu: 'Ю', shiftcapsRu: 'ю',
  },
  {
    keyCode: 'Slash', caseDownEn: '/', caseUpEn: '?', capsEn: '/', shiftcapsEn: '?', caseDownRu: '.', caseUpRu: ',', capsRu: '.', shiftcapsRu: ',',
  },
  {
    keyCode: 'ArrowUp', caseDownEn: '▲', caseUpEn: '▲', capsEn: '▲', shiftcapsEn: '▲', caseDownRu: '▲', caseUpRu: '▲', capsRu: '▲', shiftcapsRu: '▲',
  },
  {
    keyCode: 'ShiftRight', caseDownEn: 'Shift', caseUpEn: 'Shift', capsEn: 'Shift', shiftcapsEn: 'Shift', caseDownRu: 'Shift', caseUpRu: 'Shift', capsRu: 'Shift', shiftcapsRu: 'Shift',
  },
  {
    keyCode: 'ControlLeft', caseDownEn: 'Ctrl', caseUpEn: 'Ctrl', capsEn: 'Ctrl', shiftcapsEn: 'Ctrl', caseDownRu: 'Ctrl', caseUpRu: 'Ctrl', capsRu: 'Ctrl', shiftcapsRu: 'Ctrl',
  },
  {
    keyCode: 'MetaLeft', caseDownEn: 'Win', caseUpEn: 'Win', capsEn: 'Win', shiftcapsEn: 'Win', caseDownRu: 'Win', caseUpRu: 'Win', capsRu: 'Win', shiftcapsRu: 'Win',
  },
  {
    keyCode: 'AltLeft', caseDownEn: 'Alt', caseUpEn: 'Alt', capsEn: 'Alt', shiftcapsEn: 'Alt', caseDownRu: 'Alt', caseUpRu: 'Alt', capsRu: 'Alt', shiftcapsRu: 'Alt',
  },
  {
    keyCode: 'Space', caseDownEn: '', caseUpEn: '', capsEn: '', shiftcapsEn: '', caseDownRu: '', caseUpRu: '', capsRu: '', shiftcapsRu: '',
  },
  {
    keyCode: 'AltRight', caseDownEn: 'Alt', caseUpEn: 'Alt', capsEn: 'Alt', shiftcapsEn: 'Alt', caseDownRu: 'Alt', caseUpRu: 'Alt', capsRu: 'Alt', shiftcapsRu: 'Alt',
  },
  {
    keyCode: 'ArrowLeft', caseDownEn: '◄', caseUpEn: '◄', capsEn: '◄', shiftcapsEn: '◄', caseDownRu: '◄', caseUpRu: '◄', capsRu: '◄', shiftcapsRu: '◄',
  },
  {
    keyCode: 'ArrowDown', caseDownEn: '▼', caseUpEn: '▼', capsEn: '▼', shiftcapsEn: '▼', caseDownRu: '▼', caseUpRu: '▼', capsRu: '▼', shiftcapsRu: '▼',
  },
  {
    keyCode: 'ArrowRight', caseDownEn: '►', caseUpEn: '►', capsEn: '►', shiftcapsEn: '►', caseDownRu: '►', caseUpRu: '►', capsRu: '►', shiftcapsRu: '►',
  },
  {
    keyCode: 'ControlRight', caseDownEn: 'Ctrl', caseUpEn: 'Ctrl', capsEn: 'Ctrl', shiftcapsEn: 'Ctrl', caseDownRu: 'Ctrl', caseUpRu: 'Ctrl', capsRu: 'Ctrl', shiftcapsRu: 'Ctrl',
  },
];

export default data;
