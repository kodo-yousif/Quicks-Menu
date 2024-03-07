import useLanguage from "./useLanguage"
import getFormattedData from "@/util/getFormattedData"

export default function useData() {
  const [lang] = useLanguage()

  return getFormattedData(lang)
}
