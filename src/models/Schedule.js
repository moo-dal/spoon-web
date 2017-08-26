/* External dependencies */
import Immutable from 'immutable'

const ScheduleRecord = Immutable.Record({
  id: '',
  url: '',
  startDate: '',
  endDate: '',
  isPublic: false,
  calendarId: 0,
  userId: 0,
})

class Schedule extends ScheduleRecord {
}

export default Schedule