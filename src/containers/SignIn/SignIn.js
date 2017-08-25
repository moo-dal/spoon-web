/* External dependencies */
import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import autobind from 'core-decorators/lib/autobind'

/* Internal dependencies */
import styles from './SignIn.scss'
import Button from '../../elements/Button'
import SignInForm from '../../components/SignInForm'
import accountActions from '../../redux/actions/accountActions'

@connect()
class SignIn extends React.Component {

  @autobind
  handleSignIn(user) {
    this.props.dispatch(accountActions.signIn(user))
      .promise
      .then(() => {
        this.props.dispatch(push('/schedule'))
      }, () => {
        console.log("로그인 실패")
      })
  }

  @autobind
  handleClickSignUp() {
    this.props.dispatch(push('/signup'))
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.illustration}>
          <div className={styles.title}>
            {
              '함께 만들어가는\n' +
              '공유달력  SPOON\n' +
              '\n' +
              '지금 시작해보세요.'
            }
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.header}>
            SIGN IN
          </div>
          <div className={styles.body}>
            <SignInForm onSignIn={this.handleSignIn} />
          </div>
          <Button
            onClick={this.handleClickSignUp}
            buttonType={Button.ButtonTypes.BORDER}
            className={styles.button}>
            회원 가입
          </Button>
        </div>
      </div>
    )
  }
}

export default SignIn