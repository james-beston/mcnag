import Head from 'next/head'
import Navigation from '@components/navigation'
import Header from '@components/header'
import { getClient } from '@lib/sanity.server'
import { homeQuery } from '@lib/queries'
import { PortableText } from '@portabletext/react'

export default function Home({ data, preview }) {
  const [item] = data.home
  return (
    <div className='h-screen'>
      <Head>
        <title>MCNAG - Marine Conservation for Norfolk Action Group</title>
        <meta name="description" content="Marine Conservation for Norfolk Action Group website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sticky top-0 z-10">
        <Navigation />
      </div>
      <Header />
      <div className="max-w-7xl mx-auto mt-12">
        <h1 className="text-5xl font-bold text-mcnag-dark-blue">{item.title}</h1>
        <PortableText value={item.content} />
      </div>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const home = await getClient(preview).fetch(homeQuery)
  return {
    props: { data: {home}, preview }
  }
}
