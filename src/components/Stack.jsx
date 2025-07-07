import { HTML5, CSS, React, TailwindCSS, Nodejs, Expressjs, MySQL, JavaScript } from "./Svg";

const stack = [ "HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Node.js", "Express", "MySQL" ];
const icons = {
    "HTML": HTML5,
    "CSS": CSS,
    "JavaScript": JavaScript,
    "React": React,
    "TailwindCSS": TailwindCSS,
    "Node.js": Nodejs,
    "Express": Expressjs,
    "MySQL": MySQL,
}

export default function Stack() {

    return <section className="
        flex flex-col mb-10
        md:mb-20
    ">
        <h2 className="
            text-white font-semibold text-3xl mb-8
            lg:text-5xl
        ">Stack</h2>
        <div className="w-full grow flex justify-between items-center">
            <ul className="
                w-full grid gap-y-4 grid-cols-3
                md:grid-cols-4
                lg:grid-cols-8
            ">
                {stack.map((tech, index)=>{
                    const Icon = icons[tech];

                    return <li className="flex flex-col items-center">
                        <Icon key={index} className="
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
    </section>;
}