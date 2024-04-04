import { useState, useEffect, useRef } from "react"

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [offset, setOffset] = useState(0);
  const navbarRef = useRef(null)

  const closeExpand = (e) => {
    if (!navbarRef.current.contains(e.target)) {
      setNavbarOpen(false)
    }
  }

  const setScroll = () => {
    setOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  });

  useEffect(() => {
    document.addEventListener('mousedown', closeExpand)
    return () => {
      document.removeEventListener('mousedown', closeExpand)
    }
  }, [])

  const NavMenu = ({ title, href }) => {
    return (
      <li className="group">
        <a href={href} onClick={() => setNavbarOpen(false)}
          className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">{title}</a>
      </li>
    )
  }

  const navList = [
    { title: "Home", href: "#home" },
    { title: "Experience", href: "#experience" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Portfolio", href: "#portfolio" },
  ]

  return (
    <header className={"bg-transparent absolute top-0 left-0 right-0 w-screen flex items-center z-10 print:hidden " + (offset ? "navbar-fixed" : "")}>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <span className="font-bold text-lg text-primary block py-3">M Syaiful Adli</span>
          </div>
          <div className="flex items-center px-4" ref={navbarRef}>
            <button id="hamburger" name="hamburger" type="button" className={"block absolute right-4 lg:hidden " + (navbarOpen ? "hamburger-active" : "")} onClick={() => setNavbarOpen(!navbarOpen)}>
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>
            <nav id="nav-menu" className={"absolute py-3 bg-white shadow-lg rounded-md max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none lg:visible lg:opacity-100 transform translate-y-0 transition-all duration-300 ease-in-out " + (navbarOpen ? "" : "invisible opacity-0 -translate-y-2 lg:translate-y-0")}>
              <ul className="block lg:flex">
                {
                  navList.map((item, index) => (
                    <NavMenu key={index} title={item.title} href={item.href} />
                  ))
                }
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar