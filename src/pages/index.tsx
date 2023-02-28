import Head from 'next/head'
import Header from '../components/header'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-0 pr-2 flex flex-col justify-center items-center">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="h-16 pr-8 pl-9">
          {' '}
          dasfds
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
        <Footer />
      </div>
    </>
  )
}
