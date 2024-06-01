import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { SlLogin } from "react-icons/sl";
import { SlLogout } from "react-icons/sl";
import { Link } from "react-router-dom";
import { MainContext } from "../../Context/Main/MainContext";
import "./LogoutButton.css"

export default function LogoutButton() {
    
    const {user} = useContext(AuthContext)
    const {setOpenMenu} = useContext(MainContext)
    

    function logout() {
        signOut(auth)    
    }

    return(
        user?
            (<button onClick={logout} className="log-button logout">
                <span className="log-text">Logout</span>
            </button>)
        :
            (<Link to="/Login" className="log-button"
            onClick={()=> setOpenMenu(false)}>
            <span className="log-text">Login</span>
            </Link>)
    )
}