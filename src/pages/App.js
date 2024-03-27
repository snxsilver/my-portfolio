import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

function App() {
  const [cv, setCv] = useState(true)
  const [allPrint, setAllPrint] = useState(false)

  const onPrint = () => {
    window.print()
  }

  const printCv = async () => {
    await setAllPrint(false)
    await setCv(true)
    onPrint()
  }

  const onAllPrint = async () => {
    await setAllPrint(true)
    onPrint()
  }

  const printPorto = async () => {
    await setAllPrint(false)
    await setCv(false)
    onPrint()
  }

  useEffect(() => {
    document.title = "Resume - Muh Syaiful Adli"
  }, [])
  return (
    <div className="">
      <div className={`print:relative print:h-screen ${allPrint ? 'print:block' : cv ? 'print:block' : 'print:hidden'}`}>
        <Navbar />
        <Home
          printCv={printCv}
          printPorto={printPorto}
          onAllPrint={onAllPrint}
        />
        <Experience />
        <About />
        <div className="print:absolute print:bottom-0 print:w-full">
          <Skills />
          <div className="print:hidden">
            <Portfolio />
          </div>
          <Footer />
        </div>
      </div>
      <div className={`hidden ${allPrint ? 'print:block' : cv ? 'print:hidden' : 'print:block'}`}>
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
