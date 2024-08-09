import { useEffect, useState } from "react";
import "./ScrollAnimation.css"
import { GoArrowDown } from "react-icons/go";
import { GoArrowUp } from "react-icons/go";

export const ScrollAnimation = ()=>{
    
    const [hasScrolled, setHasScrolled] = useState(false)
    
    useEffect(()=>{
        const pagina = document.querySelector('body')
        
        window.addEventListener('scroll',(event)=>{
            const position = pagina.getBoundingClientRect().top
            setHasScrolled(position)
        })

        
    },[hasScrolled])
    
    return(

        <>
        {
           hasScrolled < -150 ?
            <div className="container-animation scrollTo"  
            onClick={()=>{
                window.scrollTo({
                    top:0,
                    behavior:'smooth',
                })
            }
        }>
                <GoArrowUp className="arrow"/>
                <span>Clique para voltar ao topo</span>
            </div>
            :
            <div className="container-animation">
                <GoArrowDown className="arrow"/>
                <span>Role para ver mais conteúdo</span>
            </div>
        }
            
        </>
    )
}