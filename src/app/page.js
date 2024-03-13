import Cards from "@/containers/Cards"
import { addSeconds } from "date-fns"

export const revalidate = 3600

let triggers = 0
let cached = Math.random()

async function getData() {
  cached = Math.random()
  triggers++
  return cached
}

export default async function Home() {
  const data = await getData()
  return (
    <div>
      <div className="text-center text-black">
        {triggers}
        <br />
        {data}
      </div>
      <Cards />
    </div>
  )
}
