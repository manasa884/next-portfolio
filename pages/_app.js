import React from 'react'
import { StylesProvider } from '@material-ui/styles'
import Layout from '../components/layout/layout'
import '../styles/_global.scss'
import PropTypes from 'prop-types'

function CustomApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <StylesProvider injectFirst>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StylesProvider>
    </>
  )
}

CustomApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}

export default CustomApp
