const ScrollBtn = ({parentRef})=>{
    const scrollToContent = () => parentRef.current.scrollIntoView({ behavior: 'smooth' ,block: "start", inline: "nearest"});
    return <div className="absolute w-full text-white top-0 bottom-0 right-0 left-0 flex items-end justify-center z-20">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 cursor-pointer" viewBox="0 0 20 20" fill="currentColor" onClick={scrollToContent}>
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    </div>;
}

const Banner = ({ title, src, scrollAction=false, customBannerStyle={backgroundPosition:'75%'}})=>{
    return <>
        {scrollAction && title ? <div className="inline-block w-full h-[70vh] sm:h-[78vh] overflow-hidden relative">
                {scrollAction && <div className="absolute h-full w-full bg-black top-0 bottom-0 right-0 left-0 opacity-20 text-center text-white"></div>}
                <div className="inline-block min-h-[70vh] sm:min-h-[100vh] w-full bg-no-repeat bg-center bg-cover p-2" style={{backgroundImage: `url("${src}")`,...customBannerStyle}}></div>
                <h1 className="absolute w-full text-white top-0 bottom-0 right-0 left-0 flex items-center justify-center text-2xl md:text-6xl sm:text-4xl font-bold">
                    {title}
                </h1>
                <ScrollBtn parentRef={scrollAction}/>
            </div>
        : <div className="inline-block w-full h-[35vh] md:h-[78vh] sm:h-[55vh] overflow-hidden relative">    
            <img src={src} className="absolute top-0 left-0 bottom-0 right-0 block md:h-full md:w-full md:min-h-full md:max-h-full"/>
        </div>}
    </>
}
export default Banner;