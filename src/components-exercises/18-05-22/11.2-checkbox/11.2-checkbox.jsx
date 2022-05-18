import React from "react";
import Checkbox from "./Checkbox";

const checkBoxes = [
    { context: "I read the term of the App", checked: false },
    { context: "I accept the term of the App", checked: false },
    { context: "I want to get the weekly news letter", checked: true },
    { context: "I want to get sales and offers", checked: true },
]
class CheckboxEx extends React.Component {
    onChecked = (id, value) => {
        console.log(id, value);
    }

    render() {
        return (
            <div>
                {checkBoxes.map((checkBox, index) => <Checkbox key={index} id={index} context={checkBox.context} isChecked={checkBox.checked} onCheckedProps={this.onChecked} />)}
            </div>
        );
    }
}

export default CheckboxEx;