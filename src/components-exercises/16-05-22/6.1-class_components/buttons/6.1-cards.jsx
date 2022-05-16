import React from 'react';
import ButtonClass from "./ButtonClass";

class ButtonClassEx extends React.Component {
    render() {
        return (
            <div>
                <ButtonClass content="Important" />
                <ButtonClass content="Not Important" />
            </div>
        )
    }
}

export default ButtonClassEx;