import ElementCreator from '../../utils/element-creator.js';
import { cssClasses } from '../../module/const.js';

class ButtonView extends ElementCreator {
  constructor() {
    const paramsButtonView = {
      tag: 'div',
      classNames: cssClasses.buttonView,
    };
    super(paramsButtonView);
    this.isDown = false;
    this.addListeners();
  }
  addListeners() {
    this.setCallback('click', () => {
      document.dispatchEvent(new CustomEvent('keyClick', { detail: this }));
    });
    this.setCallback('mousedown', () => {
      this.isDown = true;
      document.dispatchEvent(new CustomEvent('keyDown', { detail: this }));
    });
    this.setCallback('mouseup', () => {
      if (this.isDown) {
        document.dispatchEvent(new CustomEvent('keyUp', { detail: this }));
      }
      this.isDown = false;
    });
    this.setCallback('mouseleave', () => {
      if (this.isDown) {
        document.dispatchEvent(new CustomEvent('keyUp', { detail: this }));
      }
      this.isDown = false;
    });
  }
}

export default ButtonView;
