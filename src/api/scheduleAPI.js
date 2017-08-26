/* Internal dependencies */
import apiService from '../services/apiServie'

const createSchedule = schedule => (
  apiService.post(`/api/schedules`, schedule)
)

export default {
  createSchedule,
}

