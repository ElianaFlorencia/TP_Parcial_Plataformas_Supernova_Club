import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import { useState } from 'react'

export const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlerLogin = (values) => {
        login(email, password)
        navigate('/dashboard')
    }

    return (
        <div className="main_container">
            <div className="wrapper">
                <form onSubmit={(e) => e.preventDefault()}>
                    <h2>Login</h2>

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

                    <button
                        onClick={(e) => handlerLogin(e)}
                        type="submit"
                        className="btn btn-primary"
                    >
                        Submit
                    </button>

                    {/* <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div> */}
                </form>
            </div>
        </div>
    )
}
