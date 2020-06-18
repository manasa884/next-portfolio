import Head from 'next/head'
import { Typography, Grid, Link } from '@material-ui/core'
import { SocialIcon } from 'react-social-icons'
import styles from './index.module.scss'

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
          <Typography className={`${styles.aboutTextMain} ${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}>A designer, developer and tea enthusiast from the Bay Area, currently based in Minneapolis.</Typography>
          <br/>
          <Typography className={`${styles.aboutTextSub} ${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}>I am driven by an appreciation for intuitive, accessible, and aesthetic design.</Typography>
          <br/>
          <Typography className={`${styles.aboutTextSub} ${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}>Having skills in both design and engineering allow me to take products from ideation to mockups to prototypes to, ultimately, functional end products.</Typography>
          <br/>
          <Typography className={`${styles.aboutTextSub} ${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}>Outside of tech, I enjoy reading, learning to play the guitar, photography, and eating ramen.</Typography>
          <br/>
          <Typography className={`${styles.aboutTextSub} ${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}>Currently working on <Link href="https://tech.target.com/2019/02/05/chaos-engineering-at-Target.html" target="_blank" rel="noopener noreferrer" className={styles.link}> Chaos Engineering at Target</Link></Typography>
          <br/>
          <div className={`${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}>
            <SocialIcon url="https://www.linkedin.com/in/manasatipparam/" bgColor="#ffffff" fgColor="#9297a1"/>
            <SocialIcon url="https://www.instagram.com/mtipparam/" bgColor="#ffffff" fgColor="#9297a1"/>
            <SocialIcon url="https://github.com/manasa884" bgColor="#ffffff" fgColor="#9297a1"/>
          </div>
        </Grid>
      </Grid>
    </>
  )
}