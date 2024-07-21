import { createContext, useState } from "react";


export const MainContext = createContext();

const MainProvider = ({children}) => {
    const [ loadEnd, setLoadEnd] = useState('')
    const [openMenu, setOpenMenu] = useState(false)
    const [color,setColor] = useState('#07FE11');

    return(
        <MainContext.Provider value={{
            loadEnd, setLoadEnd, 
            openMenu, setOpenMenu,
            color,setColor
        }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider