/* External dependencies */
import React from 'react'
import FontAwesome from 'react-fontawesome'
import { reduxForm, Field } from 'redux-form'
import autobind from 'core-decorators/lib/autobind'

/* Internal dependencies */
import styles from './CreateScheduleForm.scss'
import Input from '../../elements/Input'
import Button from '../../elements/Button'

@reduxForm({
  form: 'CreateScheduleForm',
  initialValues: {
    title: '',
    url: '',
    startDate: '',
    endData: '',
    isPublic: false,
  }
})
class CreateScheduleForm extends React.Component {

  @autobind
  renderTitleField(field) {
    const { input, meta } = field
    return (
      <div className={styles.row}>
        <div className={styles.label}>
          일정명
        </div>
        <Input
          className={styles.input}
          placeholder="일정을 소개해주세요."
          onChange={input.onChange} />
      </div>
    )
  }

  @autobind
  renderURLField(field) {
    const { input, meta } = field
    return (
      <div className={styles.row}>
        <div className={styles.label}>
          URL
        </div>
        <Input
          className={styles.input}
          placeholder="행사 정보 페이지를 입력해주세요."
          onChange={input.onChange} />
      </div>
    )
  }

  render() {
    const { submitting, pristine, handleSubmit } = this.props
    return (
      <form className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.title}>내 일정 등록</div>
        </div>
        <Field name="title" component={this.renderTitleField} />
        <Field name="url" component={this.renderURLField} />
      </form>
    )
  }
}

export default CreateScheduleForm