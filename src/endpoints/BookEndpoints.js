import Endpoint from "./Endpoint.js"
class BookEndpoints extends Endpoint{
  constructor(){
    super("book")
  }

  getAllChapters(bookId){
    return this._http.get(`${this.base}/${bookId}/chapter`)
  }
}

export default BookEndpoints