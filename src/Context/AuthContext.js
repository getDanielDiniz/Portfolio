import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../services/firebaseConnection";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

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
            async function UserBD() {
                await getDoc(doc(db,'Usuarios',User.uid))
                .then((snapshot)=>{
                setUser(snapshot.data())
                setEmailVerified(User.emailVerified)
                })
            }
        
            if(User){
                UserBD()
            }
            else{
                setUser('')
                setEmailVerified('')
            }
                
            
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