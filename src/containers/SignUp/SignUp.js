/* External dependencies */
import React from 'react'
import { connect } from 'react-redux'
import autobind from 'core-decorators/lib/autobind'
import { push } from 'react-router-redux'

/* Internal dependencies */
import styles from './SignUp.scss'
import SignUpForm from '../../components/SignUpForm'
import accountActions from '../../redux/actions/accountActions'

@connect()
class SignUp extends React.Component {

  @autobind
  handleSignUp(user) {
    this.props.dispatch(accountActions.signUp(user))
      .promise
      .then(() => {
        this.props.dispatch(push('/signin'))
      }, (res) => {
        console.log(res)
        console.log("회원가입 실패")
      })
  }

  @autobind
  handleClickSignIn() {
    this.props.dispatch(push('/signin'))
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
            SIGN UP
          </div>
          <div className={styles.body}>
            <SignUpForm onSignUp={this.handleSignUp} />
          </div>
          <div className={styles.footer}>
            이미 아이디가 있으신가요?
            <span className={styles.signin} onClick={this.handleClickSignIn}>
              로그인 하기
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp