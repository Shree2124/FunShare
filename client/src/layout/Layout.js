import { Outlet, Navigate, Route, useLocation } from "react-router-dom";


function Layout (){
    const user = null;
    const location = useLocation()

    return user?.token ? (
        <Outlet/>
    ) : (
        <Navigate to="/login" state={{from: location}} replace S/>
    )
}

export default Layout;