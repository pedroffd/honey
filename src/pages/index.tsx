import Head from 'next/head'
import Header from '../components/header'
import { Footer } from '../components/footer'
import { Hero } from '../components/hero'
import { Categories } from '../components/categories'
import { Cattest2 } from '../components/test2'
export default function Home() {
  return (
    <>
      {' '}
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Cattest2 />
      <Footer />
    </>
  )
}
