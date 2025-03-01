import { FaChalkboardTeacher, FaCode, FaGithub, FaPhp, FaReact } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Navlink from "../props/Navlink";
import ProjectCard from "../props/ProjectCard";

 function Services() {
    return (
      <main className=" bg-gradient-to-tr from-black via-[#04040F]  to-[#120E3D] ">
          <Navbar/>
          <section className="w-full bg-gradient-to-tr from-black via-[#04040F] to-[#120E3D] lg:px-44 md:px-24 px-11 lg:py-20  md:py-28  py-32 relative">
            <div className="max-w-7xl mx-auto lg:py-10 md:py-5 py-3 ">
              <Navlink titleone='My' titletwo='Services'/>
              <Navlink titlethree='Designing the future, one creative website at a time.'/>         
              </div>
              <div className="max-w-7xl mx-auto py-9">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    <style jsx>{`@keyframes fadeInUp {
                          from { opacity: 0; transform: translateY(100px);} 
                          to { opacity: 1; transform: translateY(0);} }
                        .animate-fadeInUp {
                          animation: fadeInUp 2s ease-in-out forwards;} `}</style>
                  <ProjectCard icon={<FaCode className="w-6 h-6 text-black"/>} title='Web Devolopment' titletwo='Create modern, responsive websites using HTML, CSS, and JavaScript. Showcase expertise in front-end and back-end development with frameworks like React and Laravel.' />
                  <ProjectCard icon={<FaReact className="w-6 h-6 text-black"/>} title='Frontend Development with React' titletwo='Develop dynamic, single-page applications (SPAs) with React to enhance user engagement and performance.Bringing ideas to life with interactive React interfaces.' />
                  <ProjectCard icon={<SiPostman className="w-6 h-6 text-black"/>} title='API Development & Integration' titletwo='Design and implement REST APIs for seamless data communication between frontend and backend systems using Postman for testing.' />
                  <ProjectCard icon={<FaChalkboardTeacher className="w-6 h-6 text-black"/>} title='Tutoring Services' titletwo='Provide tutoring sessions on web development topics, helping beginners learn HTML, CSS, JavaScript, PHP, Laravel, and React.' />
                  <ProjectCard icon={<FaPhp className="w-6 h-6 text-black"/>} title='Backend Devolopment' titletwo='Design and develop secure and scalable server-side applications using PHP and Laravel. Build efficient APIs to connect frontend and backend systems, ensuring seamless data flow.Focus on implementing authentication, authorization, and robust error handling to ensure reliable backend functionality.' />
                  <ProjectCard icon={<FaGithub className="w-6 h-6 text-black"/>} title='Deployment, Hosting,& Collaboration' titletwo='Deploy and host websites or applications using platforms like Netlify for production-ready frontend deployment and XAMPP for local development. Manage code versions and collaborate effectively with teams using GitHub for version control and repository hosting.' />
                  
              </div>
              </div>                

            
          </section>
            <Footer/>
      </main>
    )
}

export default Services;