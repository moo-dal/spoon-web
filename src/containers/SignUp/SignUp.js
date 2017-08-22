/* External dependencies */
import React from 'react'
import { connect } from 'react-redux'
import autobind from 'core-decorators/lib/autobind'

/* Internal dependencies */
import styles from './SignUp.scss'
import SignUpForm from '../../components/SignUpForm'
import accountActions from '../../redux/actions/accountActions'

@connect()
class SignUp extends React.Component {

  @autobind
  handleSignUp(user) {
    this.props.dispatch(accountActions.signUp(user))
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          SIGN UP
        </div>
        <div className={styles.body}>
          <SignUpForm onSignUp={this.handleSignUp} />
        </div>
      </div>
    )
  }
}

export default SignUp