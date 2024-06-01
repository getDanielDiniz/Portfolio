import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConnection";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState('');
    const [ emailVerified,setEmailVerified] = useState()
    const actionCodeSettings = {
        url: 'http://localhost:3000',
        handleCodeInApp: true,
        locale:'pt-BR'
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(User)=> {
            setUser(User)
            User && setEmailVerified(User.emailVerified)
        })

    },[])

    return(
        <AuthContext.Provider value={{
            user,setUser,
            actionCodeSettings,
            emailVerified,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider