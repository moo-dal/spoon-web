/* External dependencies */
import Immutable from 'immutable'
import moment from 'moment'

/* Internal dependencies */
import CalendarDate from './CalendarDate'

const ScheduleRecord = Immutable.Record({
  id: '',
  url: '',
  start_date: '',
  end_date: '',
  is_public: false,
  calendar_id: 0,
  user_id: 0,
})

class Schedule extends ScheduleRecord {
  includeMonth(date) {
    const sDate = new CalendarDate(this.start_date)
    const eDate = new CalendarDate(this.end_date)
    return sDate.prevOrEqulaMonth(date) && eDate.laterOrEqualMonth(date)
  }

  includeDate(date) {
    const sDate = new CalendarDate(this.start_date)
    const eDate = new CalendarDate(this.end_date)
    return sDate.prevOrEqual(date) && eDate.laterOrEqual(date)
  }
}

export default Schedule