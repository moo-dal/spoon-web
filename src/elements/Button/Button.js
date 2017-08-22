/* External dependencies */
import React from 'react'
import classNames from 'classnames'

/* Internal dependencies */
import styles from './Button.scss'

class Button extends React.Component {

  render() {
    const { className, children, ...props } = this.props
    return (
      <button
        {...props}
        className={classNames(styles.button, className)}>
        {children}
      </button>
    )
  }
}

export default Button