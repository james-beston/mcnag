import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Navigation from '@components/navigation'
import Footer from '@components/footer'
import { getClient, sanityClient } from '@lib/sanity.server'
import { pageQuery, pageSlugsQuery } from '@lib/queries'
import { urlFor } from '@lib/sanity'
import Image from 'next/image'
import SectionMenu from '@components/section-menu'
import Section from '@components/section'

export default function Page({ data, preview }) {
  const router = useRouter()

  const [page] = data.pageData

  const slug = page?.slug

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div className="h-screen">
      <Head>
        <title>MCNAG - {page.title}</title>
        <meta name="description" content="Marine Conservation for Norfolk Action Group website" />
      </Head>
      <Navigation />
      {router.isFallback ? (
        <div className="flex flex-col mt-12 lg:mt-24 space-y-6 lg:space-y-12 max-w-6xl mx-6 xl:mx-auto">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-mcnag-dark-blue">Loading...</h1>
        </div>
      ) : (
        <>
        <div className="flex flex-col mt-12 lg:mt-24 space-y-6 lg:space-y-12 max-w-6xl mx-6 xl:mx-auto">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-mcnag-dark-blue">{page.title}</h1>
          <figure>
            <div className="relative drop-shadow-lg">
              <Image
                src={urlFor(page.mainImage).width(1600).height(960).url()}
                alt={page.title}
                width={1600}
                height={960}
              />
            </div>
            {page.mainImageCredit && (
            <figcaption>
              <span className="text-sm text-slate-500">Image: &copy;{page.mainImageCredit}</span>
            </figcaption>
            )}
          </figure>
          <div className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            {page.intro}
          </div>
        </div>
        {page.hasSections
          ? (
            <div className="grid grid-cols-6 lg:mt-12">
              <div className="col-span-full lg:col-span-1">
                <SectionMenu sections={page.sections} />
              </div>
              <div className="col-span-full lg:col-span-4">
                <Section sections={page.sections} />
              </div>
            </div>
          )
          : ( 
            <div className="lg:mt-12">
              <Section sections={page.sections} />
            </div>
          )
        }
        </>
        )}
        <Footer />
    </div>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const pageData = await getClient(preview).fetch(pageQuery, {
    slug: params.slug,
  })
  return {
    props: { data: {pageData}, preview }
  }
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(pageSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}
