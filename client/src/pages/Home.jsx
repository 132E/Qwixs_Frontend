import { NavLink } from "react-router-dom";
import Businesspng from "../assets/business.png";
import Profilepng from "../assets/create-profile.png";
import Servicepng from "../assets/service-list.png";

const Home  = () => {
    return(
        <div>
            <section className="page-home">
                <div className="cta">
                    <h2 className="logo-text">Qwixs</h2>
                    <h1>Simplify your online presence!</h1>
                    <h3>Qwixs is your answer to the age old question... "Do you have a website?"</h3>
                    <div className="cta-buttons">
                        <NavLink className="cta-links" to="/signup">Sign Up</NavLink>
                        <NavLink className="cta-links" to="/login">Login</NavLink>
                    </div>
                </div>
                
            </section>
            <div className="page-title">
                <h2>Grow your business with better representation</h2>
                <p>We help bridge the gap between you and your target audience</p>
            </div>
            <div className="steps-flex">
                    <div className="step-container">
                        <img src={Profilepng} alt="Create Profile" />
                        <h2>Create Your Profile</h2>
                        <p>Sign up for a free account and create your profile</p>
                    </div>
                    <div className="step-container">
                        <img src={Businesspng} alt="Business" />
                        <h2>Add Your Business</h2>
                        <p>Add your business to your profile and start building your online presence</p>
                    </div>
                    <div className="step-container">
                        <img src={Servicepng} alt="Service List" />
                        <h2>Add Some Services</h2>
                        <p>Let your customers know what your business offers</p>
                    </div>
                    </div>
         </div>
    )
};
export default Home;