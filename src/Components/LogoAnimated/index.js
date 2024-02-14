import { useContext, useEffect, useState } from "react";
import "./LogoAnimated.css"
import { HomeContext } from "../../Context/Home/HomeContext";


export default function LogoAnimated() {
    
    const [logoLoop, setLogoLoop] = useState('');
    const [classBarra, setClassBarra] = useState("");
    const {setLoadEnd} = useContext(HomeContext)
    const {loadEnd} = useContext(HomeContext)
    
    useEffect(()=>{
        const textLogo = "<p get(DanielDiniz)/>".split("")
        let count = 0
        let text = ""
        let textClass = ""

        let timerId = setInterval(()=>{            
            if (count < textLogo.length) {
                text = String.prototype.concat(text,textLogo[count])
                setLogoLoop(text)
            }
            else {
                clearInterval(timerId)
                setTimeout(()=> {
                    setLoadEnd(true)
                },1500)
            }
            count++
        },[500])

        let timerBarra = setInterval(()=> {
            textClass == "" ? textClass = "logo" : textClass=""
            setClassBarra(textClass)
            
            if(count > textLogo.length){
                clearInterval(timerBarra)
            } 
        },800)
    },[])

    return(

        <div className="flex-centralize">
            <h1 className={`${classBarra} pixel-font`}>{logoLoop}</h1>
            <h2>{loadEnd}</h2>
        </div>
    )
}