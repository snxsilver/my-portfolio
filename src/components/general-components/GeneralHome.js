import me from '../../assets/img/syaiful-alt.png'
import { useState, useEffect } from "react";

const Portrait = ({ print }) => {
  print = print || false
  return (
    <img src={me} alt="Syaiful Adli" className={`w-[100px] md:w-[300px] rounded-full`} />
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


function GeneralHome() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // true if at the very top, false if scrolled down
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className={`pt-6 md:pt-32 print:pt-4 ${isTop ? 'md:h-screen print:h-fit' : ''}`}>
      <div className="container container2">
        <div className="flex items-center">
          <div className="justify-start items-center flex">
            <Portrait />
          </div>
          <div className="md:w-full flex flex-1">
            <Title
              name="Muh Syaiful Adli"
              // title="Nutrition Enthusiast"
              intro="HP: 085325255626 | syaiful.adly2@gmail.com | Sukoharjo, Jawa Tengah"
            // printCv={printCv}
            // printPorto={printPorto}
            // onAllPrint={onAllPrint}
            />
          </div>
        </div>
        <div className="md:mt-12 mt-3 text-justify text-sm md:text-base print:text-base">
        Praktisi gizi yang tertarik dan teliti dalam menghitung serta menganalisis kebutuhan nutrisi harian. Memiliki latar belakang pendidikan yang relevan, dengan pemahaman mendalam tentang prinsip gizi seimbang dan kesehatan. Aktif menerapkan pengetahuan gizi dalam kehidupan sehari-hari, merencanakan pola makan sehat, dan mempelajari strategi nutrisi yang efektif. Termotivasi untuk mengembangkan keterampilan profesional dan memberikan kontribusi positif dalam mendukung kesehatan individu.
        </div>
      </div>
    </section>
  )
}

export default GeneralHome