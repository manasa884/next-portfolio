import { Grid, Typography } from '@material-ui/core'
import Sidebar from '../navigation/sidebar'
import styles from './layout.module.scss'

const Layout = props => {
  return (
    <>
    <Typography className={styles.brand}>MT</Typography>
    <Grid container spacing={3} className={styles.grid}>
      <Grid item xs={3}>
        <Sidebar/>
      </Grid>
      <Grid item xs={6} className={styles.childrenContainer}>
        {props.children}
      </Grid>
      <Grid item xs={3}>
        
      </Grid>
    </Grid>
    </>
  )
}

export default Layout