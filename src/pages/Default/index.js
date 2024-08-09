import { Outlet } from "react-router-dom";
import MainProvider from "../../Context/Main/MainContext";
import AuthProvider from "../../Context/AuthContext";
import { ToastContainer } from "react-toastify";
import {Loading} from "../../Components/Loading";
import { ContatoProvider } from "../../Context/ContatoContext";


export default function Default() {
    return (
        <AuthProvider>
                <MainProvider>
                    <ContatoProvider>
                        <ToastContainer position="top-right"
                            autoClose={5000}
                            closeOnClick
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover                        
                            theme="dark"
                        >
                        </ToastContainer>
                        <Loading/>
                        <Outlet/>
                    </ContatoProvider>
                </MainProvider>
        </AuthProvider>
    )

}