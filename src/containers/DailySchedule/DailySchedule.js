/* External dependencies */
import React from 'react'
import autobind from 'core-decorators/lib/autobind'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'

/* Internal dependencies */
import styles from './DailySchedule.scss'
import accountActions from '../../redux/actions/accountActions'
import userSelector from '../../redux/selectors/userSelector'
import UserInfo from '../../components/UserInfo'

const mapStateToProps = (state) => ({
  user: userSelector.getUser(state),
})

@connect(mapStateToProps)
class DailySchedule extends React.Component {

  @autobind
  handleSignOut() {
    this.props.dispatch(accountActions.signOut())
    this.props.dispatch(replace('/signin'))
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <UserInfo onSignOut={this.handleSignOut} user={this.props.user} />
        </div>
        <div className={styles.date}>14</div>
        <div className={styles.day}>TUESDAY</div>
      </div>
    )
  }
}

export default DailySchedule