import { StylesProvider } from '@material-ui/styles'

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <StylesProvider injectFirst>
        <Component {...pageProps} />
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