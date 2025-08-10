import { Link, GitHub, React, TailwindCSS, Nodejs, Expressjs, MySQL, JavaScript, Nextjs, PostgreSQL } from "./Svg";

const icons = {
    "React": React,
    "TailwindCSS": TailwindCSS,
    "Node.js": Nodejs,
    "Express": Expressjs,
    "MySQL": MySQL,
    "JavaScript": JavaScript,
    "NextJS": Nextjs,
    "PostgreSQL": PostgreSQL
}

export default function ProjectCard({ project }){
    const { name, description, image, stack, repository, web } = project;

    return <article className="
        overflow-hidden rounded-lg group
        sm:border-2 sm:border-gray-800
    ">
        <div className="
            aspect-video overflow-hidden relative mb-4 border-2 border-gray-800 rounded-lg
            sm:border-b-2 sm:border-gray-800 sm:mb-0 sm:rounded-none sm:border-0
        ">
            <ProjectCardLinks repository={repository} web={web} />
            <img src={image} alt={`Project preview: ${name}`} className="
                object-cover w-full h-full group-hover:scale-105 group-hover:brightness-90 transition-all
            "/>
        </div>
        <div className="
            group-hover:brightness-90 transition-all
            sm:p-6
        ">
            <ul className="flex flex-wrap gap-2 mb-2">
                {stack.map((tech, index)=> <StackElement name={tech} key={index} />)}
            </ul>
            <h4 className="
                text-white font-semibold text-xl
                sm:text-2xl
            ">{name}</h4>
            <p className="
                text-gray-300 text-base
                sm:text-lg
            ">{description}</p>
        </div>
    </article>;
}

function StackElement({ name }){
    const SVG = icons[name];

    return <li className="
        bg-slate-700 text-white font-semibold px-2 rounded-full flex gap-1 items-center text-sm
        sm:text-base
    ">
        {SVG && <SVG aria-hidden="true" />}
        {name}
    </li>;
}

function ProjectCardLinks({repository, web}){
    return <div className="absolute right-4 top-4 z-10 flex gap-4">
        <a href={web} target="_blank" rel="noreferrer" aria-label="Visit" className="
            hover:bg-slate-700 transition-colors bg-slate-800 p-1 rounded-lg border-1 border-slate-600
            sm:p-2
        ">
            <Link aria-hidden="true" className="
                w-6 h-6
                sm:w-8 sm:h-8
            "/>
        </a>
        <a href={repository} target="_blank" rel="noreferrer" aria-label="GitHub repository" className="
            hover:bg-slate-700 transition-colors bg-slate-800 p-1 rounded-lg border-1 border-slate-600
            sm:p-2
        ">
            <GitHub aria-hidden="true" className="
                w-6 h-6
                sm:w-8 sm:h-8
            "/>
        </a>
    </div>;
}