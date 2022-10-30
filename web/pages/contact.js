import Head from 'next/head'
import Navigation from '@components/navigation'
import Footer from '@components/footer'
import ContactButton from '@components/contact-button'
import { getClient } from '@lib/sanity.server'
import { contactQuery } from '@lib/queries'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@lib/sanity'
import Image from 'next/image'

export default function Contact({ data, feed, preview }) {
  const [item] = data.contact
  const posts = feed.data

  const isImage = (url) => {
    const test = new RegExp('[^>]*[^/].(?:jpg|jpeg|png|webp|avif|gif|svg)').test(url)
    return test
  }
  return (
    <div className='h-screen'>
      <Head>
      <title>MCNAG - {item.title}</title>
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
        <h2 className="text-3xl lg:text-5xl font-bold text-mcnag-dark-blue">Ways to reach us</h2>
        <div className="space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-12">
          <ContactButton
            title="Facebook"
            url={item.facebook}
            icon="facebook"
            />
            <ContactButton
            title="Instagram"
            url={item.instagram}
            icon="instagram"
            />
            <ContactButton
            title="Email"
            url={item.email}
            icon="envelope"
            />
        </div>
        <h3 className="text-2xl lg:text-4xl font-bold text-mcnag-dark-blue">Latest Instagram posts</h3>
        <div className="space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-12">
          {posts && posts.map((post) => (
            <div className="" key={post.id}>
              <div className="relative aspect-square shadow-lg bg-black">
                <a href={post.permalink}>
                  {isImage(post.media_url)
                    ? <Image src={post.media_url} alt={post.caption} layout="fill" objectFit="cover" />
                    : <video className="h-full overflow-hidden">
                        <source src={post.media_url} />
                      </video>
                  }
                </a>
              </div>
              <div className="text-sm text-slate-600 mt-6">
                {post.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    <Footer />
  </div>    
)}

export async function getStaticProps({ preview = false }) {
  const instagram = await fetch(`https://graph.instagram.com/me/media?limit=4&fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`)
  const feed = await instagram.json()
  const contact = await getClient(preview).fetch(contactQuery)
  return {
    props: { data: {contact}, feed, preview }
  }
}