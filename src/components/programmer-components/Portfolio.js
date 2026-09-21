import ImagePreview from "./ImagePreview"
import { useState } from "react"
import { PortfolioList } from "./copywriting"

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