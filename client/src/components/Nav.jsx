import {NavLink} from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <h1>Qwixs</h1>
            <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/business'>Business</NavLink>
            <NavLink to='/about'>About</NavLink>
            </div>
        </nav>
    )
};
export default Nav;