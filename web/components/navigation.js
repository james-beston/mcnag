import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Dropdown from './dropdown'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { id: 'nav001', name: 'About', type: 'single', href: '/about', live: true },
  { id: 'nav002', name: 'Contact', type: 'single', href: '/contact', live: true },
  { id: 'nav003', name: 'Marine Information',
    type: 'list',
    list: [
      { id: 'ls001', name: 'Local Marine Biology', href: '/local-marine-biology', live: true },
      { id: 'ls002', name: 'Local Marine Geography (under construction)', href: '#', live: false },
      { id: 'ls003', name: 'The Chalk Reef Marine Conservation Zone', href: '/the-chalk-reef', live: true },
      { id: 'ls004', name: 'Local Concerns', href: '/local-concerns', live: true },
      { id: 'ls005', name: 'Norfolk Beach Cleaners Collective (under construction)', href: '#', live: false }
    ], live: true
  },
  { id: 'nav004', name: 'How To Help', type: 'single', href: '/how-can-you-help', live: true },
  { id: 'nav005', name: 'Conference', type: 'single', href: '/2022-mcnag-conference', live: true },
  { id: 'nav006', name: 'Reports', type: 'single', href: '#', live: true },
]

export default function Navigation() {
  return (
    <div className="sticky top-0 w-full z-10">
      <Popover as="header" className="relative">
        <div className="bg-mcnag-light-blue/90 backdrop-blur py-2.5 drop-shadow-sm">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <a className="h-8 sm:h-10 w-8 sm:w-10">
                    <Image
                      src="/android-chrome-192x192.png"
                      alt="Marine Conservation Norfolk Action Group"
                      width={192}
                      height={192}
                    />
                  </a>
                </Link>              
                <div className="-mr-2 flex-0 items-center md:hidden">
                  <Popover.Button className="bg-black/30 rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-black/50 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10 items-center">
                {navigation.map((item) => (
                  item.type === 'single'
                  ? (
                    <Link key={item.id} href={item.href}>
                      <a className="text-sm font-medium text-white hover:text-blue-100">
                        {item.name}
                      </a>
                    </Link>
                  ) : <Dropdown key={item.id} props={item} />
                ))}
              </div>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <Link href="/">
                  <a className="h-8 sm:h-10 w-8 sm:w-10">
                    <Image
                      src="/android-chrome-192x192.png"
                      alt="Marine Conservation Norfolk Action Group"
                      width={192}
                      height={192}
                    />
                  </a>
                </Link>    
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    item.type === 'single'
                  ? (
                      <a
                        key={item.id}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50"
                      >
                        {item.name}
                      </a>
                  ) : (
                    <>
                    <p className="block px-3 py-2 rounded-md text-base font-medium text-gray-500">{item.name}</p>
                    {item.list.map((nav) => (
                      <a
                        key={nav.id}
                        href={nav.href}
                        className={classNames(
                          nav.live
                          ? "text-mcnag-dark-blue hover:bg-blue-50"
                          : "text-slate-400 cursor-not-allowed",
                          "block mx-2 px-3 py-1.5 rounded-md text-sm")}
                      >
                        {nav.name}
                      </a>
                    ))}
                    </>
                  )
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}