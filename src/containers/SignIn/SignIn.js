/* External dependencies */
import React from 'react'
import { connect } from 'react-redux'
import autobind from 'core-decorators/lib/autobind'

/* Internal dependencies */
import styles from './SignIn.scss'
import SignInForm from '../../components/SignInForm'
import accountActions from '../../redux/actions/accountActions'

@connect()
class SignIn extends React.Component {

  @autobind
  handleSignIn(user) {
    this.props.dispatch(accountActions.signIn(user))
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          SIGN IN
        </div>
        <div className={styles.body}>
          <SignInForm onSignIn={this.handleSignIn} />
        </div>
      </div>
    )
  }
}

export default SignIn