import Navbar from "../navbar/Navbar";
import Navlink from "../props/Navlink";
import { BiLogoGithub, BiRocket } from "react-icons/bi";
import { motion } from "framer-motion";
import hostel from "../../assets/hostel.png";
import figmaportfolio from "../../assets/figmaportfolio.png";
import mighton from "../../assets/mighton.png";
import portfolio from "../../assets/portfolio.png";
import useless from "../../assets/useless.png";
import todo from "../../assets/todo.png";
import agecalculator from "../../assets/agecalculatorr.png";
import nationalpark from "../../assets/nationalpark.png";
import formvalidation from "../../assets/valid.png";
import icecream from "../../assets/icecream.png";
import emptyproject from "../../assets/emptyproj.png";
import Footer from "../footer/Footer";

const projects = [
  {
    id: 0,
    heading: "Figma-Portfolio",
    subheading: "A sleek and professional portfolio design created using Figma, showcasing my skills, projects, and experience.",
    image: figmaportfolio,
    github: "/emptypage",
    live: "https://www.figma.com/proto/o49ZA5pgzasxHu2JS0IzqW/Swathi.M-figma-Portfolio?node-id=6-2&p=f&t=QliQ9Auzr51fhhee-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A2",
  },
  {
    id: 3,
    heading:"To-Do App",
    subheading: "A minimal yet efficient task management app, built with React, allowing users to add, delete, and track their daily tasks. \u21D2 React|CSS",
    image: todo,
    github: "https://github.com/SwathiSajeshM/ToDoApp",
    live: "https://swathisajeshm.github.io/ToDoApp/",
  },
  {
    id: 2,
    heading:"React Portfolio",
    subheading: "My personal developer portfolio, designed with React for smooth UI interactions and responsive layouts. \u21D2 React|CSS",
    image: portfolio,
    github: "https://github.com/SwathiSajeshM/mySamplePortfolio",
    live: "https://swathi-m.web.app/",
  },
  {
    id: 1,
    heading:"Figma-Website",
    subheading: "A mobile-first website design prototype for Mighton, ensuring a clean and intuitive user experience. \u21D2 Mobile View",
    image: mighton,
    github: "/",
    live: "https://www.figma.com/proto/KsZhj5QkPrg2I4eYwFuZHu/mighton?node-id=2-5&p=f&t=cn7VpbJc5coUvCNG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 4,
    heading:"Lazza Ice Cream",
    subheading: "A visually appealing static website for an ice cream brand, featuring bright colors and engaging animations. \u21D2 HTML|CSS",
    image: icecream,
    github: "https://github.com/SwathiSajeshM/Clone-Project-LazzaIceCream",
    live: "https://lazzawebstatic.netlify.app/",
  },
  {
    id: 5,
    heading:"Age Calculator",
    subheading: "A simple yet fun web app that calculates age based on date input, designed with a modern UI. \u21D2 React|Tailwind CSS.",
    image: agecalculator,
    github: "https://github.com/SwathiSajeshM/Age-CalculatoR",
    live: "https://swathisajeshm.github.io/Age-CalculatoR/",
  },
  {
    id: 6,
    heading:"Useless Project",
    subheading: "A playful and experimental project with quirky interactions and unexpected results.\u21D2 React|Tailwind CSS.",
    image: useless,
    github: "https://github.com/SwathiSajeshM/UhOhIq",
    live: "https://swathisajeshm.github.io/UhOhIq/",
  },
  {
    id: 7,
    heading:"National Parks",
    subheading: " A web app that fetches and displays national park data using JavaScript and API integration.  \u21D2 HTML|CSS|JS",
    image: nationalpark,
    github: "https://github.com/SwathiSajeshM/API-Project-NationalPark",
    live: "https://na-ationalparksui.web.app/",
  },
  {
    id: 8,
    heading:"Form Validation",
    subheading: "A clean and interactive form validation system ensuring proper user input with real-time feedback. \u21D2 HTML|CSS|JS",
    image: formvalidation,
    github: "https://github.com/SwathiSajeshM/Form-Submission",
    live: "https://validation-formpro.web.app/",
  },
  {
    id: 9,
    heading:"KL-Nest Hostel",
    subheading: "A dynamic e-commerce platform for hostel bookings, featuring real-time data and user authentication. \u21D2 React|Tailwind CSS.",
    image: hostel,
    github: "https://github.com/SwathiSajeshM/KL-Nest",
    live: "/progress-proj",
  },
  {
    id: 10,
    heading:"What Next?",
    subheading: "A blank canvas waiting for new ideas and exciting development! Let me know if you want any tweaks \u21D2 Empty Project",
    image: emptyproject,
    github: "/emptypage",
    live: "/emptypage",
  },
];

function Project() {
  return (
    <main className="bg-gradient-to-tr from-black via-[#04040F] to-[#120E3D]">
      <Navbar />
      <section className="w-full lg:px-44 md:px-24 px-11 lg:py-20 md:py-28 py-32 relative">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-7xl mx-auto lg:py-10 md:py-5 py-3">
            <Navlink titleone="My" titletwo="Projects" />
            <Navlink titlethree="In every project lies an opportunity to learn, grow, and innovate" />
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={{hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } }, }} className="max-w-7xl mx-auto py-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div key={project.id} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="relative w-full flex flex-col items-center group overflow-hidden bg-gray-900 p-4 rounded-lg shadow-lg">
                  <div className="rounded-lg">
                    <p className="text-center text-xl font-bold text-gray-700 pt-5">{project.heading}</p>
                    <img src={project.image} className="w-full h-56 pt-24 rounded-lg transition-transform duration-300 group-hover:scale-105" alt={project.subheading} />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-80 p-4 rounded-lg">
                    <h1 className="text-gray-600 text-sm font-medium">{project.subheading}</h1>
                    <div className="mt-2 flex gap-4">
                      <a href={project.github}  className="hover:text-[#bfd567] text-[#b8e617]"><BiLogoGithub size={25} /></a>
                      <a href={project.live} ><BiRocket className="hover:text-[#bfd567] text-[#b8e617]" size={25} /></a>
                    </div>
                  </div>
                </motion.div> ))}
            </div>
          </motion.div>
      </section>
      <Footer />
    </main>
  );
}

export default Project;














  