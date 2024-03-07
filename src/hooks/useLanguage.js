import { useSearchParams } from "next/navigation"
import { languages, urlLangKey } from "@/constants"

export default function useLanguage() {
  const searchParams = useSearchParams()

  const urlLanguage = searchParams.get(urlLangKey) || "english"

  const selectedLang =
    languages.find((tab) => tab.value === urlLanguage) || languages[0]

  return [selectedLang.value, selectedLang]
}
