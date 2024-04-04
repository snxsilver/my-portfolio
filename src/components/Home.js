import { useState, useRef, useEffect } from 'react'
import me from '../assets/img/syaiful.png'
import { DownloadIcon, PrintIcon } from './icons'
import Socmed from "./Socmed"

const Title = ({ name, title, intro, printCv, printPorto, onAllPrint }) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col print:flex-row">
        <div className="w-full print:w-1/2 print:pb-3">
          <h1 className="text-base font-semibold text-primary md:text-xl">Hello! I am<span
            className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">{name}</span></h1>
          <h2 className="font-medium text-secondary text-lg mb-8 mt-2 lg:text-2xl print:mb-2">{title}</h2>
          <div className="block print:hidden">
            <BuildButton printCv={printCv} printPorto={printPorto} onAllPrint={onAllPrint} />
          </div>
          <div className="hidden print:block -mb-1">
            <Socmed />
          </div>
        </div>
        <div className="print:w-1/2 print:flex hidden self-end -mt-24 items-end justify-center">
          <Portrait print={true} />
        </div>
      </div>
      <h2 className="font-bold text-xl text-primary uppercase mb-3 mt-12 print:mt-0 print:mb-1 print:text-lg">About Me</h2>
      <p className="font-medium text-secondary">
        {intro}
      </p>
      <div className="print:hidden block">
        <Socmed />
      </div>
    </div>
  )
}

const ButtonTile = ({ icon: Icon, title, buttons }) => {
  const [isExpand, setIsExpand] = useState(false)
  const currentExpand = useRef(null)
  const closeExpand = (e) => {
    if (!currentExpand.current.contains(e.target)) {
      setIsExpand(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', closeExpand)
    return () => {
      document.removeEventListener('mousedown', closeExpand);
    };
  }, []);
  return (
    <div className="relative" ref={currentExpand}>
      <button className={`text-sm lg:text-base font-medium text-white py-2 px-4 lg:py-4 lg:px-8 rounded-full hover:shadow-lg hover:bg-darker-primary ${isExpand ? 'bg-darker-primary' : 'bg-primary' } transition duration-300 ease-in-out flex`} onClick={() => { setIsExpand(!isExpand) }}>
        <span className='mr-3 lg:mr-2 lg:w-[20px] w-[15px]'>
          <Icon />
        </span>
        {title}
      </button>
      <ul className={`absolute bg-white shadow-lg top-full rounded-md overflow-hidden w-40 lg:w-48 ${isExpand ? 'visible opacity-100 transform translate-y-2' : 'invisible opacity-0 transform translate-y-0'} transition-all duration-300 ease-in-out transform`}>
        {buttons}
      </ul>
    </div>
  )
}

const BuildButton = ({ printCv, printPorto, onAllPrint }) => {
  const DownloadTile = ({href, text}) => {
    return (
      <li className='flex'><a href={href} download className='text-sm lg:text-base px-4 py-2 bg-transparent hover:bg-slate-200 transition duration-300 ease-in-out w-full'>{text}</a></li>  
    )
  }

  const PrintTile = ({handleClick, text}) => {
    return (
      <li className='flex'><button href="#" onClick={handleClick} className='text-sm lg:text-base px-4 py-2 bg-transparent hover:bg-slate-200 transition duration-300 ease-in-out w-full text-start'>{text}</button></li>
    )
  }

  const downloadList = [
    {id: 1, href: "file/Resume-Muh_Syaiful_Adli.pdf", text: "Resume"},
    {id: 2, href: "file/Portfolio-Muh_Syaiful_Adli.pdf", text: "Portfolio"},
    {id: 3, href: "file/Resume-and-Portfolio-Muh_Syaiful_Adli.pdf", text: "Resume + Portfolio"},
  ]

  const printList = [
    {id: 1, handleClick: printCv, text: "Resume"},
    {id: 2, handleClick: printPorto, text: "Portfolio"},
    {id: 3, handleClick: onAllPrint, text: "Resume + Portfolio"},
  ]

  return (
    <div className="flex space-x-2">
      <ButtonTile
        key={1}
        icon={DownloadIcon}
        title="Download"
        buttons={
          downloadList.map((item, index) => (
            <DownloadTile key={index} href={item.href} text={item.text} />
          ))
        }
      />
      <ButtonTile
        key={2}
        icon={PrintIcon}
        title="Print"
        buttons={
          printList.map((item, index) => (
            <PrintTile key={index} handleClick={item.handleClick} text={item.text} />
          ))
        }
      />
    </div>
  )
}

const Portrait = ({ print }) => {
  print = print || false
  return (
    <div className="w-full">
      <div className="relative mt-10 lg:mt-0 lg:right-0">
        <img src={me} alt="Syaiful Adli" className={`${print ? 'max-w-[160px]' : 'max-w-[250px]'} lg:max-w-full mx-auto`} />
        <span className={`absolute ${print ? '-bottom-[95px]' : '-bottom-10 lg:bottom-10'} -z-10 left-1/2 -translate-x-1/2`}>
          <svg className={`${print ? 'w-[200px]' : 'w-[300px] lg:w-[400px]'}`} width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#06b6d4"
              d="M44.3,-46.9C54,-34.6,56,-17.3,55.1,-0.9C54.2,15.4,50.2,30.8,40.5,46.2C30.8,61.5,15.4,76.7,1.7,75C-12,73.3,-24.1,54.7,-36.3,39.4C-48.6,24.1,-61.1,12,-64.5,-3.4C-68,-18.9,-62.4,-37.8,-50.1,-50.2C-37.8,-62.5,-18.9,-68.3,-0.8,-67.5C17.3,-66.7,34.6,-59.3,44.3,-46.9Z"
              transform="translate(100 100)" />
          </svg>
        </span>
      </div>
    </div>
  )
}

function Home({ printCv, printPorto, onAllPrint }) {
  return (
    <section id="home" className="pt-24 lg:pt-32 lg:mb-12 print:pt-6">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-end px-4 lg:w-1/2 print:px-2">
            <Title
              name="Muh Syaiful Adli"
              title="Web / Mobile Developer"
              intro="I am a hard worker and a persistent learner. 5 years experience in Website and Mobile Development at PT DSAA Group, PT Tripedia Global Adventura and Yayasan Satu Karsa Karya. Always want to develop and learn the latest programming languages. Have good communication, analysis and problem solving skills."
              printCv={printCv}
              printPorto={printPorto}
              onAllPrint={onAllPrint}
            />
          </div>
          <div className="w-full self-start px-4 lg:w-1/2 print:hidden print:px-2">
            <Portrait />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home