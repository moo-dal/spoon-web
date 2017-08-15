/* Internal dependencies */
import AT from '../../constants/ActionTypes'
import { actionCreator } from './actionCreator'

export default {
  requestGetUser: actionCreator(AT.REQUEST_GET_USER),
}