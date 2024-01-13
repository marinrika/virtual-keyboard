import ElementCreator from '../../utils/element-creator.js';
import { cssClasses } from '../../module/const.js';

class TextAreaView extends ElementCreator {
  constructor() {
    const paramsTextAreaView = {
      tag: 'textarea',
      classNames: cssClasses.textArea,
    };
    super(paramsTextAreaView);
  }

  setTextContentArea(text = '', selector = 1) {
    if (selector === 1) {
      this.element.setRangeText(
        text,
        this.element.selectionStart,
        this.element.selectionEnd,
        'end'
      );
    }
    if (selector === 2) {
      if (this.element.selectionStart === this.element.selectionEnd) {
        this.element.setRangeText(
          '',
          this.element.selectionStart,
          this.element.selectionStart + 1,
          'select'
        );
      }
      if (this.element.selectionStart !== this.element.selectionEnd) {
        this.element.setRangeText(
          '',
          this.element.selectionStart,
          this.element.selectionEnd,
          'select'
        );
      }
    }
    if (selector === 3) {
      if (this.element.selectionStart !== this.element.selectionEnd) {
        this.element.setRangeText(
          '',
          this.element.selectionStart + 1,
          this.element.selectionEnd,
          'select'
        );
      }
      if (this.element.selectionStart === this.element.selectionEnd) {
        this.element.setRangeText(
          '',
          this.element.selectionStart - 1,
          this.element.selectionStart,
          'select'
        );
      }
    }
  }
}

export default TextAreaView;
