/* Internal dependencies */
import AT from '../../constants/ActionTypes'
import LocalStorageKeys from '../../constants/LocalStorageKeys'
import localStorageService from '../../services/localStoregeService'

export default store => next => action => { // eslint-disable-line no-unused-vars
  switch (action.type) {
    case AT.REQUEST_SIGN_IN_SUCCESS:
      localStorageService.set(LocalStorageKeys.TOKEN, action.payload.token)
  }

  return next(action)
}
