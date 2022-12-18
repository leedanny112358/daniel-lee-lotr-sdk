import Endpoint from "./Endpoint.js"
class ChapterEndpoints extends Endpoint{
  constructor(httpHandler){
    super("chapter", httpHandler)
  }
}

export default ChapterEndpoints