import { useSearchParams } from "next/navigation"
import { languages, urlLangKey } from "@/constants"

export default function useLanguage() {
  const searchParams = useSearchParams()

  const urlLanguage = searchParams.get(urlLangKey) || "english"

  const selectedLang = languages.some((tab) => tab.value === urlLanguage)
    ? urlLanguage
    : languages[0].value

  return selectedLang
}
