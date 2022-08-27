import { Link } from "react-router-dom";

const Home = () =>{
    return (
        <section className="section">
            <div className="main-page">
                <div className="main-page-contain">
                    <h1 className="main-heading">Choose your <span>Player</span></h1>
                    <p className="main-description">Unlimited Possibilities</p>
                    <Link to="About" className="main-btn"><p>About</p></Link>
                </div>
            </div>
        </section>
    )
}

export default Home