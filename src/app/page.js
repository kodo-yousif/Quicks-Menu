import Cards from "@/containers/Cards"
import { addSeconds } from "date-fns"

export const revalidate = 3600

let triggers = 0
let cached = Math.random()
let expireCacheTime = new Date()

async function getData() {
  if (expireCacheTime < new Date()) {
    cached = Math.random()
    triggers++
    expireCacheTime = addSeconds(new Date(), 5)
  }

  console.log(triggers)
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
