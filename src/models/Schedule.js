/* External dependencies */
import _ from 'lodash'
import Immutable from 'immutable'

/* Internal dependencies */
import CalendarDate from './CalendarDate'

const ScheduleRecord = Immutable.Record({
  id: '',
  title: '',
  url: '',
  start_date: '',
  end_date: '',
  is_public: false,
  calendar_id: 0,
  user_id: 0,
})

class Schedule extends ScheduleRecord {
  constructor(args) {
    super(_.mapKeys(args, (val, key) => _.snakeCase(key)))
  }

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