import { Link, GitHub, React, TailwindCSS, Nodejs, Expressjs, MySQL, JavaScript } from "./Svg";

const icons = {
    "React": React,
    "TailwindCSS": TailwindCSS,
    "Node.js": Nodejs,
    "Express": Expressjs,
    "MySQL": MySQL,
    "JavaScript": JavaScript
}

export default function ProjectCard({ project }){
    const { name, description, image, stack, repository, web } = project;

    return <article className="overflow-hidden rounded-lg border-2 border-gray-800 group">
        <div className="aspect-video border-b-2 border-gray-800 overflow-hidden relative">
            <ProjectCardLink repository={repository} web={web} />
            <img src={image} alt={`Project preview: ${name}`} className="object-cover w-full h-full group-hover:scale-105 group-hover:brightness-90 transition-all" />
        </div>
        <div className="p-6 group-hover:brightness-90 transition-all">
            <ul className="flex flex-wrap gap-2 mb-2">
                {stack.map((tech, index)=> <StackElement name={tech} key={index} />)}
            </ul>
            <h3 className="text-white font-semibold text-2xl">{name}</h3>
            <p className="text-gray-300 text-lg" >{description}</p>
        </div>
    </article>;
}

function StackElement({ name }){
    const SVG = icons[name];

    return <li className="bg-slate-700 text-white font-semibold px-2 rounded-full flex gap-1 items-center">
        {SVG && <SVG />}
        {name}
    </li>;
}

function ProjectCardLink({repository, web}){
    return <div className="absolute right-4 top-4 z-10 flex gap-4">
        <a href={web} target="_blank" className="hover:bg-slate-700 transition-colors bg-slate-800 p-2 rounded-lg border-1 border-slate-600">
            <Link className="" width="32px" height="32px" />
        </a>
        <a href={repository} target="_blank" className="hover:bg-slate-700 transition-colors bg-slate-800 p-2 rounded-lg border-1 border-slate-600">
            <GitHub className="" width="32px" height="32px" />
        </a>
    </div>;
}