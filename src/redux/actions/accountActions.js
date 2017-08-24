/* Internal dependencies */
import AT from '../../constants/ActionTypes'
import { actionCreatorWithPromise } from './actionCreator'

export default {
  signIn: actionCreatorWithPromise(AT.REQUEST_SIGN_IN),
  signUp: actionCreatorWithPromise(AT.REQUEST_SIGN_UP),
}