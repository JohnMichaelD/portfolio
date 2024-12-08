import SocialLinks from "./components/SocialLinks";
import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    title: "Pomodoro Buddy",
    tag: "Web App",
    description: "I use the pomodoro technique daily to keep a productive flow, but was tired of always being shown ads. This weekend project is my fun take on this classic tool.",
    display: "/tomato.png",
    link: "https://pomodoro-buddy.vercel.app/",
    status: 'live'

  },
  {
    title: "Company Loading Logo",
    tag: "SVG Animation",
    description: "Across this web app, simple, boring loaders were used. Taking the company's logo, I wanted to design and implement a fancy loader for primary screens.",
    display: "AnimatedLoader",
    link: "/",
    status: 'live'
  },
  {
    title: "Switchboard",
    tag: "Widget",
    description: "Reverse-engineered switchboard widget that illuminates a hidden message.",
    display: "/SwitchboardMock.png",
    link: "https://switchboard-widget.vercel.app/",
    status: 'live'
  },
  {
    title: "Gear Care",
    tag: "Mobile App",
    description: "An app to help users log and track their gear to prolong life, and maintain integrity.",
    display: "/Jacket.png",
    link: "/",
    status: 'coming-soon'
  },
  // {
  //   title: "Sidemount Calc",
  //   tag: "Web App",
  //   description: "An app to help sidemount divers learn to count thirds.",
  //   display: "/greenTomato.svg",
  //   link: "https://www.sidemountcalc.com/",
  //   status: 'live'
  // }
];



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-start max-w-[600px]">
        <h1 className="font-semibold text-2xl">John Michael &#x1FABC;</h1>
        <p>Frontend. Design. Visualizations.</p>
        <p>Currently designing and developing an AI web app at Advanced Symbolics. Building out side projects to dive deeper into data visualization and ocean tech.</p>
        <SocialLinks/>
        
        <section className="flex flex-col gap-4 w-full border-t pt-8 mt-8">
          <h2 className="font-semibold text-lg">Projects</h2>
          <div className="flex flex-col gap-4 w-full">
            
            {/* Project Cards */}
            {projects.map((project) => (
              <ProjectCard 
                key={project.title}
                {...project}
              />
            ))}

          </div>
        </section>
      
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <SocialLinks/>
        <p>New York, NY. 2024</p>
      </footer>
    </div>
  );
}