import Head from 'next/head'

export default function Home() {
  return (
    <div className='h-screen'>
      <Head>
        <title>MCNAG - Marine Conservation for Norfolk Action Group</title>
        <meta name="description" content="Marine Conservation for Norfolk Action Group website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-3/4 md:h-2/3 lg:h-full flex-col w-full bg-gradient-to-b from-mcnag-light-blue to-mcnag-dark-blue">
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 left-0 w-1/2">
            <img src="/wave-left.svg" alt="" className="h-full w-auto" />
          </div>
          <div className="absolute bottom-0 right-0 w-1/2">
            <img src="/wave-right.svg" alt="" className="float-right h-full w-auto" />
          </div>
          <div className="flex flex-col items-start max-w-full mt-12 md:mt-36 xl:mt-48 xl:mt-64 ml-6 lg:ml-12 xl:ml-32">
          <img src="/mcnag-name.svg" alt="Marine Conservation Norfolk Action Group" width={1024} height={548} className="h-auto w-2/3 xl:w-2/5" />
          </div>
        </div>
      </div>
      <div className="flex">
        More info here
      </div>
    </div>
  )
}
