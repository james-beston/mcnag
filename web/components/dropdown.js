import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown({ props }) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? 'text-blue-100' : 'text-white',
              'group inline-flex items-center text-sm font-medium text-white hover:text-blue-100 focus:outline-none'
            )}
          >
            <span>{props.name}</span>
            <ChevronDownIcon
              className={classNames(
                open ? 'text-blue-100' : 'text-white',
                'ml-2 h-5 w-5 group-hover:text-blue-100'
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-blue-50 px-5 py-6 sm:gap-8 sm:p-8">
                  {props.list.map((item, index) => (
                    <a
                      key={`dd${index}`}
                      href={item.href}
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-blue-100"
                    >
                      <div className="ml-0">
                        <p className="text-sm font-medium text-mcnag-dark-blue">{item.name}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}