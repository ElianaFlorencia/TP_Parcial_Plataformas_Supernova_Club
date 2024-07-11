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
import { GiSupersonicArrow } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export const Sidebar = () => {
    const { user } = useAuth()

    return (
        <div className="sidemenu">
            <div className="sidemenulogo">
                <GiSupersonicArrow className="sidemenulogo-icons" />
                <h3>Bienvenido</h3>
            </div>

            <div className="sidemenu--list">
                <Link to="/dashboard" className="item">
                    <BiHome className="sidemenulogo-icons" />
                    Dashboard
                </Link>

                {user.role === 'admin' && (
                    <Link to="/usuarios" className="item">
                        <BiTask className="sidemenulogo-icons" />
                        Usuarios
                    </Link>
                )}

                <a href="#" className="item">
                    <BiSolidReport className="sidemenulogo-icons" />
                    Report
                </a>

                <a href="#" className="item">
                    <BiStats className="sidemenulogo-icons" />
                    Stats
                </a>

                <a href="#" className="item">
                    <BiMessage className="sidemenulogo-icons" />
                    Message
                </a>

                <a href="#" className="item">
                    <BiHelpCircle className="sidemenulogo-icons" />
                    Help
                </a>
            </div>
        </div>
    )
}

export default Sidebar
