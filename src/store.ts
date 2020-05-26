import { decorate, observable, action, computed } from 'mobx'
import { Show } from './tv/tv.models'

class Store {
  shows: Show[]

  constructor() {
    this.shows = []
  }

  setShows(shows) {
    this.shows = shows
  }

  get showsCount() {
    return this.shows.length
  }
}

decorate(Store, {
  shows: observable,
  setShows: action,
  showsCount: computed,
})

export const store = new Store()
