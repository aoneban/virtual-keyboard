/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import getSelectText from './gettext.js';

export const initMouseClick = () => {
  const area = document.getElementById('input');
  const keys = document.querySelectorAll('.key');
  keys.forEach((el) => {
    if (!el.classList.contains('ShiftLeft') || !el.classList.contains('ShiftRight')) {
      if (!el.classList.contains('CapsLock')) {
        el.addEventListener('click', function () {
          if (this.classList.contains('Space')) {
            this.classList.add('active');
            const startPos = area.selectionStart;
            const endPos = area.selectionEnd;
            const text = area.value;
            const textBeforeCursor = text.substring(0, startPos);
            const textAfterCursor = text.substring(endPos, text.length);
            const newText = `${textBeforeCursor} ${textAfterCursor}`;
            area.value = newText;

            const newCursorPos = startPos + 1;
            area.selectionStart = newCursorPos;
            area.selectionEnd = newCursorPos;
            setTimeout(() => {
              this.classList.remove('active');
              document.getElementById('input').focus();
            }, 200);
          } else if (this.classList.contains('Tab')) {
            this.classList.add('active');
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
            setTimeout(() => {
              this.classList.remove('active');
              document.getElementById('input').focus();
            }, 200);
          } else if (this.classList.contains('Enter')) {
            this.classList.add('active');
            const startPos = area.selectionStart;
            const endPos = area.selectionEnd;
            const text = area.value;
            const textBeforeCursor = text.substring(0, startPos);
            const textAfterCursor = text.substring(endPos, text.length);
            area.value = `${textBeforeCursor}\n${textAfterCursor}`;
            const newCursorPosition = textBeforeCursor.length + 1;
            area.selectionStart = newCursorPosition;
            area.selectionEnd = newCursorPosition;
            setTimeout(() => {
              this.classList.remove('active');
              document.getElementById('input').focus();
            }, 200);
          } else if (this.classList.contains('MetaLeft')) {
            this.classList.add('active');
            setTimeout(() => {
              this.classList.remove('active');
              document.getElementById('input').focus();
            }, 200);
          } else if (this.classList.contains('AltRight') || this.classList.contains('AltLeft') || this.classList.contains('ControlRight') || this.classList.contains('ControlLeft')) {
            this.classList.add('active');
            area.value += '';
            setTimeout(() => {
              this.classList.remove('active');
              document.getElementById('input').focus();
            }, 200);
          } else if (this.classList.contains('Backspace')) { // if the user removes the text from the end
            const newText = getSelectText();
            if (newText == null) {
              const cursorPosition = area.selectionStart;
              const values = area.value;
              if (values[cursorPosition - 1]) {
                // eslint-disable-next-line max-len
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
            this.classList.add('active');
            setTimeout(() => {
              this.classList.remove('active');
              document.getElementById('input').focus();
            }, 200);
          } else if (this.classList.contains('Delete')) {
            const newText = getSelectText();
            if (newText == null) {
              const cursorPosition = area.selectionStart;
              const values = area.value;
              if (values[cursorPosition - 1]) {
                // eslint-disable-next-line max-len
                area.value = values.substring(0, cursorPosition) + values.substring(cursorPosition + 1);
                area.selectionStart = cursorPosition;
                area.selectionEnd = cursorPosition;
              } else {
                // eslint-disable-next-line max-len
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
            this.classList.add('active');
            setTimeout(() => {
              this.classList.remove('active');
              document.getElementById('input').focus();
            }, 200);
          } else if (this.classList.contains('ShiftRight') || this.classList.contains('ShiftLeft')) {
            area.value = '';
          } else {
            const item = this.innerText;
            this.classList.add('active');
            const startPos = area.selectionStart;
            const endPos = area.selectionEnd;
            const text = area.value;
            const textBeforeCursor = text.substring(0, startPos);
            const textAfterCursor = text.substring(endPos, text.length);
            const newText = textBeforeCursor + item + textAfterCursor;
            area.value = newText;

            const newCursorPos = startPos + 1;
            area.selectionStart = newCursorPos;
            area.selectionEnd = newCursorPos;
            setTimeout(() => {
              this.classList.remove('active');
              document.getElementById('input').focus();
            }, 200);
            setTimeout(() => {
              this.classList.remove('active');
              document.getElementById('input').focus();
            }, 200);
          }
        });
      }
    }
  });
};

export const initMouseClickCapsLock = () => {
  const capsLock = document.querySelector('.CapsLock');
  capsLock.addEventListener('click', () => {
    const caseDown = document.querySelectorAll('.caseDown');
    const caps = document.querySelectorAll('.caps');
    const caseUp = document.querySelectorAll('.caseUp');
    if (
      capsLock.classList.contains('CapsLock')
        && !capsLock.classList.contains('active')
    ) {
      capsLock.classList.add('active');
      caseDown.forEach((el) => {
        el.style.display = 'none';
      });
      caps.forEach((el) => {
        el.style.display = 'block';
      });
    } else {
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
    }
  });
};

export const mouseHandlingShiftLeft = () => {
  document.querySelector('.ShiftLeft').addEventListener('mousedown', () => {
    const caseDown = document.querySelectorAll('.caseDown');
    const caseUp = document.querySelectorAll('.caseUp');
    const caps = document.querySelectorAll('.caps');
    const capsLock = document.querySelector('.CapsLock');

    if (!capsLock.classList.contains('active')) {
      document.querySelector('.ShiftLeft').classList.add('active');
      caseDown.forEach((el) => (el.style.display = 'none'));
      caseUp.forEach((el) => (el.style.display = 'block'));
    } else if (capsLock.classList.contains('active')) {
      document.querySelector('.ShiftLeft').classList.add('active');
      caseDown.forEach((el) => (el.style.display = 'block'));
      caseUp.forEach((el) => (el.style.display = 'none'));
      caps.forEach((el) => (el.style.display = 'none'));
    }
  });

  document.querySelector('.ShiftLeft').addEventListener('mouseup', () => {
    const caseDown = document.querySelectorAll('.caseDown');
    const caseUp = document.querySelectorAll('.caseUp');
    const capsLock = document.querySelector('.CapsLock');
    if (!capsLock.classList.contains('active')) {
      document.querySelector('.ShiftLeft').classList.remove('active');
      caseDown.forEach((el) => (el.style.display = 'block'));
      caseUp.forEach((el) => (el.style.display = 'none'));
    } else if (capsLock.classList.contains('active')) {
      document.querySelector('.ShiftLeft').classList.remove('active');
      caseDown.forEach((el) => (el.style.display = 'none'));
      caseUp.forEach((el) => (el.style.display = 'block'));
    }
  });
};

export const mouseHandlingShiftRight = () => {
  document.querySelector('.ShiftRight').addEventListener('mousedown', () => {
    const caseDown = document.querySelectorAll('.caseDown');
    const caseUp = document.querySelectorAll('.caseUp');
    const caps = document.querySelectorAll('.caps');
    const capsLock = document.querySelector('.CapsLock');

    if (!capsLock.classList.contains('active')) {
      document.querySelector('.ShiftRight').classList.add('active');
      caseDown.forEach((el) => (el.style.display = 'none'));
      caseUp.forEach((el) => (el.style.display = 'block'));
    } else if (capsLock.classList.contains('active')) {
      document.querySelector('.ShiftRight').classList.add('active');
      caseDown.forEach((el) => (el.style.display = 'block'));
      caseUp.forEach((el) => (el.style.display = 'none'));
      caps.forEach((el) => (el.style.display = 'none'));
    }
  });

  document.querySelector('.ShiftRight').addEventListener('mouseup', () => {
    const caseDown = document.querySelectorAll('.caseDown');
    const caseUp = document.querySelectorAll('.caseUp');
    const capsLock = document.querySelector('.CapsLock');
    if (!capsLock.classList.contains('active')) {
      document.querySelector('.ShiftRight').classList.remove('active');
      caseDown.forEach((el) => (el.style.display = 'block'));
      caseUp.forEach((el) => (el.style.display = 'none'));
    } else if (capsLock.classList.contains('active')) {
      document.querySelector('.ShiftRight').classList.remove('active');
      caseDown.forEach((el) => (el.style.display = 'none'));
      caseUp.forEach((el) => (el.style.display = 'block'));
    }
  });
};
