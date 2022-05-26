import React from "react";

class PriorityItem extends React.Component {
    state = { priority: null };

    componentDidMount() {
        this.setState({ priority: this.props.priority });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.priority !== this.state.priority) {
            this.props.getPriority(this.state.priority);
        }
    }

    onPlusClick = () => {
        if (this.state.priority < 3) {
            this.setState(prev => ({ priority: prev.priority + 1 }));
        }
    }
    onMinusClick = () => {
        if (this.state.priority > 1) {
            this.setState(prev => ({ priority: prev.priority - 1 }));
        }
    }

    render() {
        return (
            <div className="priority-item-container">
                <button onClick={this.onPlusClick} className="priority-plus-btn priority-btn">+</button>
                <span className="priority-item const">{this.state.priority}</span>
                <button onClick={this.onMinusClick} className="priority-minus-btn priority-btn">-</button>
            </div>
        )
    }
}

export default PriorityItem;