/* External dependencies */
import React from 'react'
import autobind from 'core-decorators/lib/autobind'

/* Internal dependencies */
import styles from './State.scss'

class State extends React.Component {

  constructor() {
    super()
    this.state = {
      counter: 0,
    }
  }

  @autobind
  handleIncrease() {
    this.setState(state => ({
      ...state,
      counter: state.counter + 1,
    }))
  }

  @autobind
  handleDecrease() {
    this.setState(state => ({
      ...state,
      counter: state.counter - 1,
    }))
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.body}>
          <div className={styles.alert}>
            The state is reset when you go to another page.
          </div>
          {`Counter : ${this.state.counter}`}
        </div>
        <div className={styles.action}>
          <button onClick={this.handleDecrease}>감소</button>
          <button onClick={this.handleIncrease}>증가</button>
        </div>
      </div>
    )
  }
}

export default State