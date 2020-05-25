class SearchForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          width: 100%;   
        }
        form {
          width: 100%;
          display: flex;
        }
        input {
          flex-grow: 1;
          border: solid 1px #ccc;
        }
      </style>
      <form>
        <input type="search">
        <button>Search</button>
      </form>
    `;

    this.shadowRoot.querySelector('button').addEventListener('click', e => {
      e.preventDefault();
      const { value } = this.queryInput;
      this.dispatchEvent(new CustomEvent('search-submit', { bubbles: true, detail: value }))
    })
  }

  get queryInput() {
    return this.shadowRoot.querySelector('input')
  }
}

customElements.define('search-form', SearchForm);
