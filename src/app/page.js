"use client"
import Image from "next/image";
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon, ChevronDownIcon  } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const lans = [
  {lan:"en" },
  {lan:"ku" },
  {lan:"ar" }
]
const tabs = [
  { name: 'Drink',name_ku: 'خواردنەوە',name_ar: 'شراب', current: true },
  { name: 'Food',name_ku: 'خواردن',name_ar: 'تعام', current: false },
  { name: 'Sweet',name_ku: 'شیرینی',name_ar: 'حلویات', current: false },
]
const files = [

  {
    id: 1,
    title: 'Pizza',
    size: 'Paparoni',
    price: "10000",
    AddOns:"Olive, Oil, and Cheese.",
    Ingrediant:"Tomato, Paparoni, and cheese.",
    desc:"Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum enean arcu.",
    source:
    'https://wallpaperaccess.com/full/2237015.jpg',
  },
  {
    id: 2,
    title: 'Sandwich',
    size: 'Grilled Cheese',
    price: "2500",
    AddOns:"Olive, Oil, and Cheese.",
    Ingrediant:"Tomato, Paparoni, and cheese.",
    desc:"Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum enean arcu.",
    source:
    'https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
  },
  {
    id: 3,
    title: 'Hamburger',
    size: 'Big Burger',
    price: "3500",
    AddOns:"Olive, Oil, and Cheese.",
    Ingrediant:"Tomato, Paparoni, and cheese.",
    desc:"Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum enean arcu.",
    source:
      'https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium',
  },
  // More files...
]


export default function Home() {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState(lans[0].lan)
  const [selected, setSelected] = useState(null)
  return (
    // to add animation when dir change use this  transition duration-300 ease-in-out ${lang != "en" ? 'transform scale-x-[-1]' : ''}
    <main dir={lang == "en"? "ltr":"rtl"} className={`flex min-h-screen flex-col items-center p-3 text-black`}>
      <div dir="ltr"> 
      <div className="block">
        <nav className="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
          {tabs.map((tab, tabIdx) => (
            <span
              className={classNames(
                tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              <span>{lang == "en"?tab.name:lang == "ku"? tab.name_ku:tab.name_ar}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.current ? 'bg-indigo-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5'
                )}
              />
            </span>
          ))}
        </nav>
      </div>
    </div>

    {/* zman */}
    <Menu as="div" className="fixed right-1 top-5 md:right-5 inline-block text-left z-10">
    <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {lang}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-16 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {lans.map(lan=>(
                <Menu.Item>
                {({ active }) => (
                  <span
                    onClick={()=>setLang(lan.lan)}
                    className={classNames(
                      lan.lan == lang ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {lan?.lan}
                  </span>
                )}
              </Menu.Item>
            ))}
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    
    {/* gallery */}
    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 m-5 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {files.map((file) => (
        <li key={file.source} className="relative ">
          <div className="group aspect-square block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img src={file.source} alt="" className=" pointer-events-none object-cover min-h-full group-hover:opacity-75" />
            <button type="button" className="absolute inset-0 focus:outline-none" onClick={() => {setSelected(file.id);setOpen(true)}}>
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.title}</p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.price}</p>
        </li>
      ))}
    </ul>
      {/* side-overlay */}
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-0">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          {files[selected-1]?.price}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 ">
                      {/* Main */}
                    <div>
                      <div className="pb-1 sm:pb-6">
                        <div>
                          <div className="relative h-40 sm:h-56">
                            <img
                              className="absolute h-full w-full object-cover"
                              src={files[selected-1]?.source}
                              alt=""
                            />
                          </div>
                          <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                            <div className="sm:flex-1">
                              <div>
                                <div className="flex items-center">
                                  <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{files[selected-1]?.title}</h3>
                                </div>
                                <p className="text-sm text-gray-500">{files[selected-1]?.size}</p>
                              </div>
                              {/* <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                                
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 pb-5 pt-5 sm:px-0 sm:pt-0">
                        <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                          <div>
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Des</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                              <p>
                              {files[selected-1]?.desc}
                              </p>
                            </dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Ingrediant</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{files[selected-1]?.Ingrediant}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Add Ons</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{files[selected-1]?.AddOns}</dd>
                          </div> 
                        </dl>
                      </div>
                    </div>
                    
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </main>

    
  );
}
