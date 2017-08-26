/* External dependencies */
import _ from 'lodash'
import moment from 'moment'
import Immutable from 'immutable'

/* Internal dependencies */
import AT from '../../constants/ActionTypes'
import CalendarDate from '../../models/CalendarDate'
import Schedule from '../../models/Schedule'

const initState = {
  calendarDate: new CalendarDate({
    year: moment().year(),
    month: moment().month() + 1,
  }),
  selectedDate: new CalendarDate({
    year: moment().year(),
    month: moment().month() + 1,
    date: moment().date(),
  }),
  todayDate: new CalendarDate({
    year: moment().year(),
    month: moment().month() + 1,
    date: moment().date(),
  }),
  schedules: Immutable.List(),
}

console.log(initState.calendarDate.toFormat('YYYY-MM-DD'))

const upsert = (list, data) => {
  const idx = list.findIndex(elem => elem.id === data.id)
  if (idx !== -1) {
    return list.set(idx, date)
  }
  return list.push(data)
}

const upsertBulk = (list, datas) => {
  return list.withMutations(mutualList => {
    datas.forEach(data => {
      const idx = mutualList.findIndex(elem => elem.id === data.id)
      if (idx !== -1) {
        mutualList.set(idx, data)
      } else {
        mutualList.push(data)
      }
    })
  })
}

export default (state = initState, action) => {
  const { schedules } = state

  switch (action.type) {

    case AT.REQUEST_SET_CALENDAR_DATE:
      return {
        ...state,
        calendarDate: action.payload.calendarDate,
      }

    case AT.REQUEST_SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload.selectedDate,
      }

    case AT.REQUEST_GET_SCHEDULES_SUCCESS:
      return {
        ...state,
        schedules: upsertBulk(schedules, _.values(action.payload).map(schedule => (new Schedule(schedule))))
      }

    case AT.REQUEST_CREATE_SCHEDULE_SUCCESS:
      return {
        ...state,
        schedules: upsert(schedules, new Schedule(action.payload)),
      }

    default:
      return state
  }
}
