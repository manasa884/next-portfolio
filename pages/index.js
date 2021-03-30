import Head from 'next/head'
import { Typography, Grid, Link, Button } from '@material-ui/core'
import styles from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography className={`${styles.heading} ${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}>
        Hi, I'm Manasa 👋🏼
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <img src="/about_photo_highres.JPG" placeholder="/about_photo_lowres.png" className={styles.aboutPhoto}/>
        </Grid>
        <Grid item xs={9} className={styles.aboutTextContainer}>
          <Typography className={`${styles.aboutTextMain} ${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}>A designer, developer and tea enthusiast from the Bay Area, currently based in Seattle.</Typography>
          <br/>
          <Typography className={`${styles.aboutTextSub} ${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}>I am driven by an appreciation for intuitive, accessible, and aesthetic design.</Typography>
          <br/>
          <Typography className={`${styles.aboutTextSub} ${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}>Having skills in both design and engineering allow me to take products from ideation to mockups to prototypes to, ultimately, functional end products.</Typography>
          <br/>
          <Typography className={`${styles.aboutTextSub} ${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}>Outside of tech, I enjoy reading, learning to play the guitar, photography, and eating ramen.</Typography>
          <br/>
          <Typography className={`${styles.aboutTextSub} ${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}>Currently working on Insights and <Link href="https://tech.target.com/2019/02/05/chaos-engineering-at-Target.html" target="_blank" rel="noopener noreferrer" className={styles.link}> Chaos Engineering at Target</Link></Typography>
          <br/>
          <div className={`${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}>
            <a href="https://www.linkedin.com/in/manasatipparam/" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" className={styles.socialIcon} />
            </a>
            <a href="https://www.instagram.com/mtipparam/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="2x" className={styles.socialIcon} />
            </a>
            <a href="https://github.com/manasa884" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" className={styles.socialIcon} />
            </a>
            <a href="https://twitter.com/manasa884" target="_blank">
              <FontAwesomeIcon icon={faTwitter} size="2x" className={styles.socialIcon} />
            </a>
          </div>
        </Grid>
      </Grid>
    </>
  )
}