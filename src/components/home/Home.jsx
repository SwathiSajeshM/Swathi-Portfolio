import cv from "../../assets/SWATHI-M-Full-Stack-Resume.pdf";
import myimg from "../../assets/homeimg.jpg";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Typewriter } from "react-simple-typewriter";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";


function Home() {
  return (
    <main className="h-screen bg-gradient-to-tr from-black via-[#04040F] to-[#120E3D]">
      <Navbar />
      <div className="h-auto w-full bg-gradient-to-tr from-black via-[#04040F] py-40 to-[#120E3D] flex justify-center items-center px-4 md:px-6 lg:px-16">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="container">
          <div className="flex justify-center lg:space-y-0 md:space-y-6 space-y-10 flex-col lg:flex-row items-center">
{/*_______________________________ Image Section (Slide from Left) _______________________________*/}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className=" relative aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden">
              <img src={myimg} alt="Portrait photo with purple lighting" className="object-cover" priority />
            </motion.div>
{/*_______________________________ Typing Effect & Text (Slide from Right) _______________________________*/}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="space-y-6 lg:text-left md:text-center max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-300 leading-tight">I am <span className="text-[#d1ff1a]"> <Typewriter words={["a Web Developer.", "a Tech Enthusiast.", "a Learner."]} loop={true} cursor cursorStyle="|" typeSpeed={90} deleteSpeed={100} delaySpeed={1500} /></span></h1>
              <p className="text-lg md:text-xl text-gray-300">Hi, I'm Swathi. I'm a beginner web developer passionate about creating interactive web applications and learning new technologies.</p>
{/*_______________________________ CV Button (Scale-up on Load) _______________________________*/}
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.7 }} className="flex lg:justify-start md:justify-center justify-center">
                <a href={cv} target="_blank" rel="noopener noreferrer"> <motion.button whileHover={{ scale: 1.1 }} className="bg-[#d1ff1a] hover:bg-[#b8e617] text-black flex justify-center items-center font-medium px-6 py-2 rounded-full"><LuDownload className="w-4 h-4 mr-2" />Download CV</motion.button></a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}

export default Home;
