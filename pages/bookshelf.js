import { Grid, Typography } from '@material-ui/core'
import { motion } from 'framer-motion'
import styles from './bookshelf.module.scss'

export default function Bookshelf({ books }) {
  return (
    <>
      <Grid container spacing={4} justify="center">
        {books.data && books.data.map((book, i) => (
            <Grid item className={styles.gridItem}>
                <motion.div whileHover={{ scale: 1.06 }}>
                    <img src={book.media_url} className={styles.img} />
                </motion.div>
                <Typography>{book.name}</Typography>
            </Grid>
        ))}
      </Grid>
    </>
  )
}

export async function getStaticProps() {
    const books = {
        "data": [
            {
                "name": "Educated",
                "author": "Tara Westover",
                "media_url": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1506026635l/35133922.jpg",
            },
            {
                "name": "Wild",
                "author": "Cheryl Strayed",
                "media_url": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1453189881l/12262741._SY475_.jpg",
            },
            {
                "name": "Siddhartha",
                "author": "Herman Hesse",
                "media_url": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544007491l/6115._SX318_.jpg",
            },
            {
                "name": "Crazy Rich Asians",
                "author": "Kevin Kwan",
                "media_url": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1526735379l/18158562._SY475_.jpg",
            }
        ]
    }

    return {
        props: {
            books,
        }
    }
}