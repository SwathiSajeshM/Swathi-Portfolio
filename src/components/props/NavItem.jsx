import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({navitem, path}) => {
  return (
    <div>
        <Link to={path} className="hover:text-gray-300 transition-colors">{navitem}</Link>   
    </div>
  )
}

export default NavItem
