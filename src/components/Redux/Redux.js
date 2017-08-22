/* External dependencies */
import React from 'react'
import autobind from 'core-decorators/lib/autobind'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'


/* Internal dependencies */
import styles from './Redux.scss'
import todoActions from '../../redux/actions/todoActions'

@reduxForm({
  form: 'todo',
  initialValues: {
    todo: '',
  }
})
@connect(state => ({
  todoList: state.todoReducer.todoList,
}))
class Redux extends React.Component {

  @autobind
  handleSubmit(todo) {
    this.props.dispatch(todoActions.addTodo({
      ...todo,
      id: uuid.v4(),
    }))
    this.props.initialize()
  }

  handleDelete(item) {
    return () => {
      this.props.dispatch(todoActions.deleteTodo({ id: item.id }))
    }
  }

  @autobind
  renderTodo(item) {
    return (
      <div key={item.id} className={styles.item}>
        <div className={styles.todo}>
          {item.todo}
        </div>
        <div onClick={this.handleDelete(item)} className={styles.delete}>
          X
        </div>
      </div>
    )
  }

  @autobind
  renderToDoField(field) {
    const { input, meta } = field
    return (
      <input value={input.value} onChange={input.onChange} />
    )
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {this.props.todoList.map(this.renderTodo)}
        </div>
        <form className={styles.action} onSubmit={this.props.handleSubmit(this.handleSubmit)}>
          <div className={styles.input}>
            <Field name="todo" component={this.renderToDoField} />
            <button disabled={this.props.pristine} type="submit">
              등록하기
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Redux