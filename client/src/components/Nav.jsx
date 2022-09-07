import {NavLink, Link} from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <div id='logo'>
                <Link to='/'>Qwixs</Link>
            </div>
            <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/business'>Business</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/about'>About</NavLink>
            
            </div>
        </nav>
    )
};
export default Nav;