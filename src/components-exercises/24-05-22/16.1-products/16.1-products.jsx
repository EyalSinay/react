import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "./Header";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import ErrorPage404 from "./ErrorPage404";

class ProductsEx extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact component={HomePage} />
                        <Route path="/products" component={Products} />
                        <Route path="/products/:id" component={ProductDetail}/>
                        <Route path="/404" component={ErrorPage404}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default ProductsEx;