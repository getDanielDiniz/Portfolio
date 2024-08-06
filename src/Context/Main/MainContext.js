import { createContext, useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export const MainContext = createContext();

const MainProvider = ({children}) => {
    const [ loadEnd, setLoadEnd] = useState('')
    const [openMenu, setOpenMenu] = useState(false)
    const [color,setColor] = useState('#07FE11');
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
        <MainContext.Provider value={{
            loadEnd, setLoadEnd, 
            openMenu, setOpenMenu,
            color,setColor,
            contato, setContato
        }}>
            {children}
        </MainContext.Provider>
    )

    
}

export default MainProvider


