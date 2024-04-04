import { signOut } from "firebase/auth";
import { SlBan } from "react-icons/sl";
import { auth } from "../../services/firebaseConnection";

export default function LogoutButton() {
    
    function logout() {
        signOut(auth)    
    }

    return(
        <button onClick={logout}>
            <SlBan/>
        </button>
    )
}