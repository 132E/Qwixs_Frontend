import { NavLink } from "react-router-dom";

const Home  = () => {
    return(
        <section className="page-home">
            <div className="cta">
                <h2>Qwixs</h2>
                <h1>Simplify your online presence!</h1>
                <div className="cta-buttons">
                    <NavLink className="cta-links" to="/signup">Sign Up</NavLink>
                    <NavLink className="cta-links" to="/login">Login</NavLink>
                </div>
            </div>
        </section>
    )
};
export default Home;