import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import './Login.css'
import LogoAnimated from "../../Components/LogoAnimated";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";
import BackButton from "../../Components/BackButton";

export default function Login() {
    
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    const {emailVerified} = useContext(AuthContext)
    let navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,senha).then(()=>
            emailVerified?
                navigate(-1)
            :
                navigate("/EmailVerification")
        )
        .catch((error)=>{
            toast(error)
        })
    }

    return (
        <main className={`flex-centralize `}>
            <BackButton/>
            <LogoAnimated 
            texto={"<p get(DanielDiniz)/>"}
            className="logo-login"/>
            <form className="form-login" onSubmit={(e)=>handleLogin(e)}>
                <label>Email:</label>
                <input 
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}></input>
                <label>Senha:</label>
                <input 
                type="password"
                value={senha}
                onChange={(e)=>setSenha(e.target.value)}></input>
                <button type="submit">Entrar</button>
                <Link to="/Cadastro" className="link-cadastro">Cadastre-se</Link>
            </form>
        </main>

    )
}