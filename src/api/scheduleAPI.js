/* Internal dependencies */
import apiService from '../services/apiServie'

const createSchedule = schedule => (
  apiService.post(`/api/schedules`, schedule)
)

const getSchedules = (yearMonth, userId) => (
  apiService.get('/api/schedules', { yearMonth, userId })
)

export default {
  createSchedule,
  getSchedules,
}

