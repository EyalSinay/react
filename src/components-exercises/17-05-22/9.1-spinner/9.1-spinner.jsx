import React from "react";
import Spinner from "./Spinner";

class SpinnerEx extends React.Component {
    state = { display: true, numSpinner: Math.floor(Math.random() * 2) + 1 }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ display: false });
        }, 3000);
    }

    render() {
        return (
            <div>
                {this.state.display && <Spinner spinnerClassName={`spinner${this.state.numSpinner}`} />}
            </div>
        )
    }
}

export default SpinnerEx;