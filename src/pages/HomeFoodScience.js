import { useEffect, useState } from "react";
import GeneralContent from "../components/food-components/GeneralContent";
import GeneralHome from "../components/food-components/GeneralHome";
import GeneralHomePrint from "../components/food-components/GeneralHomePrint";

function HomeFoodScience(){

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

export default HomeFoodScience