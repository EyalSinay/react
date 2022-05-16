import React from 'react';

class ButtonClass extends React.Component {
    render() {
        return <button>{this.props.content}</button>;
    }
}

export default ButtonClass;