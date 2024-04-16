
function Projects() {
    return (
        <>

            <div id="projects" className="relative justify-around bg-yellow-200 py-10 flex flex-col">

                <div className="flex justify-center lg:py-8 ">
                    <div className="flex items-center">
                        <span className="w-24 h-[2px] bg-[#e08a70]"></span>
                        <span className="bg-[#e08a70] w-fit text-white p-2 px-5 text-xl rounded-md">
                            Projects
                        </span>
                        <span className="w-24 h-[2px] bg-[#e08a70]"></span>
                    </div>
                </div>

                <div className="flex justify-around flex-wrap mx-5 my-5">
                    <div className=" max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white h-[500px]">
                        <img className="w-full" src="/public/metaversus.png" alt="Metaversus"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Metaversus madness</div>
                            <p className="text-gray-700 text-base">
                                I made this project during my summer break between 2nd and 3rd course and I think it's
                                my
                                best looking project at this moment.
                            </p>

                        </div>
                        <div className="px-6 pt-4 pb-2">
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NextJS</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TailwindCSS</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#framerMotion</span>
                        </div>

                        <a className="block px-6 py-2 no-underline outline-none hover:no-underline"
                           href="https://metaversus-lemon.vercel.app/">
                            <div
                                className="text-lg text-black transition-colors duration-300 hover:text-pink-600">Live
                                demo
                            </div>
                        </a>
                    </div>

                    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white h-[500px]">
                        <img className="w-full" src="/public/swim.png" alt="swim"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Swimclub</div>
                            <p className="text-gray-700 text-base">
                                This is my very first project that I did when I first entered the university, and I
                                think
                                for the first time, it turned out well.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTMl</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CSS</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
                        </div>

                        <a className="block px-6 py-2 no-underline outline-none hover:no-underline"
                           href="https://kralsolomon.github.io/kral/">
                            <div
                                className="text-lg text-black transition-colors duration-300 hover:text-pink-600">Live
                                demo
                            </div>
                        </a>
                    </div>
                    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white h-[500px]">
                        <img className="w-full" src="/public/Shynschool.png" alt="Shynschool"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Shynschool</div>
                            <p className="text-gray-700 text-base">
                                Just a little project for a practice and refreshing my skills
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTMl</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CSS</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
                        </div>

                        <a className="block px-6 py-2 no-underline outline-none hover:no-underline"
                           href="https://kralsolomon.github.io/Shyn/">
                            <div
                                className="text-lg text-black transition-colors duration-300 hover:text-pink-600">Live
                                demo
                            </div>
                        </a>
                    </div>

                    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white h-[400px] mt-8">
                        <img className="w-full" src="/public/jobsBar.png" alt="Job"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">JobsBar</div>
                            <p className="text-gray-700 text-base">
                                 A project that I made while taking courses on Nfactorial school.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTMl</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CSS</span>
                        </div>

                        <a className="block px-6 py-2 no-underline outline-none hover:no-underline"
                           href="https://kralsolomon.github.io/jobsBar/">
                            <div
                                className="text-lg text-black transition-colors duration-300 hover:text-pink-600">Live
                                demo
                            </div>
                        </a>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Projects



