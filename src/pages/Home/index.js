import { useContext } from "react";
import LogoAnimated from "../../Components/LogoAnimated";
import { HomeContext } from "../../Context/Home/HomeContext";


export default function Home() {
    
    const {loadEnd} = useContext(HomeContext)
    
    return (
        <>
            {
                loadEnd != true && <LogoAnimated/>
            }
            
        </>
    )
}