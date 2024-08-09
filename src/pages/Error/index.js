import "./Error.css"
import { useContext, useEffect } from "react";
import { HuePicker } from 'react-color';
import { MainContext } from "../../Context/Main/MainContext";
import BackButton from "../../Components/BackButton";


export default function Error() {

    const {color} = useContext(MainContext)
    const {setColor} = useContext(MainContext)
    const {setLoad} = useContext(MainContext)
    useEffect(()=>{
        setLoad(true)
    },[setLoad])

    const handleChange = (selectedColor) => {
        setColor(selectedColor.hex);
      };

    return(
        <main className="flex-centralize error-div">
            <BackButton/>
                <span style={{color:(color)}} className="pixel-font">404</span>
                <span style={{color:(color)}} className="pixel-font">Page Not Found</span>
                <HuePicker color={color} onChange={handleChange}/>
                
        </main>
    )
}