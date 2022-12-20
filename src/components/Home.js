import me from '../assets/img/syaiful.png'

function Home() {
  return (
    <section id="home" className="pt-32 lg:mb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">Hello! I am<span
              className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Muh Syaiful Adli</span></h1>
            <h2 className="font-medium text-secondary text-lg mb-8 mt-2 lg:text-2xl">Web Developer</h2>
            <a href="/file/CV_Muh_Syaiful_Adli.pdf" download
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">CV Muh Syaiful Adli</a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-0 lg:right-0">
              <img src={me} alt="Syaiful Adli" className="max-w-[250px] lg:max-w-full mx-auto" />
              <span className="absolute -bottom-10 lg:bottom-10 -z-10 left-1/2 -translate-x-1/2">
                <svg className="w-[300px] lg:w-[400px]" width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#06b6d4"
                    d="M44.3,-46.9C54,-34.6,56,-17.3,55.1,-0.9C54.2,15.4,50.2,30.8,40.5,46.2C30.8,61.5,15.4,76.7,1.7,75C-12,73.3,-24.1,54.7,-36.3,39.4C-48.6,24.1,-61.1,12,-64.5,-3.4C-68,-18.9,-62.4,-37.8,-50.1,-50.2C-37.8,-62.5,-18.9,-68.3,-0.8,-67.5C17.3,-66.7,34.6,-59.3,44.3,-46.9Z"
                    transform="translate(100 100)" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home