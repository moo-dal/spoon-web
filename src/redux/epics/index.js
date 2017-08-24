/* External dependencies */
import { combineEpics } from 'redux-observable'

/* Internal dependencies */
import userEpic from './userEpic'

export default combineEpics(
  userEpic
)