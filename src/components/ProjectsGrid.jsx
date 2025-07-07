import ProjectCard from "./ProjectCard";

const projects = [
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
    return <section id="projects" className="mb-10">
      <h2 className="text-white font-semibold text-5xl mb-8">
        My projects
      </h2>
      <div className="
        w-full grid grid-cols-2 gap-10
        3xl:grid-cols-3
      ">
        {projects.map((project, index) => <ProjectCard project={project} key={index} />)}
      </div>
    </section>;
}