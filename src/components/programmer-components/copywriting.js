import {
  ApolloGraphQlIcon,
  BootstrapIcon,
  CodeigniterIcon,
  FlutterIcon,
  GraphQlIcon,
  LaravelIcon,
  MongoDbIcon,
  MySqlIcon,
  NodeJsIcon,
  PostgreeSqlIcon,
  ReactJsIcon,
  TailwindCssIcon,
  VueJsIcon,
  N8NIcon,
  AddressIcon,
  CalendarIcon,
  EmailIcon,
  PhoneIcon
} from "../icons"
import cv from "../../assets/img/cv.png"
import yskk from "../../assets/img/yskk.png"
import akwayan from "../../assets/img/akwayan.png"
import snscl from "../../assets/img/snsclo.png"
import snsclo from "../../assets/img/snsclo-e-commerce.png"
import disdig from "../../assets/img/company-profile.png"
import tripwe from "../../assets/img/tripwe.png"
import ihraman from "../../assets/img/ihraman.png"
import sola from "../../assets/img/sola-gracia.png"
import las1 from "../../assets/img/laundry-app-screen-1.png"
import las2 from "../../assets/img/laundry-app-screen-2.png"
import las3 from "../../assets/img/laundry-app-screen-3.png"
import eys1 from "../../assets/img/ekspor-yuk-screen-1.png"
import eys2 from "../../assets/img/ekspor-yuk-screen-2.png"
import eys3 from "../../assets/img/ekspor-yuk-screen-3.png"

export const NameText = "M Syaiful Adli"
export const TitleText = "Web / Mobile Developer"
// export const IntroText = "I am a hard worker and a persistent learner. 5 years experience in Website and Mobile Development at PT DSAA Group, PT Tripedia Global Adventura and Yayasan Satu Karsa Karya. Always want to develop and learn the latest programming languages. Have good communication, analysis and problem solving skills."
export const IntroText = "Software Engineer with 5+ years of experience in front-end, back-end, and mobile application development. Experienced in designing, developing, and maintaining business applications, marketplace platforms, and travel systems, as well as implementing workflow automation using n8n. Skilled in system integration, API development, payment gateway integration, and VPS management. Strong analytical, problem-solving, and communication skills with experience leading development teams and delivering reliable software solutions."

export const experienceList = [
  {
    // job: "Software Engineer",
    job: "Senior Software Engineer",
    company: "PT. Ihram Fajar Travelindo",
    date: "July 2023 - Present",
    description: [
      "Led a team of developers in designing and developing a marketplace web application using Laravel 11.",
      // "Handled the end-to-end design and development of a marketplace web application using Laravel 11.",
      "Managed VPS infrastructure, including server configuration, application deployment, monitoring, and maintenance.",
      "Coordinated development activities and provided technical guidance to team members.",
      "Collaborated with stakeholders to define product requirements and translate business needs into technical solutions.",
      // "Collaborated with stakeholders to define requirements and deliver technical solutions."
    ]
  },
  {
    job: "Freelance Flutter Developer",
    company: "PT. DSAA Group",
    date: "May - July 2023",
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

export const ContactList = [
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
    text: "Sukoharjo, Central Java 57552, Indonesia"
  },
  // {
  //   icon: CalendarIcon,
  //   text: "Age: 28"
  // },
]

export const FormalList = [
  {
    year: "2018",
    text: "Bachelor's Degree in Food Science and Technology, Sebelas Maret University, GPA: 3.50/4.00"
  },
  {
    year: "2013",
    text: "Senior High School, SMA Negeri 4 Surakarta"
  }
]

export const NonFormalList = [
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

export const OrganizationList = [
  {
    year: "2016",
    text: "Head of Media Informasi Division at Kelompok Studi Ilmiah"
  },
  {
    year: "2015",
    text: "Head of Kaderisasi Division at Kelompok Studi Ilmiah"
  },
]

export const stacks = [
  { icon: ReactJsIcon, text: "React Js" },
  { icon: VueJsIcon, text: "Vue Js" },
  { icon: TailwindCssIcon, text: "Tailwind CSS" },
  { icon: BootstrapIcon, text: "Bootstrap" },
  { icon: FlutterIcon, text: "Flutter" },
  { icon: CodeigniterIcon, text: "CodeIgniter" },
  { icon: LaravelIcon, text: "Laravel" },
  { icon: NodeJsIcon, text: "Node Js" },
  { icon: GraphQlIcon, text: "GraphQL" },
  { icon: ApolloGraphQlIcon, text: "Apollo GraphQL" },
  { icon: MySqlIcon, text: "MySQL" },
  { icon: PostgreeSqlIcon, text: "PostgreSQL" },
  { icon: MongoDbIcon, text: "Mongo DB" },
  { icon: N8NIcon, text: "n8n Cloud" },
]

export const PortfolioList = [
  { img: ihraman, title: "Ihraman.com Marketplace", description: "A web marketplace platform designed to connect customers with Umrah and travel-related services. The platform provides product management, transaction processing, user management, and administrative tools to support business operations. Built using Laravel 11 and Bootstrap." },
  { img: [eys1, eys2, eys3], title: "Ekspor Yuk Application", description: "A mobile application designed to help users access export-related information and services through an intuitive mobile experience. Built using Flutter, Provider, and GraphQL to provide efficient data management." },
  { img: sola, title: "Sola Gracia Accounting Application", description: "A web-based accounting and employee management application used to manage employee data, financial records, and daily business operations. Built using Laravel 9 and Bootstrap." },
  { img: tripwe, title: "Tripwe Marketplace", description: "A travel marketplace platform that enables users to browse travel packages, make reservations, and complete online transactions. The application includes user authentication using Laravel Passport, payment gateway integration through the bank's API, and booking management features. Built using Vue.js, Tailwind CSS, and Laravel." },
  { img: yskk, title: "yskk.org Website", description: "An official website for Yayasan Satu Karsa Karya that provides information about the organization, its programs, activities, and latest news. Built using Laravel 5 and Bootstrap." },
  { img: [las1, las2, las3], title: "Laundry App", description: "A laundry management application designed to simplify laundry business operations. The application supports customer management, order tracking, service management, and transaction monitoring. Built using Flutter, GetX, and SQLite" },
  { img: cv, title: "Personal Portfolio Website", description: "A responsive portfolio website created to showcase professional experience, technical skills, and software development projects. Built using React.js and Tailwind CSS." },
  // { img: snsclo, title: "SnSclo E-commerce", description: "Currently, I am building my own e-commerce project for my wife's business. I am building SnSclo e-commerce using React Js with Redux-Toolkit and Tailwind CSS as Front-End and Laravel 9 as Back-End." },
  // { img: snscl, title: "Web-Based Application snscl.my.id", description: "Website snsclo.my.id is my web-based application to help upload products on shopee using the CodeIgniter 3 framework. This is supposed to support my wife's business. There are 3 levels of users on this website: Supervisor, Admin and Uploader." },
  // { img: akwayan, title: "Akwayan Online System Library", description: "Akwayan Online Library System is a project that I am working on with my friends using the Laravel 9 framework." },
  { img: disdig, title: "Another Project in My Localhost", description: "I am also actively developing personal and experimental projects, including company profile websites, marketplace platforms, mobile applications such as note-taking and financial record apps, games built with Godot, and workflow automation solutions using n8n and Telegram bots." },
]

export const site = "https://snxsilver.github.io/my-portfolio"