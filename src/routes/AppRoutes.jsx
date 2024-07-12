import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../App.css'
import Dashboard from '../pages/Dashboard'
import { ProtectedRoute } from '../context/ProtectedRoute'
import { Login } from '../components/Login'
import { Micuenta } from '../pages/Micuenta'
import Usuarios from '../components/Usuarios'
import Message from '../components/Message'
import Reserva from '../components/Reserva'


const AppRoutes = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Login />} />
                {/* <Route  path='/Contacto' element= {<Contacto/>} /> */}
                <Route path="/miCuenta" element={<Micuenta />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
               {/*} <Route
                    path="/dashboard/futbol"
                    element={
                        <ProtectedRoute>
                            <Futbol />
                        </ProtectedRoute>
                    }
                /> */}

               <Route path="/Message" element={<Message />} />
               <Route path="/Reserva" element={<Reserva />} />
            </Routes>
        </div>
    )
}

export default AppRoutes
