import { Grid, Typography } from '@material-ui/core'
import Sidebar from '../navigation/sidebar'
import styles from './layout.module.scss'
import PropTypes from 'prop-types'
import ThemeChanger from '../theme/themeChanger'

const Layout = ({ children }) => {
  return (
    <>
      <Typography className={`brand ${styles.brand}`}>MT</Typography>
      <Grid container spacing={3} className="grid">
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={8} className="childrenContainer">
          {children}
        </Grid>
      </Grid>
      <div className="themeChanger">
        <ThemeChanger />
      </div>
      <style>{`
        .grid {
          min-width: 900px;
        }

        .childrenContainer {
          margin: 30px;
        }

        .themeChanger {
          position: absolute;
          top: 30px;
          right: 30px;
        }
      `}</style>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
