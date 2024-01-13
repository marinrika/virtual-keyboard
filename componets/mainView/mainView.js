import ElementCreator from '../../utils/element-creator.js';
import TextAreaView from '../textAreaView/textAreaView.js';
import KeyboardView from '../keyboardView/keyboardView.js';
import StickerView from '../stickerView/stickerView.js';
import { cssClasses } from '../../module/const.js';

class MainView extends ElementCreator {
  constructor() {
    const paramsMainView = {
      tag: 'div',
      classNames: cssClasses.main,
    };
    super(paramsMainView);
    this.textAreaView = null;
    this.configure();
    this.addListeners();
  }
  configure() {
    const stickerView = new StickerView();
    this.addElement(stickerView);
    this.textAreaView = new TextAreaView();
    this.addElement(this.textAreaView);
    this.textAreaView.getElement().setAttribute('autofocus', true);
    console.log(this.textAreaView.getElement());
    const keyboardView = new KeyboardView();
    this.addElement(keyboardView);
    const image = new ElementCreator({ tag: 'img' });
    image.getElement().src = './assets/image/image.png';
    image.getElement().alt = 'photo';
    image.setCssClasses(['image']);
    this.addElement(image);
  }

  setTextContentArea(event) {
    this.textAreaView.getElement().focus();
    if (event.detail.element.getAttribute('isTextArea') === 'true') {
      this.textAreaView.setTextContentArea(event.detail.element.innerText);
    }
    if (event.detail.element.getAttribute('data') === 'Enter') {
      this.textAreaView.setTextContentArea('\n');
    }
    if (event.detail.element.getAttribute('data') === 'Tab') {
      this.textAreaView.setTextContentArea('\t');
    }
    if (event.detail.element.getAttribute('data') === 'Space') {
      this.textAreaView.setTextContentArea(' ');
    }
    if (event.detail.element.getAttribute('data') === 'Delete') {
      this.textAreaView.setTextContentArea('', 2);
    }
    if (event.detail.element.getAttribute('data') === 'Backspace') {
      this.textAreaView.setTextContentArea('', 3);
    }
  }

  addListeners() {
    document.addEventListener('keyClick', this.setTextContentArea.bind(this));
  }
}

export default MainView;
