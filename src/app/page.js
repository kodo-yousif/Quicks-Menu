import Cards from "@/containers/Cards"
import { firestore } from "@/firebase"
import { collection, getDocs } from "firebase/firestore"

export const revalidate = 60

let triggers = 0
let cached = Math.random()

async function getData() {
  const categories = []
  const categoriesSnapshot = await getDocs(collection(firestore, "categories"))
  categoriesSnapshot.forEach((doc) =>
    categories.push({ id: doc.id, ...doc.data() })
  )

  const items = []
  const itemsSnapshot = await getDocs(collection(firestore, "items"))
  itemsSnapshot.forEach((doc) => items.push(doc.data()))

  cached = Math.random()
  triggers++
  return [{ categories, items }, cached]
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
