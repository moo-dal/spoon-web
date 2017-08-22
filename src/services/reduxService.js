/* External dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createHashHistory } from 'history'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

/* Internal dependencies */
import reducers from '../redux/reducers'
import epics from '../redux/epics'

class ReduxService {
  constructor() {
    this.store = createStore(
      combineReducers({
        ...reducers,
        routing: routerReducer,
        form: formReducer,
      }),
      applyMiddleware(
        createEpicMiddleware(combineEpics(epics))
      )
    )
    this.history = syncHistoryWithStore(useRouterHistory(createHashHistory)({ queryKey: false }), this.store)
  }

  getStore() {
    return this.store
  }

  getHistory() {
    return this.history
  }
}

export default new ReduxService()