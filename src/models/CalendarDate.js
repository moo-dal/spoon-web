/* External dependencies */
import Immutable from 'immutable'
import moment from 'moment'

const CalendarDateRecord = Immutable.Record({
  year: 0,
  month: 0,
  date: 0,
})

class CalendarDate extends CalendarDateRecord {
  getPrevMonth() {
    if (this.month === 1) {
      return new CalendarDate({
        year: this.year - 1,
        month: 12
      })
    }
    return new CalendarDate({
      year: this.year,
      month: this.month - 1,
    })
  }

  getNextMonth() {
    if (this.month === 12) {
      return new CalendarDate({
        year: this.year + 1,
        month: 1,
      })
    }
    return new CalendarDate({
      year: this.year,
      month: this.month + 1,
    })
  }

  getStringDate() {
    return moment(Date(this.year, this.month, this.date)).format('dddd').toUpperCase() || '알수없음'
  }
}

export default CalendarDate