import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../../services/firebaseConnection";
import { toast } from "react-toastify";
import "./Details.css"
import Error from "../Error";
import BackButton from "../../Components/BackButton";
import Contato from "../../Components/Contato";
import { MainContext } from "../../Context/Main/MainContext";


export default function Details() {
    
    const {id} = useParams()
    const [projeto, setProjeto] = useState({})
    const {setLoad} = useContext(MainContext)
    let navigate = useNavigate();

    
    
    useEffect(()=>{
        setLoad(true)
        
        async function getDetails() {
            await getDoc(doc(db,"Projetos",id))
            .then((snapshot)=>{
                setProjeto(snapshot.data())
            })
            .catch((error)=>{
                toast.error(error)
            })
        }

        getDetails()
        
    },[])
    
    return (
        !projeto ? <Error/> 
        :(
            <main className="details">
                <div className="bg-details"></div>
                <BackButton className="volta"/>
                <section className="conteudo">
                    <h1>{projeto.titulo}</h1>
                    <p>{projeto.readme}</p>
                    <div className="divLinks-details">
                        <button onClick={()=>window.location.href = (projeto.link)} className="link-details">Código Fonte</button> 
                        {
                            projeto.host && 
                            <button onClick={()=>window.open(projeto.host)} className="link-details">Hospedagem</button>    
                        }   
                    </div>    
                    {
                        projeto.obs && <p>-- {projeto.obs}</p>
                    }           
                </section>
                <Contato/>
            </main>
        )
    )
}