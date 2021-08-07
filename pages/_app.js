import Router from 'next/router'
import 'tailwindcss/tailwind.css'

import * as gtag from '../lib/gtag'

// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

export default function App ({ Component, pageProps }) {
  return <Component {...pageProps} />
}