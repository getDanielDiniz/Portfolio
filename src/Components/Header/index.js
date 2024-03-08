import { useContext, useEffect} from "react"
import "./header.css"
import { Link } from "react-router-dom"
import { MainContext } from "../../Context/Main/MainContext"
import { SlArrowUp } from "react-icons/sl";

/*  É necessario para o funcionamento do Header: 
    configuração no arquivo Routes
    Tag Main com id main
    button com onClick={()=> setOpenMenu(true)} 
    const {setOpenMenu} = useContext(MainContext)
*/

export default function Header() {
    
    const {linkAtivo} = useContext(MainContext)
    const {setLinkAtivo} = useContext(MainContext)
    const {openMenu} = useContext(MainContext)
    const {setOpenMenu} = useContext(MainContext)

    function linkAtivo_function(linkClicado) {
        setLinkAtivo(linkClicado)

        //fecha o header ao mudar de página - não fecha clicando no link ativo
        linkClicado != linkAtivo && setOpenMenu(false)
    }

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


    //Manipula a classe .ativo toda vez que o Header é renderizado
    useEffect(()=>{
        if(linkAtivo){
            const linkPaginaAtual = document.querySelectorAll(`.link-menu_header`)
            linkPaginaAtual.forEach((e)=>{
                const testaLink = linkAtivo.innerHTML == e.innerHTML; 
                
                testaLink?
                e.classList.add("ativo"):
                e.classList.contains("ativo") && e.classList.remove("ativo")
            })
        }

    },[])

    return (
        
        <header id="header" className="first-stage">
            <Link to="/" className="link-logo" onClick={(e) => linkAtivo_function(e.target)}>
                <img src={require("../../assets/escolhida.png")} className="logo-header"/>
            </Link>
            <nav className="menu-header">
                <Link to="/Projetos" className="link-menu_header" onClick={(e) => linkAtivo_function(e.target)}>
                    Projetos
                </Link>
                <Link to="https://github.com/getDanielDiniz" className="link-menu_header" onClick={(e) => linkAtivo_function(e.target)}>
                    GitHub
                </Link>
                <Link to="/Sobre" className="link-menu_header" onClick={(e) => linkAtivo_function(e.target)}>
                    Sobre Mim
                </Link>
                <Link to="/Feedback" className="link-menu_header" onClick={(e) => linkAtivo_function(e.target)}>
                    Feedback
                </Link>
                <button className="menu-button" onClick={()=> setOpenMenu(false)}>
                    <SlArrowUp/>
                </button>
            </nav>
        </header>

    )
}