import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../services/firebaseConnection";
import { toast } from "react-toastify";
import "./Details.css"
import Error from "../Error";
import BackButton from "../../Components/BackButton";


export default function Details() {
    
    const {id} = useParams()
    const [projeto, setProjeto] = useState({})
    let navigate = useNavigate();

    useEffect(()=>{
        
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
                    <p>{projeto.descricao}</p>
                </section>               
            </main>
        )
    )
}