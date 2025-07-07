import { GitHub } from "./Svg";

export default function Header(){
return <header className="
        w-full min-h-fit flex flex-col justify-around items-start relative h-120
    ">
        <header className="w-full h-20 flex items-end">
            <div className="w-full flex justify-between items-center">
                <a href="/">
                    <h1 className="
                        text-white font-semibold text-xl
                        sm:text-3xl
                    ">
                        danielantcam<span className="text-blue-500">.dev</span>
                    </h1>
                </a>
                <a href="https://github.com/danielantcam" target="_blank" rel="noreferrer" className="hover:opacity-70">
                    <GitHub width="3em" height="3em" className="p-2"/>
                </a>
            </div>
        </header>
    
        <div className="w-full grow flex flex-col justify-center">
            <p className="
                text-white font-semibold text-4xl mb-2
                lg:text-6xl
                xl:text-7xl

            ">Hi, I'm Daniel Antón.</p>
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
                    <GitHub/>
                    Visit GitHub
                </a>
            </div>
        </div>
    </header>;
}