import GlitchText from '../components/GlitchText'

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="flex items-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  Hi, I{"'"}m
                </h1>
                <GlitchText name="Marcuz" />
              </div>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Full Stack developer with 5 years of experience in Software
                Development with a wide range of technologies from web and
                mobile applications to cloud infrastructure using AWS.
              </p>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                I started in the tech industry as a freelancer while I was
                studying Computer Engineering at Mapua University.
              </p>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                After 3 years as a freelancer, I moved to Japan and started
                working with various diversified teams. I worked with one of the
                largest investment banking company and participated in digital
                transformation projects.
              </p>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                I’m currently looking for opportunities and projects that allows
                to work fully remote anywhere.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
