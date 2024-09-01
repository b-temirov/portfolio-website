import { HERO_CONTENT } from "../constants";
import { HERO_CONTENT2 } from "../constants";
//import profilePic from '../assets/heroPicture.jpeg';
import profilePic from '../assets/heroPicture2.jpeg';
import {motion} from 'framer-motion';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CV from '../assets/CV_TEMIROV_Bakhtiyar.pdf';

const container = (delay) => ({
    hidden: {x:-100, opacity:0},
    visible: {x:0, opacity:1, transition: {duration: 0.7, delay: delay }}
})

const Hero = () => {
    const [text] = useTypewriter({
        words:["Data Scientist", "Computer Engineer"],
        typeSpeed: 25,
        deleteSpeed: 25
    })
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-bold tracking-lg lg:mt-16 lg:text-6xl">
                        Bakhtiyar Temirov
                    </motion.h1>
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-clip-text text-2xl tracking-tight text-red-600">
                        {"~% "}{text}{<Cursor/>}
                    </motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="mt-4 max-w-xl py-6 text-lg tracking-tight">
                        {HERO_CONTENT}
                    </motion.p>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="max-w-xl py-1 text-lg tracking-tight mb-24">
                        {HERO_CONTENT2}
                    </motion.p>
                </div>
            </div>
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration: 1, delay:1.5}}
                className="flex flex-col items-center  w-full lg:w-1/2 lg:p-8 mt-12">
                <div className="flex justify-center ">
                    <img 
                    width={430}
                    src={profilePic} alt="Profile Picture" className="rounded-lg border-2 border-black"/>
                </div>
                <a className="flex text-lg items-center align-center mt-6 cursor-pointer w-fit gap-2
                    border-2 border-black p-2 rounded-full bg-white hover:text-red-600 duration-300"
                    download={"CV_TEMIROV_Bakhtiyar"} href={CV}>
                    Download CV                    
                </a>    
            </motion.div>
        </div>
    </div>
  )
}

export default Hero