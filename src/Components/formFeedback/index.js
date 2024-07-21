import { useContext, useState } from "react"
import "./formFeedback.css"
import { format } from "date-fns";
import { AuthContext } from "../../Context/AuthContext";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import EmailNotVerified from "../../pages/EmailNotVerified";

export default function FormFeedback({className}) {

    const [feedback, setFeedback] = useState('');
    const {user} = useContext(AuthContext);
    const {emailVerified} = useContext(AuthContext)
    const navigate = useNavigate()

    async function handleFeedback(e) {
        e.preventDefault()

        if(!feedback || feedback.trim() == ''){
            return toast.error("Mensagem vazia")
        }

        let data = new Date();
        data = format(data,'dd/MM/yyyy')
        let idKeyReact = Math.random().toString(36).substring(2,9)

        if(user) {
            await addDoc(collection(db,'Feedback'),{
                id:idKeyReact,
                idUser: user.id,
                userName: user.nome,
                text: feedback,
                data:data,
                permitido: false        
            })
            .then(()=>{
                toast.success("Seu Feedback foi enviado para avaliação!");
                toast.warn("Sua mensagem será postada se não houver linguagem inapropriada")
                setFeedback('')
            })
            .catch((error)=> {
                toast.error(error);
            })
        }

    }

    return (
        <form className={`formFeedback-component ${className}`} onSubmit={(e)=>handleFeedback(e)}>
            <label className="titulo-formFeedback">Dê seu Feedback:</label>
            <textarea 
            placeholder="Escreva sua opinião ou crítica construtiva" 
            className="textarea-formFeedback"
            value={feedback}
            onChange={(e)=>setFeedback(e.target.value)}></textarea>

            {
                user?(
                    emailVerified?
                       ( <button type="submit" className="button-formFeedback">Enviar</button>)
                    :
                        (<button onClick={()=>navigate("/EmailVerification")} className="button-formFeedback">Verificar email</button>)
                    )
                :
                  (  <button onClick={()=> navigate("/Login")} 
                    className="button-formFeedback">Login</button>)
                
            }
        </form>
    )
}