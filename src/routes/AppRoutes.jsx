import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../App.css'
import Dashboard from '../pages/Dashboard'
import { ProtectedRoute } from '../context/ProtectedRoute'
import { Login } from '../components/Login'
import { Micuenta } from '../pages/Micuenta'
import Usuarios from '../components/Usuarios'
import Futbol from '../components/Futbol'

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
                <Route
                    path="/dashboard/futbol"
                    element={
                        <ProtectedRoute>
                            <Futbol />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    )
}

export default AppRoutes
