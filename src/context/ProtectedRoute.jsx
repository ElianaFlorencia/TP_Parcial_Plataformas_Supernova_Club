import { useAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ( {children, role}) => {

    const { user } = useAuth();
    
    if (!user) {
        return <Navigate to="/" />;
      }
    
      if (role && user.role !== role) {
        return <Navigate to="/Inicio" />;
      }
    
      return children;
    };
     





