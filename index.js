import MainView from './componets/mainView/mainView.js';

if (!localStorage.getItem('language')) {
  localStorage.setItem('language', 'english');
}

class MyKeyboard {
  constructor() {
    const mainView = new MainView();
    document.body.append(mainView.getElement());
  }
}

new MyKeyboard();
