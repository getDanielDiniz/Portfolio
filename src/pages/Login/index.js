import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import './Login.css'
import LogoAnimated from "../../Components/LogoAnimated";
import { toast } from "react-toastify";
import BackButton from "../../Components/BackButton";

export default function Login() {
    
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    let navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,senha).then((snapshot)=>{
            
            //Essa função não pode usar o emailverified do AuthProvider, pois o login é realizado antes do AuthStateChanged

            snapshot.user.emailVerified?
                navigate(-1)
            :
                navigate("/EmailVerification")
        }
        )
        .catch((error)=>{
            toast.error("Email e/ou Senha inválidos")
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