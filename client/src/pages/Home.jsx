import { NavLink } from "react-router-dom";

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
                        <h3>Create Your Profile</h3>
                        <p>Sign up for a free account and create your profile</p>
                    </div>
                    <div className="step-container">
                        <h3>Add Your Business</h3>
                        <p>Add your business to your profile and start building your online presence</p>
                    </div>
                    <div className="step-container">
                        <h3>Add Some Services</h3>
                        <p>Let your customers know what your business offers</p>
                    </div>
                    </div>
         </div>
    )
};
export default Home;