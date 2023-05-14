/* eslint-disable eqeqeq */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import addAndRemoveActive from './helper.js';
import getSelectText from './gettext.js';

const pressedKeys = {};

onkeyup = function (e) {
  delete pressedKeys[e.code];
};

const loop = () => Object.keys(pressedKeys).join('');

const initKeystroke = () => {
  const area = document.getElementById('input');
  document.onkeydown = function (event) {
    event.preventDefault();
    if (event.code in pressedKeys) return;
    pressedKeys[event.code] = true;
    const callLoop = loop();
    const capsLock = document.querySelector('.CapsLock');
    const caseDown = document.querySelectorAll('.caseDown');
    const caseUp = document.querySelectorAll('.caseUp');
    const caps = document.querySelectorAll('.caps');
    if (event.code === 'CapsLock' && !capsLock.classList.contains('active')) {
      capsLock.classList.add('active');
      caseDown.forEach((el) => {
        el.style.display = 'none';
      });
      caps.forEach((el) => {
        el.style.display = 'block';
      });
    } else if (
      event.code === 'CapsLock'
      && capsLock.classList.contains('active')
    ) {
      capsLock.classList.remove('active');
      caps.forEach((el) => {
        el.style.display = 'none';
      });
      caseUp.forEach((el) => {
        el.style.display = 'none';
      });
      caseDown.forEach((el) => {
        el.style.display = 'block';
      });
    } else if (
      event.code !== 'CapsLock'
      && event.code !== 'Backspace'
      && event.code !== 'Space'
      && event.code !== 'Tab'
      && event.code !== 'Enter'
      && event.code !== 'ShiftLeft'
      && event.code !== 'ShiftRight'
      && event.code !== 'ControlLeft'
      && event.code !== 'ControlRight'
      && event.code !== 'AltLeft'
      && event.code !== 'AltRight'
      && event.code !== 'MetaLeft'
      && event.code !== 'Delete'
    ) {
      const setCaps = document.querySelector('.CapsLock');
      const setClass = document.querySelector('.eng');
      const newComputedStyle = getComputedStyle(setClass);
      if (!setCaps.classList.contains('active') && newComputedStyle.display === 'block') {
        const prev = document.querySelector(`.${event.code} > .eng > .caseDown`).innerText;
        const startPos = area.selectionStart;
        const endPos = area.selectionEnd;
        const text = area.value;
        const textBeforeCursor = text.substring(0, startPos);
        const textAfterCursor = text.substring(endPos, text.length);
        const newText = textBeforeCursor + prev + textAfterCursor;
        area.value = newText;
        const newCursorPos = startPos + 1;
        area.selectionStart = newCursorPos;
        area.selectionEnd = newCursorPos;
        addAndRemoveActive(`.${event.code}`);
      } else if (!setCaps.classList.contains('active') && newComputedStyle.display === 'none') {
        const prev2 = document.querySelector(`.${event.code} > .rus > .caseDown`).innerText;
        const startPos = area.selectionStart;
        const endPos = area.selectionEnd;
        const text = area.value;
        const textBeforeCursor = text.substring(0, startPos);
        const textAfterCursor = text.substring(endPos, text.length);
        const newText = textBeforeCursor + prev2 + textAfterCursor;
        area.value = newText;
        const newCursorPos = startPos + 1;
        area.selectionStart = newCursorPos;
        area.selectionEnd = newCursorPos;
        addAndRemoveActive(`.${event.code}`);
      } else if (setCaps.classList.contains('active') && newComputedStyle.display === 'block') {
        const prev3 = document.querySelector(`.${event.code} > .eng > .caseUp`).innerText;
        const startPos = area.selectionStart;
        const endPos = area.selectionEnd;
        const text = area.value;
        const textBeforeCursor = text.substring(0, startPos);
        const textAfterCursor = text.substring(endPos, text.length);
        const newText = textBeforeCursor + prev3 + textAfterCursor;
        area.value = newText;
        const newCursorPos = startPos + 1;
        area.selectionStart = newCursorPos;
        area.selectionEnd = newCursorPos;
        addAndRemoveActive(`.${event.code}`);
      } else if (setCaps.classList.contains('active') && newComputedStyle.display === 'none') {
        const prev4 = document.querySelector(`.${event.code} > .rus > .caseUp`).innerText;
        const startPos = area.selectionStart;
        const endPos = area.selectionEnd;
        const text = area.value;
        const textBeforeCursor = text.substring(0, startPos);
        const textAfterCursor = text.substring(endPos, text.length);
        const newText = textBeforeCursor + prev4 + textAfterCursor;
        area.value = newText;
        const newCursorPos = startPos + 1;
        area.selectionStart = newCursorPos;
        area.selectionEnd = newCursorPos;
        addAndRemoveActive(`.${event.code}`);
      }
    } else if (event.code === 'Backspace') { // if the user removes the text from the end
      const newText = getSelectText();
      if (newText == null) {
        const cursorPosition = area.selectionStart;
        const values = area.value;
        if (values[cursorPosition - 1]) {
          event.preventDefault();
          area.value = values.substring(0, cursorPosition - 1) + values.substring(cursorPosition);
          area.selectionStart = cursorPosition - 1;
          area.selectionEnd = cursorPosition - 1;
        }
      } else { // if the user selects some text
        const cursorPosition = area.selectionStart;
        const cursorEnd = area.selectionEnd;
        const values = area.value;
        area.value = values.substring(0, cursorPosition) + values.substring(cursorEnd);
        area.selectionStart = cursorPosition;
        area.selectionEnd = cursorPosition;
      }
      addAndRemoveActive(`.${event.code}`);
    } else if (event.code === 'MetaLeft') {
      addAndRemoveActive(`.${event.code}`);
    } else if (event.code === 'Delete') {
      const newText = getSelectText();
      if (newText == null) {
        const cursorPosition = area.selectionStart;
        const values = area.value;
        if (values[cursorPosition - 1]) {
          event.preventDefault();
          area.value = values.substring(0, cursorPosition) + values.substring(cursorPosition + 1);
          area.selectionStart = cursorPosition;
          area.selectionEnd = cursorPosition;
        } else {
          event.preventDefault();
          area.value = values.substring(0, cursorPosition) + values.substring(cursorPosition + 1);
          area.selectionStart = cursorPosition;
          area.selectionEnd = cursorPosition;
        }
      } else { // if the user selects some text
        const cursorPosition = area.selectionStart;
        const cursorEnd = area.selectionEnd;
        const values = area.value;
        area.value = values.substring(0, cursorPosition) + values.substring(cursorEnd);
        area.selectionStart = cursorPosition;
        area.selectionEnd = cursorPosition;
      }
      addAndRemoveActive(`.${event.code}`);
    } else if (event.code == 'MetaLeft') {
      addAndRemoveActive(`.${event.code}`);
    } else if (callLoop === 'ControlLeftAltLeft' || callLoop === 'AltLeftControlLeft') {
      const displays = document.querySelector('.eng');
      const computedStyle = getComputedStyle(displays);
      if (computedStyle.display === 'block') {
        document.querySelector('.ControlLeft').classList.add('active');
        document.querySelector('.AltLeft').classList.add('active');
        document.querySelectorAll('.eng').forEach((el) => (el.style.display = 'none'));
        document.querySelectorAll('.rus').forEach((el) => (el.style.display = 'block'));
        localStorage.setItem('lang', 'block');
        setTimeout(() => {
          document.querySelector('.ControlLeft').classList.remove('active');
          document.querySelector('.AltLeft').classList.remove('active');
        }, 200);
      } else if (computedStyle.display === 'none') {
        document.querySelector('.ControlLeft').classList.add('active');
        document.querySelector('.AltLeft').classList.add('active');
        document.querySelectorAll('.eng').forEach((el) => (el.style.display = 'block'));
        document.querySelectorAll('.rus').forEach((el) => (el.style.display = 'none'));
        localStorage.setItem('lang', 'none');
        setTimeout(() => {
          document.querySelector('.ControlLeft').classList.remove('active');
          document.querySelector('.AltLeft').classList.remove('active');
        }, 200);
      }
    } else if (callLoop === 'ControlRightAltRight' || callLoop === 'AltRightControlRight') {
      const displays = document.querySelector('.eng');
      const computedStyle = getComputedStyle(displays);
      if (computedStyle.display === 'block') {
        document.querySelector('.ControlRight').classList.add('active');
        document.querySelector('.AltRight').classList.add('active');
        document.querySelectorAll('.eng').forEach((el) => (el.style.display = 'none'));
        document.querySelectorAll('.rus').forEach((el) => (el.style.display = 'block'));
        setTimeout(() => {
          document.querySelector('.ControlRight').classList.remove('active');
          document.querySelector('.AltRight').classList.remove('active');
        }, 200);
      } else if (computedStyle.display === 'none') {
        document.querySelector('.ControlRight').classList.add('active');
        document.querySelector('.AltRight').classList.add('active');
        document.querySelectorAll('.eng').forEach((el) => (el.style.display = 'block'));
        document.querySelectorAll('.rus').forEach((el) => (el.style.display = 'none'));
        setTimeout(() => {
          document.querySelector('.ControlRight').classList.remove('active');
          document.querySelector('.AltRight').classList.remove('active');
        }, 200);
      }
    } else if (event.code === 'Space') {
      event.preventDefault();
      const startPos = area.selectionStart;
      const endPos = area.selectionEnd;
      const text = area.value;
      const textBeforeCursor = text.substring(0, startPos);
      const textAfterCursor = text.substring(endPos, text.length);
      const newText = textBeforeCursor + event.key + textAfterCursor;
      area.value = newText;

      const newCursorPos = startPos + 1;
      area.selectionStart = newCursorPos;
      area.selectionEnd = newCursorPos;
      addAndRemoveActive(`.${event.code}`);
    } else if (event.code === 'Tab') {
      document.querySelector('.Tab').classList.add('active');
      const startPos = area.selectionStart;
      const endPos = area.selectionEnd;
      const text = area.value;
      const textBeforeCursor = text.substring(0, startPos);
      const textAfterCursor = text.substring(endPos, text.length);
      const newText = `${textBeforeCursor}    ${textAfterCursor}`;
      area.value = newText;
      const newCursorPos = startPos + 4;
      area.selectionStart = newCursorPos;
      area.selectionEnd = newCursorPos;
      addAndRemoveActive(`.${event.code}`);
    } else if (event.code === 'Enter') {
      const startPos = area.selectionStart;
      const endPos = area.selectionEnd;
      const text = area.value;
      const textBeforeCursor = text.substring(0, startPos);
      const textAfterCursor = text.substring(endPos, text.length);
      area.value = `${textBeforeCursor}\n${textAfterCursor}`;
      const newCursorPosition = textBeforeCursor.length + 1;
      area.selectionStart = newCursorPosition;
      area.selectionEnd = newCursorPosition;
      addAndRemoveActive(`.${event.code}`);
    } else if (event.code === 'ControlLeft') {
      area.value += '';
      addAndRemoveActive(`.${event.code}`);
    } else if (event.code === 'AltLeft') {
      area.value += '';
      addAndRemoveActive(`.${event.code}`);
    } else if (event.code === 'AltRight') {
      area.value += '';
      addAndRemoveActive(`.${event.code}`);
    } else if (event.code === 'ControlRight') {
      area.value += '';
      addAndRemoveActive(`.${event.code}`);
    } else if (event.code === 'ShiftLeft' && !capsLock.classList.contains('active')) {
      document.querySelector('.ShiftLeft').classList.add('active');
      caseDown.forEach((el) => (el.style.display = 'none'));
      caseUp.forEach((el) => (el.style.display = 'block'));
      document.onkeyup = function (ev) {
        if (ev.code === 'ShiftLeft') {
          document.querySelector('.ShiftLeft').classList.remove('active');
          caseDown.forEach((el) => (el.style.display = 'block'));
          caseUp.forEach((el) => (el.style.display = 'none'));
        }
      };
    } else if (event.code === 'ShiftLeft' && capsLock.classList.contains('active')) {
      document.querySelector('.ShiftLeft').classList.add('active');
      caseDown.forEach((el) => (el.style.display = 'block'));
      caseUp.forEach((el) => (el.style.display = 'none'));
      caps.forEach((el) => (el.style.display = 'none'));
      document.onkeyup = function (ev) {
        if (ev.code === 'ShiftLeft') {
          document.querySelector('.ShiftLeft').classList.remove('active');
          caseDown.forEach((el) => (el.style.display = 'none'));
          caseUp.forEach((el) => (el.style.display = 'block'));
        }
      };
    } else if (event.code === 'ShiftRight' && !capsLock.classList.contains('active')) {
      document.querySelector('.ShiftRight').classList.add('active');
      caseDown.forEach((el) => (el.style.display = 'none'));
      caseUp.forEach((el) => (el.style.display = 'block'));
      document.onkeyup = function (ev) {
        if (ev.code === 'ShiftRight') {
          document.querySelector('.ShiftRight').classList.remove('active');
          caseDown.forEach((el) => (el.style.display = 'block'));
          caseUp.forEach((el) => (el.style.display = 'none'));
        }
      };
    } else if (event.code === 'ShiftRight' && capsLock.classList.contains('active')) {
      document.querySelector('.ShiftRight').classList.add('active');
      caseDown.forEach((el) => (el.style.display = 'block'));
      caseUp.forEach((el) => (el.style.display = 'none'));
      caps.forEach((el) => (el.style.display = 'none'));
      document.onkeyup = function (ev) {
        if (ev.code === 'ShiftRight') {
          document.querySelector('.ShiftRight').classList.remove('active');
          caseDown.forEach((el) => (el.style.display = 'none'));
          caseUp.forEach((el) => (el.style.display = 'block'));
        }
      };
    }
  };
};

export default initKeystroke;
