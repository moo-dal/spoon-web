/* External dependencies */
import Immutable from 'immutable'

/* Internal dependencies */
import AT from '../../constants/ActionTypes'
import User from '../../models/User'

const initState = {
  isFetching: false,
  hasError: false,
  user: new User(),
}

export default (state = initState, action) => {
  switch (action.type) {
    case AT.REQUEST_GET_ME:
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

    case AT.REQUEST_GET_ME_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: new User(action.payload),
      }

    case AT.REQUEST_SIGN_IN_ERROR:
    case AT.REQUEST_GET_ME_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
      }

    case AT.REQUEST_SIGN_OUT:
      return {
        ...state,
        user: new User(),
      }

    default:
      return state
  }
}
