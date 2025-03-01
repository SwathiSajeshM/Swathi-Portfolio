import React from 'react'


const KnowledgeTitle = ({title,icon}) => {
  return (
    <div>
       <h1 className='text-sm text-gray-300  flex items-center gap-2 py-3  '>
        <span className='text-[#d1ff1a]/20 text-[1.2rem]'>{icon}</span>
        {title}
      </h1>    
    </div>

    
  )
}

export default KnowledgeTitle;
