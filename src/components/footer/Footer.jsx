import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";

 function Footer() {
  return (      
    <>
    <div className="bg-gradient-to-tr from-black via-[#04040F]  to-black  text-white py-7  px-8 text-center ">     
          <h2 className="text-3xl text-gray-200 md:text-4xl lg:text-5xl font-light mb-6">"Let's create something remarkable together.</h2>
          <p className="text-base text-gray-400 md:text-lg max-w-3xl mx-auto mb-8"> Let's collaborate and make it a reality. I'am open to full-time or part-time opportunities where I can contribute to exceptional outcomes and push creative boundaries.</p>
          <button className="inline-flex items-center gap-2 bg-[#d1ff1a] hover:bg-[#b8e617] text-black px-6 py-3 rounded-full  transition-colors">Let's Talk <IoMdCall className="w-4 h-4" /> </button>
        <div className="text-center mt-8 text-white/70 ">
          <p className="text-sm">©Copyright <Link to="/"><span className="text-[#d1ff1a]">Swathi</span></Link> All Rights Reserved.</p>
        </div>
        </div>
    </>    
  )
}


export default Footer;



