import { BrowserRouter, Routes, Route } from "react-router-dom";import Home from "../pages/Home";
import HomeProvider from "../Context/Home/HomeContext";

export default function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomeProvider><Home/></HomeProvider>}/>
            </Routes>
        </BrowserRouter>
    )
}