/* External dependencies */
import _ from 'lodash'
import Immutable from 'immutable'
import moment from 'moment'

const CalendarDateRecord = Immutable.Record({
  year: 0,
  month: 0,
  date: 0,
})

class CalendarDate extends CalendarDateRecord {
  constructor(args) {
    if (_.isPlainObject(args)) {
      super(args)
    } else if (_.isString(args)) {
      const arr = args.split('-')
      super({
        year: +arr[0],
        month: +arr[1],
        date: +arr[2],
      })
    }
  }

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
    const today = (moment(new Date(this.year, this.month, this.date)).format('dddd') || '').toUpperCase()
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

  laterOrEqualMonth(comp) {
    if (this.year === comp.year) {
      return this.month >= comp.month
    }
    return this.year > comp.year
  }

  prevOrEqulaMonth(comp) {
    if (this.year === comp.year) {
      return this.month <= comp.month
    }
    return this.year < comp.year
  }

  toFormat(format) {
    return moment(new Date(this.year, this.month, this.date)).format(format)
  }
}

export default CalendarDate