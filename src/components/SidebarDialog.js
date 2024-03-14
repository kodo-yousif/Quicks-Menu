import Image from "next/image"
import { Fragment, useEffect, useState } from "react"
import { PhotoProvider, PhotoView } from "react-photo-view"

import useLanguage from "@/hooks/useLanguage"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"

import "react-photo-view/dist/react-photo-view.css"

export default function SidebarDialog({ item, setSelected }) {
  const [localItem, setLocalItem] = useState(item)
  const [previewSrc, setPreview] = useState("")

  const [_, { dir, value }] = useLanguage()

  useEffect(() => {
    if (item) setLocalItem(item)
  }, [item])

  return (
    <Transition.Root dir={dir} show={!!item} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setSelected(null)}
      >
        <Transition.Child
          as={Fragment}
          leaveTo="opacity-0"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leaveFrom="opacity-100"
          leave="ease-in-out duration-500"
          enter="ease-in-out duration-500"
        >
          <div className="fixed inset-0 backdrop-blur-sm bg-white/15 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0">
          <div className="absolute inset-0">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-0">
              <Transition.Child
                as={Fragment}
                enterTo="translate-x-0"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
                enterFrom="translate-x-full"
                enter="transform transition ease-in-out duration-500"
                leave="transform transition ease-in-out duration-500"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          {localItem?.label}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            onClick={() => setSelected(null)}
                            className="relative rounded-md bg-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 ">
                      <div>
                        <div className="pb-1 sm:pb-6">
                          <div>
                            <div className="relative h-[300px]">
                              <PhotoProvider>
                                <PhotoView src={previewSrc}>
                                  <Image
                                    width={750}
                                    height={750}
                                    alt="food image"
                                    src={localItem?.image}
                                    className="absolute h-full w-full object-cover"
                                    onLoadingComplete={(img) =>
                                      setPreview(img.src)
                                    }
                                  />
                                </PhotoView>
                              </PhotoProvider>
                              <span className="absolute bg-white text-gray-700 rounded px-2 shadow right-4 bottom-4">
                                {value === "english" && "Click image to expand"}
                                {value === "arabic" &&
                                  "انقر على الصورة للتوسيع"}
                                {value === "kurdish" &&
                                  "بۆ زیاتر بینین کلیک لەسەر وێنەکە بکە"}
                              </span>
                            </div>
                            <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                              <div className="sm:flex-1">
                                <div>
                                  <div className="flex items-center">
                                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                                      {localItem?.label}
                                    </h3>
                                  </div>
                                  <p className="text-lg text-gray-500">
                                    {localItem?.price}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {localItem?.description && (
                          <div className="px-4 pb-5 pt-5 sm:px-0 sm:pt-0">
                            <dl className="space-y-8 sm:space-y-6 sm:px-6">
                              <div>
                                <dt className="capitalize font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                                  {localItem?.descLabel}
                                </dt>
                                <dd className="mt-1 flex flex-wrap gap-2 md:gap-3 text-sm text-gray-900 sm:col-span-2">
                                  {localItem?.description
                                    .split("+")
                                    .map((desc) => (
                                      <div
                                        className="bg-red-500 text-white capitalize py-1 px-2 rounded"
                                        key={desc}
                                      >
                                        {desc.trim()}
                                      </div>
                                    ))}
                                </dd>
                              </div>
                            </dl>
                          </div>
                        )}
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
  )
}
