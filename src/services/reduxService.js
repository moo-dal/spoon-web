/* External dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createHashHistory } from 'history'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

/* Internal dependencies */
import reducers from '../redux/reducers'
import epics from '../redux/epics'
import sideEffects from '../redux/middleWares/sideEffects'
import actionsLifecycle from '../redux/middleWares/actionsLifecycle'

class ReduxService {
  constructor() {
    const history = useRouterHistory(createHashHistory)({ queryKey: false })
    this.store = createStore(
      combineReducers({
        ...reducers,
        routing: routerReducer,
        form: formReducer,
      }),
      applyMiddleware(
        actionsLifecycle,
        sideEffects,
        routerMiddleware(history),
        createEpicMiddleware(combineEpics(epics))
      )
    )
    this.history = syncHistoryWithStore(history, this.store)
  }

  getStore() {
    return this.store
  }

  getHistory() {
    return this.history
  }
}

export default new ReduxService()