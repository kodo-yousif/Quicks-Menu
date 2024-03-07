"use client"
import { useState } from "react"

import useData from "@/hooks/useData"
import Category from "@/components/Category"
import Languages from "@/components/Languages"
import useLanguage from "@/hooks/useLanguage"
import ImageList from "@/components/ImageList"
import SidebarDialog from "@/components/SidebarDialog"

export default function Home() {
  const [selected, setSelected] = useState(null)

  const categories = useData()

  const [_, { dir }] = useLanguage()

  return (
    <main
      dir={dir}
      className="flex select-none min-h-screen flex-col items-center text-black"
    >
      <Languages />

      {categories.map(({ items, label, key }) => (
        <section className="w-full" key={key}>
          <Category label={label} />
          <ImageList setSelected={setSelected} items={items} />
        </section>
      ))}
      <SidebarDialog item={selected} setSelected={setSelected} />
    </main>
  )
}
