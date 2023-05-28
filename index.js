import keyKeyboard from './module/keyboard.js';

if (!localStorage.getItem('language')) {
  localStorage.setItem('language', 'english');
}

const mainContainer = document.createElement('div');
const keyboardText = document.createElement('textarea');
const keyboardContainer = document.createElement('div');
const keyboardSystem = document.createElement('p');
const keyboardLanguage = document.createElement('p');
keyboardSystem.innerText = 'Клавиатура создана в операционной системе Windows';
keyboardLanguage.innerText = 'Для переключения языковой раскладки используется комбинация клавиш левые Ctrl и Alt';
mainContainer.classList.add('main-container');
keyboardText.classList.add('keyboard-text-form');
keyboardContainer.classList.add('keyboard-container');
keyboardSystem.classList.add('keyboard-text');
keyboardLanguage.classList.add('keyboard-text');

class MyKeyboard {
  constructor() {
    mainContainer.append(keyboardText);
    mainContainer.append(keyboardContainer);
    for (let i = 0; i < keyKeyboard.attribute.length; i += 1) {
      const key = document.createElement('div');
      key.setAttribute('data', keyKeyboard.attribute[i]);
      key.classList.add('key');
      keyboardContainer.append(key);
    }
    mainContainer.append(keyboardSystem);
    mainContainer.append(keyboardLanguage);
    document.body.append(mainContainer);
    keyboardText.focus();
  }

  addKey(argument) {
    this.argument = argument;
    const key = document.querySelectorAll('.key');
    for (let i = 0; i < argument.length; i += 1) {
      key[i].innerText = argument[i];
      if (keyKeyboard.aux.includes(key[i].innerText)) {
        key[i].classList.add('key-aux');
      } else {
        key[i].classList.add('key-basic');
      }
    }
  }

  capsKeyboard(argument) {
    this.argument = argument;
    const arrCaps = [];
    argument.forEach((element) => {
      if (keyKeyboard.aux.includes(element)) {
        arrCaps.push(element);
      } else {
        arrCaps.push(element.toUpperCase());
      }
    });
    return arrCaps;
  }

  inputText(argument) {
    this.argument = argument;
    if (argument.getAttribute('data') === 'Enter') {
      keyboardText.setRangeText(
        '\n',
        keyboardText.selectionStart,
        keyboardText.selectionEnd,
        'end',
      );
    } else if (argument.getAttribute('data') === 'Tab') {
      keyboardText.setRangeText(
        '\t',
        keyboardText.selectionStart,
        keyboardText.selectionEnd,
        'end',
      );
    } else if (argument.getAttribute('data') === 'Backspace') {
      if (keyboardText.selectionStart !== keyboardText.selectionEnd) {
        keyboardText.setRangeText(
          '',
          keyboardText.selectionStart,
          keyboardText.selectionEnd,
          'select',
        );
      } else if (keyboardText.selectionStart === keyboardText.selectionEnd) {
        keyboardText.setRangeText(
          '',
          keyboardText.selectionStart - 1,
          keyboardText.selectionStart,
          'select',
        );
      }
    } else if (argument.getAttribute('data') === 'Del') {
      if (keyboardText.selectionStart !== keyboardText.selectionEnd) {
        keyboardText.setRangeText(
          '',
          keyboardText.selectionStart,
          keyboardText.selectionEnd,
          'select',
        );
      } else if (keyboardText.selectionStart === keyboardText.selectionEnd) {
        keyboardText.setRangeText(
          '',
          keyboardText.selectionStart,
          keyboardText.selectionStart + 1,
          'select',
        );
      }
    } else if (argument.getAttribute('data') === 'Space') {
      if (keyboardText.selectionStart !== keyboardText.selectionEnd) {
        keyboardText.setRangeText(
          ' ',
          keyboardText.selectionStart,
          keyboardText.selectionEnd,
          'end',
        );
      } else if (keyboardText.selectionStart === keyboardText.selectionEnd) {
        keyboardText.setRangeText(
          ' ',
          keyboardText.selectionStart,
          keyboardText.selectionStart,
          'end',
        );
      }
    } else if (
      argument.getAttribute('data') === 'ControlLeft' || argument.getAttribute('data') === 'MetaLeft'
      || argument.getAttribute('data') === 'AltLeft' || argument.getAttribute('data') === 'AltRight' || argument.getAttribute('data') === 'ControlRight'
    ) {
      keyboardText.setRangeText(
        '',
        keyboardText.selectionStart,
        keyboardText.selectionStart,
        'end',
      );
    } else {
      keyboardText.setRangeText(
        argument.innerText,
        keyboardText.selectionStart,
        keyboardText.selectionEnd,
        'end',
      );
    }
  }
}

const keyboard = new MyKeyboard();
keyboard.addKey(keyKeyboard[`${localStorage.getItem('language')}`]);

function capsLock() {
  if (keyboardContainer.classList.contains('caps')) {
    keyboard.addKey(keyboard.capsKeyboard(keyKeyboard[`${localStorage.getItem('language')}`]));
  } else {
    keyboard.addKey(keyKeyboard[`${localStorage.getItem('language')}`]);
  }
}

function shiftDown() {
  if (!keyboardContainer.classList.contains('caps')) {
    keyboard.addKey(keyboard.capsKeyboard(keyKeyboard[`${localStorage.getItem('language')}shift`]));
  } else {
    keyboard.addKey(keyKeyboard[`${localStorage.getItem('language')}shift`]);
  }
}

function shiftUp() {
  if (!keyboardContainer.classList.contains('caps')) {
    keyboard.addKey(keyKeyboard[`${localStorage.getItem('language')}`]);
  } else {
    keyboard.addKey(keyboard.capsKeyboard(keyKeyboard[`${localStorage.getItem('language')}`]));
  }
}

keyboardContainer.addEventListener('click', (event) => {
  if (event.target.getAttribute('data') === 'CapsLock') {
    keyboardContainer.classList.toggle('caps');
    event.target.classList.toggle('key-active');
    capsLock();
  } else if (
    keyKeyboard.attribute.includes(event.target.getAttribute('data')) && event.target.getAttribute('data') !== 'ShiftLeft'
    && event.target.getAttribute('data') !== 'ShiftRight'
  ) {
    keyboard.inputText(event.target);
  }
});

keyboardContainer.addEventListener('mousedown', (event) => {
  if (event.target.getAttribute('data') === 'ShiftRight' || event.target.getAttribute('data') === 'ShiftLeft') {
    shiftDown();
  }
});

keyboardContainer.addEventListener('mouseup', (event) => {
  if (event.target.getAttribute('data') === 'ShiftRight' || event.target.getAttribute('data') === 'ShiftLeft') {
    shiftUp();
  }
});

document.addEventListener('keydown', (event) => {
  const key = document.querySelectorAll('.key');
  key.forEach((element) => {
    if (
      (event.code === 'ShiftRight' && event.code === element.getAttribute('data')) || (event.code === 'ShiftLeft' && event.code === element.getAttribute('data'))
    ) {
      event.preventDefault();
      element.classList.add('key-active');
      shiftDown();
    } else if (
      event.code === element.getAttribute('data') && event.code !== 'CapsLock'
    ) {
      event.preventDefault();
      element.classList.add('key-active');
      keyboard.inputText(element);
    }
  });
});

document.addEventListener('keyup', (event) => {
  const key = document.querySelectorAll('.key');
  key.forEach((element) => {
    if (
      event.code === 'CapsLock' && element.getAttribute('data') === event.code
    ) {
      event.preventDefault();
      keyboardContainer.classList.toggle('caps');
      element.classList.toggle('key-active');
      capsLock();
    } else if (
      (event.code === 'ShiftRight' && event.code === element.getAttribute('data')) || (event.code === 'ShiftLeft' && event.code === element.getAttribute('data'))
    ) {
      event.preventDefault();
      element.classList.remove('key-active');
      shiftUp();
    } else if (event.code === element.getAttribute('data')) {
      element.classList.remove('key-active');
    }
  });
});

function languageSet(func, ...codes) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    let toReturn = false;
    codes.forEach((code) => {
      if (!pressed.has(code)) {
        toReturn = true;
      }
    });
    if (toReturn) return;
    pressed.clear();
    func();
  });
  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

languageSet(
  () => {
    if (localStorage.getItem('language') === 'english') {
      localStorage.setItem('language', 'russian');
    } else if (localStorage.getItem('language') === 'russian') {
      localStorage.setItem('language', 'english');
    }
    capsLock();
  },
  'ControlLeft',
  'AltLeft',
);
