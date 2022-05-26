import React from "react";
import PriorityItem from "./PriorityItem";

class ItemConst extends React.Component {
    state = {};

    render() {
        return (
            <div className={`ItemConst-container item-container priority${this.props.priority}`}>
                <span className="title-item const">{this.props.title}</span>
                <span className="date-item const">{this.props.date}</span>
                <span className="date-item const">{this.props.lastUpdate}</span>
                <PriorityItem priority={this.props.priority} getPriority={(priority) => this.props.getPriority(priority, this.props.id)}/>
                <div className="edit-delete-btn-container btn-container">
                    <button className="edit-btn btn" onClick={() => this.props.editItem(this.props.id)}>Edit</button>
                    <button className="delete-btn btn" onClick={() => this.props.deleteItem(this.props.id)}>Delete</button>
                </div>
            </div>
        )
    }
}

export default ItemConst;