import Endpoint from "./Endpoint.js"
class CharacterEndpoints extends Endpoint{
  constructor(httpHandler){
    super("character", httpHandler)
  }
}

export default CharacterEndpoints