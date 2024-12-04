import Image from "next/image";
import SocialLinks from "./components/SocialLinks";
import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    title: "Pomodoro Pro",
    tag: "Web App",
    description: "Pomodoro is a productivity tool to help folks stay focused in short time bursts. Built in React, Typescript.",
    image: "/greenTomato.svg",
    link: "/"
  },
  {
    title: "Loading Icon",
    tag: "SVG Animation",
    description: "Pomodoro is a productivity tool to help folks stay focused in short time bursts. Built in React, Typescript.",
    image: "/greenTomato.svg",
    link: "/"
  },
  {
    title: "Switchboard",
    tag: "Widget",
    description: "Pomodoro is a productivity tool to help folks stay focused in short time bursts. Built in React, Typescript.",
    image: "/greenTomato.svg",
    link: "/"
  }
];


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-start max-w-[600px]">
        <h1 className="font-semibold text-2xl">John Michael</h1>
        <p>Frontend. Design. Visualizations. <br/> Currently designing & developing at Advanced Symbolics. Building out side projects to dive deeper into ocean tech.</p>
        <SocialLinks/>
        
        <section className="flex flex-col gap-4 w-full border-t pt-4 mt-8">
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