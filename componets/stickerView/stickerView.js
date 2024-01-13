import ElementCreator from '../../utils/element-creator.js';
import { cssClasses, text } from '../../module/const.js';

class StickerView extends ElementCreator {
  constructor() {
    const paramsStickerView = {
      tag: 'div',
      classNames: cssClasses.sticker,
      textContent: text,
    };
    super(paramsStickerView);
    this.congigure();
  }

  congigure() {
    const buttonSticker = new ElementCreator({
      tag: 'button',
      classNames: ['button-sticker'],
    });
    this.addElement(buttonSticker);
  }
}

export default StickerView;
