import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const MainApp = () => {
    return(
        <>
            <Navbar/>
            <hr />

            <Outlet/>
        </>
    );
};