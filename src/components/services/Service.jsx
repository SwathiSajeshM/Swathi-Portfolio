import { FaChalkboardTeacher, FaCode, FaGithub, FaPhp, FaReact } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { motion } from "framer-motion";
import ProjectCard from "../props/ProjectCard";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Navlink from "../props/Navlink";
import { h1 } from "framer-motion/client";


 function Services() {
    return (
      <main className=" bg-gradient-to-tr from-black via-[#04040F]  to-[#120E3D] ">
          <Navbar/>
          <section className="w-full bg-gradient-to-tr from-black via-[#04040F] to-[#120E3D] lg:px-44 md:px-24 px-11 lg:py-20 md:py-28 py-32 relative">
{/*_______________________________ Section Heading with Fade-in Up Animation _________________________*/}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-7xl mx-auto lg:py-10 md:py-5 py-3 ">
                <Navlink titleone="My" titletwo="Services" />
                <Navlink titlethree="Designing the future, one creative website at a time." />         
            </motion.div>
{/*_______________________________ Services Grid with Staggered Animation _________________________*/}
            <motion.div initial="hidden" animate="visible" variants={{hidden: { opacity: 0 },visible: { opacity: 1, transition: { staggerChildren: 0.2 } }}} className="max-w-7xl mx-auto py-9">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/*_______________________________ Project Cards with Slide-in Animation _________________________*/}
                    {[  
    
                        { icon: <FaReact className="w-6 h-6 text-black" />, title: "Frontend Development", titletwo: "Crafting responsive, user-friendly web interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS." },
                        { icon: <FaCode className="w-6 h-6 text-black" />, title: "UI/UX Design", titletwo: "Designing intuitive and visually appealing user experiences using Figma, ensuring seamless interaction and usability." },
                        { icon: <SiPostman className="w-6 h-6 text-black" />, title: "Full-Stack Integration", titletwo: "Bridging frontend and backend with API integration, handling seamless data flow between applications." },
                        { icon: <FaChalkboardTeacher className="w-6 h-6 text-black" />, title: "Tutoring Services", titletwo: "Provide tutoring sessions on web development topics, helping beginners learn HTML, CSS, JavaScript, PHP, Laravel, and React." },
                        { icon: <FaGithub className="w-6 h-6 text-black" />, title: "Version Control & Deployment ", titletwo: "Managing projects with Git and GitHub while deploying applications on Firebase, Vercel, and Netlify for a smooth web experience." },
                        { icon: <FaPhp className="w-6 h-6 text-black" />, title: "Backend Development", titletwo: "Design and develop secure and scalable server-side applications using PHP and Laravel. " },
                        { icon: <FaPhp className="w-6 h-6 text-black" />, title: "Testing & Debugging ", titletwo: "Ensuring application performance with Postman API testing and debugging in VS Code and XAMPP." }
                    ].map((service, index) => (
                        <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                            <ProjectCard icon={service.icon} title={service.title} titletwo={service.titletwo} />
                        </motion.div> ))}
                </div>
            </motion.div>                
          </section>
            <Footer/>
      </main>
    )
}

export default Services;