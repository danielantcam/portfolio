export default function AboutMe(){
    return <article className="
        w-full
        xl:w-2/5
    ">
        <h3 className="
            text-white font-semibold text-3xl mb-4
            lg:text-5xl sm:mb-8
        ">
            About me
        </h3>
        <p className="text-white mb-4">Hey, I am <strong>Daniel Antón Camarero</strong>, a 19-year-old <strong>Computer Science</strong> student and a selft-taught <strong>Fullstack Web Developer</strong> from Burgos, Spain. However, I'm currently studying in the Autonomous University of Madrid.</p>

        <p className="text-white mb-4">I began my journey as a developer driven by the desire to build, my own projects and soon discovered a real passion for it.</p>

        <h4 className="text-white text-xl font-semibold mb-2">Soft skills</h4>
        <ul className="
            list-disc list-inside  grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-2
            xl:grid-cols-1
            3xl:grid-cols-2
        ">
            <li className="text-white">Spanish (native)</li>
            <li className="text-white">English (High level)</li>
            <li className="text-white">Self-driven</li>
            <li className="text-white">Entrepreneurial mindset</li>
            <li className="text-white">Eagerness to learn</li>
        </ul>
    </article>;
}