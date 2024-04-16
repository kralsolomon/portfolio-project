

import {FaReact} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";

import Marquee from "react-fast-marquee";

function Skills() {
    return (

        <div id="skills" className="relative z-50 my-12 lg:my-24 border-[#25213b]">

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[#e08a70]"></span>
                    <span className="bg-[#e08a70] w-fit text-white p-2 px-5 text-xl rounded-md">
                        Skills
                    </span>
                    <span className="w-24 h-[2px] bg-[#e08a70]"></span>
                </div>
            </div>

            <div className="w-full my-12">
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >

                    <div
                        className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
                        <div
                            className="h-full w-full rounded-lg border border-[#1f223c] bg-[#212954] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                            <div className="flex -translate-y-[1px] justify-center">
                                <div className="w-3/4">
                                    <div
                                        className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent">
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 p-6">
                                <div className="h-8 sm:h-10 ">
                                    <FaReact size={56} color="cyan"/>
                                </div>
                                <p className="text-white text-sm sm:text-lg">
                                    React
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
                        <div
                            className="h-full w-full rounded-lg border border-[#1f223c] bg-[#212954] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                            <div className="flex -translate-y-[1px] justify-center">
                                <div className="w-3/4">
                                    <div
                                        className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent">
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 p-6">
                                <div className="h-8 sm:h-10 ">
                                    <TbBrandNextjs size={56} color="black"/>
                                </div>
                                <p className="text-white text-sm sm:text-lg">
                                    NextJS
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
                        <div
                            className="h-full w-full rounded-lg border border-[#1f223c] bg-[#212954] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                            <div className="flex -translate-y-[1px] justify-center">
                                <div className="w-3/4">
                                    <div
                                        className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent">
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 p-6">
                                <div className="h-8 sm:h-10 ">
                                    <SiTailwindcss size={56} color="#16BDB8"/>
                                </div>
                                <p className="text-white text-sm sm:text-lg">
                                    Tailwind
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
                        <div
                            className="h-full w-full rounded-lg border border-[#1f223c] bg-[#212954] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                            <div className="flex -translate-y-[1px] justify-center">
                                <div className="w-3/4">
                                    <div
                                        className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent">
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 p-6">
                                <div className="h-8 sm:h-10 ">
                                    <BiLogoMongodb size={56} color="#499D4A"/>
                                </div>
                                <p className="text-white text-sm sm:text-lg">
                                    MongoDB
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
                        <div
                            className="h-full w-full rounded-lg border border-[#1f223c] bg-[#212954] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                            <div className="flex -translate-y-[1px] justify-center">
                                <div className="w-3/4">
                                    <div
                                        className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent">
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 p-6">
                                <div className="h-8 sm:h-10 ">
                                    <BiLogoPostgresql size={56} color="#336791"/>
                                </div>
                                <p className="text-white text-sm sm:text-lg">
                                    Postgre
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
                        <div
                            className="h-full w-full rounded-lg border border-[#1f223c] bg-[#212954] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                            <div className="flex -translate-y-[1px] justify-center">
                                <div className="w-3/4">
                                    <div
                                        className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent">
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 p-6">
                                <div className="h-8 sm:h-10 ">
                                    <FaGitAlt size={56} color="#DE4C36"/>
                                </div>
                                <p className="text-white text-sm sm:text-lg">
                                    Git
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
                        <div
                            className="h-full w-full rounded-lg border border-[#1f223c] bg-[#212954] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                            <div className="flex -translate-y-[1px] justify-center">
                                <div className="w-3/4">
                                    <div
                                        className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent">
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 p-6">
                                <div className="h-8 sm:h-10 ">
                                    <FcLinux size={56} color="#DE4C36"/>
                                </div>
                                <p className="text-white text-sm sm:text-lg">
                                    Linux
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
                        <div
                            className="h-full w-full rounded-lg border border-[#1f223c] bg-[#212954] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                            <div className="flex -translate-y-[1px] justify-center">
                                <div className="w-3/4">
                                    <div
                                        className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent">
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 p-6">
                                <div className="h-8 sm:h-10 ">
                                    <FaDocker size={56} color="#2395EC"/>
                                </div>
                                <p className="text-white text-sm sm:text-lg">
                                    Docker
                                </p>
                            </div>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    );
}

export default Skills;