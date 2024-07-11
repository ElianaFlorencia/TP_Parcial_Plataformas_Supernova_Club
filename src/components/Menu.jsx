import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { GiSupersonicArrow } from 'react-icons/gi';
import '../styles/Menu.css'

export const Menu = () => {
    const { logueado, logout } = useAuth()
    const navigate = useNavigate()

    const handlerLogout = (e) => {
        e.preventDefault()
        logout()
        navigate('/')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar custom">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <GiSupersonicArrow size={30} />
                <span className="navbar-title">CIT CLUB</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">
                                {' '}
                                Inicio{' '}
                            </Link>
                        </li>
                        {/*<li className="nav-item">
                <Link className="nav-link" to= "/Contacto"> Contacto </Link>
                </li> */}

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="/Micuenta"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Mi Cuenta
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                {/*  <Link className="dropdown-item" to= "/Micuenta"> Perfil </Link> */}
                                {logueado ? (
                                    <>
                                        <li className="nav-item">
                                            <Link
                                                className="dropdown-item"
                                                to="/Dashboard"
                                            >
                                                {' '}
                                                Dashboard{' '}
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                                onClick={handlerLogout}
                                            >
                                                {' '}
                                                Logout{' '}
                                            </a>
                                        </li>
                                    </>
                                ) : (
                                    <li className="nav-item">
                                        <Link className="dropdown-item" to="/">
                                            {' '}
                                            Login{' '}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
