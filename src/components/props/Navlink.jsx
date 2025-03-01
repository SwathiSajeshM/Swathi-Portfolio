import React from 'react'

const Navlink = ({titleone, titletwo, titlethree}) => {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold capitalize text-white/90 hover:text-[#d1ff1a] mb-4  md:mb-8 lg:mb-10">
        {titleone} <span className="text-[#d1ff1a] hover:text-white/90">{titletwo}</span>
      </h1>
      <p className="text-xs md:text-lg lg:text-xl text-gray-400 max-w-3xl mb-5 md:mb-8 lg:mb-10 ">{titlethree}</p>
    </div>
  )
}

export default Navlink
