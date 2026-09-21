import { experienceList } from "./copywriting"

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