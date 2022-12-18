class FiltersBuilder {
  constructor() {
    this._filtersArray = []
  }

  includes(k, v) {
    const s = `${k}=${v}`
    this._filtersArray.push(s)
    return this
  }
  
  excludes(k, v) {
    const s = `${k}!=${v}`
    this._filtersArray.push(s)
    return this
  }

  exists(k) {
    this._filtersArray.push(k)
    return this
  }

  doesNotExist(k) {
    this._filtersArray.push(`!${k}`)
    return this
  }

  lessThan(k, v, equalTo = false) {
    let s = `${k}<${v}`
    if (equalTo) {
      s = `${k}<=${v}`
    }
    this._filtersArray.push(s)
    return this
  }

  greaterThan(k, v, equalTo = false) {
    let s = `${k}>${v}`
    if (equalTo) {
      s = `${k}>=${v}`
    }
    this._filtersArray.push(s)
    return this
  }

  build() {
    return this._filtersArray.join("&")
  }
}

export default FiltersBuilder
