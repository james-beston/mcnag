import Head from 'next/head'
import Navigation from '@components/navigation'
import Image from 'next/image'
import Footer from '@components/footer'

export default function Contact() {
  return (
    <div className='h-screen'>
      <Head>
        <title>MCNAG - Contact Us</title>
        <meta name="description" content="Marine Conservation for Norfolk Action Group website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navigation />
      <div className="flex flex-col mt-12 lg:mt-24 space-y-6 lg:space-y-12 max-w-6xl mx-6 xl:mx-auto">
        <h1 className="text-5xl lg:text-7xl font-extrabold text-mcnag-dark-blue">Contact Us</h1>
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
      </div>
      <Footer />
    </div>    
  )
}