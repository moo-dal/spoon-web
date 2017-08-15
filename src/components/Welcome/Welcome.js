/* External dependencies */
import React from 'react'

/* Internal dependencies */
import styles from './Welcome.scss'

class Welcome extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <img src={require('../../styles/images/say-hello.png')} />
        <span className={styles.text}>
          Welcome!! This project is zoyi-react-boilerplate
        </span>
      </div>
    )
  }
}

export default Welcome