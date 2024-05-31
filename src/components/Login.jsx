import {auth} from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate  } from 'react-router-dom';
import { useState } from 'react'


const Login = () => {
    

    const navigate = useNavigate();
    // const [showPassword, setShowPassword] = useState(false);

    const functAutentication = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const password = e.target.password.value;

        try {
            await signInWithEmailAndPassword(auth, correo, password);
            navigate('/admin');
        } catch (error) {
            console.error("Error al iniciar sesión:", error.message);
        }
    }

    // const togglePasswordVisibility = () => {
    //     setShowPassword(!showPassword);
    // };


  return (
        <main>
            <section>
                <div className="container">
                    <h3>Login</h3>
                    <form onSubmit={functAutentication}>
                                <div className="form-group">
                                    <label className="labelForm label-form">Correo electrónico</label>
                                    <input type='email' placeholder='Correo electrónico' id="email" />
                                </div>
                                <div className="form-group">
                                    <label className="labelForm label-form">Contraseña</label>
                                    <div className="password-group">
                                        <input  placeholder="Contraseña" id="password" />
                                        {/* <span onClick={togglePasswordVisibility}>TIENE QUE CAMBIAR</span> */}
                                    </div> 
                                </div>
                                <button className='btn btn-primary mt-3 form-control btnSubmit' type='submit'>Iniciar sesión</button>
                    </form>
                </div>
            </section>
        </main>
  )
}

export default Login