import Cards from "@/containers/Cards"
import { firestore } from "@/firebase"
import { collection, getDocs } from "firebase/firestore"

export const revalidate = 7200

let triggers = 0
let cached = Math.random()

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

  cached = Math.random()
  triggers++

  const data = []

  categoriesId.forEach((id) => data.push(categories[id]))
  return [data, cached]
}

export default async function Home() {
  const [data, cached] = await getData()
  return (
    <div>
      <div className="text-center text-black">
        {triggers}
        <br />
        {cached}
      </div>
      <Cards data={data} />
    </div>
  )
}
