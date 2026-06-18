const ExperienceTile = ({ job, company, date, description, hidden = false }) => {
  return (
    <div className={"w-full" + (hidden ? " print:hidden" : "")}>
      <div className="flex flex-wrap lg:space-x-3 mb-3 print:mb-0 print:items-end print:space-x-3">
        <h2 className="font-semibold text-lg text-secondary w-full lg:w-auto print:w-auto">{job}</h2>
        <div className="hidden lg:flex items-center h-7 print:flex">
          <div className="rounded-full w-1 h-1 bg-secondary">
          </div>
        </div>
        <h2 className="font-medium lg:text-lg text-secondary mr-2 lg:mr-0">{company}</h2>
        <h2 className="font-medium lg:text-lg text-secondary">({date})</h2>
      </div>
      <ul>
        {description.map((item, index) => (
          <li key={index} className="text-secondary flex items-start print:p-0 print:m-0 sm:text-left text-justify">
            <div className="flex items-center h-6">
              <div className="mr-3 rounded-full w-1 h-1 bg-secondary">
              </div>
            </div>
            {item}</li>
        ))}
      </ul>
    </div>
  )
}

const experienceList = [
  {
    job: "Senior Software Engineer",
    company: "PT. Ihram Fajar Travelindo",
    date: "May 2023 - Present",
    description: [
      "Led a team of developers in designing and developing a marketplace web application using Laravel 11.",
      "Managed VPS infrastructure, including server configuration, application deployment, monitoring, and maintenance.",
      "Coordinated development activities and provided technical guidance to team members.",
      "Collaborated with stakeholders to define product requirements and translate business needs into technical solutions.",
    ]
  },
  {
    job: "Freelance Flutter Developer",
    company: "PT. DSAA Group",
    date: "January - March 2024",
    description: [
      "Collaborated with a team of developers to design and develop a Flutter application using Provider and GraphQL Client.",
      "Managed application release and updates on Google Play Store, including versioning and deployment.",
      "Performed testing and debugging to ensure application quality.",
    ]
  },
  {
    job: "Freelance Web App Developer",
    company: "CV. Sola Gracia",
    date: "March - May 2023",
    description: [
      "Designed and developed accounting and employee management web applications using Laravel 9.",
      "Performed debugging, maintenance, and system enhancements to ensure application stability and quality.",
    ]
  },
  {
    job: "Front-End Developer",
    company: "PT. Tripedia Global Adventura",
    date: "February 2022 - March 2023",
    description: [
      "Collaborated with a team of developers to develop new features for a web application using Vue.js.",
      "Designed and developed backend services and APIs using Laravel 8.",
      "Performed debugging and maintenance to ensure application stability and quality.",
    ]
  },
  {
    job: "Staff of Data and Information Management Division",
    company: "Yayasan Satu Karsa Karya",
    date: "January 2020 - December 2021",
    description: [
      "Developed new features for company profile website using Laravel 5.",
      "Monitored system performance and performed debugging to ensure website stability.",
    ],
    // hidden: true,
  },
]

function Experience() {
  return (
    <section id="experience" className="pt-24 mb-12 print:pt-2 print:mb-2">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:px-12 print:px-2">
            <h2 className="font-bold text-xl text-primary uppercase mb-5 print:mb-1 print:text-lg">Working Experience</h2>
            <div className="space-y-5 print:space-y-1">
              {experienceList.map((item, index) => (
                <ExperienceTile
                  key={index}
                  job={item.job}
                  company={item.company}
                  date={item.date}
                  description={item.description}
                  hidden={item.hidden ? true : false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience