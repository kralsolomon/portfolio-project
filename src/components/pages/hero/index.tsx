import { TypeAnimation } from 'react-type-animation';
import Navbar from "@/components/navbar.tsx";
function Hero() {
    return (
        <>

            <div id='hero' className="bg-yellow-200 w-full flex flex-col justify-center items-center h-screen">


                <div className="z-10">
                    <Navbar></Navbar>
                </div>

                <img
                    src="/Animated%20Shape(4).svg"
                    alt="Index"
                    width="full"
                    height="full"
                    className="absolute -top-[98px]"
                />

                <img src="/programming.png" alt="coding" className="h-20 w-20"/>

                <h1 className="text-2xl my-10">Hi, My name is Salamat Sagyndykov</h1>

                <TypeAnimation
                    sequence={[
                        'I am Frontend-developer',
                        1000, // wait 1s before replacing
                        'And just a good person',
                        1500
                    ]}
                    wrapper="span"
                    speed={40}
                    style={{fontSize: '2em', display: 'inline-block'}}
                    repeat={Infinity}
                />

            </div>

        </>
    )
}

export default Hero