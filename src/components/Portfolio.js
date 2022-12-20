import cv from "../assets/img/cv.png"
import yskk from "../assets/img/yskk.png"
import akwayan from "../assets/img/akwayan.png"
import snscl from "../assets/img/snsclo.png"
import snsclo from "../assets/img/snsclo-e-commerce.png"
import disdig from "../assets/img/company-profile.png"
import tripwe from "../assets/img/tripwe.png"
import sola from "../assets/img/sola-gracia.png"

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
              <img src={snsclo} alt="cv" className="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">SnSclo E-commerce</h3>
            <p className="font-medium text-base text-secondary text-justify">Currently, I am building my own e-commerce project for my wife's business. I am building SnSclo e-commerce using React Js with Redux-Toolkit and Tailwind CSS as Front-End and Laravel 9 as Back-End.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={tripwe} alt="cv" className="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Tripwe</h3>
            <p className="font-medium text-base text-secondary text-justify">My job at PT Tripedia Global Adventura as Front-End Developer is developing Web Apps tripwe.com. This Web Apps use Vue Js and Tailwind CSS as Front-End and Laravel as Back-End.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={sola} alt="yskk.org" className="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Sola Gracia Accounting Application</h3>
            <p className="font-medium text-base text-secondary text-justify">In PT Tripedia Global Adventura, I was responsible to handle Sola Gracia Accounting Application Project by myself. I used Laravel 9 framework to made this web-based application.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={yskk} alt="yskk.org" className="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">yskk.org Website</h3>
            <p className="font-medium text-base text-secondary text-justify">For 2 years I worked at the Satu Karsa Karya Foundation, one of my jobs was developing the organization's website. This website uses the Laravel 5 framework with blade as front end.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={snscl} alt="snscl.my.id" className="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Web-Based Application snscl.my.id</h3>
            <p className="font-medium text-base text-secondary text-justify">Website snsclo.my.id is my web-based application to help upload products on shopee using the CodeIgniter 3 framework. This is supposed to support my wife's business. There are 3 levels of users on this website: Supervisor, Admin and Uploader.</p>
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
            <p className="font-medium text-base text-secondary text-justify">I am also actively making my own projects including company profile websites, online wedding invitations, laundry systems etc.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio