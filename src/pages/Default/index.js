import { Outlet } from "react-router-dom";
import MainProvider from "../../Context/Main/MainContext";
import AuthProvider from "../../Context/AuthContext";
import { ToastContainer } from "react-toastify";


export default function Default() {
    return (
        <AuthProvider>
                <MainProvider>
                    <ToastContainer position="top-right"
                        autoClose={5000}
                        closeOnClick
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover                        
                        theme="dark"
                    >
                    </ToastContainer>
                    <Outlet/>
                </MainProvider>
        </AuthProvider>
    )

}