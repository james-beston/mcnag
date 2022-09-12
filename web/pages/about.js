import Head from 'next/head'
import Navigation from '@components/navigation'
import Header from '@components/header'
import Footer from '@components/footer'
import { getClient } from '@lib/sanity.server'
import { aboutQuery } from '@lib/queries'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@lib/sanity'
import Image from 'next/image'

export default function Home({ data, preview }) {
  const [item] = data.about
  return (
    <div className='h-screen'>
      <Head>
        <title>MCNAG - {item.title}</title>
        <meta name="description" content="Marine Conservation for Norfolk Action Group website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navigation />
      <div className="flex flex-col space-y-6 max-w-6xl mx-6 xl:mx-auto">
        <h1 className="text-5xl lg:text-7xl font-extrabold text-mcnag-dark-blue">{item.title}</h1>
        <div className="mt-12 prose lg:prose-xl max-w-none">
          <PortableText value={item.introduction} />
        </div>
      </div>
      <Footer />
    </div>    
  )
}

export async function getStaticProps({ preview = false }) {
  const about = await getClient(preview).fetch(aboutQuery)
  return {
    props: { data: {about}, preview }
  }
}
