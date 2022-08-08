import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="nv-topnav-container">
        <div className="nv-topnav vd-topbar" id="topbar-root" />
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
