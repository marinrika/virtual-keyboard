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
import keyAuxItemAttrbute from './module/keyAuxItemAttribute.js';

//  Создание переменных

const mainContainer = document.createElement('div');
const keyboardText = document.createElement('textarea');
const keyboardContainer = document.createElement('div');
const keyboardSystem = document.createElement('p');
const keyboardLanguage = document.createElement('p');

// Присвоение переменным классов

mainContainer.classList.add('main-container');
keyboardText.classList.add('keyboard-text-form');
keyboardContainer.classList.add('keyboard-container');
keyboardSystem.classList.add('keyboard-text');
keyboardLanguage.classList.add('keyboard-text');

document.body.append(mainContainer);

// Создание клавиатуры

function createKeyboardItemBasic(arr) {
  const keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  keyboardContainer.append(keyboardContainerItem);
  arr.forEach((element) => {
    const keyBasic = document.createElement('div');
    if (keyAuxItem.includes(element) && element !== '') {
      keyBasic.classList.add('key-aux');
    }
    if (keyAuxItem.includes(element) && element === '') {
      keyBasic.classList.add('key-space');
    }
    if (!keyAuxItem.includes(element)) {
      keyBasic.classList.add('key-basic');
    }
    keyBasic.innerText = element;
    keyboardContainerItem.append(keyBasic);
  });
}

function createKeyboardItemOne(arg) {
  createKeyboardItemBasic(arg);
  const keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  keyboardContainer.append(keyboardContainerItem);
  const keyBackspace = document.createElement('div');
  keyBackspace.classList.add('key-aux');
  keyBackspace.innerText = 'Backspace';
  keyBackspace.setAttribute('data', 'Backspace');
  keyboardContainerItem.append(keyBackspace);
}

function createKeyboardItemTwo(arg) {
  let keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  keyboardContainer.append(keyboardContainerItem);
  const keyTab = document.createElement('div');
  keyTab.classList.add('key-aux');
  keyTab.innerText = 'Tab';
  keyTab.setAttribute('data', 'Tab');
  keyboardContainerItem.append(keyTab);
  createKeyboardItemBasic(arg);
  keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  keyboardContainer.append(keyboardContainerItem);
  const keyDel = document.createElement('div');
  keyDel.classList.add('key-aux');
  keyDel.innerText = 'Del';
  keyDel.setAttribute('data', 'Delete');
  keyboardContainerItem.append(keyDel);
}

function createKeyboardItemThree(arg) {
  let keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  keyboardContainer.append(keyboardContainerItem);
  const keyCapsLock = document.createElement('div');
  keyCapsLock.classList.add('key-aux');
  keyCapsLock.innerText = 'Caps Lock';
  keyCapsLock.setAttribute('data', 'CapsLock');
  keyboardContainerItem.append(keyCapsLock);
  createKeyboardItemBasic(arg);
  keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  keyboardContainer.append(keyboardContainerItem);
  const keyEnter = document.createElement('div');
  keyEnter.classList.add('key-aux');
  keyEnter.innerText = 'Enter';
  keyEnter.setAttribute('data', 'Enter');
  keyboardContainerItem.append(keyEnter);
}

function createKeyboardItemFour(arg) {
  let keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  keyboardContainer.append(keyboardContainerItem);
  const keyShiftLeft = document.createElement('div');
  keyShiftLeft.classList.add('key-aux');
  keyShiftLeft.innerText = 'Shift';
  keyShiftLeft.setAttribute('data', 'ShiftLeft');
  keyboardContainerItem.append(keyShiftLeft);
  createKeyboardItemBasic(arg);
  keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  keyboardContainer.append(keyboardContainerItem);
  const ArrowUp = document.createElement('div');
  ArrowUp.classList.add('key-aux');
  ArrowUp.innerText = '🠕';
  ArrowUp.setAttribute('data', 'ArrowUp');
  keyboardContainerItem.append(ArrowUp);
  keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  keyboardContainer.append(keyboardContainerItem);
  const keyShiftRight = document.createElement('div');
  keyShiftRight.classList.add('key-aux');
  keyShiftRight.innerText = 'Shift';
  keyShiftRight.setAttribute('data', 'ShiftRight');
  keyboardContainerItem.append(keyShiftRight);
}

function createKeyboard() {
  // document.body.append(mainContainer);
  keyboardSystem.innerText =
    'Клавиатура создана в операционной системе Windows';
  keyboardLanguage.innerText =
    'Для переключения языковой раскладки используется комбинация клавиш левые Alt и Shift';
  mainContainer.append(keyboardText);
  mainContainer.append(keyboardContainer);
  mainContainer.append(keyboardSystem);
  mainContainer.append(keyboardLanguage);
  if (
    localStorage.getItem('Language') === 'English' ||
    !localStorage.getItem('Language')
  ) {
    createKeyboardItemOne(keyBasicEnglishItemOne);
    createKeyboardItemTwo(keyBasicEnglishItemTwo);
    createKeyboardItemThree(keyBasicEnglishItemThree);
    createKeyboardItemFour(keyBasicEnglishItemFour);
    createKeyboardItemBasic(keyAuxItem);
  } else if (localStorage.getItem('Language') === 'Russian') {
    createKeyboardItemOne(keyBasicRussianItemOne);
    createKeyboardItemTwo(keyBasicRussianItemTwo);
    createKeyboardItemThree(keyBasicRussianItemThree);
    createKeyboardItemFour(keyBasicRussianItemFour);
    createKeyboardItemBasic(keyAuxItem);
  }
  return mainContainer;
}

function attributeForItemFife() {
  const keyAttribute = document.querySelectorAll('.key-aux, .key-space');
  keyAuxItem.forEach((element) => {
    for (let i = 0; i < keyAttribute.length; i += 1) {
      if (element === keyAttribute[i].innerText)
        keyAuxItem[i].setAttribute('data', `${element.innerText}`);
    }
  });
}

attributeForItemFife();

window.addEventListener('DOMContentLoaded', createKeyboard());

// const keyboardContainerItem = document.querySelectorAll(
//   '.keyboard-container-item'
// );

function inputText() {
  mainContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('key-basic')) {
      keyboardText.value += event.target.innerText;
    }
  });
}

inputText();

function capsLockKeyDone(arg) {
  if (arg.classList.contains('caps-active')) {
    if (
      localStorage.getItem('Language') === 'English' ||
      !localStorage.getItem('Language')
    ) {
      const key = document.querySelectorAll('.key-basic');
      for (let i = 0; i < key.length; i += 1) {
        if (keyBasicEnglishItemTwo.includes(key[i].innerText)) {
          key[i].innerText =
            keyBasicEnglishCapsItemTwo[
              keyBasicEnglishItemTwo.indexOf(key[i].innerText)
            ];
        }
        if (keyBasicEnglishItemThree.includes(key[i].innerText)) {
          key[i].innerText =
            keyBasicEnglishCapsItemThree[
              keyBasicEnglishItemThree.indexOf(key[i].innerText)
            ];
        }
        if (keyBasicEnglishItemFour.includes(key[i].innerText)) {
          key[i].innerText =
            keyBasicEnglishCapsItemFour[
              keyBasicEnglishItemFour.indexOf(key[i].innerText)
            ];
        }
      }
    } else if (localStorage.getItem('Language') === 'Russian') {
      const key = document.querySelectorAll('.key-basic');
      for (let i = 0; i < key.length; i += 1) {
        if (keyBasicRussianItemOne.includes(key[i].innerText)) {
          key[i].innerText =
            keyBasicRussianCapsItemOne[
              keyBasicRussianItemOne.indexOf(key[i].innerText)
            ];
        }
        if (keyBasicRussianItemTwo.includes(key[i].innerText)) {
          key[i].innerText =
            keyBasicRussianShiftCapsItemTwo[
              keyBasicRussianItemTwo.indexOf(key[i].innerText)
            ];
        }
        if (keyBasicRussianItemThree.includes(key[i].innerText)) {
          key[i].innerText =
            keyBasicRussianCapsItemThree[
              keyBasicRussianItemThree.indexOf(key[i].innerText)
            ];
        }
        if (keyBasicRussianItemFour.includes(key[i].innerText)) {
          key[i].innerText =
            keyBasicRussianCapsItemFour[
              keyBasicRussianItemFour.indexOf(key[i].innerText)
            ];
        }
      }
    }
  }

  if (!arg.classList.contains('caps-active')) {
    if (
      localStorage.getItem('Language') === 'English' ||
      !localStorage.getItem('Language')
    ) {
      const key = document.querySelectorAll('.key-basic');
      for (let i = 0; i < key.length; i += 1) {
        if (keyBasicEnglishCapsItemTwo.includes(key[i].innerText)) {
          key[i].innerText =
            keyBasicEnglishItemTwo[
              keyBasicEnglishCapsItemTwo.indexOf(key[i].innerText)
            ];
        }
        if (keyBasicEnglishCapsItemThree.includes(key[i].innerText)) {
          key[i].innerText =
            keyBasicEnglishItemThree[
              keyBasicEnglishCapsItemThree.indexOf(key[i].innerText)
            ];
        }
        if (keyBasicEnglishCapsItemFour.includes(key[i].innerText)) {
          key[i].innerText =
            keyBasicEnglishItemFour[
              keyBasicEnglishCapsItemFour.indexOf(key[i].innerText)
            ];
        }
      }
    } else if (localStorage.getItem('Language') === 'Russian') {
      const key = document.querySelectorAll('.key-basic');
      for (let i = 0; i < key.length; i += 1) {
        if (keyBasicRussianCapsItemOne.includes(key[i].innerText)) {
          key[i].innerText =
            keyBasicRussianItemOne[
              keyBasicRussianCapsItemOne.indexOf(key[i].innerText)
            ];
        }
        if (keyBasicRussianShiftCapsItemTwo.includes(key[i].innerText)) {
          key[i].innerText =
            keyBasicRussianItemTwo[
              keyBasicRussianShiftCapsItemTwo.indexOf(key[i].innerText)
            ];
        }
        if (keyBasicRussianCapsItemThree.includes(key[i].innerText)) {
          key[i].innerText =
            keyBasicRussianItemThree[
              keyBasicRussianCapsItemThree.indexOf(key[i].innerText)
            ];
        }
        if (keyBasicRussianCapsItemFour.includes(key[i].innerText)) {
          key[i].innerText =
            keyBasicRussianItemFour[
              keyBasicRussianCapsItemFour.indexOf(key[i].innerText)
            ];
        }
      }
    }
  }
  return mainContainer;
}

function shiftKeyDone() {
  if (
    localStorage.getItem('Language') === 'English' ||
    !localStorage.getItem('Language')
  ) {
    const key = document.querySelectorAll('.key-basic');
    for (let i = 0; i < key.length; i += 1) {
      if (keyBasicEnglishItemOne.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishShiftItemOne[
            keyBasicEnglishItemOne.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicEnglishItemTwo.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishShiftItemTwo[
            keyBasicEnglishItemTwo.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicEnglishItemThree.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishShiftItemThree[
            keyBasicEnglishItemThree.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicEnglishItemFour.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishShiftItemFour[
            keyBasicEnglishItemFour.indexOf(key[i].innerText)
          ];
      }
    }
  } else if (localStorage.getItem('Language') === 'Russian') {
    const key = document.querySelectorAll('.key-basic');
    for (let i = 0; i < key.length; i += 1) {
      if (keyBasicRussianItemOne.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianShiftItemOne[
            keyBasicRussianItemOne.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicRussianItemTwo.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianShiftCapsItemTwo[
            keyBasicRussianItemTwo.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicRussianItemThree.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianShiftItemThree[
            keyBasicRussianItemThree.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicRussianItemFour.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianShiftItemFour[
            keyBasicRussianItemFour.indexOf(key[i].innerText)
          ];
      }
    }
  }
  return mainContainer;
}

function shiftKeyDoneCaps() {
  if (
    localStorage.getItem('Language') === 'English' ||
    !localStorage.getItem('Language')
  ) {
    const key = document.querySelectorAll('.key-basic');
    for (let i = 0; i < key.length; i += 1) {
      if (keyBasicEnglishItemOne.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishShiftItemOne[
            keyBasicEnglishItemOne.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicEnglishCapsItemTwo.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishShiftItemTwo[
            keyBasicEnglishCapsItemTwo.indexOf(key[i].innerText)
          ].toLowerCase();
      }
      if (keyBasicEnglishCapsItemThree.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishShiftItemThree[
            keyBasicEnglishCapsItemThree.indexOf(key[i].innerText)
          ].toLowerCase();
      }
      if (keyBasicEnglishCapsItemFour.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishShiftItemFour[
            keyBasicEnglishCapsItemFour.indexOf(key[i].innerText)
          ].toLowerCase();
      }
    }
  } else if (localStorage.getItem('Language') === 'Russian') {
    const key = document.querySelectorAll('.key-basic');
    for (let i = 0; i < key.length; i += 1) {
      if (keyBasicRussianCapsItemOne.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianShiftItemOne[
            keyBasicRussianCapsItemOne.indexOf(key[i].innerText)
          ].toLowerCase();
      }
      if (keyBasicRussianShiftCapsItemTwo.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianShiftCapsItemTwo[
            keyBasicRussianShiftCapsItemTwo.indexOf(key[i].innerText)
          ].toLowerCase();
      }
      if (keyBasicRussianCapsItemThree.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianShiftItemThree[
            keyBasicRussianCapsItemThree.indexOf(key[i].innerText)
          ].toLowerCase();
      }
      if (keyBasicRussianCapsItemFour.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianShiftItemFour[
            keyBasicRussianCapsItemFour.indexOf(key[i].innerText)
          ].toLowerCase();
      }
    }
  }
  return mainContainer;
}

function shiftKeyUp() {
  if (
    localStorage.getItem('Language') === 'English' ||
    !localStorage.getItem('Language')
  ) {
    const key = document.querySelectorAll('.key-basic');
    for (let i = 0; i < key.length; i += 1) {
      if (keyBasicEnglishShiftItemOne.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishItemOne[
            keyBasicEnglishShiftItemOne.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicEnglishShiftItemTwo.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishItemTwo[
            keyBasicEnglishShiftItemTwo.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicEnglishShiftItemThree.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishItemThree[
            keyBasicEnglishShiftItemThree.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicEnglishShiftItemFour.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishItemFour[
            keyBasicEnglishShiftItemFour.indexOf(key[i].innerText)
          ];
      }
    }
  } else if (localStorage.getItem('Language') === 'Russian') {
    const key = document.querySelectorAll('.key-basic');
    for (let i = 0; i < key.length; i += 1) {
      if (keyBasicRussianShiftItemOne.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianItemOne[
            keyBasicRussianShiftItemOne.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicRussianShiftCapsItemTwo.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianItemTwo[
            keyBasicRussianShiftCapsItemTwo.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicRussianShiftItemThree.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianItemThree[
            keyBasicRussianShiftItemThree.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicRussianShiftItemFour.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianItemFour[
            keyBasicRussianShiftItemFour.indexOf(key[i].innerText)
          ];
      }
    }
  }
  return mainContainer;
}

function shiftKeyUpCaps() {
  if (
    localStorage.getItem('Language') === 'English' ||
    !localStorage.getItem('Language')
  ) {
    const key = document.querySelectorAll('.key-basic');
    for (let i = 0; i < key.length; i += 1) {
      if (keyBasicEnglishShiftItemOne.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishItemOne[
            keyBasicEnglishShiftItemOne.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicEnglishShiftItemTwo.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishCapsItemTwo[
            keyBasicEnglishShiftItemTwo.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicEnglishItemTwo.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishCapsItemTwo[
            keyBasicEnglishItemTwo.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicEnglishShiftItemThree.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishCapsItemThree[
            keyBasicEnglishShiftItemThree.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicEnglishItemThree.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishCapsItemThree[
            keyBasicEnglishItemThree.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicEnglishShiftItemFour.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishCapsItemFour[
            keyBasicEnglishShiftItemFour.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicEnglishItemFour.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicEnglishCapsItemFour[
            keyBasicEnglishItemFour.indexOf(key[i].innerText)
          ];
      }
    }
  } else if (localStorage.getItem('Language') === 'Russian') {
    const key = document.querySelectorAll('.key-basic');
    for (let i = 0; i < key.length; i += 1) {
      if (keyBasicRussianShiftItemOne.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianCapsItemOne[
            keyBasicRussianShiftItemOne.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicRussianItemOne.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianCapsItemOne[
            keyBasicRussianItemOne.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicRussianShiftCapsItemTwo.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianShiftCapsItemTwo[
            keyBasicRussianShiftCapsItemTwo.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicRussianItemTwo.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianShiftCapsItemTwo[
            keyBasicRussianItemTwo.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicRussianShiftItemThree.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianCapsItemThree[
            keyBasicRussianShiftItemThree.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicRussianItemThree.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianCapsItemThree[
            keyBasicRussianItemThree.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicRussianShiftItemFour.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianCapsItemFour[
            keyBasicRussianShiftItemFour.indexOf(key[i].innerText)
          ];
      }
      if (keyBasicRussianItemFour.includes(key[i].innerText)) {
        key[i].innerText =
          keyBasicRussianCapsItemFour[
            keyBasicRussianItemFour.indexOf(key[i].innerText)
          ];
      }
    }
  }
  return mainContainer;
}

mainContainer.addEventListener('click', (event) => {
  if (event.target.innerText === 'Caps Lock') {
    event.target.classList.toggle('caps-active');
    if (event.target.classList.contains('caps-active')) {
      localStorage.setItem('caps', 'true');
    } else if (!event.target.classList.contains('caps-active')) {
      localStorage.setItem('caps', 'false');
    }
    capsLockKeyDone(event.target);
  }
});

mainContainer.addEventListener('mousedown', (event) => {
  if (event.target.innerText === 'Shift') {
    if (localStorage.getItem('caps') === 'true') {
      shiftKeyDoneCaps();
    } else if (localStorage.getItem('caps') === 'false') {
      shiftKeyDone();
    }
  }
});

mainContainer.addEventListener('mouseup', (event) => {
  if (event.target.innerText === 'Shift') {
    if (localStorage.getItem('caps') === 'true') {
      shiftKeyUpCaps();
    } else if (localStorage.getItem('caps') === 'false') {
      shiftKeyUp();
    }
  }
});

document.onkeydown = function (event) {
  const key = document.querySelectorAll('.key-basic, .key-aux, .key-space');
  for (let i = 0; i < key.length; i += 1) {
    if (event.code === key[i].getAttribute('data')) {
      key[i].classList.add('caps-active');
    }
  }
  console.log(event.code);
};
