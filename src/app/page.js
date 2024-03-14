import Cards from "@/containers/Cards"
import { firestore } from "@/firebase"
import { collection, getDocs } from "firebase/firestore"

export const revalidate = 7200

async function getData() {
  const categories = {}
  const categoriesId = []
  const categoriesSnapshot = await getDocs(collection(firestore, "categories"))
  categoriesSnapshot.forEach((doc) => {
    categories[doc.id] = { items: [], ...doc.data() }
    categoriesId.push(doc.id)
  })

  const itemsSnapshot = await getDocs(collection(firestore, "items"))
  itemsSnapshot.forEach((doc) => {
    const item = doc.data()
    if (categories[item.categoryId])
      categories[item.categoryId].items.push(item)
  })

  const data = []

  categoriesId.forEach((id) => data.push(categories[id]))

  return data
}

export default async function Home() {
  const data = await getData()
  return (
    <div className="pb-6">
      <Cards data={data} />
    </div>
  )
}
