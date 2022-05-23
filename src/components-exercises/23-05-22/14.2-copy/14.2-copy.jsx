import React from "react";

class Copy extends React.Component {
    constructor(props) {
        super(props);

        this.myInput = React.createRef();
    }

    onButtonClick = () => {
        this.myInput.current.select();
        document.execCommand("copy");
        // value.execCommand("copy");
        // const element = document.querySelector("#target");
        // this.paste(element);
    }

    // paste = async (input) => {
    //     const text = await navigator.clipboard.readText();
    //     input.value = text;
    // }

    render() {
        return (
            <div>
                <label htmlFor="text">Type hear:</label>
                <textarea name="text" id="text" cols="30" rows="10" ref={this.myInput}></textarea>
                {/* <input type="text" name="text" id="text" ref={this.myInput} /> */}
                <button onClick={this.onButtonClick}>Click to copy</button>
                {/* <input type="text" id="target" /> */}
            </div>
        );
    }
}

export default Copy;