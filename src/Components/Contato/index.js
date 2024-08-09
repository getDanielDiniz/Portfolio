import "./contatos.css"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FaFileArrowDown } from "react-icons/fa6";
import { useContext, useState } from "react";
import { ContatoContext } from "../../Context/ContatoContext";

export default function Contato() {
    
    const [stateClass, setStateClass] = useState('')
    const {contato} = useContext(ContatoContext)
    
    return (
        <div className={`container-contato ${stateClass}`}>
            <button className="open-modalContato" 
            onClick={()=>{
                stateClass == ''?
                setStateClass("contato-ativo"):
                setStateClass('')
            }}>
                <a title="Contato">
                    <BsTelephone/>
                </a>
            </button>
            <section className="modal-contato">
                <a target="_blank" 
                href={`${contato.whatsapp}`} 
                title="Whatsapp">        
                    <FaWhatsapp/>
                </a>
                <a target="_blank" 
                href={`${contato.instagram}`} 
                title="Instagram">
                    <FaInstagram/>
                </a>
                <a target="_blank" 
                href={`${contato.github}`}
                title="Github">
                    <FaGithub/>
                </a>
                <a target="_blank" 
                href={`${contato.linkedin}`}
                title="Linkedin">
                    <FaLinkedinIn/>
                </a>
                <a 
                href={`${contato.curriculo}`}
                title="Baixar Curriculo">
                    <FaFileArrowDown/>
                </a>

            </section>
        </div>
    )
}