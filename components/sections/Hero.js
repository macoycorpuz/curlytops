import ButtonLink from '../ButtonLink'

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center">
      <h1 className="mb-5 font-mono font-normal leading-[23.4px] text-sky-200">
        Hi, my name is
      </h1>
      <h2 className="mb-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
        Marcuz Corpuz.
      </h2>
      <h3 className="text-4xl font-semibold text-gray-400 md:text-5xl lg:text-6xl">
        I build things to bring ideas to life.
      </h3>
      <p className="mt-5 max-w-lg text-slate-300">
        I&apos;m a software engineer specializing in building web and mobile
        applications using a wide range of technologies. Currently, I&apos;m
        focusing on building user friendly applications.
      </p>
      <div className="mt-12">
        <ButtonLink>Check out my works</ButtonLink>
      </div>
    </section>
  )
}
