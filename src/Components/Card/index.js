import { Link } from "react-router-dom";
import "./CardAnimation.css"
import "./Card.css"
import { DiDotnet } from "react-icons/di";
import { useRef } from "react";

export default function Card({className, projeto}) {

    /* Enviar projeto como objeto */
    return (
        <section className={`card ${className}`}>
            <div className="flip rotate">
                <div className="frontCard">
                    <img 
                        className="iconStack"
                        src={require("./assets/do-sustenido.png")}
                    />
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