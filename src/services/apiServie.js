/* External dependencies */
import 'whatwg-fetch'
import _ from 'lodash'

/* Internal dependencies */
import localStorageService from './localStoregeService'
import LocalStorageKeys from '../constants/LocalStorageKeys'

class ApiService {
  constructor() {
    this.END_POINT = 'http://13.114.78.152:8000'
    this.TOKEN = localStorageService.get(LocalStorageKeys.TOKEN)
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

  _convertToCamelCase(response) {
    return _.mapKeys(response, (value, key) => _.camelCase(key))
  }

  _getDefaultHeader() {
    return _.pickBy({
      AUTHORIZATION: this.TOKEN,
    }, _.identity)
  }

  /**
   * Public Methods
   */

  setToken(token) {
    this.token = token
  }

  clearToken() {
    this.token = null
  }

  get(url) {
    return fetch(this.END_POINT + url, {
      method: 'GET',
      headers: this._getDefaultHeader()
    })
      .then(this._checkStatus)
      .then(this._parseJSON)
      .then(this._convertToCamelCase)
  }

  post(url, body) {
    return fetch(this.END_POINT + url, {
      method: 'POST',
      headers: {
        ...this._getDefaultHeader(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this._bodyToJSON(body))
    })
      .then(this._checkStatus)
      .then(this._parseJSON)
      .then(this._convertToCamelCase)
  }
}

export default new ApiService()