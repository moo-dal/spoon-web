/* External dependencies */
import { combineEpics } from 'redux-observable'

/* Internal dependencies */
import githubEpic from './githubEpic'

export default combineEpics(
  githubEpic
)