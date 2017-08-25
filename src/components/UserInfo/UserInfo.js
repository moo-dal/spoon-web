/* External dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'
import autobind from 'core-decorators/lib/autobind'
import { Overlay } from'react-overlays'

/* Internal dependencies */
import styles from './UserInfo.scss'
import Button from "../../elements/Button/Button";

class UserInfo extends React.Component {

  constructor() {
    super()
    this._refs = {}
    this.state = {
      showOverlay: false,
    }
  }

  @autobind
  handleShowOverlay() {
    this.setState({
      showOverlay: true,
    })
  }

  @autobind
  handleHideOverlay() {
    this.setState({
      showOverlay: false,
    })
  }

  renderOverlay() {
    if (!this.props.user.id) {
      return null
    }

    return (
      <Overlay
        rootClose
        container={this}
        placement="bottom"
        target={props => ReactDOM.findDOMNode(this._refs.name)}
        show={this.state.showOverlay}
        onHide={this.handleHideOverlay}>
        <div className={styles.overlay}>
          <div className={styles.row}>
            <div className={styles.label}>
              닉네임
            </div>
            <div className={styles.content}>
              {this.props.user.name}
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.row}>
            <div className={styles.label}>
              아이디
            </div>
            <div className={styles.content}>
              {this.props.user.email}
            </div>
          </div>
          <Button
            onClick={this.props.onSignOut}
            buttonType={Button.ButtonTypes.WHITE}
            className={styles.button}>
            로그아웃
          </Button>
        </div>
      </Overlay>
    )
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div
          ref={e => this._refs.name = e}
          onClick={this.handleShowOverlay}
          className={styles.name}>
          {`${this.props.user.name} 님`}
          <FontAwesome name="chevron-down" />
        </div>
        {this.renderOverlay()}
      </div>
    )
  }
}

export default UserInfo