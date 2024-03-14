import useLanguage from "./useLanguage"
import getFormattedData from "@/util/getFormattedData"

export default function useData(data) {
  const [lang] = useLanguage()

  return getFormattedData(lang, data)
}
