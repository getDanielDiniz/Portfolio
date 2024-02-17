import Header from "../../Components/Header";
import { useContext } from "react";
import { MainContext } from "../../Context/Main/MainContext";
import { SlArrowDown } from "react-icons/sl";
import Choice from "../../Components/choice";
import "./Projetos.css"

export default function Projetos() {
    const {setOpenMenu} = useContext(MainContext)

    return (
        <>
            <Header/>
            <main id="main" >
                <button className="menu-button menu-projeto" onClick={()=> setOpenMenu(true)}>
                    <SlArrowDown className="icon-black"/>
                </button>
                <Choice/>
            </main>
        </>
    
)

}