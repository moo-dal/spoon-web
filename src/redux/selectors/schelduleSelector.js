/* External dependencies */

const getCalendarDate = state => state.scheduleReducer.calendarDate

const getSelectedDate = state => state.scheduleReducer.selectedDate

export default {
  getCalendarDate,
  getSelectedDate,
}