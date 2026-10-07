import { BulletIcon } from "../icons"
import {
  EducationList,
  WorkingList,
  LanguageList,
  SkillList,
  OtherList,
} from "./generalcopywriting"

const ContentTile = ({
  title,
  subtitle,
  time,
  place,
  points = [],
  twoColumn = false,
}) => {
  return (
    <div className="mt-3 md:mt-4 print:mt-2">
      {title && subtitle && time && place && (
        <div className="flex justify-between text-sm md:text-base print:text-base">
          <div className="flex flex-col">
            <div className="font-bold">{title}</div>
            <div>{subtitle}</div>
          </div>

          <div className="w-6"></div>

          <div className="flex flex-col items-end">
            <div className="font-bold text-right">{time}</div>
            <div>{place}</div>
          </div>
        </div>
      )}

      <div
        className={`
          mt-1 md:mt-2 print:mt-1
          ${twoColumn ? "grid grid-cols-2 gap-x-2" : ""}
        `}
      >
        {points.map((item, index) => (
          <div className="flex align-top" key={index}>
            <div className="flex w-5 h-5 md:w-6 md:h-6 justify-center items-center shrink-0">
              <div className="flex w-2 h-2 md:w-3 md:h-3">
                <BulletIcon />
              </div>
            </div>

            <div className="text-sm print:text-base md:text-base text-justify w-full">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const SectionTile = ({ title, content }) => {
  return (
    <div className="mt-5 md:mt-8 print:mt-1">
      <div className="text-base print:text-base md:text-lg font-bold">{title}</div>
      <div className="w-full h-1 print:h-0.5 bg-black"></div>
      {content}
    </div>
  )
}

const EducationTile = () => {
  return (
    <SectionTile
      title={"PENDIDIKAN"}
      content={EducationList.map((item, index) => (
        <ContentTile
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          time={item.time}
          place={item.place}
          points={item.points}
          twoColumn={true}
        />
      ))}
    />
  )
}

const ExperienceTile = () => {
  return (
    <SectionTile
      title={"PENGALAMAN KERJA RELEVAN"}
      content={WorkingList.map((item, index) => (
        <ContentTile
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          time={item.time}
          place={item.place}
          points={item.points}
        />
      ))}
    />
  )
}

const OtherExperienceTile = () => {
  return (
    <SectionTile
      title={"PENGALAMAN PROFESSIONAL LAINNYA"}
      content={OtherList.map((item, index) => (
        <ContentTile
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          time={item.time}
          place={item.place}
          points={item.points}
        />
      ))}
    />
  )
}

const LanguageTile = () => {
  return (
    <SectionTile
      title={"BAHASA"}
      content={LanguageList.map((item, index) => (
        <ContentTile
          key={index}
          points={item.points}
        />
      ))}
    />
  )
}

const SkillTile = () => {
  return (
    <SectionTile
      title={"KEAHLIAN"}
      content={SkillList.map((item, index) => (
        <ContentTile
          key={index}
          points={item.points}
        />
      ))}
    />
  )
}

function GeneralContent() {
  return (
    <div className="mt-3 print:mt-1 mb-16 print:mb-1">
      <div className="container container2">
        <EducationTile />
        <ExperienceTile />
        <OtherExperienceTile />
        <LanguageTile />
        <SkillTile />
      </div>
      {/* <ContentTitle title="EDUCATION" /> */}
    </div>
  )
}

export default GeneralContent