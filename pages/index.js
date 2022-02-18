import Hero from '../components/sections/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-neutral-900 px-6">
      <Navbar />
      <Hero />
    </div>
  )
}
