/* External dependencies */
import Immutable from 'immutable'
import uuid from 'uuid'

/* Internal dependencies */
import ToDo from '../../models/ToDo'
import AT from '../../constants/ActionTypes'

const initState = {
  todoList: Immutable.List([
    new ToDo({
      id: uuid.v4(),
      todo: '조이 리액트 보일러플레이트',
    }),
    new ToDo({
      id: uuid.v4(),
      todo: '기본으로 있는 리스트',
    }),
    new ToDo({
      id: uuid.v4(),
      todo: '재미있는 리액트 시간',
    }),
  ]),
}

export default (state = initState, action) => {
  const { todoList } = state

  switch (action.type) {
    case AT.ADD_TODO:
      return {
        todoList: todoList.push(new ToDo(action.payload)),
      }

    case AT.DELETE_TODO:
      return {
        todoList: (() => {
          const idx = todoList.findIndex(item => item.id === action.payload.id)
          if (idx !== -1) {
            return todoList.delete(idx)
          }
          return todoList
        })()
      }

    default:
      return state
  }
}