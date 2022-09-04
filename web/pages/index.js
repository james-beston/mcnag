import Head from 'next/head'
import Navigation from '@components/navigation'
import Header from '@components/header'
import Footer from '@components/footer'
import { getClient } from '@lib/sanity.server'
import { homeQuery } from '@lib/queries'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@lib/sanity'
import Image from 'next/image'

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
      <div className="flex flex-col space-y-6 max-w-6xl mx-6 xl:mx-auto mt-12">
        <h1 className="text-5xl lg:text-7xl font-extrabold text-mcnag-dark-blue">{item.title}</h1>
        <figure>
          <div className="relative drop-shadow-lg">
            <Image
              src={urlFor(item.mainImage).width(1600).height(960).url()}
              alt={item.title}
              width={1600}
              height={960}
            />
          </div>
          <figcaption>
            <span className="text-sm text-slate-500">Image: &copy;{item.mainImageCredit}</span>
          </figcaption>
        </figure>
        <div className="mt-12 prose lg:prose-xl max-w-none">
          <PortableText value={item.content} />
        </div>
      </div>
      <Footer />
    </div>    
  )
}

export async function getStaticProps({ preview = false }) {
  const home = await getClient(preview).fetch(homeQuery)
  return {
    props: { data: {home}, preview }
  }
}
