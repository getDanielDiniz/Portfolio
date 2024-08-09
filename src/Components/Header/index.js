import { useContext, useEffect} from "react"
import "./header.css"
import { Link, useHref } from "react-router-dom"
import { MainContext } from "../../Context/Main/MainContext"
import { SlArrowUp } from "react-icons/sl";
import LogoutButton from "../LogoutButton";

/*  É necessario para o funcionamento do Header: 
    configuração no arquivo Routes
    Tag Main com id main
    button com onClick={()=> setOpenMenu(true)} 
    const {setOpenMenu} = useContext(MainContext)
*/

export default function Header() {

    const {openMenu} = useContext(MainContext)
    const {setOpenMenu} = useContext(MainContext)
    let link_atual = useHref()

    //Manipulação de abertura e fechamento do Header de acordo com o rook openMenu
    useEffect(()=>{
        const header = document.querySelector("#header");
        const main = document.querySelector('#main')
        if(openMenu == true) {
            header.classList.remove("first-stage")
            main.classList.add("blur")
        }
        else {
            main.classList.remove("blur")
            header.classList.add("first-stage")
        }
    },[openMenu])


    /*Manipula a classe .ativo toda vez que o Header é renderizado
      IMPORTANTE que a rota e o link tenham o mesmo texto*/
    useEffect(()=>{
            const listaDeLinks_Header = document.querySelectorAll(`.link-menu_header`)
            listaDeLinks_Header.forEach((e)=>{
                
                let link_temp = e;
                link_atual.includes(link_temp.innerHTML)?
                e.classList.add("ativo"):
                e.classList.contains("ativo") && e.classList.remove("ativo")
            })
    },[])

    return (
        
        <header id="header" className="first-stage">
            <Link to="/" 
            className="link-logo">
                <img src={require("../../assets/escolhida.png")} className="logo-header"/>
            </Link>
            <nav className="menu-header">
                <Link to="/Frames" 
                className="link-menu_header">
                    Frames
                </Link>
                <Link to="/Projetos" 
                className="link-menu_header">
                    Projetos
                </Link>
                <Link to="/Exercicios" 
                className="link-menu_header">
                    Exercicios
                </Link>
                <Link to="/Feedback" 
                className="link-menu_header">
                    Feedback
                </Link>
                <LogoutButton/>
                <button className="menu-button" onClick={()=> setOpenMenu(false)}>
                    <SlArrowUp/>
                </button>
            </nav>
        </header>

    )
}