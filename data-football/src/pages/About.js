import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import image from "../assets/21image.png"



const About = () =>{
    
        const navigate = useNavigate()
        navigate('/products')
    
    

    return (
        <section className="section">
            <div className="main-page-about">
                <div className="main-image-contain">
                    <div className="main-image-card"><img src={image} width="500" height="500"/></div>
                </div>
                <div className="about-content">
                    <h1>What do we do?</h1>
                    <h2>We help business scale</h2>
                    <p>Schedule a call to learn more about out service</p>
                    <button className="main-btn" onClick={(()=>navigate('/products'))}>Products</button>
                </div>
            </div>
        </section>
    )
}

export default About