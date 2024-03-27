import { AddressIcon, CalendarIcon, EmailIcon, PhoneIcon } from "./icons"

const ListTile = ({ year, text }) => {
  return (
    <li className="flex font-medium text-secondary text-base">
      <span className="font-semibold whitespace-nowrap mr-3 flex justify-center items-center">
        {year}
      </span>
      {text}
    </li>
  )
}

const ContactTile = ({ icon: Icon, text }) => {
  return (
    <li className="flex items-center font-medium text-secondary text-base">
      <span className="mr-3 rounded-full flex justify-center items-center print:w-[15px]">
        <Icon />
      </span>
      {text}
    </li>
  )
}

const Wrapper = ({ title, content, personal }) => {
  personal = personal || false
  return (
    <div className="w-full">
      <h2 className="font-bold text-xl text-primary uppercase my-3 print:my-0 print:text-base">{title}</h2>
      <ul className={personal ? 'space-y-3 print:space-y-0' : "space-y-2 print:space-y-0"}>
        {content}
      </ul>
    </div>
  )
}

const ContactList = [
  {
    icon: PhoneIcon,
    text: "+62853-2525-5626"
  },
  {
    icon: EmailIcon,
    text: "syaiful.adly2@gmail.com"
  },
  {
    icon: AddressIcon,
    text: "Kabupaten Sukoharjo, Provinsi Jawa Tengah, 57552"
  },
  {
    icon: CalendarIcon,
    text: "Age: 28"
  },
]

const FormalList = [
  {
    year: "2018",
    text: "Ilmu dan Teknologi Pangan Universitas Sebelas Maret Surakarta, GPA = 3.50"
  },
  {
    year: "2013",
    text: "SMA Negeri 4 Surakarta"
  }
]

const NonFormalList = [
  {
    year: "2022",
    text: "React Developer Course by Teknoblox"
  },
  {
    year: "2022",
    text: "UI/UX Design Mastery Course by Skilvul"
  },
  {
    year: "2021",
    text: "HTML, CSS, JavaScript, PHP and MySQL Course by Progate"
  },
]

const OrganizationList = [
  {
    year: "2016",
    text: "Head of Media Informasi Division at Kelompok Studi Ilmiah"
  },
  {
    year: "2015",
    text: "Head of Kaderisasi Division at Kelompok Studi Ilmiah"
  },
]

const FormalEducation = () => {
  return (
    <Wrapper title="Formal Education"
      content={FormalList.map((item, index) => (
        <ListTile key={index} year={item.year} text={item.text} />
      ))}
    />
  )
}

const NonFormalEducation = () => {
  return (
    <Wrapper
      title="Non Formal Education"
      content={
        NonFormalList.map((item, index) => (
          <ListTile key={index} year={item.year} text={item.text} />
        ))
      }
    />
  )
}

const OrganizationExperience = () => {
  return (
    <Wrapper
      title="Organization Experience"
      content={
        OrganizationList.map((item, index) => (
          <ListTile key={index} year={item.year} text={item.text} />
        ))
      }
    />
  )
}

const PersonalInformation = () => {
  return (
    <Wrapper
      title="Personal Information"
      content={[
        ContactList.map((item, index) => (
          <ContactTile
            key={index}
            icon={item.icon}
            text={item.text}
          />
        ))
      ]}
      personal={true}
    />
  )
}

function About() {
  return (
    <section id="about" className="pt-12 pb-16 bg-slate-100 print:pt-2 print:pb-2">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:px-12 lg:w-1/2 print:w-1/2 space-y-5 print:space-y-2 print:px-2">
            <PersonalInformation />
            <FormalEducation />
          </div>
          <div className="w-full px-4 lg:px-12 pt-8 lg:w-1/2 lg:pt-0 print:w-1/2 space-y-5 print:space-y-2 print:pt-0 print:px-2">
            <NonFormalEducation />
            <OrganizationExperience />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About