import './tv/tv-hello'
import './tv/tv-poster'
import './tv/tv-shows'
import './shared/search-form'
import { store } from './store'
import { autorun } from 'mobx'

window.addEventListener('load', () => {
  document
    .querySelector('[type=range]')
    .addEventListener('input', ({ target }) => {
      document.querySelector('tv-shows').columns = target.value
    })

  document
    .querySelector('search-form')
    .addEventListener('search-submit', ({ detail }) => {
      const url = `https://api.tvmaze.com/search/shows?q=${detail}`
      fetch(url)
        .then((resp) => resp.json())
        .then((items) => items.map((item) => item.show))
        .then((shows) => store.setShows(shows))
    })

  autorun(() => {
    document.title = `Displaying ${store.showsCount} shows`
  })
})
