import { store } from '../store'
import { autorun } from 'mobx'

class Shows extends HTMLElement {
  private _shows: any

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.render()
    autorun(() => {
      this.shows = store.shows
    })
  }

  set shows(shows) {
    this._shows = shows
    this.section.innerHTML = ''
    shows.forEach((show) => {
      const template = (document
        .querySelector<HTMLTemplateElement>('#shows-item')
        .content.cloneNode(true) as any).firstElementChild

      this.section.insertAdjacentElement('beforeend', template)
      template.show = show
    })
  }

  get shows() {
    return this._shows
  }

  set columns(count) {
    this.section.style.gridTemplateColumns = `repeat(${count}, 1fr)`
  }

  get section() {
    return this.shadowRoot.querySelector('section')
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 1.5vw;
          padding: 1.5vw 0;
        }
      </style>
      
      <section></section>
    `
  }
}

customElements.define('tv-shows', Shows)
