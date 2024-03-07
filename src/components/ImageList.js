/* eslint-disable @next/next/no-img-element */

export default function ImageList({ items }) {
  return (
    <ul
      role="list"
      className="grid mt-5 px-3 grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {items.map((item) => (
        <li key={item.key} className="relative ">
          <div className="group aspect-square block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img
              alt="food"
              src={item.image}
              className=" pointer-events-none object-cover min-h-full"
            />
            <button
              type="button"
              className="absolute rounded-t-lg inset-0 focus:outline-none"
              // onClick={() => {
              //   setSelected(file.id)
              //   setOpen(true)
              // }}
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
