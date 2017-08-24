/* External dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internal dependencies */
import styles from './DailySchedule.scss'
import userSelector from '../../redux/selectors/userSelector'

const mapStateToProps = (state) => ({
  user: userSelector.getUser(state),
})

@connect(mapStateToProps)
class DailySchedule extends React.Component {

  render() {
    console.log(this.props.user.toJS())
    return (
      <div className={styles.wrapper}>
        <div className={styles.date}>14</div>
        <div className={styles.day}>TUESDAY</div>
      </div>
    )
  }
}

export default DailySchedule