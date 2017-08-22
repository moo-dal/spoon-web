/* Internal dependencies */
import AT from '../../constants/ActionTypes'
import { actionCreator } from './actionCreator'

export default {
  signIn: actionCreator(AT.REQUEST_SIGN_IN),
  signUp: actionCreator(AT.REQUEST_SIGN_UP),
}