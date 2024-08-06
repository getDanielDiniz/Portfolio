import "./exercicios.css"
import BackButton from "../../Components/BackButton";
import ListaExercicios from "../../Components/ListaExercicios";

export default function Exercicios() {

    return (
        <main>
            <BackButton/>
            <div className="wrapper-exerc">
                <div className="bg-details"></div>
                <ListaExercicios tipo="logica"/>
                <ListaExercicios tipo="prank"/>
            </div>
        </main>
    )
}