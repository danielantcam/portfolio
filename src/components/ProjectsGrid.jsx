import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "LinkHUB",
    description: "Simple and functional Link-Tree-like app. Fullstack project developed with Next.js, TailwindCSS, PostgreSQL.",
    image: "/linkhub.webp",
    stack: ["JavaScript", "NextJS", "React", "TailwindCSS", "PostgreSQL"],
    repository: "https://github.com/danielantcam/linkhub",
    web: "https://linkhub.danielantcam.dev"
  },
  {
    name: "Simple URL shortener",
    description: "Simple URL shortener. Fullstack project developed with React, Tailwindcss, Node.js, Express and MySQL.",
    image: "/url-shortener.webp",
    stack: ["JavaScript", "React", "TailwindCSS", "Node.js", "Express", "MySQL"],
    repository: "https://github.com/danielantcam/simple-url-shortener",
    web: "https://linkshortener.danielantcam.dev"
  }
];

export default function ProyectsGrid(){
    return <section id="projects" className="
      mb-10
      md:mb-20
    ">
      <h3 className="
        text-white font-semibold text-3xl mb-4
        lg:text-5xl md:mb-8
      ">
        My projects
      </h3>
      <div className="
        w-full grid grid-cols-1 gap-10
        lg:grid-cols-2
        3xl:grid-cols-3
      ">
        {projects.map((project, index) => <ProjectCard project={project} key={index} />)}
      </div>
    </section>;
}