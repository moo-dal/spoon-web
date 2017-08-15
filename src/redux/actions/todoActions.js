/* Internal dependencies */
import AT from '../../constants/ActionTypes'
import { actionCreator } from './actionCreator'

export default {
  addTodo: actionCreator(AT.ADD_TODO),
  deleteTodo: actionCreator(AT.DELETE_TODO),
}