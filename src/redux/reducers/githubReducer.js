/* External dependencies */
import Immutable from 'immutable'

/* Internal dependencies */
import AT from '../../constants/ActionTypes'

const initState = {
  isFetching: false,
  hasError: false,
  user: Immutable.Map(),
}

export default (state = initState, action) => {
  switch (action.type) {
    case AT.REQUEST_GET_USER:
      return {
        ...state,
        isFetching: true,
        hasError: false,
      }

    case AT.REQUEST_GET_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: Immutable.fromJS(action.payload),
      }

    case AT.REQUEST_GET_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
      }

    default:
      return state
  }
}
