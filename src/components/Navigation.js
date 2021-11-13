import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" ClassName="nav-active">Home</NavLink>
            <NavLink exact to="/a-propos"  ClassName="nav-active">A propos</NavLink>

        </div>
    );
};

export default Navigation;