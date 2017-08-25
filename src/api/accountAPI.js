/* Internal dependencies */
import apiService from '../services/apiServie'

const signIn = (email, password) => (
  apiService.post(`/accounts/tokens/`, { email, password })
)

const signUp = (email, name, password, passwordCheck) => (
  apiService.post(`/accounts/`, { email, name, password, passwordCheck })
)

const getMe = () => (apiService.get('/accounts/tokens/validate'))

export default {
  signIn,
  signUp,
  getMe,
}

