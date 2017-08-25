/* External dependencies */
import moment from 'moment'

/* Internal dependencies */
import AT from '../../constants/ActionTypes'
import CalendarDate from '../../models/CalendarDate'

const initState = {
  calendarDate: new CalendarDate({
    year: moment().year(),
    month: moment().month(),
  }),
  selectedDate: new CalendarDate({
    year: moment().year(),
    month: moment().month(),
    date: moment().date(),
  })
}

export default (state = initState, action) => {
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

    default:
      return state
  }
}
