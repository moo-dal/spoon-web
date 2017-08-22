/* External dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

/* Internal dependencies */
import Routes from './routes'
import reduxService from './services/reduxService'

require('./styles/global.scss')

//zzzzz
const virtualDOM = (
  <Provider store={reduxService.getStore()}>
    {Routes}
  </Provider>
)

ReactDOM.render(virtualDOM, window.document.getElementById('main'))
