import React from "react";
import PriorityItem from "./PriorityItem";
import ConfirmAndCancelBTN from "./ConfirmAndCancelBTN";

class CreateItem extends React.Component {
    state = { add: false, input: "", priority: null };

    onAddClick = () => {
        this.props.onAdd();
        this.addToggle();
    }

    addToggle = () => {
        this.setState(prev => ({ add: !prev.add }));
    }

    onConfirmClick = () => {
        if (this.state.input.length > 0) {
            const dateObj = new Date();
            const dateStr = dateObj.toDateString();
            this.props.getNewItem(this.state.input, dateStr, this.state.priority);
            this.setState({ input: "" });
            this.addToggle();
        }
    }

    onCancelClick = () => {
        this.setState({ input: "" });
        this.addToggle();
    }

    getPriority = (newPriority) => {
        this.setState({ priority: newPriority });
    }

    render() {
        return (
            <div className="create-container">
                {
                    this.state.add
                        ?
                        <div className="create-container editable item-container">
                            <input type="text" name="input" value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
                            <span></span>
                            <span></span>
                            <PriorityItem priority={1} getPriority={this.getPriority} />
                            <ConfirmAndCancelBTN onConfirmClick={this.onConfirmClick} onCancelClick={this.onCancelClick} />
                        </div>
                        :
                        <button onClick={this.onAddClick} className="add-btn btn">+ Add</button>
                }
            </div>
        )
    }
}

export default CreateItem;