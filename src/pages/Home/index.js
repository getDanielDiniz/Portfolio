import { useContext } from "react";
import LogoAnimated from "../../Components/LogoAnimated";
import { MainContext } from "../../Context/Main/MainContext";
import "./Home.css"
import Header from "../../Components/Header";
import { SlArrowDown } from "react-icons/sl";


export default function Home() {
    
    const {loadEnd} = useContext(MainContext)
    const {setOpenMenu} = useContext(MainContext)
    const date = new Date()
    
    return (
        <>
            {
                loadEnd != true && <LogoAnimated/>
            }
            {
                loadEnd == true && (
                    <>
                        <Header/>
                        <main id="main" className="conteudo-home"> 
                            <img src={require("../../assets/fotolado.jpeg")} className="foto-home"></img>
                            <div className="text-home">
                                <div className="text-developer">                                
                                    <span>Developer</span><br/>
                                </div>
                                <h1 className="nome">Daniel Diniz</h1>
                                <div>
                                    <span className="data">{date.getFullYear()}</span>
                                    <button className="menu-button" onClick={()=> setOpenMenu(true)}>
                                        <SlArrowDown/>
                                    </button>
                                </div>
                            </div>
                        </main>
                    </>
                )
            }
            
        </>
    )
}