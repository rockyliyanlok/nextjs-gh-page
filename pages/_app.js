import App from 'next/app'
import Head from 'next/head'
import React from 'react'

class NextJSGithubPageApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static async getInitialProps (appContext) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext)

    return { ...appProps }
  }

  componentDidMount () {
    console.log('NextJSGithubPageApp::componentDidMount()')
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Next.js Github page</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default NextJSGithubPageApp
