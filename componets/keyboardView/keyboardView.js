import ElementCreator from '../../utils/element-creator.js';
import RowView from '../rowView/rowView.js';
import keys from '../../module/keys.js';
import ButtonView from '../buttonView/buttonView.js';
import { cssClasses, setCapsLock } from '../../module/const.js';

let { caps, shift, alt, ctrl } = setCapsLock;

class KeyboardView extends ElementCreator {
  constructor() {
    const paramsKeyboardView = {
      tag: 'div',
      classNames: [cssClasses.container],
    };
    super(paramsKeyboardView);
    this.arrayRow = [];
    this.arrayKey = [];
    this.configure();
    this.setKeyTextContent();
    this.addListeners();
  }

  configure() {
    cssClasses.row.forEach((cssClass) => {
      const rowView = new RowView();
      rowView.setCssClasses(cssClass);
      this.addElement(rowView);
      this.arrayRow.push(rowView);
    });
    keys.forEach((key) => {
      const buttonView = new ButtonView();
      buttonView.getElement().setAttribute('data', key.attribute);
      buttonView.getElement().setAttribute('isTextArea', key.isTextArea);
      this.arrayRow[key.row].addElement(buttonView);
      this.arrayKey.push(buttonView);
    });
  }

  handleCapsLock(event) {
    if (event.detail.element.getAttribute('data') === 'CapsLock') {
      caps = !caps;
      if (caps) {
        event.detail.element.classList.add('active');
      }
      if (!caps) {
        event.detail.element.classList.remove('active');
      }
    }
    this.setKeyTextContent();
  }

  handleShift(event) {
    if (
      event.detail.element.getAttribute('data') === 'ShiftLeft' ||
      event.detail.element.getAttribute('data') === 'ShiftRight'
    ) {
      shift = !shift;
    }
    this.setKeyTextContent();
    if (event.detail.element.innerText === 'Alt') {
      alt = !alt;
      if (alt && ctrl) {
        localStorage.getItem('language') === 'english'
          ? localStorage.setItem('language', 'russian')
          : localStorage.setItem('language', 'english');
        this.setKeyTextContent();
      }
    }
    if (event.detail.element.innerText === 'Ctrl') {
      ctrl = !ctrl;
      if (alt && ctrl) {
        localStorage.getItem('language') === 'english'
          ? localStorage.setItem('language', 'russian')
          : localStorage.setItem('language', 'english');
        this.setKeyTextContent();
      }
    }
  }

  handleKeyUp(event) {
    event.preventDefault();
    if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
      ctrl = !ctrl;
    }
    if (event.code === 'AltLeft' || event.code === 'AltRight') {
      alt = !alt;
    }
    this.arrayKey.forEach((key) => {
      if (event.code === key.getElement().getAttribute('data')) {
        if (event.code === 'ShiftLeft') {
          document.dispatchEvent(new CustomEvent('keyUp', { detail: key }));
        }
        if (event.code === 'ShiftRight') {
          document.dispatchEvent(new CustomEvent('keyUp', { detail: key }));
        }
        key.getElement().classList.remove('active');
        document.dispatchEvent(new CustomEvent('keyClick', { detail: key }));
      }
    });
  }

  handleKeyDown(event) {
    event.preventDefault();
    if (event.ctrlKey) {
      ctrl = !ctrl;
    }
    if (event.altKey) {
      alt = !alt;
    }
    if (
      (event.ctrlKey && event.altKey) ||
      (event.ctrlKey && alt) ||
      (event.altKey && ctrl)
    ) {
      localStorage.getItem('language') === 'english'
        ? localStorage.setItem('language', 'russian')
        : localStorage.setItem('language', 'english');
      this.setKeyTextContent();
    }
    if (!event.repeat) {
      this.arrayKey.forEach((key) => {
        if (
          event.code === key.getElement().getAttribute('data') &&
          event.code === 'ShiftLeft'
        ) {
          document.dispatchEvent(new CustomEvent('keyDown', { detail: key }));
        }
        if (
          event.code === key.getElement().getAttribute('data') &&
          event.code === 'ShiftRight'
        ) {
          document.dispatchEvent(new CustomEvent('keyDown', { detail: key }));
        }
        if (event.code === key.getElement().getAttribute('data')) {
          key.setCssClasses(['active']);
        }
      });
    }
  }

  setKeyTextContent() {
    const language = localStorage.getItem('language');
    this.arrayKey.forEach((key, index) => {
      if (!caps && !shift) {
        key.setTextContent(keys[index][language]);
      }
      if (caps && !shift && !keys[index].aux) {
        key.setTextContent(keys[index][language].toUpperCase());
      }
      if (!caps && shift && !keys[index].aux) {
        key.setTextContent(keys[index][`${language}shift`].toUpperCase());
      }
      if (caps && shift) {
        key.setTextContent(keys[index][`${language}shift`]);
      }
    });
  }
  addListeners() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
    document.addEventListener('keyup', this.handleKeyUp.bind(this));
    document.addEventListener('keyClick', this.handleCapsLock.bind(this));
    document.addEventListener('keyDown', this.handleShift.bind(this));
    document.addEventListener('keyUp', this.handleShift.bind(this));
  }
}

export default KeyboardView;
