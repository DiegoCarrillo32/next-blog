import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'
import Head from 'next/head'
import { Footer } from '../components/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      
    <title>Diego Carrillo Blog</title>
        <meta charSet="UTF-8"/>
        <meta name="keywords" content="Frontend, developer, backend, javascript, node, blog, development,"/>
        <meta name="author" content="Diego Carrillo"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="I am a Computer engineer that focues on web solutions!"/>
        <link rel="icon" href="./pixil-frame-0.png" />
        <link rel="apple-touch-icon" href="./logo192.png" />
        
    </Head>
        
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
