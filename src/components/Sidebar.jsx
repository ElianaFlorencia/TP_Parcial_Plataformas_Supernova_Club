import React from 'react'
import { BiBookAlt, BiHome, BiMessage, BiSolidReport, BiStats, BiTask, BiHelpCircle } from 'react-icons/bi';
import './Sidebar.css';


import { Link, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className='sidemenu'> 
        <div className="sidemenulogo">
            <BiBookAlt className="sidemenulogo-icons"/>
            <h2>EduFlex</h2>
        </div>
        
        <div className="sidemenu--list">
            <a href= "#" className= "item">
               <BiHome className="sidemenulogo-icons" />
               Dashboard 
            </a>

            <Link to="/Usuarios" className= "item">
               <BiTask className="sidemenulogo-icons"/>
               Usuarios
            </Link>

            <a href= "#" className= "item">
               <BiSolidReport className="sidemenulogo-icons" />
               Report
            </a>

            <a href= "#" className= "item">
               <BiStats className="sidemenulogo-icons"/>
               Stats
            </a>

            <a href= "#" className= "item">
               <BiMessage className="sidemenulogo-icons"/>
               Message 
            </a>

            <a href= "#" className= "item">
               <BiHelpCircle className="sidemenulogo-icons" />
                Help
            </a>
        </div>
    </div>   
  )
}

export default Sidebar