/* External dependencies */
import Immutable from 'immutable'

const todoRecord = Immutable.Record({
  id: '',
  todo: '',
})

class ToDo extends todoRecord {
}

export default ToDo