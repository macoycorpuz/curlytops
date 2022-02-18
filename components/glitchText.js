import style from '../styles/Glitch.module.css'

export default function GlitchText({ name }) {
  return (
    <div className="text-4xl">
      <h1 className={style.glitch}>
        <span aria-hidden="true">{name}</span>
        {name}
        <span aria-hidden="true">{name}</span>
      </h1>
    </div>
  )
}
