/* External dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internal dependencies */
import styles from './Schedule.scss'
import DailySchedule from '../DailySchedule'
import MonthlySchedule from '../MonthlySchedule'
import userSelector from '../../redux/selectors/userSelector'
import scheduleSelector from '../../redux/selectors/scheduleSelector'
import scheduleActions from '../../redux/actions/scheduleActions'

const mapStateToProps = (state) => ({
  user: userSelector.getUser(state),
  selectedDate: scheduleSelector.getSelectedDate(state),
  calendarDate: scheduleSelector.getCalendarDate(state),
})

@connect(mapStateToProps)
class Schedule extends React.Component {

  componentWillMount() {
    if (this.props.user.id) {
      this.props.dispatch(scheduleActions.getSchedules({
        yearMonth: this.props.calendarDate.toFormat('YYYY-MM'),
        userId: this.props.user.id,
      }))
    }
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props.user.id !== nextProps.user.id || !this.props.calendarDate.equal(nextProps.calendarDate)) && nextProps.user.id) {
      this.props.dispatch(scheduleActions.getSchedules({
        yearMonth: nextProps.calendarDate.toFormat('YYYY-MM'),
        userId: nextProps.user.id,
      }))
    }
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <MonthlySchedule className={styles.monthly} />
        <DailySchedule className={styles.daily} />
      </div>
    )
  }
}

export default Schedule