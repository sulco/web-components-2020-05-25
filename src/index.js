import './tv/tv-hello'
import './tv/tv-poster'
import './tv/tv-shows'
import './shared/search-form'

window.addEventListener('load', () => {
  document.querySelector('search-form').addEventListener('search-submit', ({ detail }) => {
    const url = `https://api.tvmaze.com/search/shows?q=${detail}`;
    fetch(url)
      .then(resp => resp.json())
      .then(items => items.map(item => item.show))
      .then(shows => document.querySelector('tv-shows').shows = shows)
  })
});

