/* External dependencies */
import React from 'react'

/* Internal dependencies */
import styles from './DailySchedule.scss'

class DailySchedule extends React.Component {

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.date}>14</div>
        <div className={styles.day}>TUESDAY</div>
      </div>
    )
  }
}

export default DailySchedule