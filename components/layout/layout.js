import { Grid, Typography } from '@material-ui/core'
import Sidebar from '../navigation/sidebar'

const Layout = props => {
  return (
    <>
      <Typography className="brand">MT</Typography>
      <Grid container spacing={3} className="grid">
        <Grid item xs={2}>
          <Sidebar/>
        </Grid>
        <Grid item xs={8} className="childrenContainer">
          {props.children}
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
      <style>{`
        .brand {
          font-family: "Muli", sans-serif;
          font-weight: 700;
          font-size: 1.8rem;
          color: #333945;
          margin: 40px 60px;
          position: fixed;
          letter-spacing: 2px;
        }

        .grid {
          min-width: 900px;
        }

        .childrenContainer {
          margin: 30px;
        }
      `}</style>
    </>
  )
}

export default Layout