class Shows extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.render();
  }

  set shows(shows) {
    this.section.innerHTML = '';
    shows.forEach(show => {
      const poster = document.createElement('tv-poster');
      poster.show = show;
      poster.insertAdjacentHTML('afterbegin', '<button>save</button>');
      this.section.insertAdjacentElement('beforeend', poster)
    })
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
        
        section > * {
          flex: 0 1 calc(100% / 7);
        }
      </style>
      
      <section></section>
    `
  }
}

customElements.define('tv-shows', Shows);
