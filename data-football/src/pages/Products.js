// use with sharedProductsLayout, sharedProduct and singleProducts

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data";

// prop from App.js
const Products = ({allDataApp}) =>{

    const [word, setWord] = useState("")
    const [dataFilter] = useState(["Name", "Club", "Position", "Nationality"])  

    const searchPLayer = (players) => {
        return players.filter((item) => {
            return dataFilter.some((filterPlayer) => {
                return item[filterPlayer].toString().toLowerCase().indexOf(word.toLowerCase()) > -1
            })
        })
    }

    return (
        <section className="section">
            <div className="product-page">
                <div className="search-product">
                    <label htmlFor="search-form">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search player data"
                            value={word}
                            onChange={(e)=>setWord(e.target.value)}
                        />
                    </label>
                </div>
                <div className="flexbox">
                            {allDataApp ? searchPLayer(allDataApp).map((it, index)=>{
                                return <div className="item" key={index}>
                                            <article className="content">
                                                <h4 className="each-content">{it.Name}</h4>
                                                <h5 className="each-content">{it.Club}</h5>
                                                <h5 className="each-content">{it.Position}</h5>
                                                <button className="btn-more-info"><Link to={`/products/${it.Name}`} className="more-info">More</Link></button>
                                            </article>
                                        </div>
                            }) : ""}
                </div>
                
            </div>
        </section>
    )
}

export default Products