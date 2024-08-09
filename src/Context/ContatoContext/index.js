import { doc, getDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../../services/firebaseConnection";


export const ContatoContext = createContext()

export const ContatoProvider = ({children})=>{

    const [contato, setContato] = useState({})
   
    async function getContatos() {
        await getDoc(doc(db, "Contatos", "qW7SCN4XWgrbWAJxzeWE"))
        .then((snapshot)=>{
            setContato(snapshot.data())
        })
    }
    
    useEffect(()=>{
        getContatos()
    },[])

    return(
        <ContatoContext.Provider value={{
            contato,setContato,
        }}>
            {children}
        </ContatoContext.Provider>
    )
}