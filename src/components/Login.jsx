import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import { useState } from 'react'

export const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handlerLogin = (e) => {
        e.preventDefault()
        login(email, password)
            .then((user) => {
                if (user.role === 'admin') {
                    navigate('/Dashboard')
                } else if (user.role === 'user') {
                    navigate('/Dashboard')
                } else if (user.role === 'user') {
                    navigate('/Reservas')
                }else {
                    setError('Role no válido')
                }
            })
            .catch((err) => {
                setError('Credenciales incorrectas, vuelva ingresar los datos.')
            })
    }

    return (
        <div className="main_container">
            <div className="wrapper">
                <form onSubmit={handlerLogin}>
                    <h2>Login</h2>

                    {error && <p className="error">{error}</p>}

                    <div className="input-box mb-3">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                        >
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-box mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Remember Me
                        </label>
                        <a href="#"> Forgot password?</a>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;
