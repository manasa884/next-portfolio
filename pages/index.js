import Head from 'next/head'
import Layout from '../components/layout/layout'
import { Typography } from '@material-ui/core'
import styles from './index.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Typography className={styles.heading}>
          Hi, I'm Manasa 👋🏼
        </Typography>
      </Layout>
    </>
  )
}
