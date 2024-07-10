import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Paginas//
import { Inicio } from './pages/Inicio'
import { Contacto } from './pages/Contacto'
import { Micuenta } from './pages/Micuenta'
import { Login } from './components/Login'
import { Dashboard } from './pages/Dashboard'
//Menu//
import { Menu } from './components/Menu'
// Dashboard --> Usuarios //
import  {Usuarios} from './components/Usuarios'
//Contextos//
import {AuthProvider} from './context/AuthContext'
import { ProtectedRoute } from './context/ProtectedRoute'


export const App = () => {

  return (
  <AuthProvider>
   <BrowserRouter>
      <Menu />
        <div className= 'container'> 
            <Routes>
              <Route  path='/' element= {<Inicio/>} />
              {/* <Route  path='/Contacto' element= {<Contacto/>} /> */}
              <Route  path='/MiCuenta' element= {<Micuenta/>} />
              <Route  path='/Login' element= {<Login/>} />
              <Route  path='/Dashboard' element= {
                <ProtectedRoute>
                  <Dashboard/>
                </ProtectedRoute>
                
                
              } />

              <Route path='/Usuarios' element={<Usuarios />} />

            </Routes>   
        </div>
   </BrowserRouter>
   </AuthProvider>
  )

}