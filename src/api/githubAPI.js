/* Internal dependencies */
import apiService from '../services/apiServie'

const getUser = username => (
  apiService.get(`/users/${username}`)
)

export default {
  getUser,
}

