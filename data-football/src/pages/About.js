// this page show about of the product or service not finish yet

import { useNavigate } from "react-router-dom";
import image from "../assets/21image.png"

const About = () =>{
    
    // when click button that go to product
    const navigate = useNavigate()

    return (
        <section className="section">
            <div className="main-page-about">
                <div className="main-image-contain">
                    <div className="main-image-card"><img src={image} alt=""/></div>
                </div>
                <div className="about-content">
                    <h1>What do we do?</h1>
                    <h2>We help</h2>
                    <h2>football analysis</h2>
                    <p className="all-about">Schedule a call to learn more about out service</p>
                    <button className="main-btn" onClick={(()=>navigate('/products'))}><p>Products</p></button>
                </div>
            </div>
        </section>
    )
}

export default About