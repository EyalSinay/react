import "../../4.2-cards/cards.css";
import React from "react";

class CardsClass extends React.Component {
    render() {
        return (
            <div className="card-container">
                <img src={this.props.srcImg} alt="Sorry" />
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <div className="links">
                    <a href={this.props.hrefShare}>SHARE</a>
                    <a href={this.props.hrefExplore}>EXPLORE</a>
                </div>
            </div>
        );
    }
}

export default CardsClass;