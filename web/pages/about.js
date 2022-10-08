import Head from 'next/head'
import Navigation from '@components/navigation'
import Footer from '@components/footer'
import Member from '@components/member'
import { getClient } from '@lib/sanity.server'
import { aboutQuery } from '@lib/queries'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@lib/sanity'
import Image from 'next/image'

export default function Home({ data, preview }) {
  const [item] = data.about
  console.log(item)
  return (
    <div className='h-screen'>
      <Head>
        <title>MCNAG - {item.title}</title>
        <meta name="description" content="Marine Conservation for Norfolk Action Group website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navigation />
      <div className="flex flex-col mt-12 lg:mt-24 space-y-6 lg:space-y-12 max-w-6xl mx-6 xl:mx-auto">
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
        <div className="prose lg:prose-xl max-w-none">
          <PortableText value={item.introduction} />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-mcnag-dark-blue">Board Members</h2>
        <div className="space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-12">
          {item.members.map((member) => (
            <Member key={member.slug} props={member} />
          ))}
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
