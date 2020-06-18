import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav justify-content-center p-3 shadow">
            <NavLink className="text-dark p-2 mx-3" activeClassName="text-secondary border-dark" exact to="/">
                Home
            </NavLink>
            <NavLink className="text-dark p-2 mx-3" activeClassName="text-secondary border-dark" to="/albums">
                Albums
            </NavLink>
            <NavLink className="text-dark p-2 mx-3" activeClassName="text-secondary border-dark" exact to="/chirper">
                Chirper
            </NavLink>
        </nav>
    )
};

export default Navbar;