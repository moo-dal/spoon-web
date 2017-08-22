/* External dependencies */
import React from 'react'
import { reduxForm, Field } from 'redux-form'
import autobind from 'core-decorators/lib/autobind'

/* Internal dependencies */
import styles from './SignInForm.scss'
import Input from '../../elements/Input'
import Button from '../../elements/Button'

@reduxForm({
  form: 'signin',
  initialValues: {
    email: '',
    password: '',
  }
})
class SignInForm extends React.Component {

  @autobind
  handleSignIn(user) {
    this.props.onSignIn(user)
  }

  @autobind
  renderEmailField(field) {
    const { input, meta } = field
    return (
      <div className={styles.row}>
        <div className={styles.label}>
          E-mail
        </div>
        <Input
          autoFocus
          value={input.value}
          onChange={input.onChange}
          placeholder="이메일을 입력해주세요"
          className={styles.input} />
      </div>
    )
  }

  @autobind
  renderPasswordField(field) {
    const { input, meta } = field
    return (
      <div className={styles.row}>
        <div className={styles.label}>
          Password
        </div>
        <Input
          type="password"
          value={input.value}
          onChange={input.onChange}
          placeholder="비밀번호를 입력해주세요"
          className={styles.input} />
      </div>
    )
  }

  render() {
    const { submitting, pristine, handleSubmit } = this.props
    return (
      <form className={styles.wrapper} onSubmit={handleSubmit(this.handleSignIn)}>
        <Field name="email" component={this.renderEmailField} />
        <Field name="password" component={this.renderPasswordField} />
        <Button type="submit" className={styles.button}>
          로그인하기
        </Button>
      </form>
    )
  }
}

export default SignInForm