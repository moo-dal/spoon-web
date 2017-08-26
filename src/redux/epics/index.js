/* External dependencies */
import { combineEpics } from 'redux-observable'

/* Internal dependencies */
import userEpic from './userEpic'
import scheduleEpic from './scheduleEpic'

export default combineEpics(
  userEpic,
  scheduleEpic
)