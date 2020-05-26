class SearchForm extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    this.shadowRoot.innerHTML = `
      <style>        
        :host {
          width: 100%;   
        }
        :host-context(.theme-dark) button {
            background: #333;
            color: #eee;
        }
        :host-context(.theme-light) button {
            background: #eee;
            color: #333;
        }
        form {
          width: 100%;
          display: flex;
        }
        input {
          flex-grow: 1;
          border: solid 1px #ccc;
          font-size: 16px;
          padding: 5px 10px;
        }
        button {
          font-size: 16px;
          padding: 5px 10px;
        }
      </style>
      <form>
        <input type="search">
        <button>Search</button>
      </form>
    `

    this.shadowRoot.querySelector('button').addEventListener('click', (e) => {
      e.preventDefault()
      const { value } = this.queryInput
      this.dispatchEvent(
        new CustomEvent('search-submit', { bubbles: true, detail: value }),
      )
    })
  }

  get queryInput() {
    return this.shadowRoot.querySelector('input')
  }
}

customElements.define('search-form', SearchForm)
