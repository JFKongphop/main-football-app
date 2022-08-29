// if want to use each product use this page

import { Outlet } from "react-router-dom";
import { useState } from "react";

const Home = () => {
    
    return (
        <>
            <section className="section">
                {/* show data on this page */}
                <Outlet />
            </section>
        </>
    )
}

export default Home