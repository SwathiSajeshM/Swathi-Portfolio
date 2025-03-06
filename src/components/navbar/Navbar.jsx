import slogo from '../../assets/slogo.png'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { CgMenuLeft } from 'react-icons/cg'
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import SocialMediaLink from '../props/SocialMediaLinks'
import NavItem from '../props/NavItem'


const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {setIsOpen(!isOpen)}

  return (
    <nav className="bg-gradient-to-br from-black text-white fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28">
  {/*_____________________________________ Logo _______________________________________________________*/}
            <div className="flex-shrink-0 w-20 justify-center items-center"> <Link to="/" ><img src={slogo} alt="" /></Link> </div>
  {/*_____________________________________ Desktop Navigation _______________________________________________________*/}
            <div className="hidden md:flex items-center space-x-8">
              <NavItem path="/" navitem="Home" />
              <NavItem path="/about" navitem="About" />
              <NavItem path="/projects" navitem="Projects" />
              <NavItem path="/services" navitem="Services" />
              <NavItem path="/contacts" navitem="Contact" />         
            </div>
  {/*_____________________________________ Social Icons - Desktop _______________________________________________________*/}
            <div className="hidden md:flex items-center space-x-6">
              <SocialMediaLink href="https://www.linkedin.com/in/swathi-m-1a89032b4/" icon={LiaLinkedin}/>
              <SocialMediaLink href="https://github.com/SwathiSajeshM" icon={FaGithub} />
              <SocialMediaLink href="https://wa.me/918921225912" icon={FaWhatsapp} />
              <SocialMediaLink href="https://instagram.com/swathi_s_a_j_e_s_h" icon={FaInstagram} />           
            </div>
  {/*_____________________________________ Mobile menu button _______________________________________________________*/}
              <div className="md:hidden"><button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 hover:bg-gray-800 focus:outline-none">{isOpen ? (<AiOutlineClose className="block h-6 w-6"/>) : (<CgMenuLeft className="block h-6 w-6" />) }</button></div>
          </div>
        </div>
  {/*_____________________________________ Mobile menu _______________________________________________________*/}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#0a0a1b]`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 rounded-md hover:bg-gray-800" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-gray-800" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/projects" className="block px-3 py-2 rounded-md hover:bg-gray-800" onClick={() => setIsOpen(false)}>Projects</Link>
              <Link to="/services" className="block px-3 py-2 rounded-md hover:bg-gray-800" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/contacts" className="block px-3 py-2 rounded-md hover:bg-gray-800" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
  {/*_____________________________________ Social Icons - Mobile _______________________________________________________*/}
          <div className="px-5 pt-4 pb-6 flex justify-around border-t border-gray-800">
              <SocialMediaLink href="https://www.linkedin.com/in/swathi-m-1a89032b4/" icon={LiaLinkedin}/>
              <SocialMediaLink href="https://github.com/SwathiSajeshM" icon={FaGithub} />
              <SocialMediaLink href="https://wa.me/918921225912" icon={FaWhatsapp} />
              <SocialMediaLink href="https://instagram.com/swathi_s_a_j_e_s_h" icon={FaInstagram} /> 
          </div>
        </div>
    </nav>

  )
  
}

export default Navbar







 
