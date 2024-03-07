import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainProvider from "../Context/Main/MainContext";
import Projetos from "../pages/Projetos";
import Error from "../pages/Error";
import Feedback from "../pages/Feedback";

export default function RouterApp() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <MainProvider><Home/></MainProvider>}/>
                <Route path="/Projetos" element={ <MainProvider><Projetos/></MainProvider>}/>
                <Route path="*" element={<MainProvider><Error/></MainProvider>} />
                <Route path="/Feedback" element={<MainProvider><Feedback/></MainProvider>}/>
            </Routes>
        </BrowserRouter>
    )
}