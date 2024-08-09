import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const MainContext = createContext();

const MainProvider = ({children}) => {
    const [ loadEnd, setLoadEnd] = useState('')//animação do login
    const [openMenu, setOpenMenu] = useState(false)
    const [color,setColor] = useState('#07FE11');
    const [load, setLoad] = useState(false)
    const location = useLocation()

    useEffect(()=>{
        setOpenMenu(false)
    },[location.pathname])

    return(
        <MainContext.Provider value={{
            loadEnd, setLoadEnd, 
            openMenu, setOpenMenu,
            color,setColor,
            load,setLoad
        }}>
            {children}
        </MainContext.Provider>
    )

    
}

export default MainProvider


