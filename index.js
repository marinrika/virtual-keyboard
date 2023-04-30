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

//  Создание переменных

const mainContainer = document.createElement('div');
const keyboardText = document.createElement('textarea');
const keyboardContainer = document.createElement('div');
// const keyAux = document.createElement('div');
const keyboardSystem = document.createElement('p');
const keyboardLanguage = document.createElement('p');

// Присвоение переменным классов

mainContainer.classList.add('main-container');
keyboardText.classList.add('keyboard-text-form');
keyboardContainer.classList.add('keyboard-container');
// keyAux.classList.add('key-aux');
keyboardSystem.classList.add('keyboard-text');
keyboardLanguage.classList.add('keyboard-text');

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

function createKeyboardItemOne() {
  createKeyboardItemBasic(keyBasicEnglishItemOne);
  const keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  keyboardContainer.append(keyboardContainerItem);
  const keyBackspace = document.createElement('div');
  keyBackspace.classList.add('key-aux');
  keyBackspace.innerText = 'Backspace';
  keyboardContainerItem.append(keyBackspace);
}

function createKeyboardItemTwo() {
  let keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  keyboardContainer.append(keyboardContainerItem);
  const keyTab = document.createElement('div');
  keyTab.classList.add('key-aux');
  keyTab.innerText = 'Tab';
  keyboardContainerItem.append(keyTab);
  createKeyboardItemBasic(keyBasicEnglishItemTwo);
  keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  keyboardContainer.append(keyboardContainerItem);
  const keyDel = document.createElement('div');
  keyDel.classList.add('key-aux');
  keyDel.innerText = 'Del';
  keyboardContainerItem.append(keyDel);
}

function createKeyboardItemThree() {
  let keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  keyboardContainer.append(keyboardContainerItem);
  const keyCapsLock = document.createElement('div');
  keyCapsLock.classList.add('key-aux');
  keyCapsLock.innerText = 'Caps Lock';
  keyboardContainerItem.append(keyCapsLock);
  createKeyboardItemBasic(keyBasicEnglishItemThree);
  keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  keyboardContainer.append(keyboardContainerItem);
  const keyEnter = document.createElement('div');
  keyEnter.classList.add('key-aux');
  keyEnter.innerText = 'Enter';
  keyboardContainerItem.append(keyEnter);
}

function createKeyboardItemFour() {
  let keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  keyboardContainer.append(keyboardContainerItem);
  let keyShift = document.createElement('div');
  keyShift.classList.add('key-aux');
  keyShift.innerText = 'Shift';
  keyboardContainerItem.append(keyShift);
  createKeyboardItemBasic(keyBasicEnglishItemFour);
  keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  keyboardContainer.append(keyboardContainerItem);
  const keyEnter = document.createElement('div');
  keyEnter.classList.add('key-aux');
  keyEnter.innerText = '🠕';
  keyboardContainerItem.append(keyEnter);
  keyboardContainerItem = document.createElement('div');
  keyboardContainerItem.classList.add('keyboard-container-item');
  keyboardContainer.append(keyboardContainerItem);
  keyShift = document.createElement('div');
  keyShift.classList.add('key-aux');
  keyShift.innerText = 'Shift';
  keyboardContainerItem.append(keyShift);
}

function createKeyboard() {
  document.body.append(mainContainer);
  keyboardSystem.innerText =
    'Клавиатура создана в операционной системе Windows';
  keyboardLanguage.innerText =
    'Для переключения языковой раскладки используется комбинация клавиш левые Alt и Shift';
  mainContainer.append(keyboardText);
  mainContainer.append(keyboardContainer);
  mainContainer.append(keyboardSystem);
  mainContainer.append(keyboardLanguage);
  createKeyboardItemOne();
  createKeyboardItemTwo();
  createKeyboardItemThree();
  createKeyboardItemFour();
  createKeyboardItemBasic(keyAuxItem);
  return mainContainer;
}

createKeyboard();
