/* External dependencies */
import Immutable from 'immutable'

const UserRecord = Immutable.Record({
  email: '',
  name: '',
  id: '',
})

class User extends UserRecord {
}

export default User