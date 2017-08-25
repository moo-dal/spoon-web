/* External dependencies */
import React from 'react'
import autobind from 'core-decorators/lib/autobind'
import classNames from 'classnames'
import c from 'calendar'

/* Internal dependencies */
import styles from './Calendar.scss'
import CalendarDate from '../../models/CalendarDate'

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const calUtil = new c.Calendar()

class Calendar extends React.Component {

  @autobind
  handleClickDate(date) {
    console.log(date)
    this.props.onClickDate(new CalendarDate({
      year: this.props.calendarDate.year,
      month: this.props.calendarDate.month,
      date,
    }))
  }

  renderHeader() {
    return (
      <div className={styles.row}>
        {days.map((val, idx) => (<div key={idx} className={styles.cell}>{val}</div>))}
      </div>
    )
  }

  renderBody() {
    const weeks = calUtil.monthDays(this.props.calendarDate.year, this.props.calendarDate.month)
    return (
      weeks.map((week, idx) => (
        <div key={idx} className={styles.row}>
          {week.map((date, idx) => (
            <div
              onClick={() => (date ? this.handleClickDate(date) : null)}
              key={idx}
              className={classNames(styles.cell, { [styles.clickable]: date })}>
              {date ? date : ''}
            </div>
          ))}
        </div>
      ))
    )
  }

  render() {
    return (
      <div className={classNames(styles.wrapper, this.props.className)}>
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    )
  }
}

export default Calendar