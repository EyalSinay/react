import React from "react";
import PriorityItem from "./PriorityItem";
import ConfirmAndCancelBTN from "./ConfirmAndCancelBTN";

class ItemEditable extends React.Component {
    state = { input: "", priority: null };

    componentDidMount(){
        this.setState({priority: this.props.priority});
    }

    onConfirmClick = () => {
        if (this.state.input.length > 0) {
            const dateObj = new Date();
            const dateStr = dateObj.toDateString();
            this.props.confirmEdit(this.props.id, this.state.input, dateStr, this.state.priority);
        }
    }

    getPriority = (newPriority) => {
        this.setState({priority: newPriority});
    }

    render() {
        return (
            <div className={`ItemEditable-container item-container priority${this.props.priority}`}>
                <input type="text" placeholder={this.props.title} onChange={(e) => this.setState({ input: e.target.value })} value={this.state.input} />
                <span className="date-item editable">{this.props.date}</span>
                <span className="date-item editable">{this.props.lastUpdate}</span>
                <PriorityItem priority={this.props.priority} getPriority={this.getPriority} />
                <ConfirmAndCancelBTN onConfirmClick={this.onConfirmClick} onCancelClick={this.props.cancelEdit} />
            </div>
        )
    }
}

export default ItemEditable;