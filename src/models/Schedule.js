/* External dependencies */
import Immutable from 'immutable'

const UserRecord = Immutable.Record({
  id: '',
  url: '',
  startDate: '',
  endDate: '',
  isPublic: false,
})

class User extends UserRecord {
}

export default User