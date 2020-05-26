import { Show } from './tv.models'

class Poster extends HTMLElement {
  static get observedAttributes() {
    return ['show']
  }

  // attributeChangedCallback(attr, prev, next) {
  //   this.shadowRoot.querySelector('img').src = next.image.original;
  // }

  set show(show: Show) {
    this.shadowRoot.querySelector('img').src =
      show.image?.original ?? 'https://source.unsplash.com/210x295/?movies'
    this.shadowRoot.querySelector('h2').innerText = show.name
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    this.shadowRoot.innerHTML = `
    <style>
        img {
            border-radius: 4px;
            width: 100%;
        }
        h2 {
            margin: 0 0 10px;
        }
        button {
            text-transform: uppercase;         
        }
        ::slotted(button) {
            color: red;
        }
    </style>
    <img src="https://source.unsplash.com/210x295/?movies">
    <slot></slot> 
    <h2>placeholder</h2>
    `
  }
}

window.customElements.define('tv-poster', Poster)
