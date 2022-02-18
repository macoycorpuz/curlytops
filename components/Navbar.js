import { MenuAlt3Icon } from '@heroicons/react/outline'

export default function Navbar({ onOpen }) {
  return (
    <div className="sticky top-0 z-10 flex h-20 items-center justify-between px-6 text-white">
      <h1 className="z-50 font-sans text-3xl font-bold">MC</h1>
      <button type="button" onClick={() => onOpen()}>
        <MenuAlt3Icon className="h-8 w-8" />
      </button>
    </div>
  )
}
