/* External dependencies */

const getCalendarDate = state => state.scheduleReducer.calendarDate

const getSelectedDate = state => state.scheduleReducer.selectedDate

const getTodayDate = state => state.scheduleReducer.todayDate

export default {
  getCalendarDate,
  getSelectedDate,
  getTodayDate,
}