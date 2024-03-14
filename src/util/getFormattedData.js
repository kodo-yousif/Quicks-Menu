import { desc, languages, numberMap, structureKeys } from "@/constants"

let lang = languages[0].value

function convertEnglishToArabic(englishNumber) {
  const digits = englishNumber.split("")

  return digits.map((digit) => numberMap[digit] || digit).join("")
}

let idx = 1
const itemFormatter = (obj) => {
  const item = {}

  item.price = obj.price.toLocaleString("en-US")

  if (lang === "english") {
    item.price = item.price + " IQD"
  } else {
    item.price = convertEnglishToArabic(item.price) + " دينار"
  }

  item.key = obj.englishName + idx

  item.image = obj.image

  item.label = obj[structureKeys.label[lang]]

  item.descLabel = desc[lang]

  if (obj[structureKeys.description[lang]])
    item.description = obj[structureKeys.description[lang]]
  else item.description = obj[structureKeys.description.english]

  return item
}

const categoryFormatter = (obj) => {
  const category = {}

  category.label = obj[lang]

  category.key = obj.english

  category.items = obj.items.map(itemFormatter)

  return category
}

export default function getFormattedData(selectedLang, categories) {
  lang = selectedLang
  return categories.map(categoryFormatter)
}
