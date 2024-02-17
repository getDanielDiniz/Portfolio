import { createContext, useState } from "react";


export const MainContext = createContext();

const MainProvider = ({children}) => {
    const [ loadEnd, setLoadEnd] = useState('')
    const [openMenu, setOpenMenu] = useState('')
    const [linkAtivo, setLinkAtivo] = useState("")

    return(
        <MainContext.Provider value={{loadEnd, setLoadEnd, openMenu, setOpenMenu, linkAtivo,setLinkAtivo}}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider