import React from 'react'

const ExpEduDetailAbout = ({badge, title, subTitle, des}) => {
  return (
    <div className='w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800'>   
        {
          badge === ""? (<h6 className='w-28 text-center text-sm py-[1px] text-[#d1ff1a] border-[1px] border-[#d1ff1a] rounded-sm'>2024-Present</h6>):
                        (<h6 className='w-24 text-center text-sm py-[1px] text-[#999] border-[1px] border-zinc-600 rounded-sm'>{badge}</h6>)
        }      
        <h2 className='text-sm font-titleFont text-gray-200 font-medium'>{title}</h2>
        <p className='text-sm  text-[#999] -mt-2'>{subTitle}</p>
        <p className='text-base text-[#999] font-medium pr-10'>{des}</p>
    </div>
  )
}

export default ExpEduDetailAbout
