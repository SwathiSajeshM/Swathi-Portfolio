import React from 'react'


const ExpEduAbout = ({title,icon}) => {
  return (
    <div>
       <h1 className='text-lg text-gray-300 font-medium flex items-center gap-2 py-3 border-b-[1px] border-b-zinc-800'>
        <span className='text-[#d1ff1a] text-2xl'>{icon}</span>
        {title}
      </h1>    
    </div>

    
  )
}

export default ExpEduAbout
