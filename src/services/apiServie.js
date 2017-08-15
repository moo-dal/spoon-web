/* External dependencies */
import 'whatwg-fetch'

class ApiService {
  constructor() {
    this.END_POINT = '//api.github.com'

  }

  _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  _parseJSON(response) {
    return response.json()
  }

  get(url) {
    return fetch(this.END_POINT + url)
      .then(this._checkStatus)
      .then(this._parseJSON)
  }
}

export default new ApiService()