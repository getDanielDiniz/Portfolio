import { Outlet, useNavigate } from "react-router-dom";
import MainProvider from "../../Context/Main/MainContext";
import AuthProvider, { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import UserHandler from "../../Components/UserHandler";
import { ToastContainer } from "react-toastify";


export default function Default() {
    return (
        <AuthProvider>
            <UserHandler>
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
            </UserHandler>
        </AuthProvider>
    )

}