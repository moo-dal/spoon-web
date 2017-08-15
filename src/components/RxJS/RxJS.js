/* External dependencies */
import React from 'react'
import autobind from 'core-decorators/lib/autobind'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

/* Internal dependencies */
import styles from './RxJS.scss'
import githubActions from '../../redux/actions/githubActions'

const gitKeys = [
  'id',
  'login',
  'name',
  'followers',
  'following'
]

@reduxForm({
  form: 'rxjs',
  initialValues: {
    username: '',
  }
})
@connect(state => ({
  isFetching: state.githubReducer.isFetching,
  hasError: state.githubReducer.hasError,
  user: state.githubReducer.user,
}))
class RxJS extends React.Component {

  @autobind
  handleSubmit(user) {
    const payload = {
      username: user.username,
    }
    this.props.dispatch(githubActions.requestGetUser(payload))
  }

  @autobind
  renderUserNameField(field) {
    const { input, meta } = field
    return (
      <input value={input.value} onChange={input.onChange} />
    )
  }

  renderEmpty() {
    return (
      <div className={styles.container}>
        검색을 해주세요.
      </div>
    )
  }

  renderNotFound() {
    return (
      <div className={styles.container}>
        검색 결과가 없습니다.
      </div>
    )
  }

  renderSearching() {
    return (
      <div className={styles.container}>
        검색중입니다.
      </div>
    )
  }

  renderUser() {
    if (this.props.isFetching) {
      return this.renderSearching()
    } else if (this.props.hasError) {
      return this.renderNotFound()
    } else if (this.props.user.isEmpty()) {
      return this.renderEmpty()
    }
    return (
      <div className={styles.container}>
        <img src={this.props.user.get('avatar_url')} />
        {gitKeys.map(key => (
          <div key={key} className={styles.row}>
            <span className={styles.key}>{key}</span>
            <span className={styles.value}>{this.props.user.get(key)}</span>
          </div>
        ))}
      </div>
    )
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.user}>
          {this.renderUser()}
        </div>
        <form className={styles.action} onSubmit={this.props.handleSubmit(this.handleSubmit)}>
          <div className={styles.input}>
            <Field name="username" component={this.renderUserNameField} />
            <button disabled={this.props.pristine} type="submit">
              검색하기
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default RxJS