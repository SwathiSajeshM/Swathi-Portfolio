import React from 'react'
  import "./ProjCardOverlay.css"
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
  
  
  const ProjCardOverlay = ({ img1, remove1, heading, description, paragraf, link, hosting }) => {
    return (
      <div className="relative w-full flex flex-col items-center group overflow-hidden">
          <div className=" w-full h-full flex flex-col items-center transition-all duration-300 group-hover:blur-md">
            <img src={img1} alt="Background" className="w-full h-auto rounded-lg" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
              <h1 className=" type-h-one text-gray-600 text-5xl md:text-5xl lg:text-7xl font-extrabold italic opacity-50">{heading}</h1>
              <p className="type-p-one absolute text-yellow-400 text-l md:text-l lg:text-3xl font-bold italic">{description}</p>
            </div> 
            <img src={remove1} alt="Additional Image" className="remove-img h-28 absolute bottom-0" />
          </div>  
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div><p>{paragraf}</p></div>
            <div className='flex gap-4 py-4'>
              <a href={link}><FaGithub className='hover:text-yellow-200'/></a>
              <a href={hosting}><FaExternalLinkAlt className='hover:text-yellow-200'/></a>
            </div>                
          </div>         
      </div>
    )
  }
  
  export default ProjCardOverlay;



