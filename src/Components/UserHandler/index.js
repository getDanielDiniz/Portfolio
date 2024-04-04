import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { useEffect, useState } from "react";
import EmailNotVerified from "../EmailNotVerified";
import { useNavigate } from "react-router-dom";

export default function UserHandler({children}) {
    
    const {user} = useContext(AuthContext);
    const {setUser} = useContext(AuthContext);
    const [ emailVerified,setEmailVerified] = useState(true)
    const navigate = useNavigate()

    useEffect(()=>{
        if(user){
            navigate("/")
            setEmailVerified(user.emailVerified)
        }
        else{
            navigate("/Login")
        }
    },[user])

    return(
        <>
            { 
                emailVerified?
                (children):
                <EmailNotVerified user={user}/>
            }
        </>
    )
    
}