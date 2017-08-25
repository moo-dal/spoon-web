/* External dependencies */
import Immutable from 'immutable'

const ScheduleRecord = Immutable.Record({
  id: '',
  url: '',
  startDate: '',
  endDate: '',
  isPublic: false,
})

class Schedule extends ScheduleRecord {
}

export default Schedule