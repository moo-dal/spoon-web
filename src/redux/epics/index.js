/* External dependencies */
import { combineEpics } from 'redux-observable'

/* Internal dependencies */
import githubEpic from './githubEpic'
import accountEpic from './accountEpic'

export default combineEpics(
  githubEpic,
  accountEpic
)