/* External dependencies */
import React from 'react'
import className from 'classnames'

/* Internal dependencies */
import styles from './ScheduleItem.scss'
import Button from '../../elements/Button'

class ScheduleItem extends React.Component {
  render() {
    return (
      <div className={className(styles.wrapper, this.props.className)}>
        <div className={styles.meta}>
          <div className={styles.dot} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            {this.props.schedule.title}
          </div>
          <div className={styles.date}>
            {this.props.schedule['start_date'].split('-').join('.')}
          </div>
        </div>
        <div className={styles.action}>
          <Button className={styles.button}>
            내 달력에 추가
          </Button>
        </div>
      </div>
    )
  }
}

export default ScheduleItem