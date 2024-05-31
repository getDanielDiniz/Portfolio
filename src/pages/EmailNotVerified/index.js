import { sendEmailVerification, signOut } from "firebase/auth"
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { auth } from "../../services/firebaseConnection";
import "./EmailNotVerified.css"
import BackButton from "../../Components/BackButton";


export default function EmailNotVerified({user}) {
    const{actionCodeSettings} = useContext(AuthContext);

    async function reenviar() {
        return await sendEmailVerification(user,actionCodeSettings)
        .then(()=>{
            alert("Sucesso")
        })
        .catch((error)=>{
            alert(`Erro ${error}`)
        })
    }

    function logout() {
        signOut(auth)
        window.location.reload()
    }

    return(
        <main className="container-notVerified">
            <BackButton/>
            <div className="img-notVerified"></div>
            <div className="conteudo-notVerified">
                <span>Olá!</span>
                <span>Seja muito bem vindo ao meu portfólio</span>
                <p>Chequei aqui, e vi que seu email ainda não foi verificado.</p>
                <p>Que tal verificarmos?</p>
                <p>E, se precisar que enviemos outro email, é só apertar o botão abaixo</p>
                <div className="containerButtons-notVerified">
                    <button onClick={reenviar}>Reenviar</button>
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
        </main >
    )
}