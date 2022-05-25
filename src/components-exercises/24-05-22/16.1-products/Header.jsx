import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {

    render() {
        return (
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
            </nav>
        );
    }
}

export default Header;