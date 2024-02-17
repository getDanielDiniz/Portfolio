import { useContext, useEffect, useState } from "react";
import "./LogoAnimated.css"
import { MainContext } from "../../Context/Main/MainContext";


export default function LogoAnimated() {
    
    const [logoLoop, setLogoLoop] = useState('');
    const [classBarra, setClassBarra] = useState("");
    const {setLoadEnd} = useContext(MainContext)
    const {loadEnd} = useContext(MainContext)
    
    useEffect(()=>{
        const textLogo = "<p get(DanielDiniz)/>".split("")
        let count = 0
        let text = ""
        let textClass = ""

        //Usa o Local Storage pra exibir a animacao somente na primeira visita do usuário
        let jaViuAnimacao = JSON.parse(localStorage.getItem("animation")) || false
        jaViuAnimacao && setLoadEnd(true)

        //Encrementa a state no tempo configurado, o que gera a animação
        let timerId = setInterval(()=>{            
            if (count < textLogo.length) {
                text = String.prototype.concat(text,textLogo[count])
                setLogoLoop(text)
            }
            else {
                clearInterval(timerId)

                //Conta tempo para não haver parada brusca
                setTimeout(()=> {
                    localStorage.setItem("animation", JSON.stringify(true))
                    setLoadEnd(true)
                },1500)
            }
            count++
        },[300])

        //manipula a barra para melhorar efeito de digitação
        let timerBarra = setInterval(()=> {
            textClass == "" ? textClass = "logo" : textClass=""
            setClassBarra(textClass)
            
            if(count > textLogo.length){
                clearInterval(timerBarra)
            } 
        },500)
    },[])

    return(

        <div className="flex-centralize">
            <h1 className={`${classBarra} pixel-font`}>{logoLoop}</h1>
            <h2>{loadEnd}</h2>
        </div>
    )
}