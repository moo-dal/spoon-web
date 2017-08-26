/* External dependencies */
import moment from 'moment'
import Immutable from 'immutable'

/* Internal dependencies */
import AT from '../../constants/ActionTypes'
import CalendarDate from '../../models/CalendarDate'
import Schedule from '../../models/Schedule'

const initState = {
  calendarDate: new CalendarDate({
    year: moment().year(),
    month: moment().month(),
  }),
  selectedDate: new CalendarDate({
    year: moment().year(),
    month: moment().month(),
    date: moment().date(),
  }),
  todayDate: new CalendarDate({
    year: moment().year(),
    month: moment().month(),
    date: moment().date(),
  }),
  schedules: Immutable.List(),
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

    case AT.REQUEST_CREATE_SCHEDULE_SUCCESS:
      return {
        ...state,
        schedules: schedules.push(new Schedule(action.payload)),
      }

    default:
      return state
  }
}
