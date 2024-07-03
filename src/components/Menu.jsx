import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";


export const Menu = () => {
 
    const { logueado, logout } = useAuth();
    const navigate = useNavigate ();

    const handlerLogout = (e) => {
      e.preventDefault ();
      logout ();
      navigate ("/Login")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to= "/"> Inicio </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to= "/Contacto"> Contacto </Link>
                </li>

                { 
                    (logueado)
                    ?   <>
                            <li className="nav-item">
                                <Link className="nav-link" to= "/Dashboard"> Dashboard </Link>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" onClick={handlerLogout}> Logout </a>
                    
                            </li>
                       </>
                    :
                        <li className="nav-item">
                            <Link className="nav-link" to= "/Login"> Login </Link>
                        </li>

                }
                <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/Micuenta" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link Mi Cuenta 
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to= "/Micuenta"> Mi Cuenta </Link>
                    
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        






    )







}