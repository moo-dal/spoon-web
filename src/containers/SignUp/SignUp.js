/* External dependencies */
import React from 'react'

/* Internal dependencies */
import styles from './SignUp.scss'
import SignUpForm from '../../components/SignUpForm'

class SignUp extends React.Component {

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          SIGN UP
        </div>
        <div className={styles.body}>
          <SignUpForm />
        </div>
      </div>
    )
  }
}

export default SignUp