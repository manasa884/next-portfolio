import { List, ListItem } from '@material-ui/core'
import Link from 'next/link'
import styles from './sidebar.module.scss'

const Sidebar = props => {
  return (
    <>
      <div className="container">
        <List className="list">
          <Link href="/"><ListItem button className={styles.listItem}>About</ListItem></Link>
          <Link href="/photography"><ListItem button className={`listItem ${styles.listItem}`}>Photography</ListItem></Link>
          <Link href="/design"><ListItem button className={`listItem ${styles.listItem}`}>Design</ListItem></Link>
          <Link href="/contact"><ListItem button className={`listItem ${styles.listItem}`}>Contact</ListItem></Link>
        </List>
      </div>
      <style>{`
        .container {
          padding: 20px 40px;
        }

        .list {
          position: fixed;
          margin-top: 90px;
        }

        .listItem {
          margin-bottom: 35px;
          font-size: 1.1rem;
        }
      `}</style>
    </>
  )
}

export default Sidebar