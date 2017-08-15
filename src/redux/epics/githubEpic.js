/* External dependencies */
import Rx from 'rxjs'
import { combineEpics } from 'redux-observable'

/* Internal dependencies */
import AT from '../../constants/ActionTypes'
import githubAPI from '../../api/githubAPI'

const getUserEpic = action$ => (
  action$.ofType(AT.REQUEST_GET_USER)
    .switchMap(action =>
      Rx.Observable.fromPromise(githubAPI.getUser(action.payload.username))
        .map(payload => ({
          type: AT.REQUEST_GET_USER_SUCCESS,
          payload,
        }))
        .catch(payload => Rx.Observable.of({
          type: AT.REQUEST_GET_USER_ERROR,
          payload,
        }))
    )
)

export default combineEpics(
  getUserEpic
)