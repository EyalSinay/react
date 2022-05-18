import React from "react";
import ChildToFatherColors from "./ChildToFatherColors";

const colors = ["blue", "red", "yellow"];

class ChildToFatherColorsEx extends React.Component {
    state = { userClick: "" }

    onButtonClick = (e) => {
        this.setState({userClick: e.target.value});
    }

    render() {
        return (
            <div>
                {colors.map((colorButton, index) => <ChildToFatherColors key={index} myColor={colorButton} onButtonClickProps={this.onButtonClick} />)}
                <h2>{`You'r choice is: ${this.state.userClick}`}</h2>
            </div>
        );
    }
}

export default ChildToFatherColorsEx;