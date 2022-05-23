import React from "react";

class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <h1>obj {this.props.index + 1}:</h1>
                <h2>Name:</h2>
                <p>
                    {this.props.objCard.name}
                </p>
                <h2>Birthday:</h2>
                <p>
                    {this.props.objCard.birthday}
                </p>
                <h2>Favorite fish:</h2>
                <ul>
                    {this.props.objCard.favoriteFoods.fish.map((fishName, index) => <li key={index}>{fishName}</li>)}
                </ul>
                <h2>Favorite meat:</h2>
                <ul>
                    {this.props.objCard.favoriteFoods.meats.map((meatName, index) => <li key={index}>{meatName}</li>)}
                </ul>
            </div>
        );
    }
}

export default Card;