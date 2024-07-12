import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Paginas//
//Menu//
// Dashboard --> Usuarios //
import {Usuarios} from './components/Usuarios'
import Listausuarios from './components/Listausuarios';

//Contextos//
import { AuthProvider } from './context/AuthContext'
import AppRoutes from './routes/AppRoutes'

export const App = () => (
    <AuthProvider>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </AuthProvider>
)
