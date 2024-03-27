import { DiscordIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon } from "./icons"

const SocmedTile = ({ url, icon: Icon, title }) => {
  url = url || '#'
  return (
    <div className="px-1">
      <a href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-2 py-1 lg:py-2 lg:px-4 rounded-full flex justify-center items-center border text-cyan-900 border-slate-300 hover:border-primary hover:bg-primary hover:text-white mb-2 lg:mb-4 text-xs lg:text-base transition duration-300 ease-in-out">
        <span className="flex w-[15px] lg:w-[20px] aspect-square mr-1.5 lg:mr-3">
          <Icon />
        </span>
        {title}
      </a>
    </div>
  )
}

const SocmedList = [
  {
    url: 'https://www.instagram.com/syaifuladly/',
    title: 'syaifuladly',
    icon: InstagramIcon,
  },
  {
    url: 'https://www.facebook.com/syaiful.adly.7',
    title: 'syaiful.adly.7',
    icon: FacebookIcon,
  },
  {
    url: 'https://github.com/snxsilver',
    title: 'snxsilver',
    icon: GithubIcon,
  },
  {
    url: 'https://www.linkedin.com/in/syaiful-adli-a551061a0/',
    title: 'Syaiful Adli',
    icon: LinkedInIcon,
  },
  {
    url: '#',
    title: 'fsmile68',
    icon: DiscordIcon,
  },
]

function Socmed() {
  return (
    <div className="flex flex-wrap items-center mt-6 justify-start -mx-1 mb-1 lg:-mb-4 print:mt-0">
      {SocmedList.map((item, index) => (
        <SocmedTile
          key={index}
          url={item.url}
          title={item.title}
          icon={item.icon}
        />
      ))}
    </div>
  )
}

export default Socmed