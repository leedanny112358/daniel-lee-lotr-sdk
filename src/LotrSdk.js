import BookEndpoints from './endpoints/BookEndpoints.js';
import ChapterEndpoints from './endpoints/ChapterEndpoints.js';
import CharacterEndpoints from './endpoints/CharacterEndpoints.js';
import MovieEndpoints from './endpoints/MovieEndpoints.js';
import QuoteEndpoints from './endpoints/QuoteEndpoints.js';

class LotrSdk {
  constructor(token){
    this.books = new BookEndpoints()
    this.chapters = new ChapterEndpoints()
    this.characters = new CharacterEndpoints()
    this.movies = new MovieEndpoints()
    this.quotes = new QuoteEndpoints()
  }
}

export default LotrSdk