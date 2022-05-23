import React from "react";

class Focus extends React.Component {
    constructor(props) {
        super(props);

        this.myInput = React.createRef();
    }

    componentDidMount() {
        this.myInput.current.focus();
    }

    render() {
        return (
            <div>
                <input type="text" name="text" id="text" ref={this.myInput} placeholder="hi" />
            </div>
        );
    }
}

export default Focus;