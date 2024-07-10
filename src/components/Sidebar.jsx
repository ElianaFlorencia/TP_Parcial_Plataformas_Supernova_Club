import React from 'react'
import '../styles/Sidebar.css';

import { BiBookAlt, BiHome, BiMessage, BiSolidReport, BiStats, BiTask, BiHelpCircle,} from 'react-icons/bi';
import { GiSupersonicArrow } from "react-icons/gi";


import { Link, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className='sidemenu'> 
        <div className="sidemenulogo">
            <GiSupersonicArrow  className="sidemenulogo-icons"/>
            <h3>Bienvenido</h3>
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