import { MainContext } from "../../Context/Main/MainContext"
import { SlArrowDown } from "react-icons/sl";
import { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import "./Feedback.css"
import FormFeedback from "../../Components/formFeedback";
import Contato from "../../Components/Contato";

export default function Feedback() {

    const {setOpenMenu} = useContext(MainContext)
    const [listaDB, setListaDB] = useState([])
    const {setLoad} = useContext(MainContext)
    
    useEffect(()=>{
        setLoad(true)

        async function realtime() {
                
            await getDocs(collection(db,"Feedback")).then((promisse)=>{
                let listaFeedback = [];
                promisse.forEach((e)=>{
                    listaFeedback.push(e.data())
                });
                setListaDB(listaFeedback)
            })
            
        }

        realtime()
    },[])

     return (
        <>
            <Header/>
            <main id="main" className="conteudo-feedback">
                <button className="menu-button" onClick={()=> setOpenMenu(true)}>
                    <SlArrowDown className="icon-header"/>
                </button>
                <FormFeedback className="form-feedback"/>
                <ul className="lista-feedback">
                    {
                        listaDB.map((feedback)=>{
                            if(feedback.permitido) {
                                return(
                                    <li className="feedback" key={feedback.id}>
                                        <span className="email-feedback">{feedback.userName}</span>
                                        <hr/>
                                        <p className="text-feedback">{feedback.text}</p>
                                        <span className="data-feedback">{feedback.data}</span>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <Contato/>
            </main>
        </>
     )
}