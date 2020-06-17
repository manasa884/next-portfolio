import { Grid, Typography } from '@material-ui/core'
import Sidebar from '../navigation/sidebar'
import styles from './layout.module.scss'

const Layout = props => {
  return (
    <>
    <Typography className={styles.brand}>MT</Typography>
    <Grid container spacing={3} className={styles.grid}>
      <Grid item xs={2}>
        <Sidebar/>
      </Grid>
      <Grid item xs={8} className={styles.childrenContainer}>
        {props.children}
      </Grid>
      <Grid item xs={2}>
        
      </Grid>
    </Grid>
    </>
  )
}

export default Layout