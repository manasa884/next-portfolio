import { Typography, Grid, Card } from '@material-ui/core'
import Head from 'next/head'

const Experience = () => {
  return (
    <>
      <Head>
        <title>Experience - Manasa Tipparam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container spacing={4}>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="h4">Skillset</Typography>
          <br />
          <br />
          <br />
        </Grid>
        <Grid item xs={4}>
          <Card style={{ padding: '10px 20px', borderRadius: '20px' }}>
            <Typography variant="h5">
              Development{' '}
              <span role="img" aria-label="laptop emoji">
                💻
              </span>
            </Typography>
            <br />
            <Typography>JavaScript</Typography>
            <Typography>React</Typography>
            <Typography>HTML</Typography>
            <Typography>SASS + CSS</Typography>
            <Typography>Kotlin</Typography>
            <Typography>Python</Typography>
            <Typography>Golang</Typography>
            <Typography>SQL</Typography>
            <Typography>Github</Typography>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">
            Software{' '}
            <span role="img" aria-label="laptop emoji">
              🛠
            </span>
          </Typography>
          <br />
          <Typography>Docker</Typography>
          <Typography>Drone</Typography>
          <Typography>Adobe XD</Typography>
          <Typography>Adobe Illustrator</Typography>
          <Typography>InVision</Typography>
          <Typography>Visual Studio Code</Typography>
          <Typography>JIRA</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">
            Design{' '}
            <span role="img" aria-label="laptop emoji">
              🎨
            </span>
          </Typography>
          <br />
          <Typography>Wire-framing + Prototyping</Typography>
          <Typography>Visual Design (UI)</Typography>
          <Typography>Logo and Branding</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Experience
