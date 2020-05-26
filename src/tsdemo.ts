interface Book {
  id: number
  title: string
}

class LibraryBook implements Book {
  id: number

  constructor(public title: string) {}
}

const book1 = { id: 1, title: 'Js in action' }
const book2: Book = { id: 2, title: 'TypeScript: beginning' }
const book3 = new LibraryBook('Web Components')

let bookshelf: Book[] = [book1, book2, book3]
