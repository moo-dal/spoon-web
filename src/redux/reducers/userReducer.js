/* External dependencies */
import Immutable from 'immutable'

/* Internal dependencies */
import AT from '../../constants/ActionTypes'
import User from '../../models/User'

const initState = {
  isFetching: false,
  hasError: false,
  account: new User(),
}

export default (state = initState, action) => {
  switch (action.type) {
    case AT.REQUEST_SIGN_IN:
      return {
        ...state,
        isFetching: true,
        hasError: false,
      }

    case AT.REQUEST_SIGN_IN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: new User(action.payload.user),
      }

    case AT.REQUEST_SIGN_IN_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
      }

    default:
      return state
  }
}