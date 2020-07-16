import { List, ListItem } from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './sidebar.module.scss'

const Sidebar = props => {
  const router = useRouter()
  const classNameStr = `listItem ${styles.listItem}`
  const selectedClassNameStr = `listItem ${styles.listItemSelected}`

  return (
    <>
      <div className="container">
        <List className="list">
          <Link href="/"><ListItem button disableRipple className={router.pathname === '/' ? selectedClassNameStr : classNameStr}>About</ListItem></Link>
          <Link href="/photography"><ListItem button disableRipple className={router.pathname === '/photography' ? selectedClassNameStr : classNameStr}>Photography</ListItem></Link>
          <Link href="/bookshelf"><ListItem button disableRipple className={router.pathname === '/bookshelf' ? selectedClassNameStr : classNameStr}>Bookshelf</ListItem></Link>
          <Link href="/contact"><ListItem button disableRipple className={router.pathname === '/contact' ? selectedClassNameStr : classNameStr}>Contact</ListItem></Link>
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