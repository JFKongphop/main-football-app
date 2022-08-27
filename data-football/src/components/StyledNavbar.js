import { NavLink } from "react-router-dom";
import { useState } from "react";

const StyledNavbar = () =>{
    const pages = ["Home","About", "Products", "Service", "Login"];

    // const eachNavLink = pages.map((page, index)=>{
    //         return <li>
    //             <NavLink 
    //                 key={index} 
    //                 to={page} 
    //                 className={({ isActive }) => (isActive ? "link active" : "link")}
    //                 >
    //                     {page}
    //             </NavLink>
    //         </li>
    // })

    // if want to send propp to Navlink and link must put in this Navlink
    return (
        <nav className="navbar">
            <div className="navbar-contain">
                <h1 className="nav-logo">Football Static</h1>
                <div>
                    <ul className="navbar-menu">
                        <li className="navbar-item">
                            <NavLink to="/" className={({ isActive }) => (isActive ? "link active" : "link")}>
                                Home
                            </NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="About" className={({ isActive }) => (isActive ? "link active" : "link")}>
                                About
                            </NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="Products" className={({ isActive }) => (isActive ? "link active" : "link")}>
                                Products
                            </NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="Service" className={({ isActive }) => (isActive ? "link active" : "link")}>
                                Service
                            </NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="Login" className={({ isActive }) => (isActive ? "link active" : "link")}>
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            
            
            


        </nav>
    )
}

export default StyledNavbar