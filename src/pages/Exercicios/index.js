import "./exercicios.css"
import BackButton from "../../Components/BackButton";
import ListaExercicios from "../../Components/ListaExercicios";
import Contato from "../../Components/Contato";
import { useContext, useEffect } from "react";
import { MainContext } from "../../Context/Main/MainContext";

export default function Exercicios() {
    const {setLoad} = useContext(MainContext)
    useEffect(()=>{
        setLoad(true)
    },[setLoad])
    
    return (
        <>
            <BackButton/>
            <div className="wrapper-exerc">
                <div className="bg-details"></div>
                <ListaExercicios tipo="logica"/>
                <ListaExercicios tipo="prank"/>
            </div>
            <Contato/>
        </>
    )
}