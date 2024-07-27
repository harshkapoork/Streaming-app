import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Create from './create'
import {isActiveStyles,isNotActiveStyles} from '../utils/style'

function LogOut() {
    const navigate= useNavigate()
    const handleClick = () => {
        window.localStorage.setItem("auth", "false")
        navigate("/login",{require:true})
    }
  return (
      <div className=' bg-yellow-600 flex  justify-evenly font-bold text-lg'>
          <NavLink className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles} to="/post" element={<Create />}  to="/" element={<Create />}>Home</NavLink>
        
          <NavLink className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles} to="/post" element={<Create />}>Create</NavLink>
          <NavLink className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles} to="/post" element={<Create />} onClick={handleClick} to="/login" element={<Create />}>Sign Out</NavLink>
        
          
        
      
    </div>
  ) 
}

export default LogOut
