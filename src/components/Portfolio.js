import cv from "../assets/img/cv.png"
import yskk from "../assets/img/yskk.png"
import akwayan from "../assets/img/akwayan.png"
import snscl from "../assets/img/snsclo.png"
import snsclo from "../assets/img/snsclo-e-commerce.png"
import disdig from "../assets/img/company-profile.png"
import tripwe from "../assets/img/tripwe.png"
import sola from "../assets/img/sola-gracia.png"
import las1 from "../assets/img/laundry-app-screen-1.png"
import las2 from "../assets/img/laundry-app-screen-2.png"
import las3 from "../assets/img/laundry-app-screen-3.png"
import eys1 from "../assets/img/ekspor-yuk-screen-1.png"
import eys2 from "../assets/img/ekspor-yuk-screen-2.png"
import eys3 from "../assets/img/ekspor-yuk-screen-3.png"
import ImagePreview from "./ImagePreview"
import { useState } from "react"

const PortfolioTile = ({ img, title, description, preview }) => {
  var mobile = false
  if (Array.isArray(img)) {
    mobile = true
  }

  return (
    <div className="mb-12 p-4 lg:w-1/2 print:mb-2 print:p-2 print:table">
      {
        mobile
          ?
          <div className="flex justify-between w-full">
            {img.map((item, index) => (
              <button key={index} className="rounded-md shadow-port overflow-hidden w-1/4" onClick={preview}>
                <img src={item} className="w-full" />
              </button>
            ))}
          </div>
          :
          <button className="rounded-md shadow-port overflow-hidden" onClick={preview}>
            <img src={img} className="w-full" />
          </button>
      }
      <h3 className="font-semibold text-xl text-dark mt-5 mb-3 print">{title}</h3>
      <p className="font-medium text-base text-secondary text-justify">{description}</p>
    </div>
  )
}

const PortfolioList = [
  { img: [eys1, eys2, eys3], title: "Ekspor Yuk", description: "My job at PT. DSAA Group is building Ekspor Yuk Mobile app using Flutter Provider and GraphQL client." },
  { img: [las1, las2, las3], title: "Laundry App", description: "I am building my own Laundry App using Flutter GetX as Frontend Mobile and Laravel 9 as Back-End." },
  { img: cv, title: "Curriculum Vitae", description: "I designed my own Curriculum Vitae using React Js and Tailwind CSS." },
  { img: snsclo, title: "SnSclo E-commerce", description: "Currently, I am building my own e-commerce project for my wife's business. I am building SnSclo e-commerce using React Js with Redux-Toolkit and Tailwind CSS as Front-End and Laravel 9 as Back-End." },
  { img: tripwe, title: "Tripwe", description: "My job at PT Tripedia Global Adventura as Front-End Developer is developing Web Apps tripwe.com. This Web Apps use Vue Js and Tailwind CSS as Front-End and Laravel as Back-End." },
  { img: sola, title: "Sola Gracia Accounting Application", description: "In PT Tripedia Global Adventura, I was responsible to handle Sola Gracia Accounting Application Project by myself. I used Laravel 9 framework to made this web-based application." },
  { img: yskk, title: "yskk.org Website", description: "For 2 years I worked at the Satu Karsa Karya Foundation, one of my jobs was developing the organization's website. This website uses the Laravel 5 framework with blade as front end." },
  { img: snscl, title: "Web-Based Application snscl.my.id", description: "Website snsclo.my.id is my web-based application to help upload products on shopee using the CodeIgniter 3 framework. This is supposed to support my wife's business. There are 3 levels of users on this website: Supervisor, Admin and Uploader." },
  { img: akwayan, title: "Akwayan Online System Library", description: "Akwayan Online Library System is a project that I am working on with my friends using the Laravel 9 framework." },
  { img: disdig, title: "Another Project in My Localhost", description: "I am also actively making my own projects including company profile websites, online wedding invitations, laundry systems etc." },
]

function Portfolio() {
  const [imagePreview, setImagePreview] = useState(false)
  const [imgShow, setImgShow] = useState("")

  const showImage = async (img) => {
    await setImgShow(img)
    setImagePreview(true)
  }

  return (
    <section id="portfolio" className="pt-16 bg-slate-100 print:bg-transparent print:pt-4">
      <div className="container">
        <div className="w-full px-4 print:hidden">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h4 className="font-semibold text-4xl text-primary mb-2">Portfolio</h4>
          </div>
        </div>
        <div className="w-screen h-screen hidden print:flex print:flex-col print:justify-center print:items-center">
          <h4 className="font-semibold text-8xl text-darker-primary mb-2">Portfolio</h4>
          <h4 className="font-semibold text-4xl text-secondary mb-2">Muh Syaiful Adli</h4>
          <h4 className="font-medium text-2xl text-secondary mb-2">Web / Mobile Developer</h4>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {PortfolioList.map((item, index) => (
            <PortfolioTile key={index} img={item.img} title={item.title} description={item.description} preview={() => showImage(item.img)} />
          ))}
        </div>
      </div>
      <ImagePreview imagePreview={imagePreview} img={imgShow} setImagePreview={setImagePreview} />
    </section>
  )
}

export default Portfolio