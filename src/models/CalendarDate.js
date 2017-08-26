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
    const today = (moment({ year: this.year, months: this.month, date: this.date }).format('dddd') || '').toUpperCase()
    return today || '알수없음'
  }

  equal(comp) {
    return this.year === comp.year && this.month === comp.month && this.date === comp.date
  }

  laterOrEqual(comp) {
    if (this.year === comp.year) {
      if (this.month === comp.month) {
        return this.date >= comp.date
      }
      return this.month >= comp.month
    }
    return this.year > comp.year
  }

  prevOrEqual(comp) {
    if (this.year === comp.year) {
      if (this.month === comp.month) {
        return this.date <= comp.date
      }
      return this.month < comp.month
    }
    return this.year < comp.year
  }
}

export default CalendarDate