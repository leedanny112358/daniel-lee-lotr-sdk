import Endpoint from "./Endpoint.js"
class MovieEndpoints extends Endpoint{
  constructor(httpHandler){
    super("book", httpHandler)
  }
}

export default MovieEndpoints