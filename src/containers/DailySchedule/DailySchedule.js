/* External dependencies */
import React from 'react'
import classNames from 'classnames'
import autobind from 'core-decorators/lib/autobind'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'

/* Internal dependencies */
import styles from './DailySchedule.scss'
import accountActions from '../../redux/actions/accountActions'
import userSelector from '../../redux/selectors/userSelector'
import scheduleSelector from '../../redux/selectors/schelduleSelector'
import UserInfo from '../../components/UserInfo'
import CreateScheduleForm from '../../components/CreateScheduleForm'

const mapStateToProps = (state) => ({
  user: userSelector.getUser(state),
  selectedDate: scheduleSelector.getSelectedDate(state),
})

@connect(mapStateToProps)
class DailySchedule extends React.Component {

  constructor() {
    super()
    this.state = {
      showCreator: true,
    }
  }

  @autobind
  handleSignOut() {
    this.props.dispatch(accountActions.signOut())
    this.props.dispatch(replace('/signin'))
  }

  @autobind
  handleShowCreator() {
    this.setState({
      showCreator: true,
    })
  }

  @autobind
  handleHideCreator() {
    this.setState({
      showCreator: false,
    })
  }

  renderBody() {
    if (this.state.showCreator) {
      return (
        <div className={styles.body}>
          <CreateScheduleForm
            onCancel={this.handleHideCreator} />
        </div>
      )
    }
    return (
      <div className={styles.body}>
        <div onClick={this.handleShowCreator} className={styles.creator}>
          <FontAwesome name="plus" />
          새로운 일정 등록하기
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={classNames(styles.wrapper, this.props.className)}>
        <div className={styles.info}>
          <UserInfo onSignOut={this.handleSignOut} user={this.props.user} />
        </div>
        <div className={styles.date}>{this.props.selectedDate.date}</div>
        <div className={styles.day}>{this.props.selectedDate.getStringDate()}</div>
        {this.renderBody()}
      </div>
    )
  }
}

export default DailySchedule