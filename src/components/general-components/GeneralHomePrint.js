import me from '../../assets/img/syaiful-sq.png'
import { useState, useEffect } from "react";
import { intro, introText, name } from './generalcopywriting';

const Portrait = ({ print }) => {
  print = print || false
  return (
    <div className={`w-[100px] rounded-full flex items-center justify-center bg-slate-300`}>
      <img src={me} alt="Syaiful Adli" className={`w-[100px] rounded-full`} />
    </div>
  )
}

const Title = ({ name, title, intro }) => {
  return (
    <div className="w-full flex flex-col pl-3">
      <div className="w-full flex flex-col">
        <div className="w-full">
          <span
            className="block font-bold text-black mt-1 text-2xl mb-5">{name}</span>
          {/* <h2 className="font-medium text-black mb-8 mt-2 text-2xl">{title}</h2> */}
        </div>
      </div>
      <div className="w-full">
        <p className="font-medium text-black text-base">
          {intro}
        </p>
      </div>
    </div>
  )
}


function GeneralHome() {
  return (
    <section id="home" className={`pt-2 hidden print:block h-fit w-full`}>
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
            />
          </div>
        </div>
        <div className="md:mt-12 mt-3 text-justify text-sm md:text-base print:text-sm">
          {introText}
        </div>
      </div>
    </section>
  )
}

export default GeneralHome