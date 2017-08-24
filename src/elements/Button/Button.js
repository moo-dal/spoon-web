/* External dependencies */
import React from 'react'
import keyMirror from 'keymirror'
import classNames from 'classnames'

/* Internal dependencies */
import styles from './Button.scss'

const ButtonTypes = keyMirror({
  DEFAULT: null,
  BORDER: null,
})

class Button extends React.Component {

  getButtonClassName(buttonType) {
    switch (buttonType) {
      case ButtonTypes.DEFAULT:
        return styles.default

      case ButtonTypes.BORDER:
        return styles.border

      default:
        return styles.default
    }
  }

  render() {
    const { className, children, buttonType, ...props } = this.props
    return (
      <button
        {...props}
        className={classNames(styles.button, this.getButtonClassName(buttonType), className)}>
        {children}
      </button>
    )
  }
}

Button.ButtonTypes = ButtonTypes

export default Button