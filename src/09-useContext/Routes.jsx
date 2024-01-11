import { Navigate, createBrowserRouter } from "react-router-dom";
import { MainApp } from "./MainApp";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";


export const getRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <MainApp/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "login",
                element: <LoginPage/> 
                
            },
            {
                path: "about",
                element: <AboutPage/>
            },
            {
                path: "*",
                element: <Navigate to="/"/>
            }
        ]
    }
]);