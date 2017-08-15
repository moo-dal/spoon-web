/* External dependencies */
import React from 'react'
import { Router, Route, IndexRedirect } from 'react-router'

/* Internal dependencies */
import reduxService from './services/reduxService'
import Home from './components/Home'
import Welcome from './components/Welcome'
import State from './components/State'
import Redux from './components/Redux'
import RxJS from './components/RxJS'

export default (
  <Router history={reduxService.getHistory()}>
    <Route path="/" component={Home}>
      <IndexRedirect to="welcome" />
      <Route path="welcome" component={Welcome} />
      <Route path="state" component={State} />
      <Route path="redux" component={Redux} />
      <Route path="rxjs" component={RxJS} />
    </Route>
  </Router>
)