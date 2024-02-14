import { createContext, useState } from "react";


export const HomeContext = createContext();

const HomeProvider = ({children}) => {
    const [ loadEnd, setLoadEnd] = useState('')

    return(
        <HomeContext.Provider value={{loadEnd, setLoadEnd}}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeProvider