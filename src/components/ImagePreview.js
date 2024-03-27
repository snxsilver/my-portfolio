import { CrossIcon } from "./icons"

function ImagePreview({ img, imagePreview, setImagePreview }) {
  var mobile = false
  if (Array.isArray(img)) {
    mobile = true
  }
  return (
    <>{imagePreview &&
      <div className="fixed inset-0 h-screen w-full bg-black bg-opacity-70 z-50 transition-all">
        <div className="w-full h-full absolute" onClick={() => setImagePreview(false)}></div>
        <button className="absolute top-3 right-3 text-white flex w-10 hover:text-slate-200" onClick={() => setImagePreview(false)}>
          <CrossIcon />
        </button>
        <div className={`relative top-1/2 transform -translate-y-1/2 mx-auto max-w-screen-xl rounded-md bg-white p-4`}>
          {
            mobile
              ?
              <div className="flex justify-between w-full">
                {img.map((item, index) => (
                  <button key={index} className="rounded-md shadow-port overflow-hidden w-1/4">
                    <img src={item} className="w-full" />
                  </button>
                ))}
              </div>
              :
              <div className="rounded-md shadow-port overflow-hidden">
                <img src={img} className="w-full" />
              </div>
          }
        </div>
      </div>
    }
    </>
  )
}

export default ImagePreview