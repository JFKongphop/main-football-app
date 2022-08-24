// use to cover of the all page that use products

import StyledNavbar from "../components/StyledNavbar"
import { Outlet } from "react-router-dom";

const SharedLayout = () =>{
    return (
        <div>
            {/* show nav bar all pages */}
            <StyledNavbar/>

            {/* Outlet to call home page */}
            <Outlet className="outlet"/>
        </div>
    )
}

export default SharedLayout