import cv from "../../assets/img/cv.png"
import yskk from "../../assets/img/yskk.png"
import akwayan from "../../assets/img/akwayan.png"
import snscl from "../../assets/img/snsclo.png"
import snsclo from "../../assets/img/snsclo-e-commerce.png"
import disdig from "../../assets/img/company-profile.png"
import tripwe from "../../assets/img/tripwe.png"
import ihraman from "../../assets/img/ihraman.png"
import sola from "../../assets/img/sola-gracia.png"
import las1 from "../../assets/img/laundry-app-screen-1.png"
import las2 from "../../assets/img/laundry-app-screen-2.png"
import las3 from "../../assets/img/laundry-app-screen-3.png"
import eys1 from "../../assets/img/ekspor-yuk-screen-1.png"
import eys2 from "../../assets/img/ekspor-yuk-screen-2.png"
import eys3 from "../../assets/img/ekspor-yuk-screen-3.png"
import ImagePreview from "./ImagePreview"
import { useState } from "react"

const PortfolioTile = ({ img, title, description, preview }) => {
  var mobile = false
  if (Array.isArray(img)) {
    mobile = true
  }

  return (
    <div className="mb-12 p-4 lg:w-1/2 print:mb-2 print:px-2 print:pb-2 print:pt-12 print:table">
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
  { img: ihraman, title: "Ihraman.com Marketplace", description: "A web marketplace platform designed to connect customers with Umrah and travel-related services. The platform provides product management, transaction processing, user management, and administrative tools to support business operations. Built using Laravel 11 and Bootstrap." },
  { img: [eys1, eys2, eys3], title: "Ekspor Yuk Application", description: "A mobile application designed to help users access export-related information and services through an intuitive mobile experience. Built using Flutter, Provider, and GraphQL to provide efficient data management." },
  { img: sola, title: "Sola Gracia Accounting Application", description: "A web-based accounting and employee management application used to manage employee data, financial records, and daily business operations. Built using Laravel 9 and Bootstrap." },
  { img: tripwe, title: "Tripwe Marketplace", description: "A travel marketplace platform that enables users to browse travel packages, make reservations, and complete online transactions. The application includes user authentication using Laravel Passport, payment gateway integration through the bank's API, and booking management features. Built using Vue.js, Tailwind CSS, and Laravel." },
  { img: yskk, title: "yskk.org Website", description: "An official website for Yayasan Satu Karsa Karya that provides information about the organization, its programs, activities, and latest news. Built using Laravel 5 and Bootstrap." },
  { img: [las1, las2, las3], title: "Laundry App", description: "A laundry management application designed to simplify laundry business operations. The application supports customer management, order tracking, service management, and transaction monitoring. Built using Flutter, GetX, and SQLite" },
  { img: cv, title: "Personal Portfolio Website", description: "A responsive portfolio website created to showcase professional experience, technical skills, and software development projects. Built using React.js and Tailwind CSS." },
  // { img: snsclo, title: "SnSclo E-commerce", description: "Currently, I am building my own e-commerce project for my wife's business. I am building SnSclo e-commerce using React Js with Redux-Toolkit and Tailwind CSS as Front-End and Laravel 9 as Back-End." },
  // { img: snscl, title: "Web-Based Application snscl.my.id", description: "Website snsclo.my.id is my web-based application to help upload products on shopee using the CodeIgniter 3 framework. This is supposed to support my wife's business. There are 3 levels of users on this website: Supervisor, Admin and Uploader." },
  // { img: akwayan, title: "Akwayan Online System Library", description: "Akwayan Online Library System is a project that I am working on with my friends using the Laravel 9 framework." },
  { img: disdig, title: "Another Project in My Localhost", description: "I am also actively developing personal and experimental projects, including company profile websites, marketplace platforms, mobile applications such as note-taking and financial record apps, games built with Godot, and workflow automation solutions using n8n and Telegram bots." },
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