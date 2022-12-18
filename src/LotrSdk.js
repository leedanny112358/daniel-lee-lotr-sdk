import BookEndpoints from "./endpoints/BookEndpoints.js"
import ChapterEndpoints from "./endpoints/ChapterEndpoints.js"
import CharacterEndpoints from "./endpoints/CharacterEndpoints.js"
import MovieEndpoints from "./endpoints/MovieEndpoints.js"
import QuoteEndpoints from "./endpoints/QuoteEndpoints.js"
import HttpHandler from "./HttpHandler.js"

class LotrSdk {
  constructor(token) {
    if (token === undefined) {
      console.warn("WARNING: You have not specified an access_token. You will only be able to fetch data from the books endpoints")
    }
    this._httpHandler = new HttpHandler(token)
    this.books = new BookEndpoints(this._httpHandler)
    this.movies = new MovieEndpoints(this._httpHandler)
    this.characters = new CharacterEndpoints(this._httpHandler)
    this.quotes = new QuoteEndpoints(this._httpHandler)
    this.chapters = new ChapterEndpoints(this._httpHandler)
  }
}

export default LotrSdk
