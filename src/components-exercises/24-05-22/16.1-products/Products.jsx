import React from "react";
import { NavLink } from "react-router-dom";
import dataProducts from "./store";

class Products extends React.Component {
    state = { data: [] };

    componentDidMount() {
        this.setState({ data: dataProducts });
    }

    getDataLinks = () => {
        return this.state.data.map(product => (
            <NavLink
                key={product.id}
                to={`/products/:${product.id}`}
                >
                {product.title}
            </NavLink>
        ));
    }

    render() {
        return (
            <div>
                {this.getDataLinks()}
            </div>
        );
    }
}

export default Products;