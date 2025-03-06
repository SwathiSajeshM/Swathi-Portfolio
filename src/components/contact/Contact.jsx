import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import Navlink from "../props/Navlink";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import axios from "axios";


 function Contact() {
  const [clientName, SetClientName]=useState("");
  const [email, setEmail]=useState("");
  const [messages, SetMessages]=useState(""); 
// _______________Error Messages Start here ____________
   const [errClientName, setErrClientName]=useState(false);
   const [erremail, setErrEmail]=useState(false);
   const [errmessages, setErrMessages]=useState(false);
// _______________Error Messages End here ____________
   const [successMsg, setSuccessMsg]=useState("");   
// _______________ Email Validation start here ____________
   const EmailValidation=(email)=>{ return String(email).toLowerCase().match(/[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/) }
   const handleName=(e)=>{ SetClientName(e.target.value)
   setErrClientName(false)}
   const handleEmail=(e)=>{setEmail(e.target.value)
   setErrEmail(false) }
   const handleMessages=(e)=>{SetMessages(e.target.value)
   setErrMessages(false) }
 
   const handleSend=(e)=>
   { e.preventDefault()
     if(!clientName){setErrClientName(true)}
     if (!email){ setErrEmail(true) } else {
     if(!EmailValidation(email)){ setErrEmail(true) }}
     if(!messages) { setErrMessages(true) }
     if (clientName && email && EmailValidation(email) && messages ){
       axios.post("https://getform.io/f/apjjrlja",{ name:clientName, email:email, messages:messages });
       setSuccessMsg(`Hello dear ${clientName}, Your messages has been sent successfully. Thank you for your time!`);
       SetClientName("")
       setEmail("")
       SetMessages("") }
   }
    return (
      <main className=" bg-gradient-to-tr from-black via-[#04040F]  to-[#120E3D] ">
            <Navbar/>
            <section className="w-full bg-gradient-to-tr from-black via-[#04040F] to-[#120E3D] lg:px-44 md:px-24 px-11 lg:py-20 md:py-28 py-32 relative">
  {/*_______________________________ Section Title (Fade-in & Slide-up) _________________________*/}
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-7xl mx-auto lg:py-10 md:py-5 py-3">
                              <Navlink titleone="Say" titletwo="Hello" />
                              <Navlink titlethree="Fill out the form below to get in touch with me. I'm always excited to hear about new opportunities and I'll do my best to respond to your inquiry within 24 hours." />
                            </motion.div>
{/*_______________________________ Contact Details Section _________________________*/}
                <section className="w-full px-4 py-12 md:py-16">
                  <div className="max-w-7xl mx-auto">
{/*_______________________________ Contact Info Cards (Slide-in Left & Right) _________________________*/}
                    <motion.div initial="hidden" animate="visible" variants={{hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 }} }} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="border border-[#d1ff1a]/20 rounded-lg p-4">
                        <a href="https://www.linkedin.com/in/swathi-m-1a89032b4/"> <span className="text-gray-400 flex items-center gap-1"> <span><FaLinkedin/></span>Linkedin </span></a>
                      </motion.div> 
                      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="border border-[#d1ff1a]/20 rounded-lg p-4 flex items-center gap-3">
                        <span className="text-gray-400 flex items-center justify-center gap-1"> <span><FaPhoneAlt/></span> 8921225912</span>
                      </motion.div>       
                      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="border border-[#d1ff1a]/20 rounded-lg p-4 flex items-center gap-4">
                        <span className="text-gray-400 flex items-center gap-1"> <span><IoMdMail/></span> swathimknr@gmail.com </span>
                      </motion.div>
                    </motion.div>
{/*_______________________________ Contact Form (Scale-in Effect) _________________________*/}
                    {successMsg ? ( <motion.p initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="text-center text-base font-mono p-20 text-[#d1ff1a]/20">{successMsg}</motion.p>) : (
                      <motion.form initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1 }} id="form" action="https://getform.io/f/apjjrlja" method="POST" className="p-6 flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2"> <input onChange={handleName} value={clientName} type="text" id="fullName" placeholder="Name"  className={`${errClientName ? "border-red-600 focus-visible:border-red-600" : "border-zinc-600 focus-visible:border-[#d1ff1a]/20"} w-full bg-transparent border-2 px-1 py-2 text-base text-gray-300 outline-none duration-300`}  /> </div>
                          <div className="space-y-2"> <input onChange={handleEmail} value={email} type="email" id="email" placeholder="Email" className={`${erremail ? "border-red-600 focus-visible:border-red-600" : "border-zinc-600 focus-visible:border-[#d1ff1a]/20"} w-full bg-transparent border-2 px-1 py-2 text-base text-gray-300 outline-none duration-300`}  /> </div>
                        </div>
                        <div className="space-y-2"><textarea onChange={handleMessages} value={messages}  id="message" cols="30" rows="4" placeholder="Your Message" className={`${errmessages ? "border-red-600 focus-visible:border-red-600" : "border-zinc-600 focus-visible:border-[#d1ff1a]/20"} w-full bg-transparent border-2 px-1 py-2 text-base text-gray-300 outline-none duration-300 resize-none`} /> </div>
                        <button onClick={handleSend}  type="submit" className="text-base w-44 flex items-center gap-1 text-gray-300 hover:text-[#d1ff1a]/20 duration-200">Send Me Message <span className="mt-1 text-designColor"><FiSend/></span> </button>    
                      </motion.form>)}              
                  </div>
                </section>
            </section>
             <Footer/>
      </main>
    )
  }

  export default Contact;