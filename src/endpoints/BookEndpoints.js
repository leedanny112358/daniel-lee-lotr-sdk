import Endpoint from "./Endpoint.js"
class BookEndpoints extends Endpoint{
  constructor(httpHandler){
    super("book",httpHandler)
  }

  getAllChapters(bookId,params){
    let url = `${this._base}/${bookId}/chapter`
    if (params !== undefined) {
      url += constructQueryString(params)
    }
    return this._http.get(url)
  }
}

export default BookEndpoints