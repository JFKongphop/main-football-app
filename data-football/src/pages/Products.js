// use with sharedProductsLayout, sharedProduct and singleProducts

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data";

// prop from App.js
const Products = ({allDataApp}) =>{

    return (
        <section className="section">
            <div className="products">
                {allDataApp ? allDataApp.map((it, index)=>{
                    return <article key={index}>
                        <h5>{it.Name}</h5>
                        <Link to={`/products/${it.Name}`}>more info</Link>
                    </article>
                }) : ""}
            </div>
            <Link to="/" className="btn">Home</Link>
        </section>
    )
}

export default Products