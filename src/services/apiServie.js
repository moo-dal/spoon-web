/* External dependencies */
import 'whatwg-fetch'
import _ from 'lodash'

class ApiService {
  constructor() {
    this.END_POINT = 'http://13.114.78.152:8000'

  }

  /**
   * Private Methods
   */

  _bodyToJSON(body) {
    return _.mapKeys(body, (value, key) => _.snakeCase(key))
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

  /**
   * Public Methods
   */

  get(url) {
    return fetch(this.END_POINT + url)
      .then(this._checkStatus)
      .then(this._parseJSON)
  }

  post(url, body) {
    return fetch(this.END_POINT + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this._bodyToJSON(body))
    })
      .then(this._checkStatus)
      .then(this._parseJSON)
  }
}

export default new ApiService()