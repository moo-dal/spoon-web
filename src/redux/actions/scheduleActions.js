/* Internal dependencies */
import AT from '../../constants/ActionTypes'
import { actionCreator, actionCreatorWithPromise } from './actionCreator'

export default {
  setCalendarDate: actionCreator(AT.REQUEST_SET_CALENDAR_DATE),
  setSelectedDate: actionCreator(AT.REQUEST_SET_SELECTED_DATE),
  createSchedule: actionCreatorWithPromise(AT.REQUEST_CREATE_SCHEDULE),
}