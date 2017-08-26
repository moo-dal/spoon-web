/* External dependencies */
import { createSelector } from 'reselect'

const getCalendarDate = state => state.scheduleReducer.calendarDate

const getSelectedDate = state => state.scheduleReducer.selectedDate

const getTodayDate = state => state.scheduleReducer.todayDate

const getMonthlySchedules = createSelector(
  getCalendarDate,
  state => state.scheduleReducer.schedules,
  (calendarDate, schedules) => schedules.filter(schedule => schedule.includeMonth(calendarDate))
)

const getDailySchedules = createSelector(
  getSelectedDate,
  state => state.scheduleReducer.schedules,
  (selectedDate, schedules) => schedules.filter(schedule => schedule.includeDate(selectedDate))
)

export default {
  getCalendarDate,
  getSelectedDate,
  getTodayDate,
  getMonthlySchedules,
  getDailySchedules,
}