import Head from 'next/head'

export default function Home() {
  return (
    <div className='h-screen'>
      <Head>
        <title>MCNAG - Marine Conservation for Norfolk Action Group</title>
        <meta name="description" content="Marine Conservation for Norfolk Action Group website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-1/2 lg:h-full flex-col w-full bg-gradient-to-b from-mcnag-light-blue to-mcnag-dark-blue">
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 left-0 w-full">
            <img src="/wave.svg" alt="" className="min-w-full h-auto" />
          </div>
          <div className="flex flex-col justify-center h-full w-1/2 ml-8">
            <h1 className="text-4xl text-white uppercase">Marine Conservation Norfolk</h1>
          </div>
        </div>
      </div>
      <div className="flex">
        More info here
      </div>
    </div>
  )
}
