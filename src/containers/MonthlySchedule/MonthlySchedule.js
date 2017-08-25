/* External dependencies */
import React from 'react'
import autobind from 'core-decorators/lib/autobind'
import classNames from 'classnames'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'

/* Internal dependencies */
import styles from './MonthlySchedule.scss'
import userSelector from '../../redux/selectors/userSelector'
import scheduleSelector from '../../redux/selectors/schelduleSelector'
import scheduleActions from '../../redux/actions/scheduleActions'
import Calendar from "../../components/Calendar";

const mapStateToProps = (state) => ({
  user: userSelector.getUser(state),
  calendarDate: scheduleSelector.getCalendarDate(state),
})

@connect(mapStateToProps)
class MonthlySchedule extends React.Component {

  @autobind
  handleClickPrevMonth() {
    const payload = { calendarDate: this.props.calendarDate.getPrevMonth() }
    this.props.dispatch(scheduleActions.setCalendarDate(payload))
  }

  @autobind
  handleClickNextMonth() {
    const payload = { calendarDate: this.props.calendarDate.getNextMonth() }
    this.props.dispatch(scheduleActions.setCalendarDate(payload))
  }

  @autobind
  handleClickDate(selectedDate) {
    this.props.dispatch(scheduleActions.setSelectedDate({ selectedDate }))
  }

  render() {
    return (
      <div className={classNames(styles.wrapper, this.props.className)}>
        <div className={styles.header}>
          <div className={styles.date}>
            {`${this.props.calendarDate.year}.${this.props.calendarDate.month}`}
          </div>
          <FontAwesome onClick={this.handleClickPrevMonth} name="chevron-left" />
          <FontAwesome onClick={this.handleClickNextMonth} name="chevron-right" />
        </div>
        <div className={styles.body}>
          <Calendar
            onClickDate={this.handleClickDate}
            calendarDate={this.props.calendarDate} />
        </div>
      </div>
    )
  }
}

export default MonthlySchedule