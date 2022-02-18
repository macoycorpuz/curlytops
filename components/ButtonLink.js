export default function ButtonLink({ children }) {
  return (
    <a className="cursor-pointer rounded-lg border-2 border-sky-300 bg-transparent py-5 px-7 font-mono text-sky-200 hover:bg-sky-900">
      {children}
    </a>
  )
}
