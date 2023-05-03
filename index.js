import keyBasicEnglishItemOne from './module/keyBasicEnglishItemOne.js';
import keyBasicEnglishItemTwo from './module/keyBasicEnglishItemTwo.js';
import keyBasicEnglishItemThree from './module/keyBasicEnglishItemThree.js';
import keyBasicEnglishItemFour from './module/keyBasicEnglishItemFour.js';
import keyAuxItem from './module/keyAuxItem.js';
import keyBasicEnglishShiftItemOne from './module/keyBasicEnglishShiftItemOne.js';
import keyBasicEnglishCapsItemTwo from './module/keyBasicEnglishCapsItemTwo.js';
import keyBasicEnglishCapsItemThree from './module/keyBasicEnglishCapsItemThree.js';
import keyBasicEnglishCapsItemFour from './module/keyBasicEnglishCapsItemFour.js';
import keyBasicEnglishShiftItemTwo from './module/keyBasicEnglishShiftItemTwo.js';
import keyBasicEnglishShiftItemThree from './module/keyBasicEnglishShiftItemThree.js';
import keyBasicEnglishShiftItemFour from './module/keyBasicEnglishShiftItemFour.js';
import keyBasicRussianItemOne from './module/keyBasicRussianItemOne.js';
import keyBasicRussianItemTwo from './module/keyBasicRussianItemTwo.js';
import keyBasicRussianItemThree from './module/keyBasicRussianItemThree.js';
import keyBasicRussianItemFour from './module/keyBasicRussianItemFour.js';
import keyBasicRussianShiftItemOne from './module/keyBasicRussianShiftItemOne.js';
import keyBasicRussianShiftCapsItemTwo from './module/keyBasicRussianShiftCapsItemTwo.js';
import keyBasicRussianShiftItemThree from './module/keyBasicRussianShiftItemThree.js';
import keyBasicRussianShiftItemFour from './module/keyBasicRussianShiftItemFour.js';
import keyBasicRussianCapsItemOne from './module/keyBasicRussianCapsItemOne.js';
import keyBasicRussianCapsItemThree from './module/keyBasicRussianCapsItemThree.js';
import keyBasicRussianCapsItemFour from './module/keyBasicRussianCapsItemFour.js';
import attributeKeyEnglish from './module/attributeKeyEnglish.js';
import attributeKeyRussian from './module/attributeKeyRussian.js';
import keyBasicEnglishCSTwo from './module/keyBasicEnglishCSTwo.js';
import keyBasicEnglishCSThree from './module/keyBasicEnglishCSThree.js';
import keyBasicEnglishCSFour from './module/keyBasicEnglishCSFour.js';
import keyBasicRussianCSOne from './module/keyBasicRussianCSOne.js';
import keyBasicRussianCSThree from './module/keyBasicRussianCSThree.js';
import keyBasicRussianCSFour from './module/keyBasicRussianCSFour.js';

localStorage.setItem('caps', 'false');
localStorage.setItem('shift', 'false');
if (!localStorage.getItem('Language')) {
  localStorage.setItem('Language', 'English');
}

//  Создание переменных

const mainContainer = document.createElement('div');
const keyboardText = document.createElement('textarea');
const keyboardContainer = document.createElement('div');
let keyboardContainerItem = document.createElement('div');
const keyboardContainerItemOne = document.createElement('div');
const keyboardContainerItemTwo = document.createElement('div');
const keyboardContainerItemThree = document.createElement('div');
const keyboardContainerItemFour = document.createElement('div');
const keyboardSystem = document.createElement('p');
const keyboardLanguage = document.createElement('p');

// Присвоение переменным классов

mainContainer.classList.add('main-container');
keyboardText.classList.add('keyboard-text-form');
keyboardContainer.classList.add('keyboard-container');
keyboardSystem.classList.add('keyboard-text');
keyboardLanguage.classList.add('keyboard-text');
keyboardContainerItemOne.classList.add('keyboard-container-item-number');
keyboardContainerItemTwo.classList.add('keyboard-container-item-number');
keyboardContainerItemThree.classList.add('keyboard-container-item-number');
keyboardContainerItemFour.classList.add('keyboard-container-item-number');
document.body.append(mainContainer);

// Создание клавиатуры

function createKeyboardItemBasic(arr) {
  keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  arr.forEach((element) => {
    const keyBasic = document.createElement('div');
    if (keyAuxItem.includes(element) && element !== '\u0020') {
      keyBasic.classList.add('key-aux');
    }
    if (keyAuxItem.includes(element) && element === '\u0020') {
      keyBasic.classList.add('key-space');
    }
    if (!keyAuxItem.includes(element)) {
      keyBasic.classList.add('key-basic');
    }
    keyBasic.innerText = element;
    if (localStorage.getItem('Language') === 'English') {
      keyBasic.setAttribute(
        'data',
        `${attributeKeyEnglish[keyBasic.innerText]}`,
      );
    } else if (localStorage.getItem('Language') === 'Russian') {
      keyBasic.setAttribute(
        'data',
        `${attributeKeyRussian[keyBasic.innerText]}`,
      );
    }
    if (keyBasic.innerText === 'Ctrl') {
      keyBasic.classList.add('ctrl-left');
    }
    if (keyBasic.innerText === 'Alt') {
      keyBasic.classList.add('alt-left');
    }
    keyboardContainerItem.append(keyBasic);
  });
  return keyboardContainerItem;
}

function createKeyboardItemOne(arg) {
  keyboardContainerItemOne.append(createKeyboardItemBasic(arg));
  keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  const keyBackspace = document.createElement('div');
  keyBackspace.classList.add('key-aux');
  keyBackspace.innerText = 'Backspace';
  keyBackspace.setAttribute('data', 'Backspace');
  keyboardContainerItem.append(keyBackspace);
  keyboardContainerItemOne.append(keyboardContainerItem);
  keyboardContainer.append(keyboardContainerItemOne);
}

function createKeyboardItemTwo(arg) {
  keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  const keyTab = document.createElement('div');
  keyTab.classList.add('key-aux');
  keyTab.innerText = 'Tab';
  keyTab.setAttribute('data', 'Tab');
  keyboardContainerItem.append(keyTab);
  keyboardContainerItemTwo.append(keyboardContainerItem);
  keyboardContainerItemTwo.append(createKeyboardItemBasic(arg));
  keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  const keyDel = document.createElement('div');
  keyDel.classList.add('key-aux');
  keyDel.innerText = 'Del';
  keyDel.setAttribute('data', 'Delete');
  keyboardContainerItem.append(keyDel);
  keyboardContainerItemTwo.append(keyboardContainerItem);
  keyboardContainer.append(keyboardContainerItemTwo);
}

function createKeyboardItemThree(arg) {
  keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  const keyCapsLock = document.createElement('div');
  keyCapsLock.classList.add('key-aux');
  if (localStorage.getItem('caps') === 'true') {
    keyCapsLock.classList.add('key-active');
  }
  keyCapsLock.innerText = 'Caps Lock';
  keyCapsLock.setAttribute('data', 'CapsLock');
  keyboardContainerItem.append(keyCapsLock);
  keyboardContainerItemThree.append(keyboardContainerItem);
  keyboardContainerItemThree.append(createKeyboardItemBasic(arg));
  keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  const keyEnter = document.createElement('div');
  keyEnter.classList.add('key-aux');
  keyEnter.innerText = 'Enter';
  keyEnter.setAttribute('data', 'Enter');
  keyboardContainerItem.append(keyEnter);
  keyboardContainerItemThree.append(keyboardContainerItem);
  keyboardContainer.append(keyboardContainerItemThree);
}

function createKeyboardItemFour(arg) {
  keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  const keyShiftLeft = document.createElement('div');
  keyShiftLeft.classList.add('key-aux');
  if (localStorage.getItem('shift') === 'true') {
    keyShiftLeft.classList.add('key-active');
  }
  keyShiftLeft.innerText = 'Shift';
  keyShiftLeft.setAttribute('data', 'ShiftLeft');
  keyboardContainerItem.append(keyShiftLeft);
  keyboardContainerItemFour.append(keyboardContainerItem);
  keyboardContainerItemFour.append(createKeyboardItemBasic(arg));
  keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  const ArrowUp = document.createElement('div');
  ArrowUp.classList.add('key-aux');
  ArrowUp.innerText = '\u2191';
  ArrowUp.setAttribute('data', 'ArrowUp');
  keyboardContainerItem.append(ArrowUp);
  const keyShiftRight = document.createElement('div');
  keyShiftRight.classList.add('key-aux');
  if (localStorage.getItem('shift') === 'true') {
    keyShiftLeft.classList.add('key-active');
  }
  keyShiftRight.innerText = 'Shift';
  keyShiftRight.setAttribute('data', 'ShiftRight');
  keyboardContainerItem.append(keyShiftRight);
  keyboardContainerItemFour.append(keyboardContainerItem);
  keyboardContainer.append(keyboardContainerItemFour);
}

function createKeyboardItemAux(arg) {
  keyboardContainerItem.append(createKeyboardItemBasic(arg));
  keyboardContainer.append(keyboardContainerItem);
}

function removeAll() {
  document
    .querySelectorAll('.key-basic, .key-aux, .key-space')
    .forEach((element) => {
      element.remove();
    });
  document.querySelectorAll('.keyboard-container-item').forEach((element) => {
    element.remove();
  });
  document
    .querySelectorAll('.keyboard-container-item-number')
    .forEach((element) => {
      element.remove();
    });
  keyboardContainer.remove();
}

function createKeyboard() {
  keyboardSystem.innerText = 'Клавиатура создана в операционной системе Windows';
  keyboardLanguage.innerText = 'Для переключения языковой раскладки используется комбинация клавиш левые Ctrl и Alt';
  if (localStorage.getItem('Language') === 'English') {
    if (
      localStorage.getItem('caps') === 'false' && localStorage.getItem('shift') === 'false'
    ) {
      createKeyboardItemOne(keyBasicEnglishItemOne);
      createKeyboardItemTwo(keyBasicEnglishItemTwo);
      createKeyboardItemThree(keyBasicEnglishItemThree);
      createKeyboardItemFour(keyBasicEnglishItemFour);
      createKeyboardItemAux(keyAuxItem);
    }
    if (
      localStorage.getItem('caps') === 'true' && localStorage.getItem('shift') === 'false'
    ) {
      createKeyboardItemOne(keyBasicEnglishItemOne);
      createKeyboardItemTwo(keyBasicEnglishCapsItemTwo);
      createKeyboardItemThree(keyBasicEnglishCapsItemThree);
      createKeyboardItemFour(keyBasicEnglishCapsItemFour);
      createKeyboardItemAux(keyAuxItem);
    }
    if (
      localStorage.getItem('caps') === 'false' && localStorage.getItem('shift') === 'true'
    ) {
      createKeyboardItemOne(keyBasicEnglishShiftItemOne);
      createKeyboardItemTwo(keyBasicEnglishShiftItemTwo);
      createKeyboardItemThree(keyBasicEnglishShiftItemThree);
      createKeyboardItemFour(keyBasicEnglishShiftItemFour);
      createKeyboardItemAux(keyAuxItem);
    }
    if (
      localStorage.getItem('caps') === 'true' && localStorage.getItem('shift') === 'true'
    ) {
      createKeyboardItemOne(keyBasicEnglishShiftItemOne);
      createKeyboardItemTwo(keyBasicEnglishCSTwo);
      createKeyboardItemThree(keyBasicEnglishCSThree);
      createKeyboardItemFour(keyBasicEnglishCSFour);
      createKeyboardItemAux(keyAuxItem);
    }
  } else if (localStorage.getItem('Language') === 'Russian') {
    if (
      localStorage.getItem('caps') === 'false' && localStorage.getItem('shift') === 'false'
    ) {
      createKeyboardItemOne(keyBasicRussianItemOne);
      createKeyboardItemTwo(keyBasicRussianItemTwo);
      createKeyboardItemThree(keyBasicRussianItemThree);
      createKeyboardItemFour(keyBasicRussianItemFour);
      createKeyboardItemAux(keyAuxItem);
    }
    if (
      localStorage.getItem('caps') === 'true' && localStorage.getItem('shift') === 'false'
    ) {
      createKeyboardItemOne(keyBasicRussianCapsItemOne);
      createKeyboardItemTwo(keyBasicRussianShiftCapsItemTwo);
      createKeyboardItemThree(keyBasicRussianCapsItemThree);
      createKeyboardItemFour(keyBasicRussianCapsItemFour);
      createKeyboardItemAux(keyAuxItem);
    }
    if (
      localStorage.getItem('caps') === 'false' && localStorage.getItem('shift') === 'true'
    ) {
      createKeyboardItemOne(keyBasicRussianShiftItemOne);
      createKeyboardItemTwo(keyBasicRussianShiftCapsItemTwo);
      createKeyboardItemThree(keyBasicRussianShiftItemThree);
      createKeyboardItemFour(keyBasicRussianShiftItemFour);
      createKeyboardItemAux(keyAuxItem);
    }
    if (
      localStorage.getItem('caps') === 'true' && localStorage.getItem('shift') === 'true'
    ) {
      createKeyboardItemOne(keyBasicRussianCSOne);
      createKeyboardItemTwo(keyBasicRussianItemTwo);
      createKeyboardItemThree(keyBasicRussianCSThree);
      createKeyboardItemFour(keyBasicRussianCSFour);
      createKeyboardItemAux(keyAuxItem);
    }
  }
  mainContainer.append(keyboardText);
  mainContainer.append(keyboardContainer);
  mainContainer.append(keyboardSystem);
  mainContainer.append(keyboardLanguage);
  keyboardText.focus();
  return mainContainer;
}

window.addEventListener('DOMContentLoaded', createKeyboard());
keyboardText.focus();

document.querySelectorAll('.ctrl-left')[1].setAttribute('data', 'ControlRight');
document.querySelectorAll('.alt-left')[1].setAttribute('data', 'AltRight');

function inputText() {
  mainContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('key-basic')) {
      keyboardText.setRangeText(
        event.target.innerText,
        keyboardText.selectionStart,
        keyboardText.selectionEnd,
        'end',
      );
    }
    if (event.target.innerText === 'Enter') {
      keyboardText.setRangeText(
        '\n',
        keyboardText.selectionStart,
        keyboardText.selectionEnd,
        'end',
      );
    }
    if (event.target.innerText === 'Tab') {
      keyboardText.setRangeText(
        '\t',
        keyboardText.selectionStart,
        keyboardText.selectionEnd,
        'end',
      );
    }
    if (event.target.innerText === 'Backspace') {
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
    }
    if (event.target.innerText === 'Del') {
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
    }
    if (event.target.innerText === '\u2190') {
      keyboardText.setRangeText(
        event.target.innerText,
        keyboardText.selectionStart,
        keyboardText.selectionEnd,
        'end',
      );
    }
    if (event.target.innerText === '\u2193') {
      keyboardText.setRangeText(
        event.target.innerText,
        keyboardText.selectionStart,
        keyboardText.selectionEnd,
        'end',
      );
    }
    if (event.target.innerText === '\u2192') {
      keyboardText.setRangeText(
        event.target.innerText,
        keyboardText.selectionStart,
        keyboardText.selectionEnd,
        'end',
      );
    }
    if (event.target.innerText === '\u2191') {
      keyboardText.setRangeText(
        event.target.innerText,
        keyboardText.selectionStart,
        keyboardText.selectionEnd,
        'end',
      );
    }
    if (event.target.classList.contains('key-space')) {
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
    }
  });
}

inputText();

function capsMove() {
  mainContainer.addEventListener('click', (event) => {
    if (event.target.innerText === 'Caps Lock') {
      if (localStorage.getItem('caps') === 'false') {
        localStorage.setItem('caps', 'true');
      } else {
        localStorage.setItem('caps', 'false');
      }
    }
    removeAll();
    createKeyboard();
  });
}

function shiftMove() {
  mainContainer.addEventListener('mousedown', (event) => {
    if (event.target.innerText === 'Shift') {
      localStorage.setItem('shift', 'true');
      removeAll();
      createKeyboard();
    }
  });

  mainContainer.addEventListener('mouseup', (event) => {
    if (event.target.innerText === 'Shift') {
      localStorage.setItem('shift', 'false');
      removeAll();
      createKeyboard();
    }
  });
}

shiftMove();
capsMove();

document.onkeydown = (event) => {
  document
    .querySelectorAll('.ctrl-left')[1]
    .setAttribute('data', 'ControlRight');
  document.querySelectorAll('.alt-left')[1].setAttribute('data', 'AltRight');
  const key = document.querySelectorAll('.key-basic, .key-aux, .key-space');
  for (let i = 0; i < key.length; i += 1) {
    if (event.code === key[i].getAttribute('data')) {
      key[i].classList.add('key-active');
      if (key[i].classList.contains('key-basic')) {
        event.preventDefault();
        keyboardText.setRangeText(
          key[i].innerText,
          keyboardText.selectionStart,
          keyboardText.selectionEnd,
          'end',
        );
      }

      if (key[i].innerText === 'Tab') {
        event.preventDefault();
        keyboardText.setRangeText(
          '\t',
          keyboardText.selectionStart,
          keyboardText.selectionEnd,
          'end',
        );
      }
      if (key[i].innerText === 'Alt') {
        event.preventDefault();
      }
    }
    if (
      event.code === 'CapsLock' && key[i].getAttribute('data') === event.code
    ) {
      if (localStorage.getItem('caps') === 'false') {
        localStorage.setItem('caps', 'true');
      } else {
        localStorage.setItem('caps', 'false');
      }
      removeAll();
      createKeyboard();
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      localStorage.setItem('shift', 'true');
      removeAll();
      createKeyboard();
    }
  }

  if (event.code === 'ArrowLeft') {
    event.preventDefault();
    keyboardText.setRangeText(
      '\u2190',
      keyboardText.selectionStart,
      keyboardText.selectionEnd,
      'end',
    );
  }
  if (event.code === 'ArrowDown') {
    event.preventDefault();
    keyboardText.setRangeText(
      '\u2193',
      keyboardText.selectionStart,
      keyboardText.selectionEnd,
      'end',
    );
  }
  if (event.code === 'ArrowRight') {
    event.preventDefault();
    keyboardText.setRangeText(
      '\u2192',
      keyboardText.selectionStart,
      keyboardText.selectionEnd,
      'end',
    );
  }
  if (event.code === 'ArrowUp') {
    event.preventDefault();
    keyboardText.setRangeText(
      '\u2191',
      keyboardText.selectionStart,
      keyboardText.selectionEnd,
      'end',
    );
  }
};

document.onkeyup = (event) => {
  const key = document.querySelectorAll('.key-basic, .key-aux, .key-space');
  for (let i = 0; i < key.length; i += 1) {
    if (
      event.code === key[i].getAttribute('data') && event.code !== 'CapsLock'
    ) {
      key[i].classList.remove('key-active');
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      localStorage.setItem('shift', 'false');
      removeAll();
      createKeyboard();
    }
  }
};

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
    if (localStorage.getItem('Language') === 'English') {
      localStorage.setItem('Language', 'Russian');
    } else if (localStorage.getItem('Language') === 'Russian') {
      localStorage.setItem('Language', 'English');
    }
    removeAll();
    createKeyboard();
  },
  'ControlLeft',
  'AltLeft',
);
