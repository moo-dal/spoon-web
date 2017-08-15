/* External dependencies */
import React from 'react'
import { Link } from 'react-router'

/* Internal dependencies */
import styles from './Home.scss'

class Home extends React.Component {

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Link to="/welcome" className={styles.nav} activeClassName={styles.active}>
            Welcome
          </Link>
          <Link to="/state" className={styles.nav} activeClassName={styles.active}>
            State Test
          </Link>
          <Link to="/redux" className={styles.nav} activeClassName={styles.active}>
            Redux Test
          </Link>
          <Link to="/rxjs" className={styles.nav} activeClassName={styles.active}>
            RxJS Test
          </Link>
        </div>
        <div className={styles.children}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Home