import Image from "next/image"

export default function ImageList({ items, setSelected }) {
  return (
    <ul
      role="list"
      className="grid mt-5 px-3 grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {items.map((item) => (
        <li key={item.key} className="relative ">
          <div className="group aspect-square block w-full overflow-hidden rounded-lg bg-gray-100">
            <Image
              width={750}
              quality={55}
              height={750}
              src={item.image}
              alt={item?.label}
              className="text-center text-black pointer-events-none object-cover h-full"
            />
            <button
              type="button"
              onClick={() => setSelected(item)}
              className="absolute rounded-t-lg inset-0 focus:outline-none"
            />
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
            {item.label}
          </p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">
            {item.price}
          </p>
        </li>
      ))}
    </ul>
  )
}
