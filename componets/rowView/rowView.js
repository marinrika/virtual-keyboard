import ElementCreator from '../../utils/element-creator.js';

class RowView extends ElementCreator {
  constructor() {
    const paramsRowView = {
      tag: 'div',
    };
    super(paramsRowView);
  }
}

export default RowView;
