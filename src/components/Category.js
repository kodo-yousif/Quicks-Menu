import useLanguage from "@/hooks/useLanguage"

export default function Category({ label, id }) {
  const [_, { dir }] = useLanguage()

  return (
    <div dir={dir} id={id} className="mt-6 -mb-2 flex w-full">
      <h1 className="bg-white text-black text-lg capitalize shadow ps-8 md:ps-14 p-3 pe-3 md:pe-6 rounded-e-full md:text-2xl">
        {label}
      </h1>
    </div>
  )
}
