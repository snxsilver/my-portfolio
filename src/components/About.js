import Socmed from "./Socmed"

function About() {
  return (
    <section id="about" className="pt-24 mb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:px-12 lg:w-1/2">
            <h2 className="font-bold text-xl text-primary uppercase mb-3">About Me</h2>
            <p className="font-medium text-secondary">I am a hard worker and a persistent learner. 3 years experience in website development at PT Tripedia Global Adventura and Yayasan Satu Karsa Karya. Always want to develop and learn the latest programming languages. Have good communication, analysis and problem solving skills.</p>
            <Socmed />
          </div>
          <div className="w-full px-4 lg:px-12 pt-10 lg:w-1/2 lg:pt-0">
            <h2 className="font-bold text-xl text-primary uppercase mb-3">Personal Information</h2>
            <ul>
              <li className="flex items-center font-medium text-secondary text-base"><span className="mr-3 rounded-full flex justify-center items-center p-3"><svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="20" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" /></svg></span>+62853-2525-5626</li>
              <li className="flex items-center font-medium text-secondary text-base"><span className="mr-3 rounded-full flex justify-center items-center p-3"><svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="20" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" /></svg></span>syaiful.adly2@gmail.com</li>
              <li className="flex items-center font-medium text-secondary text-base"><span className="mr-3 rounded-full flex justify-center items-center p-3"><svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="20" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg></span>Kabupaten Sukoharjo, Provinsi Jawa Tengah, 57552</li>
              <li className="flex items-center font-medium text-secondary text-base"><span className="mr-3 rounded-full flex justify-center items-center p-3"><svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="20" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" /></svg></span>Age: 27</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About