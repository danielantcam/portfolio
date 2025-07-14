import { GitHub, LinkedIn } from "./Svg";

export default function Header(){
return <header role="banner" className="
        w-full min-h-fit flex flex-col justify-around items-start relative h-120
    ">
        <nav className="w-full h-20 flex items-end">
            <div className="w-full flex justify-between items-center">
                <a href="/" className="
                    text-white font-semibold text-xl
                    sm:text-3xl"
                >
                    danielantcam<span className="text-blue-500">.dev</span>
                </a>

                <div className="
                    flex
                    sm:gap-2
                ">
                    <a href="https://linkedin.com/in/danielantcam" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-70">
                        <LinkedIn aria-hidden="true" className="w-10 h-10 p-2 sm:w-12 sm:h-12"/>
                    </a>
                    <a href="https://github.com/danielantcam" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:opacity-70">
                        <GitHub aria-hidden="true" className="w-10 h-10 p-2 sm:w-12 sm:h-12" />
                    </a>
                </div>
            </div>
        </nav>
    
        <div className="w-full grow flex flex-col justify-center">
            <h1 className="
                text-white font-semibold text-4xl mb-2
                lg:text-6xl
                xl:text-7xl

            ">Hi, I'm Daniel Antón.</h1>
            <h2 className="
                text-blue-500 font-semibold text-3xl mb-6
                lg:text-4xl
                xl:text-5xl
            ">Fullstack junior developer.</h2>
            <div className="
                flex gap-4 flex-col
                sm:flex-row
            ">
                <a href="#projects" className="
                    cursor-pointer bg-blue-600 rounded-sm px-6 py-2 text-lg text-white font-semibold hover:bg-blue-700 transition-colors text-center
                ">View My Work</a>
                <a href="https://github.com/danielantcam" target="_blank" rel="noreferrer" className="
                    cursor-pointer bg-slate-800 rounded-sm px-6 py-2 text-lg text-white font-semibold hover:bg-slate-700 transition-colors flex items-center gap-2 justify-center
                ">
                    <GitHub aria-hidden="true" />
                    Visit GitHub
                </a>
            </div>
        </div>
    </header>;
}