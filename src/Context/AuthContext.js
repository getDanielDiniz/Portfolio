import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConnection";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState('');
    const actionCodeSettings = {
        url: 'http://localhost:3000',
        handleCodeInApp: true,
        locale:'pt-BR'
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(User)=> {
            setUser(User)
        })

    },[])

    return(
        <AuthContext.Provider value={{
            user,setUser,
            actionCodeSettings,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider