import Head from 'next/head';
import Navigation from '@components/navigation';
import Header from '@components/header';

export default function Home() {
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
      <div className="flex">
        More info here
      </div>
    </div>
  )
}
