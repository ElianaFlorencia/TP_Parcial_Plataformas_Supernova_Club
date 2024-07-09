
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


        <section id="Login">

            <div id="LoginInterface">
        <form onSubmit= {(e) => e.preventDefault()}>
            

            <div  className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">ingrese su email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp"/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">ingrese su contraseña</label>
                <input type="password" className="form-control" placeholder="Contraseña" id="exampleInputPassword1"/>
            </div>
            
            <button type="submit" class="btn btn-primary" onClick={handlerLogin}>Iniciar Sesión</button>

             <div>
                <p>no tenés cuenta? <a href="Registro.jsx">crear cuenta.</a> </p>
             </div>
            </form>
            </div>
            </section>
    )

}