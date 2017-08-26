/* External dependencies */
import Rx from 'rxjs'
import { combineEpics } from 'redux-observable'

/* Internal dependencies */
import AT from '../../constants/ActionTypes'
import scheduleAPI from '../../api/scheduleAPI'

const createSchedule = action$ => (
  action$.ofType(AT.REQUEST_CREATE_SCHEDULE)
    .switchMap(action =>
      Rx.Observable.fromPromise(scheduleAPI.createSchedule(action.payload.schedule))
        .map(payload => ({
          uuid: action.uuid,
          type: AT.REQUEST_CREATE_SCHEDULE_SUCCESS,
          payload,
        }))
        .catch(payload => Rx.Observable.of({
          uuid: action.uuid,
          type: AT.REQUEST_CREATE_SCHEDULE_ERROR,
          payload,
        }))
    )
)

export default combineEpics(
  createSchedule,
)