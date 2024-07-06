/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Paginas//
import { Inicio } from './pages/Inicio'
import { Contacto } from './pages/Contacto'
import { Micuenta } from './pages/Micuenta'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'


//Menu//
import { Menu } from './components/Menu'

//Contextos//
import {AuthProvider} from './context/AuthContext'
import { ProtectedRoute } from './context/ProtectedRoute'
/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

export const App = () => {

  return (
  <AuthProvider>
   <BrowserRouter>
      <Menu />
        <div className= 'container'> 
            <Routes>
              <Route  path='/' element= {<Inicio />} />
              <Route  path='/Contacto' element= {<Contacto/>} />
              <Route  path='/MiCuenta' element= {<Micuenta/>} />
              <Route  path='/Login' element= {<Login/>} />
              <Route  path='/Dashboard' element= {
                <ProtectedRoute>
                  <Dashboard/>
                </ProtectedRoute>
                
                
                } />
            </Routes>   
        </div>
   </BrowserRouter>
   </AuthProvider>
  )

}