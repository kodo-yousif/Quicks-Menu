import useLanguage from "@/hooks/useLanguage"

export default function Category({ label }) {
  const [_, { dir }] = useLanguage()

  return (
    <div dir={dir} className="mt-6 -mb-2 flex w-full">
      <h1 className="bg-white capitalize shadow ps-14 p-3 pe-6 rounded-e-full text-2xl">
        {label}
      </h1>
    </div>
  )
}
