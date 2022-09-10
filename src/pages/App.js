import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

function App() {
  useEffect(()=>{
    document.title = "CV - Muh Syaiful Adli"
  },[])
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Experience />
    <Skills />
    <Portfolio />
    <Footer />
    </>
  );
}

export default App;
