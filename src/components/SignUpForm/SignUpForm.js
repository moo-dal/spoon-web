/* External dependencies */
import React from 'react'
import { reduxForm, Field } from 'redux-form'
import autobind from 'core-decorators/lib/autobind'

/* Internal dependencies */
import styles from './SignUpForm.scss'
import Input from '../../elements/Input'
import Button from '../../elements/Button'

@reduxForm({
  form: 'signup',
  initialValues: {
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
  }
})
class SignUpForm extends React.Component {

  @autobind
  handleSignUp(user) {
    this.props.onSignUp(user)
  }

  @autobind
  renderNameField(field) {
    const { input, meta } = field
    return (
      <div className={styles.row}>
        <div className={styles.label}>
          Name / Nickname
        </div>
        <Input
          autoFocus
          value={input.value}
          onChange={input.onChange}
          placeholder="성명 / 닉네임을 입력해주세요"
          className={styles.input} />
      </div>
    )
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

  @autobind
  renderPasswordCheckField(field) {
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
          placeholder="비밀번호를 한번 더 입력해주세요"
          className={styles.input} />
      </div>
    )
  }

  render() {
    const { submitting, pristine, handleSubmit } = this.props
    return (
      <form className={styles.wrapper} onSubmit={handleSubmit(this.handleSignUp)}>
        <Field name="name" component={this.renderNameField} />
        <Field name="email" component={this.renderEmailField} />
        <Field name="password" component={this.renderPasswordField} />
        <Field name="passwordCheck" component={this.renderPasswordCheckField} />
        <Button type="submit" className={styles.button}>
          회원 가입
        </Button>
      </form>
    )
  }
}

export default SignUpForm