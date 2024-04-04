import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword , sendEmailVerification} from "firebase/auth";
import { auth, db } from "../../services/firebaseConnection";
import { doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../../Context/AuthContext";
import { SlReload } from "react-icons/sl";
import { GoArrowLeft } from "react-icons/go";
import { toast } from "react-toastify";
import "./Cadastro.css"
import 'react-toastify/dist/ReactToastify.css';

export default function Cadastro() {
    
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    const [nome,setNome] = useState('')
    const [angulo,setAngulo] = useState(0)
    const{actionCodeSettings} = useContext(AuthContext);


    async function cadastrar(e) {
        e.preventDefault();

        if(nome.trim() == '' || nome == null){
            return toast.error('Nome não preenchido ou inválido')
        }
        
        await createUserWithEmailAndPassword(auth,email,senha)
        .then((snapshot)=>{
            const userData = {
                nome:nome,
                email:email,
                id:snapshot.user.uid
            }
            setDoc(doc(db,"Usuarios",snapshot.user.uid),userData)
            
            return sendEmailVerification(snapshot.user,actionCodeSettings)
        })
        .catch((erro)=> {
            erro = erro.code
            toast.error(erro.toString())
        })
    
    }

    return(
        <main className="container-cadastro">
            <Link to="/Login"><GoArrowLeft/></Link>
            <form className="form-cadastro" 
            onSubmit={(e)=>cadastrar(e)} 
            style={{transform: `rotate(${angulo}deg)`, 
            transition: "all 1s"}}>
                <label>Nome:</label>
                <input value={nome} 
                onChange={(e)=> setNome(e.target.value)}></input>
                <label>Email:</label>
                <input value={email} 
                onChange={(e)=> setEmail(e.target.value)}></input>
                <label>Senha:</label>
                <input type="password"
                value={senha} 
                onChange={(e)=> setSenha(e.target.value)}></input>
                <button type="submit">Cadastrar</button>
            </form>
            <button className="rotate-button" 
            onClick={() => setAngulo(angulo + 90)}>
                <SlReload className="reload-icon"/></button>
        </main>
    )
}