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


 function Projects() {
    return (
      <main className="  bg-gradient-to-tr from-black via-[#04040F]  to-[#120E3D]">
        <Navbar/>
            <section className=" w-full bg-gradient-to-tr from-black via-[#04040F] to-[#120E3D] lg:px-44 md:px-24 px-11 lg:py-20  md:py-28  py-32 relative">
                  <div className="max-w-7xl mx-auto lg:py-10 md:py-5 py-3  ">                  
                    <Navlink titleone='My' titletwo='Projects'/> 
                    <Navlink titlethree='In every project lies an opportunity to learn, grow, and innovate'/>
                  </div>                                             
                    <style jsx>{`@keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(100px);} 
                        to { opacity: 1; transform: translateY(0);} }
                        .animate-fadeInUp { animation: fadeInUp 2s ease-in-out forwards;} `}</style>              
                  <div className="max-w-7xl mx-auto py-9">
                    <div className="projmedia grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <ProjCardOverlay img1={img1} remove1={remove1} heading="WEBSITE" description="Hostel Project" paragraf="Accommodation Platformn-(In progress)" link="https://github.com/SwathiSajeshM/KL-Nest" />
                      <ProjCardOverlay img1={img1} remove1={remove2} heading="WEBSITE" description="Useless Project" paragraf="Fun & Experimental Projects" link="https://github.com/SwathiSajeshM/UhOhIq" hosting="https://swathisajeshm.github.io/UhOhIq/" />
                      <ProjCardOverlay img1={img1} remove1={remove3} heading="WEBSITE" description="To-Do App" paragraf="Productivity Applications" link="https://github.com/SwathiSajeshM/ToDoApp" hosting="https://swathisajeshm.github.io/ToDoApp/" />
                      <ProjCardOverlay img1={img1} remove1={remove4} heading="WEBSITE" description="Age Calculator" paragraf="Utility Tools" link="https://github.com/SwathiSajeshM/Age-CalculatoR" hosting=" https://swathisajeshm.github.io/Age-CalculatoR/" />
                      <ProjCardOverlay img1={img1} remove1={remove5} heading="WEBSITE" description="National Park" paragraf="API Integration" link="https://github.com/SwathiSajeshM/API-Project-NationalPark" hosting="https://na-ationalparksui.web.app" />
                      <ProjCardOverlay img1={img1} remove1={remove6} heading="WEBSITE" description="Form Validation" paragraf="Javascript Functionality" link="https://github.com/SwathiSajeshM/Form-Submission" hosting="https://validation-formpro.web.app/" />
                      <ProjCardOverlay img1={img1} remove1={remove7} heading="WEBSITE" description="Lazza Ice-Cream" paragraf="Demo Website" link="https://github.com/SwathiSajeshM/Clone-Project-LazzaIceCream" hosting="https://swathisajeshm.github.io/Clone-Project-LazzaIceCream/" />
                      <ProjCardOverlay img1={img1} remove1={remove8} heading="WEBSITE" description="Coming Soon" paragraf="Empty Project"/>
                    </div>
                  </div>   
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