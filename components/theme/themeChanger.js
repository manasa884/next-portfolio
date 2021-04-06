import React from 'react'
import { IconButton } from '@material-ui/core'
import { WbSunnyRounded, Brightness2Rounded } from '@material-ui/icons'
import styles from './themeChanger.module.scss'

const ThemeChanger = () => {
  const [theme, setTheme] = React.useState('light')

  React.useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme === 'dark') {
      setTheme('dark')
      return document.body.classList.add('dark-mode')
    } else {
      setTheme('light')
      return document.body.classList.remove('dark-mode')
    }
  }, [])

  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
      document.body.classList.add('dark-mode')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
      document.body.classList.remove('dark-mode')
    }
  }

  return (
    <>
      <IconButton
        disableRipple
        onClick={handleThemeChange}
        className={styles.themeButton}
      >
        {theme === 'light' ? (
          <Brightness2Rounded className={styles.moonIcon} />
        ) : (
          <WbSunnyRounded className={styles.sunIcon} />
        )}
      </IconButton>
    </>
  )
}

export default ThemeChanger
