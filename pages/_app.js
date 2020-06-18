import { StylesProvider } from '@material-ui/styles'
import Layout from '../components/layout/layout'

function CustomApp({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector("#jss-server-side")
    if(jssStyles) {
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
      <style jsx global>{`
        html, 
        body {
          margin: 0;
          padding: 0;
          font-family: "Muli", sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}

export default CustomApp