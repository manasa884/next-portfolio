import { Grid, Grow } from '@material-ui/core'
import styles from './Photography.module.scss'
import PropTypes from 'prop-types'
import Head from 'next/head'

export default function Photography({ posts }) {
  return (
    <>
      <Head>
        <title>Photography - Manasa Tipparam</title>
      </Head>
      <Grid container spacing={4} justify="center">
        {posts.data &&
          posts.data.map((post, i) => (
            <Grid item key={post.id}>
              <Grow in timeout={i * 250}>
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={post.media_url}
                    alt="instagram"
                    className={styles.img}
                  />
                </a>
              </Grow>
            </Grid>
          ))}
      </Grid>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://graph.instagram.com/me/media?fields=id,media_url,timestamp,permalink&limit=24&access_token=IGQVJXamlvblFheVd0MjV6WTdTSWlibnppRnhJOTlTQW9GOVhIbWw2dTVHTVlpWFlOYlJnZAW9qWmJnTGdaN19wWklrSnN1RzZAKek5ZAdVVIMk9sV25GVE9udEpjTlliRHhsR29rX2NzNl9MVXB5TWFnSAZDZD'
  )
  const posts = await res.json()

  if (!posts) {
    return { notFound: true }
  }

  return {
    props: {
      posts,
    },
  }
}

Photography.propTypes = {
  posts: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        media_url: PropTypes.string.isRequired,
        timestamp: PropTypes.string,
        permalink: PropTypes.string.isRequired,
      })
    ),
  }),
}
