/* Internal dependencies */
import apiService from '../services/apiServie'

const signIn = (email, password) => (
  apiService.post(`/accounts/tokens/`, { email, password })
)

export default {
  signIn,
}

