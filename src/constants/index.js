const languages = [
  { value: "english", label: "English", dir: "ltr" },
  { value: "arabic", label: "العربية", dir: "rtl" },
  { value: "kurdish", label: "کوردی", dir: "rtl" },
]

const urlLangKey = "language"

const numberMap = {
  0: "٠",
  1: "١",
  2: "٢",
  3: "٣",
  4: "٤",
  5: "٥",
  6: "٦",
  7: "٧",
  8: "٨",
  9: "٩",
}

const structureKeys = {
  label: {
    arabic: "arabicName",
    kurdish: "kurdishName",
    english: "englishName",
  },
  description: {
    arabic: "arabicDesc",
    kurdish: "kurdishDesc",
    english: "englishDesc",
  },
}

const desc = {
  english: "Ingredients",
  arabic: "مكونات",
  kurdish: "پێکهاتەکان",
}

export { languages, urlLangKey, structureKeys, numberMap, desc }
