import { useEffect, useState } from "react";
import GeneralContent from "../components/general-components/GeneralContent";
import GeneralHome from "../components/general-components/GeneralHome";

function HomeGeneral(){

  useEffect(() => {
    document.title = "Resume - Muh Syaiful Adli"
  }, [])

  return(
    <div className="">
      <GeneralHome />
      <GeneralContent />
      {/* <Navbar /> */}
    </div>
  )
}

export default HomeGeneral