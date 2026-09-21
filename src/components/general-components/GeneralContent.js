import { BulletIcon } from "../icons"
import {
  EducationList,
  WorkingList,
  LanguageList,
  SkillList,
} from "./generalcopywriting"
// const EducationList = [
//   {
//     title: "S1 - Ilmu dan Teknologi Pangan",
//     subtitle: "Universitas Sebelas Maret",
//     time: "September 2013 - Januari 2018",
//     place: "Surakarta",
//     points: [
//       "Ketua Divisi Media Informasi di Kelompok Studi Ilmiah, 2016",
//       "Ketua Divisi Kaderisasi di Kelompok Studi Ilmiah, 2015",
//     ]
//   }
// ]

// const WorkingList = [
//   {
//     title: "Pengembang Produk Digital",
//     subtitle: "PT. Ihram Fajar Travelindo",
//     time: "Mei 2023 - Sekarang",
//     place: "Surakarta",
//     points: [
//       "Mengembangkan produk digital perusahaan agar berjalan optimal sesuai kebutuhan.",
//       "Mengelola produk, merencanakan arah, dan mengoordinasi pengembangannya.",
//       "Merencanakan strategi pemasaran dan mendukung kegiatan promosi perusahaan."
//     ]
//   },
//   {
//     title: "Staff Divisi Pengembang Produk Digital",
//     subtitle: "PT. Tripedia Global Adventura",
//     time: "Maret 2022 - Mei 2023",
//     place: "Semarang",
//     points: [
//       "Mengembangkan aplikasi, memastikan kualitas tampilan dan fungsionalitas optimal.",
//       "Memimpin dan mengoordinasikan proyek pengembangan dari perencanaan hingga implementasi.",
//       "Berpartisipasi dalam event pemasaran dengan dukungan teknis dan materi."
//     ]
//   },
//   {
//     title: "Staff Divisi Pengelolaan Data dan Informasi",
//     subtitle: "Yayasan Satu Karsa Karya",
//     time: "Januari 2020 - Desember 2021",
//     place: "Sukoharjo",
//     points: [
//       "Mengelola konten sosial media dan meningkatkan engagement konsisten.",
//       "Membuat materi pemasaran digital, termasuk desain, copywriting, konten visual.",
//       "Berkontribusi dalam program pendampingan melalui koordinasi dan dokumentasi."
//     ]
//   },
//   {
//     title: "Tentor Freelance",
//     subtitle: "Bimbingan Belajar Neo Evolution",
//     time: "September 2019 - Januari 2020",
//     place: "Sukoharjo dan Wonogiri",
//     points: [
//       "Mengajar Fisika dan Matematika, memastikan pembelajaran efektif dan jelas.",
//       "Menyusun materi ajar untuk mendukung pemahaman siswa.",
//       "Berpartisipasi dalam kegiatan pemasaran dengan membantu promosi dan materi.",
//     ]
//   },
// ]

// const LanguageList = [
//   {
//     points: [
//       "Bahasa Indonesia - Native, English - Fluent"
//     ]
//   }
// ]

// const SkillList = [
//   {
//     points: [
//       "Komunikasi Efektif, Problem Solving, Kerjasama Tim, Manajemen Waktu dan Kreativitas"
//     ]
//   }
// ]

const ContentTile = ({ title, subtitle, time, place, points }) => {
  return (
    <div className="mt-3 md:mt-4 print:mt-2">
      {title && subtitle && time && place &&
        <div className="flex justify-between text-sm md:text-base print:text-base">
          <div className="flex flex-col">
            <div className="font-bold">{title}</div>
            <div className="">{subtitle}</div>
          </div>
          <div className="w-6"></div>
          <div className="flex flex-col items-end">
            <div className="font-bold text-right">{time}</div>
            <div className="">{place}</div>
          </div>
        </div>
      }
      <div className="mt-1 md:mt-2 print:mt-1">
        {points.map((item, index) => (
          <div className="flex align-top" key={index}>
            <div className="flex w-5 h-5 md:w-6 md:h-6 justify-center items-center">
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
        />
      ))}
    />
  )
}

const ExperienceTile = () => {
  return (
    <SectionTile
      title={"PENGALAMAN KERJA"}
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
        <LanguageTile />
        <SkillTile />
      </div>
      {/* <ContentTitle title="EDUCATION" /> */}
    </div>
  )
}

export default GeneralContent