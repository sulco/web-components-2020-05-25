// @ts-check

class Hello extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })

    this.shadowRoot.innerHTML = `
        <style>
            h1 {
                color: green;
            }
        </style>
        <h1>Hello from tv-hello</h1>
    `
  }
}

window.customElements.define('tv-hello', Hello)
