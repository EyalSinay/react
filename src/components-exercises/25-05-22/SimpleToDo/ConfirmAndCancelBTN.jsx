import React from "react";

class ConfirmAndCancelBTN extends React.Component {

    render() {

        return (
            <div className="confirm-and-cancel-btn-container btn-container">
                <button onClick={this.props.onConfirmClick} className="confirm-btn btn">Confirm</button>
                <button onClick={this.props.onCancelClick} className="cancel-btn btn">Cancel</button>
            </div>
        );
    }
}

export default ConfirmAndCancelBTN;
