import { Link } from "react-router-dom";
import "./CardAnimation.css"
import "./Card.css"
import { useContext, useEffect } from "react";
import { MainContext } from "../../Context/Main/MainContext";

const handlerImg = {
    "react" : require("./assets/react.png"), 
    "js" : require("./assets/js.png"),
    "net" : require("./assets/c.png"),
    "java" : require("./assets/java.png"),
    "bootstrap" : require("./assets/bootstrap.png"),
    "go" : require("./assets/golang.png"),
    "next" : require("./assets/next.png"),
    "node" : require("./assets/nodejs.png"),
    "tailwind" : require("./assets/tailwind.png"),
    "typescript" : require("./assets/typescript.png"),
    
}


export default function Card({className, projeto}) {
    
    const {setLoad} = useContext(MainContext)
    useEffect(()=>{setLoad(true)},[])

    /* Enviar projeto como objeto */
    return (
        <section className={`card ${className}`}>
            <div className="flip rotate">
                <div className="frontCard">
                    {
                        projeto.mainTech &&
                    <img 
                        className="iconStack"
                        src={handlerImg[projeto.mainTech]}
                    />
                    }
                    <h3>{projeto.titulo}</h3>
                </div>
                <div className="backCard">
                    <p>{projeto.descricao}</p>
                    <Link to={`/Projetos/FrontEnd/${projeto.id}`}>Detalhes</Link>
                </div>
            </div>
        </section>
    )
}