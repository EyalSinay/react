import React from "react";

class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <h2>{this.props.name}</h2>
                <img src={this.props.imgSrc} alt="avatar" />
            </div>
        );
    }
}

export default Card;