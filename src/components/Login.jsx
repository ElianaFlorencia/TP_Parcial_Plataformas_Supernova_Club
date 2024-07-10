
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";
import '../styles/Login.css'


export const Login = () => {

    const {login} = useAuth();
    const navigate = useNavigate();

    const handlerLogin = () => {
        login();
        navigate ("/Dashboard")
    }

    return (
        <div className = 'wrapper'>
            <form onSubmit= {(e) => e.preventDefault()}>
                <h2>Login</h2>

                <div className="input-box mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                </div>
                <div className="input-box mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="#"> Forgot password?</a>
                </div>

                <button type="submit" class="btn btn-primary" onClick={handlerLogin}>Submit</button>

               {/* <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div> */}
            </form>
        </div>
    )

}