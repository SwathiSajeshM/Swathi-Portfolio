import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({navitem, path}) => {
  return (
    <div>
        <Link to={path} className="hover:text-[#d1ff1a] transition-colors relative block px-3 py-2 rounded-md after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">{navitem}</Link>   
    </div>
  )
}

export default NavItem
