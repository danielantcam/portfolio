export default function Roadmap({ events }){
    return <article>
        <h3 className="
            text-white font-semibold text-3xl mb-8
            lg:text-5xl
        ">
            Academic Roadmap
        </h3>
        {events.map((event, index)=> <RoadmapBlock event={event} key={index}/>)}
    </article>;
}

function  RoadmapBlock({ event }){
    const { title, description, date } = event;

    return <section className="flex mb-2">
        <div aria-hidden="true" className="flex flex-col items-center mr-6">
            <div className="w-6 h-6 bg-blue-500 rounded-full mb-1"></div>
            <div className=" grow w-2 bg-blue-500 rounded-sm"></div>
        </div>
        <div>
            <div className="
                flex flex-col mb-1
                sm:flex-row sm:items-center sm:h-6 sm:gap-4 sm:mb-0
            ">
                <h4 className="
                    text-white font-semibold text-md
                    sm:text-xl
                ">{title}</h4>
                <span className="
                    text-gray-400 font-semibold text-xs
                    sm:text-base
                ">{date}</span>
            </div>
            <p className="
                text-gray-400 font-semibold pb-4 text-sm
                sm:text-base
            ">{description}</p>
        </div>
    </section>;
}
