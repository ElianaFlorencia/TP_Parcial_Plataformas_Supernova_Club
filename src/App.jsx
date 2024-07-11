import { BrowserRouter } from 'react-router-dom'
//Paginas//
//Menu//
// Dashboard --> Usuarios //
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
