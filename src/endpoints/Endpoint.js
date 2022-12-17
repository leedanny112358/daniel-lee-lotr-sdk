import HttpHandler from "../HttpHandler.js"

class Endpoint {
  constructor(base){
    this._http = new HttpHandler()
    this.base = base
  }
  getAll(){
    return this._http.get(this.base)
  }
  getOneById(id){
    return this._http.get(`${this.base}/${id}`) 
  }
}

export default Endpoint