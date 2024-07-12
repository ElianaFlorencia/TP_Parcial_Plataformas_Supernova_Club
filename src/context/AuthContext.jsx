import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [logueado, setLogueado] = useState(false)

    const login = (email, password) => {
        return new Promise((resolve, reject) => {
          
            if (email === 'admin@example.com' && password === 'admin') {
                const user = { email, role: 'admin' }
                setUser(user)
                resolve(user)
                setLogueado(true)
            } else if (email === 'user@example.com' && password === 'user') {
                const user = { email, role: 'user' }
                setUser(user)
                resolve(user)
                setLogueado(true)
            } else {
                reject('Credenciales incorrectas')
            }
        })
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, logueado }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
