
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const {login} = useAuth();
    const navigate = useNavigate();

    const handlerLogin = () => {
        login();
        navigate ("/Dashboard")
    }

    return (
        <form onSubmit= {(e) => e.preventDefault()}>
            
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            
            <button type="submit" class="btn btn-primary" onClick={handlerLogin}>Submit</button>
            </form>
    )

}