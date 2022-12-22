import { useState,useEffect } from "react"

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [offset, setOffset] = useState(0);
  const setScroll = () => {
    setOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  });

  return (
    <header className={"bg-transparent absolute top-0 left-0 w-full flex items-center z-10 " + (offset ? "navbar-fixed" : "")}>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <span className="font-bold text-lg text-primary block py-3">M Syaiful Adli</span>
          </div>
          <div className="flex items-center px-4">
            <button id="hamburger" name="hamburger" type="button" className={"block absolute right-4 lg:hidden " + (navbarOpen ? "hamburger-active" : "")} onClick={() => setNavbarOpen(!navbarOpen)}>
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>
            <nav id="nav-menu" className={"absolute py-3 bg-white shadow-lg rounded-md max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none "+ (navbarOpen ? "" : "hidden")}>
              <ul className="block lg:flex">
                <li className="group">
                  <a href="" onClick={(e) => {e.preventDefault(); window.location.replace('/my-portfolio/#home');}} className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Home</a>
                </li>
                <li className="group">
                  <a href="" onClick={(e) => {e.preventDefault(); window.location.replace('/my-portfolio/#about');}} className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">About</a>
                </li>
                <li className="group">
                  <a href="" onClick={(e) => {e.preventDefault(); window.location.replace('/my-portfolio/#experience');}} className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Experience</a>
                </li>
                <li className="group">
                  <a href="" onClick={(e) => {e.preventDefault(); window.location.replace('/my-portfolio/#skills');}} className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Skills</a>
                </li>
                <li className="group">
                  <a href="" onClick={(e) => {e.preventDefault(); window.location.replace('/my-portfolio/#portfolio');}} className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Portfolio</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar