import { GoArrowLeft } from "react-icons/go"
import { useNavigate } from "react-router-dom"
import "./BackButton.css"

export default function BackButton() {
    
    const navigate = useNavigate()

    return (
        <button onClick={()=>navigate(-1)} 
        className="back-button">
             <GoArrowLeft className="back-icon"/>
        </button>
    )
}