const ExperienceTile = ({ job, company, date, description }) => {
  return (
    <div className="w-full">
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
          <li key={index} className="text-secondary flex items-start print:p-0 print:m-0">
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
    job: "Freelance Flutter Developer",
    company: "PT. DSAA Group",
    date: "February - March 2024",
    description: [
      "Collaborated with a team of developers to design and develop new project using Flutter Provider and Graphql Client.",
      "Performed testing and debugging of applications to ensure quality.",
    ]
  },
  {
    job: "Front-End Developer",
    company: "PT. Tripedia Global Adventura",
    date: "March 2022 - November 2023",
    description: [
      "Collaborated with a team of developers to develop new features for website application using Vue Js.",
      "Designed and developed new project using Laravel 9.",
      "Performed debugging of application to ensure quality.",
    ]
  },
  {
    job: "Staff of Data and Information Management Division",
    company: "Yayasan Satu Karsa Karya",
    date: "January 2020 - December 2021",
    description: [
      "Develop new features for company profile website using Laravel 5.",
      "Monitored performance and performed debugging of website.",
    ]
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