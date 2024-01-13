class ElementCreator {
  constructor(params) {
    this.element = null;
    this.createElement(params);
  }

  getElement() {
    return this.element;
  }

  addElement(element) {
    if (element instanceof ElementCreator) {
      this.element.append(element.getElement());
    } else {
      this.element.append(element);
    }
  }

  createElement(params) {
    this.element = document.createElement(params.tag);
    this.setCssClasses(params.classNames);
    this.setTextContent(params.textContent);
  }

  setCssClasses(cssClasses = []) {
    cssClasses.map((cssClass) => this.element.classList.add(cssClass));
  }

  setTextContent(text = '') {
    this.element.textContent = text;
  }

  setCallback(eventName, callback) {
    if (typeof callback === 'function') {
      this.element.addEventListener(eventName, (event) => callback(event));
    }
  }
}
export default ElementCreator;
