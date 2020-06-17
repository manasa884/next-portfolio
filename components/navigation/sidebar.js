import { List, ListItem } from '@material-ui/core'
import Link from 'next/link'
import styles from './sidebar.module.scss'

const Sidebar = props => {
  return (
    <div className={styles.container}>
      <List className={styles.list}>
        <Link href="/"><ListItem button className={styles.listItem}>About</ListItem></Link>
        <Link href="/photography"><ListItem button className={styles.listItem}>Photography</ListItem></Link>
        <Link href="/design"><ListItem button className={styles.listItem}>Design</ListItem></Link>
        <Link href="/contact"><ListItem button className={styles.listItem}>Contact</ListItem></Link>
      </List>
    </div>
  )
}

export default Sidebar