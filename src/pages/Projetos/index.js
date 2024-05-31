import Header from "../../Components/Header";
import { useContext,useState,useEffect } from "react";
import { MainContext } from "../../Context/Main/MainContext";
import { SlArrowDown } from "react-icons/sl";
import Choice from "../../Components/choice";
import "./Projetos.css"
import { useParams, useNavigate } from "react-router-dom";
import Card from "../../Components/Card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import Error from "../Error";

export default function Projetos() {
    const {setOpenMenu} = useContext(MainContext)
    const {stack} = useParams()
    const [projetos, setProjetos] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{

        async function getProjetos(params) {
            
            const projetosTemp = []
    
            await getDocs(collection(db,"Projetos")).then((snapshot)=>{
                snapshot.forEach((doc)=>{
                    if(doc.data().stack == stack){
                        projetosTemp.push(doc.data())
                    }
                })
            })

            setProjetos(projetosTemp)
        }

        getProjetos()
        
    },[stack])
    
    
    if(stack && projetos.length < 1){
        return(
            <Error/>
        )
    }

    return (
        stack? 
            (
                <>
                    <Header/>
                    <main id="main" >
                        <button className="menu-button menu-projeto" onClick={()=> setOpenMenu(true)}>
                            <SlArrowDown/>
                        </button>
                        {
                            projetos.map((projeto)=>{
                                return(
                                    <Card projeto={projeto} key={projeto.id}/>
                                )
                            })
                        }
                    </main>
                </>
            )
        :
            <Choice/>
    )

}