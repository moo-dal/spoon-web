/* External dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internal dependencies */
import styles from './Schedule.scss'
import DailySchedule from '../DailySchedule'
import MonthlySchedule from '../MonthlySchedule'

@connect()
class Schedule extends React.Component {

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