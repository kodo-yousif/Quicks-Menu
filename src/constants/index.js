import mockData from "./mockData.json"

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

// import { faker, fakerAR } from "@faker-js/faker"

let categories = []

categories = mockData

// for (let index = 0; index < 6; index++) {
//   const items = []

//   for (let idx = 0; idx < 21; idx++) {
//     items.push({
//       price: 12000,
//       image: faker.image.urlLoremFlickr({ category: "food" }),
//       arabicName: fakerAR.person.firstName(),
//       arabicDesc: fakerAR.commerce.productDescription(),
//       englishName: faker.person.firstName(),
//       kurdishName: fakerAR.person.firstName(),
//       englishDesc: faker.commerce.productDescription(),
//       kurdishDesc: fakerAR.commerce.productDescription(),
//     })
//   }
//   categories.push({
//     items,
//     english: faker.person.firstName(),
//     arabic: fakerAR.person.firstName(),
//     kurdish: fakerAR.person.firstName(),
//   })
// }

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
  english: "description",
  arabic: "المعلومات",
  kurdish: "زانیاری",
}

export { languages, urlLangKey, categories, structureKeys, numberMap, desc }
