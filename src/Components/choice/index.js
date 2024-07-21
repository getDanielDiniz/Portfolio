import { Link } from "react-router-dom"
import "./Choice.css"
import { useEffect } from "react";
import BackButton from "../BackButton";

export default function Choice() {
    
    //classifica o button com hover em back ou front
    function classification(id) {
        const isBackEndHovered = id.includes("back");
        isBackEndHovered? blur("back") : blur("front")
    }

    //Manipula o blur no button que não está em hover
    function blur(hovered) {
        const frontContainer = document.querySelector("#front")
        const backContainer = document.querySelector("#back")

        if(hovered == "back") {
            frontContainer.classList.contains("blur") ?
            frontContainer.classList.remove("blur") :
            frontContainer.classList.add("blur")
        }
        else {
            backContainer.classList.contains("blur") ?
            backContainer.classList.remove("blur") :
            backContainer.classList.add("blur")
        }
    }

    return (
        <div className="container">
            <BackButton/>
            <Link className="front" to="/Projetos/FrontEnd" id="front"
                onMouseOver={(e)=> classification(e.target.id)}
                onMouseOut={(e)=> classification(e.target.id)}
            >
                <img src={require("../../assets/icon-front.png")} className="icon-tec" id="frontImg"/>
                <h2>Front-End</h2>
            </Link>
            <Link className="back" to="/Projetos/BackEnd" id="back" 
                onMouseOver={(e)=> classification(e.target.id)}
                onMouseOut={(e)=> classification(e.target.id)}
            >
                <img src={require("../../assets/icon-back.png")} className="icon-tec" id="backImg"/>
                <h2 id="backText">Back-End</h2>
            </Link>
        </div>
    )
}