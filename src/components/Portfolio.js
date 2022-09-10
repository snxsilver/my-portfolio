import cv from "../assets/img/cv.png"
import yskk from "../assets/img/yskk.png"
import akwayan from "../assets/img/akwayan.png"
import snsclo from "../assets/img/snsclo.png"
import disdig from "../assets/img/company-profile.png"

function Portfolio() {
  return (
    <section id="portfolio" className="pt-16 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h4 className="font-semibold text-4xl text-primary mb-2">Portfolio</h4>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={cv} alt="cv" className="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Curriculum Vitae</h3>
            <p className="font-medium text-base text-secondary text-justify">I designed my own Curriculum Vitae using React Js and Tailwind CSS.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={yskk} alt="yskk.org" className="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">yskk.org Website</h3>
            <p className="font-medium text-base text-secondary text-justify">For 2 years I worked at the Satu Karsa Karya Foundation, one of my job descs was developing the organization's website. This website uses the Laravel framework. Indeed I was not involved in the creation of the yskk.org website from the beginning, but the development of this website means that I have proficient in Laravel.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={snsclo} alt="snscl.my.id" className="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">snscl.my.id Website</h3>
            <p className="font-medium text-base text-secondary text-justify">The snsclo.my.id is a website to help upload products on shopee using the CodeIgniter 3 framework. This is a supposed to support my wife's business. There are 3 levels of users on this website, namely Supervisor, Admin and Uploader.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={akwayan} alt="akwayan" className="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Akwayan Online System Library</h3>
            <p className="font-medium text-base text-secondary text-justify">Akwayan Online Library System is a project that I am working on with my friends using the Laravel 9 framework.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={disdig} alt="Distar Digital" className="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Another Project in My Localhost</h3>
            <p className="font-medium text-base text-secondary text-justify">I am also active in making my own projects including company profile websites, online wedding invitations, laundry systems etc.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio