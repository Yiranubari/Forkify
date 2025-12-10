import View from './view.js';
import icons from 'url:../../img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    // Page 1, and there are other pages
    // Page 1, and there are no other pages
    // Last page
    // Other page
  }
}

export default new PaginationView();
