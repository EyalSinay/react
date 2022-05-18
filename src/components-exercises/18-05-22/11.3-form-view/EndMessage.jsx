import React from "react";

class EndMessage extends React.Component {
    state = { firstName: "", lastName: "", age: "0-15" }

    componentDidMount(){
        this.setState({firstName: this.props.firstName, lastName: this.props.lastName, age: this.props.age})
    }

    render() {
        return (
            <div>
                <p>First Name: {this.props.firstName}</p>
                <p>Last Name: {this.props.lastName}</p>
                <p>Age: {this.props.age}</p>
                <button onClick={() => this.props.onBackClick(this.state)}>Back</button>
                <button>Send Survey</button>
            </div>
        )
    }
}

export default EndMessage;