import anime from 'animejs'
import { useEffect, useRef } from 'react'

export default function Poc() {
  const btnRef = useRef(null)
  const rotate = () => {
    btnRef.current = anime({
      targets: '#btn',
      translateX: function () {
        return anime.random(-500, 500)
      },
      translateY: function () {
        return anime.random(-250, 250)
      },
      delay: anime.stagger(20),
      easing: 'easeOutCubic',
      autoplay: true,
      complete: () => {
        rotate()
        btnRef.current.restart()
      }
    })
  }

  useEffect(() => {
    rotate()
  }, [])

  return (
    <div className="flex h-screen items-center justify-center bg-neutral-800">
      <h1 className="hidden text-5xl font-bold">You won!!!</h1>
      <button
        id="btn"
        className="cursor-pointer rounded-full bg-green-500 p-4"
      ></button>
    </div>
  )
}
