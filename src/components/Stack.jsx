import { HTML5, CSS, React, TailwindCSS, Nodejs, Expressjs, PostgreSQL, JavaScript, Nextjs } from "./Svg";

const stack = [ "HTML", "CSS", "JavaScript", "React", "NextJS", "TailwindCSS", "Node.js", "Express", "PostgreSQL" ];
const icons = {
    "HTML": HTML5,
    "CSS": CSS,
    "JavaScript": JavaScript,
    "React": React,
    "TailwindCSS": TailwindCSS,
    "Node.js": Nodejs,
    "Express": Expressjs,
    "PostgreSQL": PostgreSQL,
    "NextJS": Nextjs
}

export default function Stack() {

    return <article className="
        flex flex-col mb-10
        md:mb-20
    ">
        <h3 className="
            text-white font-semibold text-3xl mb-4
            lg:text-5xl md:mb-8
        ">Stack</h3>
        <div className="w-full grow flex justify-between items-center">
            <ul className="
                w-full grid gap-y-4 grid-cols-3
                md:grid-cols-4
                lg:grid-cols-8
            ">
                {stack.map((tech, index)=>{
                    const Icon = icons[tech];

                    return <li key={index} className="flex flex-col items-center">
                        <Icon aria-hidden="true" className="
                            mb-2 w-15 h-15
                            lg:mb-4
                        " />
                        <span className="
                            text-white font-semibold text-md
                            lg:text-xl
                        ">{tech}</span>
                    </li>
                })}
            </ul>
        </div>
    </article>;
}