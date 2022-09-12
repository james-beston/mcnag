import Image from 'next/image'

export default function Header() {
  return (
    <div className="relative h-screen flex-col w-full bg-gradient-to-b from-mcnag-light-blue to-mcnag-dark-blue">
      <div className="flex mt-56 lg:mt-0 lg:items-center w-full h-full border-b-2 border-white">
        <div className="absolute bottom-0 left-0 w-1/2 lg:w-1/3" aria-hidden="true">
          <Image
            src="/wave-left.svg"
            alt=""
            width={685}
            height={419}
            layout="responsive"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 lg:w-1/3" aria-hidden="true">
        <Image
            src="/wave-right.svg"
            alt=""
            width={755}
            height={870}
            layout="responsive"
          />
        </div>
        <div className="w-full md:w-1/2 mx-6 lg:ml-24 xl:ml-54 2xl:ml-96">
          <Image
            src="/mcnag-name.svg"
            alt="Marine Conservation Norfolk Action Group"
            width={640}
            height={360}
          />
        </div>
      </div>
    </div>
  )
}