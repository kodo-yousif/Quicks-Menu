import { useRouter, useSearchParams } from "next/navigation"

import getQuery from "@/util/getQuery"
import classNames from "@/util/classNames"
import useLanguage from "@/hooks/useLanguage"
import { languages, urlLangKey } from "@/constants"

export default function Languages() {
  const lang = useLanguage()
  const router = useRouter()
  const searchParams = useSearchParams()

  const changeLang = (newLang) =>
    router.push(`/?${getQuery(searchParams, urlLangKey, newLang)}`)

  return (
    <div dir="ltr">
      <div className="block">
        <nav
          aria-label="languages"
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
        >
          {languages.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => changeLang(value)}
              aria-current={value === lang ? "page" : undefined}
              className={classNames(
                value === lang && "!text-gray-900",
                "group duration-300 transition-all text-gray-500 hover:text-gray-700 first:rounded-l-lg cursor-pointer last:rounded-r-lg relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10"
              )}
            >
              <span>{label}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  value === lang && "!bg-indigo-500",
                  "absolute inset-x-0 bg-transparent duration-300 transition-all bottom-0 h-0.5"
                )}
              />
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
