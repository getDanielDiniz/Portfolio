import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projetos from "../pages/Projetos";
import Error from "../pages/Error";
import Feedback from "../pages/Feedback";
import Default from "../pages/Default";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

export default function RouterApp() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Default/>}>
                    <Route path="/" element={ <Home/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Cadastro" element={<Cadastro/>}/>
                    <Route path="/Projetos" element={ <Projetos/>}/>
                    <Route path="*" element={<Error/>} />
                    <Route path="/Feedback" element={<Feedback/>}/>
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}