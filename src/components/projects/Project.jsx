import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Navlink from "../props/Navlink";
import img1 from "../../assets/projimg.jpg"
import remove1 from "../../assets/hostel.png"
import remove2 from "../../assets/useless.png"
import remove3 from "../../assets/todo.png"
import remove4 from "../../assets/agecalculatorr.png"
import remove5 from "../../assets/nationalpark.png"
import remove6 from "../../assets/valid.png"
import remove7 from "../../assets/icecream.png"
import remove8 from "../../assets/emptyproj.png"
import ProjCardOverlay from "../props/ProjCardOverlay";
import { motion } from "framer-motion";

 function Projects() {
    return (
      <main className="  bg-gradient-to-tr from-black via-[#04040F]  to-[#120E3D]">
        <Navbar/>
        <section className="w-full bg-gradient-to-tr from-black via-[#04040F] to-[#120E3D] lg:px-44 md:px-24 px-11 lg:py-20 md:py-28 py-32 relative">
{/*_______________________________ Section Heading (Fade-in & Slide-up) _________________________*/}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-7xl mx-auto lg:py-10 md:py-5 py-3 ">                  
              <Navlink titleone="My" titletwo="Projects" /> 
              <Navlink titlethree="In every project lies an opportunity to learn, grow, and innovate" />
            </motion.div>                                             
{/*_______________________________ Project Cards Section with Slide-in _________________________*/}
            <motion.div initial="hidden"animate="visible" variants={{hidden: { opacity: 0 },visible: { opacity: 1, transition: { staggerChildren: 0.2 }}}} className="max-w-7xl mx-auto py-9">
              <div className="projmedia grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/*_______________________________ Project Cards with Slide-in Animation _________________________*/}
                {[
                  { img: img1, remove: remove1, heading: "WEBSITE", description: "Hostel Project", para: "Accommodation Platform-(In progress)", link: "https://github.com/SwathiSajeshM/KL-Nest" },
                  { img: img1, remove: remove2, heading: "WEBSITE", description: "Useless Project", para: "Fun & Experimental Projects", link: "https://github.com/SwathiSajeshM/UhOhIq", hosting: "https://swathisajeshm.github.io/UhOhIq/" },
                  { img: img1, remove: remove3, heading: "WEBSITE", description: "To-Do App", para: "Productivity Applications", link: "https://github.com/SwathiSajeshM/ToDoApp", hosting: "https://swathisajeshm.github.io/ToDoApp/" },
                  { img: img1, remove: remove4, heading: "WEBSITE", description: "Age Calculator", para: "Utility Tools", link: "https://github.com/SwathiSajeshM/Age-CalculatoR", hosting: "https://swathisajeshm.github.io/Age-CalculatoR/" },
                  { img: img1, remove: remove5, heading: "WEBSITE", description: "National Park", para: "API Integration", link: "https://github.com/SwathiSajeshM/API-Project-NationalPark", hosting: "https://na-ationalparksui.web.app" },
                  { img: img1, remove: remove6, heading: "WEBSITE", description: "Form Validation", para: "Javascript Functionality", link: "https://github.com/SwathiSajeshM/Form-Submission", hosting: "https://validation-formpro.web.app/" },
                  { img: img1, remove: remove7, heading: "WEBSITE", description: "Lazza Ice-Cream", para: "Demo Website", link: "https://github.com/SwathiSajeshM/Clone-Project-LazzaIceCream", hosting: "https://swathisajeshm.github.io/Clone-Project-LazzaIceCream/" },
                  { img: img1, remove: remove8, heading: "WEBSITE", description: "Coming Soon", para: "Empty Project" }].map((project, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }}>
                    <ProjCardOverlay img1={project.img} remove1={project.remove} heading={project.heading} description={project.description} paragraf={project.para} link={project.link} hosting={project.hosting} />
                  </motion.div> ))}
              </div>
            </motion.div>   
        </section>
              <Footer/>
      </main>
    )
  }

  export default Projects;








  





  // import ProjectCard from "../props/ProjectCard";
// import { MdOutlineTheaterComedy } from "react-icons/md";
// import { GiPlantsAndAnimals } from "react-icons/gi";
// import { PiIceCreamDuotone, PiListChecksBold } from "react-icons/pi";
// import { RiPassValidLine } from "react-icons/ri";
// import { CgSandClock } from "react-icons/cg";
// import { FaBed, FaCalculator } from "react-icons/fa";