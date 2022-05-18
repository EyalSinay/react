import React from "react";

class Checkbox extends React.Component {
    state = { checked: undefined };

    componentDidMount() {
        this.setState({ checked: this.props.isChecked });
    }

    onCheckboxChange = (e) => {
        this.setState(
            prev => ({ checked: !prev.checked }),
            () => this.props.onCheckedProps(e.target.getAttribute("id"), this.state.checked)
        );
    }

    render() {
        return (
            <div>
                <input
                    id={this.props.id}
                    type="checkbox"
                    onChange={this.onCheckboxChange}
                    // checked={this.state.checked}
                    defaultChecked={this.props.isChecked}
                />

                <label htmlFor={this.props.id}>{this.props.context}</label>

                <p>{this.state.checked ? "true" : "false"}</p>
            </div>
        );
    }
}

export default Checkbox;