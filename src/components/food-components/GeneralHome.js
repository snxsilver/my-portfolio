import me from '../../assets/img/syaiful-sq.png'
import { useState, useEffect } from "react";
import useIsTop from '../utility/useIsTop'
import { intro, introText, name } from './generalcopywriting';

const Portrait = ({ print }) => {
  print = print || false
  return (
    <div className={`w-[100px] md:w-[300px] rounded-full flex items-center justify-center bg-slate-300`}>
      <img src={me} alt="Syaiful Adli" className={`w-[100px] md:w-[300px] rounded-full`} />
    </div>
  )
}

const Title = ({ name, title, intro }) => {
  return (
    <div className="w-full flex flex-col pl-3 md:pl-7">
      <div className="w-full flex flex-col">
        <div className="w-full">
          <span
            className="block font-bold text-black mt-1 text-xl md:text-5xl md:mb-12 print:mb-5 print:text-3xl">{name}</span>
          {/* <h2 className="font-medium text-black mb-8 mt-2 text-2xl">{title}</h2> */}
        </div>
      </div>
      <div className="w-full">
        <p className="font-medium text-black md:text-base text-sm print:text-base">
          {intro}
        </p>
      </div>
    </div>
  )
}

// const introText = "Praktisi gizi yang tertarik dan teliti dalam menghitung serta menganalisis kebutuhan nutrisi harian. Memiliki latar belakang pendidikan yang relevan, dengan pemahaman mendalam tentang prinsip gizi seimbang dan kesehatan. Aktif menerapkan pengetahuan gizi dalam kehidupan sehari-hari, merencanakan pola makan sehat, dan mempelajari strategi nutrisi yang efektif. Termotivasi untuk mengembangkan keterampilan profesional dan memberikan kontribusi positif dalam mendukung kesehatan individu."
// const introText = "Latar belakang Ilmu dan Teknologi Pangan yang membentuk kemampuan berpikir analitis, sistematis, dan teliti dalam memahami serta menyelesaikan permasalahan. Terbiasa menerapkan pengetahuan secara praktis, beradaptasi dengan berbagai situasi dan kebutuhan pekerjaan, serta memahami informasi dari berbagai sudut pandang. Memiliki kemampuan komunikasi yang baik, mampu bekerja secara mandiri maupun dalam tim, serta kemauan untuk terus belajar dan mengembangkan kemampuan. Termotivasi untuk memperoleh pengalaman baru, menghadapi tantangan, dan memberikan kontribusi positif dalam lingkungan kerja."

function GeneralHome() {
  const isTop = useIsTop()

  return (
    <section id="home" className={`pt-6 md:pt-32 print:pt-4 print:hidden ${isTop ? 'md:h-screen' : ''}`}>
      <div className="container container2">
        <div className="flex items-center">
          <div className="justify-start items-center flex">
            <Portrait />
          </div>
          <div className="md:w-full flex flex-1">
            <Title
              name={name}
              // title="Nutrition Enthusiast"
              intro={intro}
            // printCv={printCv}
            // printPorto={printPorto}
            // onAllPrint={onAllPrint}
            />
          </div>
        </div>
        <div className="md:mt-12 mt-3 text-justify text-sm md:text-base print:text-base">
        {introText}
        </div>
      </div>
    </section>
  )
}

export default GeneralHome