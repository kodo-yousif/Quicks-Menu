/* eslint-disable @next/next/no-img-element */
"use client"
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Languages from "@/components/Languages"
import useLanguage from "@/hooks/useLanguage"
import Category from "@/components/Category"

import { faker, fakerAR } from "@faker-js/faker"

const categories = []

for (let index = 0; index < 6; index++) {
  const items = []

  for (let idx = 0; idx < 21; idx++) {
    items.push({
      price: 12000,
      image: faker.image.urlLoremFlickr({ category: "food" }),
      arabicName: fakerAR.person.firstName(),
      arabicDesc: fakerAR.commerce.productDescription(),
      englishName: faker.person.firstName(),
      kurdishName: fakerAR.person.firstName(),
      englishDesc: faker.commerce.productDescription(),
      kurdishDesc: fakerAR.commerce.productDescription(),
    })
  }
  categories.push({
    items,
    english: faker.person.firstName(),
    arabic: fakerAR.person.firstName(),
    kurdish: fakerAR.person.firstName(),
  })
}

const files = [
  {
    id: 1,
    title: "Pizza",
    size: "Paparoni",
    price: "10000",
    AddOns: "Olive, Oil, and Cheese.",
    Ingrediant: "Tomato, Paparoni, and cheese.",
    desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum enean arcu.",
    source: "https://wallpaperaccess.com/full/2237015.jpg",
  },
  {
    id: 2,
    title: "Sandwich",
    size: "Grilled Cheese",
    price: "2500",
    AddOns: "Olive, Oil, and Cheese.",
    Ingrediant: "Tomato, Paparoni, and cheese.",
    desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum enean arcu.",
    source:
      "https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
  },
  {
    id: 3,
    title: "Hamburger",
    size: "Big Burger",
    price: "3500",
    AddOns: "Olive, Oil, and Cheese.",
    Ingrediant: "Tomato, Paparoni, and cheese.",
    desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum enean arcu.",
    source:
      "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
  },
  // More files...
]

export default function Home() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const [_, { dir }] = useLanguage()
  console.log(categories)
  return (
    <main
      dir={dir}
      className="flex select-none min-h-screen flex-col items-center text-black"
    >
      <Languages />

      <Category label="kodo" />
      <ul
        role="list"
        className="grid px-3 grid-cols-2 gap-x-4 gap-y-8 m-5 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {files.map((file) => (
          <li key={file.source} className="relative ">
            <div className="group aspect-square block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img
                alt="food"
                src={file.source}
                className=" pointer-events-none object-cover min-h-full group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
                onClick={() => {
                  setSelected(file.id)
                  setOpen(true)
                }}
              >
                <span className="sr-only">View details for {file.title}</span>
              </button>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
              {file.title}
            </p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">
              {file.price}
            </p>
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
                            {files[selected - 1]?.price}
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
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
                                  src={files[selected - 1]?.source}
                                  alt=""
                                />
                              </div>
                              <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                                <div className="sm:flex-1">
                                  <div>
                                    <div className="flex items-center">
                                      <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                                        {files[selected - 1]?.title}
                                      </h3>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                      {files[selected - 1]?.size}
                                    </p>
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
                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                                  Des
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                  <p>{files[selected - 1]?.desc}</p>
                                </dd>
                              </div>
                              <div>
                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                                  Ingrediant
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                  {files[selected - 1]?.Ingrediant}
                                </dd>
                              </div>
                              <div>
                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                                  Add Ons
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                  {files[selected - 1]?.AddOns}
                                </dd>
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
  )
}
