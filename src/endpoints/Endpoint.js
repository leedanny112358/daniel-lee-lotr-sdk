class Endpoint {
  constructor(base_endpoint, httpHandler) {
    this._http = httpHandler
    this._base = base_endpoint
  }

  getAll(params) {
    let url = this._base
    if (params !== undefined) {
      url += this._constructQueryString(params)
    }
    return this._http.get(url)
  }

  getOneById(id, params) {
    let url = `${this._base}/${id}`
    if (params !== undefined) {
      url += this._constructQueryString(params)
    }
    return this._http.get(url)
  }
  
  _constructQueryString(params) {
    let queryArray = []
    let paramsKeys = Object.keys(params)
    paramsKeys.forEach((key, i) => {
      let paramString = `${key}=${params[key]}`
      if (key === "filters") {
        paramString = params[key]
      }
      queryArray.push(paramString)
    });
    return  "?" + queryArray.join('&')
  }
}

export default Endpoint
