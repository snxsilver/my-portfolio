import { ApolloGraphQlIcon, BootstrapIcon, CodeigniterIcon, FlutterIcon, GraphQlIcon, LaravelIcon, MongoDbIcon, MySqlIcon, NodeJsIcon, PostgreeSqlIcon, ReactJsIcon, TailwindCssIcon, VueJsIcon } from "./icons"

const SkillTile = ({ icon: Icon, text }) => {
  return (
    <div className="flex flex-col items-center space-y-2 text-white px-2 lg:px-5 py-3 print:p-1 print:space-y-1">
      <span className="flex w-[40px] lg:w-[50px] print:w-[25px]">
        <Icon />
      </span>
      <span className="block text-sm lg:text-base print:text-xs">{text}</span>
    </div>
  )
}

const stacks = [
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
]

function Skills() {
  return (
    <section id="skills" className="pt-16 bg-cyan-900 print:pt-2">
      <div className="container">
        <div className="w-full px-4 pb-16 justify-center print:px-2 print:pb-2">
          <div className="max-w-xl mx-auto text-center mb-8 print:hidden">
            <h2 className="font-semibold text-4xl text-white mb-2">Skills</h2>
            <h4 className="font-medium text-md text-white">Here are some programming skills that I have learned.</h4>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center w-full -mx-2 lg:-mx-5 -my-3 print:hidden">
              {stacks.map((item, index) => (
                <SkillTile key={index} icon={item.icon} text={item.text} />
              ))}
            </div>
            <div className="flex-wrap items-center justify-center w-full -mx-2 lg:-mx-5 -my-3 print:-my-1 hidden print:flex">
              {stacks.slice(0,-1).map((item, index) => (
                <SkillTile key={index} icon={item.icon} text={item.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills