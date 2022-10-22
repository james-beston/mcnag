import Image from 'next/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ContactButton({ title, url, icon}) {
  return (
    <div className="">
      <button
        onClick={() => 
          icon === "envelope" ? location.href='mailto:' + url
          : location.href=url
        }
        className="inline-flex gap-x-3 justify-center align-middle bg-blue-700 hover:bg-blue-800 shadow-xl shadow-blue-700/30 hover:shadow-blue-800/30 transition-colors ease-in-out rounded-full px-6 py-4 text-white fill-white text-xl"
      >
        <Image src={'/icons/' + icon + '.svg'} height={30} width={30} alt="icon" className="fill-white" />
        {title}
      </button>
    </div>
  )
}