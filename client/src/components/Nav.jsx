import {NavLink, Link} from 'react-router-dom';

const Nav = () => {
    return(
        <div className="NavBar">
            <div id="NavLogo">
                <div id="logo">
                    <Link  className="nav-logo" to='/'><h3>Qwixs</h3></Link>
                </div>
            </div>
            <div className="NavLinks">
                <div className="links">
                    <NavLink id='links' to='/'>Home</NavLink>
                    <NavLink id='links' to='/owners'>Owner</NavLink>
                    <NavLink id='links' to='/business'>Business</NavLink>
                    <NavLink id='links' to='/services'>Services</NavLink>
                    <NavLink id='links' to='/about'>About</NavLink>
                </div>
            </div>
        </div>
    )
};
export default Nav;