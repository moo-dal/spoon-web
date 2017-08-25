/* Internal dependencies */
import AT from '../../constants/ActionTypes'
import LocalStorageKeys from '../../constants/LocalStorageKeys'
import localStorageService from '../../services/localStoregeService'
import apiService from '../../services/apiServie'

export default store => next => action => { // eslint-disable-line no-unused-vars
  switch (action.type) {
    case AT.REQUEST_SIGN_IN_SUCCESS:
      apiService.setToken(action.payload.token)
      localStorageService.set(LocalStorageKeys.TOKEN, action.payload.token)
      break

    case AT.REQUEST_SIGN_OUT:
      apiService.clearToken()
      localStorageService.remove(LocalStorageKeys.TOKEN)
      break
  }

  return next(action)
}
