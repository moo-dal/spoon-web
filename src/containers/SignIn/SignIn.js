/* External dependencies */
import React from 'react'

/* Internal dependencies */
import styles from './SignIn.scss'
import SignInForm from '../../components/SignInForm'

class SignIn extends React.Component {

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          SIGN IN
        </div>
        <div className={styles.body}>
          <SignInForm />
        </div>
      </div>
    )
  }
}

export default SignIn