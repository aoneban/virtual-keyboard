import data from './data.js';

const genereteKeyboard = (lang) => {
  const container = document.createElement('div');
  container.classList.add('container');

  const titleText = document.createElement('h1');
  titleText.className = 'text-center';
  titleText.textContent = 'Virtual keyboard';

  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.className = 'keyboard__wrapper';

  const textArea = document.createElement('textarea');
  textArea.setAttribute('type', 'text');
  textArea.setAttribute('name', 'text');
  textArea.setAttribute('id', 'input');
  textArea.setAttribute('cols', '30');
  textArea.setAttribute('rows', '10');

  const description = document.createElement('p');
  description.className = 'description';
  description.textContent = 'The keyboard was created in the Windows operating system. To switch the language combination: left ctrl + alt';

  const row = document.createElement('div');
  row.className = 'keyboard__row';

  data.map((el) => {
    if (lang === 'none') {
      const key = document.createElement('div');
      key.classList.add('keyboard__key', 'key', `${el.keyCode}`);

      const eng = document.createElement('span');
      eng.className = 'eng';
      eng.style.display = 'block';
      const caseDownEn = document.createElement('span');
      caseDownEn.className = 'caseDown';
      caseDownEn.textContent = el.caseDownEn;
      const caseUpEn = document.createElement('span');
      caseUpEn.className = 'caseUp';
      caseUpEn.textContent = el.caseUpEn;
      const capsEn = document.createElement('span');
      capsEn.className = 'caps';
      capsEn.textContent = el.capsEn;
      const shiftCapsEn = document.createElement('span');
      shiftCapsEn.className = 'shiftcaps';
      shiftCapsEn.textContent = el.shiftcapsEn;
      eng.append(caseDownEn, caseUpEn, capsEn, shiftCapsEn);

      const rus = document.createElement('span');
      rus.className = 'rus';
      rus.style.display = 'none';
      const caseDownRu = document.createElement('span');
      caseDownRu.className = 'caseDown';
      caseDownRu.textContent = el.caseDownRu;
      const caseUpRu = document.createElement('span');
      caseUpRu.className = 'caseUp';
      caseUpRu.textContent = el.caseUpRu;
      const capsRu = document.createElement('span');
      capsRu.className = 'caps';
      capsRu.textContent = el.capsRu;
      const shiftCapsRu = document.createElement('span');
      shiftCapsRu.className = 'shiftcaps';
      shiftCapsRu.textContent = el.shiftcapsRu;
      rus.append(caseDownRu, caseUpRu, capsRu, shiftCapsRu);
      key.append(eng, rus);
      return row.append(key);
    }
    const key = document.createElement('div');
    key.classList.add('keyboard__key', 'key', `${el.keyCode}`);

    const eng = document.createElement('span');
    eng.className = 'eng';
    eng.style.display = 'none';
    const caseDownEn = document.createElement('span');
    caseDownEn.className = 'caseDown';
    caseDownEn.textContent = el.caseDownEn;
    const caseUpEn = document.createElement('span');
    caseUpEn.className = 'caseUp';
    caseUpEn.textContent = el.caseUpEn;
    const capsEn = document.createElement('span');
    capsEn.className = 'caps';
    capsEn.textContent = el.capsEn;
    const shiftCapsEn = document.createElement('span');
    shiftCapsEn.className = 'shiftcaps';
    shiftCapsEn.textContent = el.shiftcapsEn;
    eng.append(caseDownEn, caseUpEn, capsEn, shiftCapsEn);

    const rus = document.createElement('span');
    rus.className = 'rus';
    rus.style.display = 'block';
    const caseDownRu = document.createElement('span');
    caseDownRu.className = 'caseDown';
    caseDownRu.textContent = el.caseDownRu;
    const caseUpRu = document.createElement('span');
    caseUpRu.className = 'caseUp';
    caseUpRu.textContent = el.caseUpRu;
    const capsRu = document.createElement('span');
    capsRu.className = 'caps';
    capsRu.textContent = el.capsRu;
    const shiftCapsRu = document.createElement('span');
    shiftCapsRu.className = 'shiftcaps';
    shiftCapsRu.textContent = el.shiftcapsRu;
    rus.append(caseDownRu, caseUpRu, capsRu, shiftCapsRu);
    key.append(eng, rus);
    return row.append(key);
  });

  keyboardWrapper.append(textArea, row);
  container.append(titleText, keyboardWrapper, description);
  document.body.append(container);
};

export default genereteKeyboard;
