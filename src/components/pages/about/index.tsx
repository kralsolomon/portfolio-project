
function About() {


    return (
        <>
        <section id="about"
                 className="relative flex flex-col items-center justify-between py-4 lg:py-12 bg-yellow-100">


            <div className="flex justify-center my-2 lg:py-8">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[#e08a70]"></span>
                    <span className="bg-[#e08a70] w-fit text-white p-2 px-5 text-xl rounded-md">
                        About
                        </span>
                    <span className="w-24 h-[2px] bg-[#e08a70]"></span>
                </div>
            </div>
            <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 ">
                <div
                    className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pl-36 pb-20 md:pb-10 lg:pt-10">

                    <div className="flex justify-center order-1 lg:order-2">
                        <img
                            src="/Salamat.jpg"
                            width={360}
                            height={360}
                            alt="Salamat Sagyndykov"
                            className="rounded-lg transition-all duration-1000 hover:scale-110 cursor-pointer"
                        />
                    </div>
                </div>


                <div
                    className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] m-2 mx-20 mb-20 md:mb-10 lg:mt-10">
                    <div className="flex flex-row">
                        <div
                            className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                    </div>
                    <div className="px-4 lg:px-8 py-5">
                        <div className="flex flex-row space-x-2">
                            <div className="h-3 w-3 rounded-full bg-red-400"></div>
                            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                            <div className="h-3 w-3 rounded-full bg-green-200"></div>
                        </div>
                    </div>
                    <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                        <code className="font-mono text-xs md:text-sm lg:text-base">
                            <div className="blink">
                                <span className="mr-2 text-pink-500">const</span>
                                <span className="mr-2 text-white">developer</span>
                                <span className="mr-2 text-pink-500">=</span>
                                <span className="text-gray-400">{'{'}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                                <span className="text-gray-400">{`'`}</span>
                                <span className="text-amber-300">Salamat</span>
                                <span className="text-gray-400">{`',`}</span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2">
                                <span className=" text-white">skills:</span>
                                <span className="text-gray-400">{`['`}</span>
                                <span className="text-amber-300">React</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">NextJS</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Redux</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Express</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">PostgreSql</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">MongoDB</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Docker</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Linux</span>
                                <span className="text-gray-400">{"', '"}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">volleyballPlayer:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                        </code>
                    </div>
                </div>
            </div>


        </section>
</>
)
}

export default About