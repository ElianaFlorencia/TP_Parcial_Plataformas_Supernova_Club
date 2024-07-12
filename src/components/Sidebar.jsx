import React, { useEffect } from 'react'
import '../styles/Sidebar.css'

import {
    BiBookAlt,
    BiHome,
    BiMessage,
    BiSolidReport,
    BiStats,
    BiTask,
    BiHelpCircle,
} from 'react-icons/bi'
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoBarbellOutline } from "react-icons/io5";
import { GiSupersonicArrow } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export const Sidebar = () => {
    const { user } = useAuth()

    return (
        <div className="sidemenu">
            <div className="sidemenulogo">
               {/* <GiSupersonicArrow className="sidemenulogo-icons" /> */}
                <h3 id="tituloSidebar">Bienvenido</h3>
            </div>

            <div className="sidemenu--list">
                <Link to="/dashboard" className="item">
                    <MdOutlineDashboardCustomize className="sidemenulogo-icons" />
                    Dashboard
                </Link>

                {user.role === 'admin' && (
                    <Link to="/usuarios" className="item">
                        <BiTask className="sidemenulogo-icons" />
                        Usuarios
                    </Link>
                )}

                <Link to="/dashboard" className="item">
                    <HiOutlineDocumentArrowDown className="sidemenulogo-icons" />
                    Pagos
                </Link>
                {user.role !== 'admin' && (
                <Link to="/Reserva" className="item">
                    <IoBarbellOutline className="sidemenulogo-icons" />
                    Reservas
                </Link>
                )}

                <Link to="/Message" className="item">
                    <BiMessage className="sidemenulogo-icons" />
                    Mensaje
                </Link>

                <Link to="/dashboard" className="item">
                    <BiHelpCircle className="sidemenulogo-icons" />
                    Ayuda
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
