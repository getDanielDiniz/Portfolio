import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";


export default function ListaExercicios({tipo}) {
    
    const [exerc,setExerc] = useState([])
    let h1 = tipo == "logica"? "Exercicios de Lógica:" : "Pranks:" 
    useEffect(()=>{
        async function getExerc() {

            const projetosTemp = []

            await getDocs(collection(db,"Exercicios")).then((snapshot)=>{
                snapshot.forEach((doc)=>{
                    if(doc.data().tipo == tipo){
                        projetosTemp.push(doc.data())
                    }
                })
            })
            setExerc(projetosTemp)
        }
        getExerc()
    },[tipo])


    return (
        <div className="container-exerc ">
                    <h1>{h1}</h1>
                    <ul className="lista-exerc">
                       {
                        exerc.map((elemento)=>{
                            return(
                            <li className="item-lista_exerc" key={elemento.link}>
                                <a href={elemento.link}>{elemento.nome}</a>
                            </li>
                            )
                        })
                       }
                    </ul>
                </div>  
    )
}