import { GitHub } from "./Svg";

export default function Header(){
return <header className="
      w-full h-[60vh] flex flex-col justify-around items-start relative
    ">
        <div className="w-full h-20 flex items-end justify-between">
            <a href="/">
                <h1 className="
                    text-white font-semibold text-3xl
                ">
                    danielantcam<span className="text-blue-500">.dev</span>
                </h1>
            </a>
            <a href="https://github.com/danielantcam" target="_blank" rel="noreferrer" className="hover:opacity-70">
                <GitHub width="3em" height="3em" className="p-2"/>
            </a>
        </div>
    
        <div className="grow flex flex-col justify-center">
            <p className="
            text-white font-semibold text-7xl mb-2
            ">Hi, I'm Daniel Antón.</p>
            <h2 className="
            text-blue-500 font-semibold text-5xl mb-6
            ">Fullstack junior developer.</h2>
            <div className="flex gap-4">
                <a href="#projects" className="
                    cursor-pointer bg-blue-600 rounded-sm px-6 py-2 text-lg text-white font-semibold hover:bg-blue-700 transition-colors
                ">View My Work</a>
                <a href="https://github.com/danielantcam" target="_blank" rel="noreferrer" className="
                    cursor-pointer bg-slate-800 rounded-sm px-6 py-2 text-lg text-white font-semibold hover:bg-slate-700 transition-colors flex items-center gap-2
                ">
                    <GitHub/>
                    Visit GitHub
                </a>
            </div>
        </div>
    </header>;
}