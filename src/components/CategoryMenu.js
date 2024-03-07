import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

import useData from "@/hooks/useData"
import classNames from "@/util/classNames"
import useLanguage from "@/hooks/useLanguage"

export default function CategoryMenu() {
  const categories = useData()
  const [_, { dir }] = useLanguage()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    console.log(element)
    console.log(element.getBoundingClientRect())
    if (element) {
      const { top } = element.getBoundingClientRect()
      window.scrollTo({
        // 30 is padding
        top: Math.round(top) + window.scrollY - 30,
        behavior: "smooth",
      })
    }
  }

  return (
    <Menu
      as="div"
      dir={dir}
      className="fixed ltr:right-4 rtl:left-4 rtl:md:left-5 top-5 ltr:md:right-5 inline-block ltr:text-left rtl:text-righst z-10"
    >
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {({ open }) => (
            <ChevronDownIcon
              aria-hidden="true"
              className={classNames(
                "h-5 w-5 text-gray-400 transition-all duration-300",
                open && "rotate-180"
              )}
            />
          )}
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
        <Menu.Items className="absolute ltr:right-0 rtl:left-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {categories.map(({ key, label }) => (
              <Menu.Item key={key}>
                <span
                  onClick={() => scrollToSection(key)}
                  className={
                    "block cursor-pointer px-4 py-2 text-sm text-gray-700"
                  }
                >
                  {label}
                </span>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
