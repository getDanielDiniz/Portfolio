import { MainContext } from "../../Context/Main/MainContext"
import { SlArrowDown } from "react-icons/sl";
import { useContext } from "react";
import Header from "../../Components/Header";

export default function Feedback() {

    const {setOpenMenu} = useContext(MainContext)

     return (
        <>
            <Header/>
            <main id="main" className="conteudo-feedback">
                <button className="menu-button" onClick={()=> setOpenMenu(true)}>
                    <SlArrowDown className="icon-header"/>
                </button>
            </main>
        </>
     )
}