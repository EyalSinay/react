import './BoxAnimations.css';
import React from "react";

class BoxAnimations extends React.Component {
    constructor(props){
        super(props)
        this.state = { display: "none" };
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({ display: "block" });
        }, 1000);
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.setState({ display: "none" });
        }, 5000);
    }

    render(){
        return <div className="BoxAnimations" style={{display: this.state.display, width: this.props.size, height: this.props.size}}></div>;
    }
}

export default BoxAnimations;