"use client"
import { useState } from "react"
import Category from "@/components/Category"
import ImageList from "@/components/ImageList"
import SidebarDialog from "@/components/SidebarDialog"
import useData from "@/hooks/useData"
import Languages from "@/components/Languages"
import useLanguage from "@/hooks/useLanguage"
import CategoryMenu from "@/components/CategoryMenu"

export default function Cards({ data }) {
  const categories = useData()

  const [_, { dir }] = useLanguage()

  const [selected, setSelected] = useState(null)

  console.log(data)

  return (
    <main
      dir={dir}
      className="flex select-none min-h-screen flex-col items-center text-black"
    >
      <Languages />

      <CategoryMenu />

      {categories.map(({ items, label, key }) => (
        <section className="w-full" key={key}>
          <Category id={key} label={label} />
          <ImageList setSelected={setSelected} items={items} />
        </section>
      ))}
      <SidebarDialog item={selected} setSelected={setSelected} />
    </main>
  )
}
