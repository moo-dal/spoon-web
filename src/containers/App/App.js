/* External dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internal dependencies */
import styles from './App.scss'
import accountActions from '../../redux/actions/accountActions'

@connect()
class App extends React.Component {

  componentWillMount() {
    this.props.dispatch(accountActions.getMe())
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    )
  }
}

export default App