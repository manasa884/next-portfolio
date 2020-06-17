import { List, ListItem, Typography } from '@material-ui/core'
import styles from './sidebar.module.scss'

const Sidebar = props => {
  return (
    <div className={styles.container}>
      <List className={styles.list}>
        <ListItem className={styles.listItem}>About</ListItem>
        <ListItem className={styles.listItem}>Resume</ListItem>
        <ListItem className={styles.listItem}>Library</ListItem>
      </List>
    </div>
  )
}

export default Sidebar