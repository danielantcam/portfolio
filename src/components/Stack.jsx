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

export default function StackCarousel() {

    return <section className="flex flex-col mb-20">
        <h2 className="text-white font-semibold text-5xl mb-8">Stack</h2>
        <div className="w-full grow flex justify-between items-center">
            <ul className="w-full flex justify-between">
                {stack.map((tech, index)=>{
                    const Icon = icons[tech];

                    return <li className="flex flex-col items-center relative">
                        <Icon width="80" height="80" key={index} className="mb-4" />
                        <span className="text-white font-semibold text-xl">{tech}</span>
                    </li>
                })}
            </ul>
        </div>
    </section>;
}