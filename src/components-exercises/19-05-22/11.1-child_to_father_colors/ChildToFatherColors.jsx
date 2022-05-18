import React from "react";

class ChildToFatherColors extends React.Component {
    render() {
        return (
            <button
                onClick={this.props.onButtonClickProps}
                value={this.props.myColor}
                style={{ backgroundColor: this.props.myColor }}>
                {this.props.myColor}
            </button>
        );
    }
}

export default ChildToFatherColors;