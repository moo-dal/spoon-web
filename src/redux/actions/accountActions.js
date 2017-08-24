/* Internal dependencies */
import AT from '../../constants/ActionTypes'
import { actionCreator, actionCreatorWithPromise } from './actionCreator'

export default {
  signIn: actionCreatorWithPromise(AT.REQUEST_SIGN_IN),
  signUp: actionCreatorWithPromise(AT.REQUEST_SIGN_UP),
  getMe: actionCreator(AT.REQUEST_GET_ME),
}