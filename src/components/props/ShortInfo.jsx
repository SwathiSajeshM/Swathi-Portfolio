import React from 'react'

const ShortInfo = ({titleone, titletwo}) => {
  return (
    <div>
        <ul className="space-y-4 text-white">
        <li className="aboutRightLi flex justify-between">
          <span className="font-semibold">{titleone}</span>
          <span>{titletwo}</span>
        </li>
        
      </ul>
    </div>
  )
}

export default ShortInfo
