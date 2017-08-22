/* External dependencies */
import React from 'react'
import classNames from 'classnames'

/* Internal dependencies */
import styles from './Input.scss'

class Input extends React.Component {

  constructor() {
    super()
    this.inputRef = null
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.inputRef.focus()
    }
  }

  render() {
    const { className, inputClassName, ...props } = this.props
    return (
      <div className={classNames(styles.wrapper, className)}>
        <input
          {...props}
          ref={e => this.inputRef = e}
          className={classNames(styles.input, inputClassName)} />
      </div>
    )
  }
}

export default Input