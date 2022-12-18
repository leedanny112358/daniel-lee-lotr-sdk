import Endpoint from "./Endpoint.js"
class QuoteEndpoints extends Endpoint{
  constructor(httpHandler){
    super("quote", httpHandler)
  }

  getAllQuotesFromMovie(movieId,params) {
    let url = `movie/${movieId}/${this._base}`
    if (params !== undefined) {
      url += constructQueryString(params)
    }
    return this._http.get(url)
  }

  getAllQuotesFromCharacter(characterId,params) {
    let url = `character/${characterId}/${this._base}`
    if (params !== undefined) {
      url += constructQueryString(params)
    }
    return this._http.get(url)
  }
}

export default QuoteEndpoints