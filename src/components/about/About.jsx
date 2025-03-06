import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
import Navlink from "../props/Navlink"
import ShortInfo from "../props/ShortInfo"
import Skillsprop from "../props/SkillsProp";
import aboutimg from "../../assets/aboutim.jpg";
import ExpEduAbout from "../props/ExpEduAbout";
import KnowledgeTitle from "../props/KnowledgeTitle";
import ExpEduDetailAbout from "../props/ExpEduDetailAbout";
import { IoCheckmarkDoneSharp, IoCodeSlashSharp } from "react-icons/io5";
import { MdSchool, MdWork } from "react-icons/md";
import { SiArtstation } from "react-icons/si";
import { FaBook, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";


 function About() {
    return (
        <main className=" bg-gradient-to-tr from-black via-[#04040F]  to-[#120E3D] ">
            <Navbar/>
                <section className="w-full bg-gradient-to-tr from-black via-[#04040F] to-[#120E3D] lg:px-44 md:px-24 px-11 lg:py-20 md:py-28 py-32 relative">
{/*_______________________________ About heading, para and image _________________________*/}
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col md:flex-col lg:flex-row lg:gap-14 ">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="max-w-7xl mx-auto lg:py-10 md:py-5 py-3">
                            <Navlink titleone="About" titletwo="Me" />
                            <Navlink titlethree="Hello! I'm Swathi. Web developer from Kannur, India. I am a fresher with expertise in React, PHP, JavaScript, HTML, CSS, TailwindCSS, and Git. I enjoy creating functional and visually appealing web solutions." />
                        </motion.div>       
                        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}className="w-full md:mt-8 lg:mt-14 lg:w-1/3 flex justify-center md:justify-center lg:justify-end">
                            <div className="relative aspect-square rounded-3xl max-w-md overflow-hidden"><img src={aboutimg} alt="" className="object-cover w-full h-full" priority /></div>
                        </motion.div>
                    </motion.div>
{/*_______________________________ Another details and short info _________________________*/}
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center md:pt-14 pt-16">
                            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="space-y-6">
                                <h2 className="text-lg md:text-2xl lg:text-5xl font-light text-white/90 leading-tight">A Passionate <span className="text-[#d1ff1a]">Web Designer</span> Turning <span className="text-[#d1ff1a]">Ideas</span> Into Visually Stunning, User-Friendly Websites.</h2>
                                <Navlink titlethree="As a beginner in the field, I'm constantly learning and exploring new technologies to enhance my skills and stay up-to-date with industry trends." />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1 }} className="p-2 md:p-3 w-full lg:ml-44 font-sans max-w-xs bg-black/30 rounded-lg shadow-lg mx-auto">
                                <ShortInfo titleone="Age" titletwo="21" />
                                <ShortInfo titleone="Residence" titletwo="India" />
                                <ShortInfo titleone="Freelance" titletwo="Available" />
                                <ShortInfo titleone="Address" titletwo="Kannur, Kerala" />
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
{/*_______________________________ Experience and education _________________________*/}                   
            <div className="w-full px-6 md:px-16 lg:px-44 py-8 grid grid-cols-1 md:grid-cols-9 gap-8">
                    <div className="col-span-4">
                        <ExpEduAbout title="Experience" icon={<MdWork />} />
                        <ExpEduDetailAbout badge="" title="Web Developer" subTitle="Intern" des="Strong foundation in HTML, CSS, JavaScript, React, MySQL, PHP, Laravel, Tailwind CSS, GitHub, and Netlify. Currently pursuing a full-time internship at Eduzell Technologies and Solutions LLP, where I am honing my technical and professional skills." />
                        <ExpEduDetailAbout badge="2023" title="CSA BOH" subTitle="Reliance SMSL Limited" des="I bring 6 months of experience as a CSA BOH staff, where I developed strong adaptability, teamwork, and communication skills in a dynamic work environment."  />
                    </div>
                    <div className="w-full h-full flex justify-center items-center md:col-span-1"><span className="w-[1px] h-full bg-zinc-800 inline-flex"></span></div>
                    <div className="col-span-4 md:order-last lg:order-none">
                        <ExpEduAbout title="Education" icon={<MdSchool />} />
                        <ExpEduDetailAbout badge="2020-2023" title="BCom" subTitle="College of Commerce, Kannur" des="Equipping me with knowledge in business and commerce." />
                        <ExpEduDetailAbout badge="2018-2020" title="Higher Secondary" subTitle="Anjarakandy HSS, Kannur" des="Focusing on advanced learning and skill-building." />
                        <ExpEduDetailAbout badge="2017-2018" title="SSLC" subTitle="Kadambur HSS, Kannur" des="Focusing on advanced learning and skill-building." />
                    </div>
            </div>
{/*_______________________________ My Skills _________________________*/}                   
            <div className="w-full px-6 md:px-16 lg:px-44 py-8 grid grid-cols-1 md:grid-cols-9 gap-8">
                <div className="col-span-4">
                    <ExpEduAbout title='FULL STACK DEVELOPMENT' icon={<SiArtstation/>} /> 
                        <div className="p-4">
                            <Skillsprop title='Frontend Devolopment' percentage={86}/>
                            <Skillsprop title='Backend Devolopment' percentage={80}/>
                            <Skillsprop title='Web Design' percentage={80}/>
                            <Skillsprop title='UI Design' percentage={75}/>
                        </div>
                        <ExpEduAbout title="CODING" icon={<IoCodeSlashSharp/>} />
                        <div className='p-4'>
                            <Skillsprop title='HTML' percentage={95}/>
                            <Skillsprop title='CSS' percentage={86}/>
                            <Skillsprop title='React' percentage={86}/>
                            <Skillsprop title='Tailwind CSS' percentage={85}/>
                            <Skillsprop title='Laravel' percentage={60}/>
                        </div>
                </div>
                     <div className='w-full h-full flex justify-center items-center'><span className='w-[1px] h-full bg-zinc-800 inline-flex'></span></div>                    
                        <div className="col-span-4">
                            <ExpEduAbout title='LANGUAGES' icon={<FaGlobe/>} />
                            <div className="p-4">
                                <Skillsprop title=' Malayalam ' percentage={98} />
                                <Skillsprop title=' English ' percentage={80} />
                        
                            </div>
                            <div>
                                <ExpEduAbout title='TOOLS' icon={<FaBook/>} />
                                    <div className="p-4">
                                        <KnowledgeTitle title="Git and GitHub" icon={<IoCheckmarkDoneSharp/>} />
                                        <KnowledgeTitle title="Firebase" icon={<IoCheckmarkDoneSharp/>} />
                                        <KnowledgeTitle title="Netlify" icon={<IoCheckmarkDoneSharp/>} />
                                        <KnowledgeTitle title="Figma" icon={<IoCheckmarkDoneSharp/>} />
                                        <KnowledgeTitle title="Postman" icon={<IoCheckmarkDoneSharp/>} />
                                        <KnowledgeTitle title="XAMPP" icon={<IoCheckmarkDoneSharp/>} />
                                        <KnowledgeTitle title="Table Plus" icon={<IoCheckmarkDoneSharp/>} />
                                        <KnowledgeTitle title="Word" icon={<IoCheckmarkDoneSharp/>} />
                                        <KnowledgeTitle title="Power Point" icon={<IoCheckmarkDoneSharp/>} />
                                    </div>
                            </div>
                        </div>            
            </div>       
                <Footer/>
        </main>
    )
  }

export default About