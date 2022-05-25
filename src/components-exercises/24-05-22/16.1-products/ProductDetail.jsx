import React from "react";
import dataProducts from "./store";

class ProductDetail extends React.Component {
    state = { data: {} };

    componentDidMount() {
        this.getProduct();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.getProduct();
        }
    }

    getProduct = () => {
        const theProduct = dataProducts.find(product => ":" + product.id === this.props.match.params.id);
        if (theProduct) {
            this.setState({ data: theProduct });
        } else {
            this.props.history.push("/404");
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.data.imageUrl} alt={this.state.data.title} />
                <h2>{this.state.data.title}</h2>
                <h3>{this.state.data.size}</h3>
                <p>{this.state.data.price}</p>
            </div>
        );
    }
}

export default ProductDetail;