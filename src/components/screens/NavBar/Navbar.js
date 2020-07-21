import React from 'react';
import cl from './Navbar.module.css';
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
    return(
        <div className={cl.navbar}>
            <NavLink to={"/"}  className={cl.link} activeClassName={cl.active}>Main</NavLink>
            <NavLink to={"/favorites"}  className={cl.link} activeClassName={cl.active}>Favorites</NavLink>
        </div>
    )
}
export default Navbar;