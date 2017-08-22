/* External dependencies */
import React from 'react'
import { Router, Route, IndexRedirect } from 'react-router'

/* Internal dependencies */
import reduxService from './services/reduxService'
import App from './containers/App'
import SignIn from './containers/SignIn'
import SignUp from './containers/SignUp'
import Daily from './containers/DailySchedule'

export default (
  <Router history={reduxService.getHistory()}>
    <Route path="/" component={App}>
      <IndexRedirect to="signin" />
      <Route path="signin" component={SignIn} />
      <Route path="signup" component={SignUp} />
      <Route path="daily" component={Daily} />
    </Route>
  </Router>
)