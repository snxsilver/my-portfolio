import { useEffect, useState } from "react";
import GeneralContent from "../components/general-components/GeneralContent";
import GeneralHome from "../components/general-components/GeneralHome";
import GeneralHomePrint from "../components/general-components/GeneralHomePrint";

function HomeGeneral(){

  useEffect(() => {
    document.title = "Resume - Muh Syaiful Adli"
  }, [])

  return(
    <div className="">
      <GeneralHome />
      <GeneralHomePrint />
      <GeneralContent />
      {/* <Navbar /> */}
    </div>
  )
}

export default HomeGeneral