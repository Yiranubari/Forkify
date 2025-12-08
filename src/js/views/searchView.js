class SearchView {
  #parentEl = document.querySelector('.search');
  getQuery() {
    return this.#parentEl.querySelector('.search__field').value;
  }
  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
