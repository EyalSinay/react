import React from "react";

function IncrementAndDecrement() {
    const [counter, counterSet] = React.useState(0);
    const [colorStyle, styleSet] = React.useState("black");

    function handleClickIncrement() {
        if (counter < 10) {
            counterSet(pre => pre + 1);
        }
        if (counter < 10 && counter >= 0) {
            styleSet(pre => pre = "green");
        }
        if (counter === -1) styleSet(pre => pre = "black");
    }

    function handleClickDecrement() {
        if (counter > -10) {
            counterSet(pre => pre - 1);
        }
        if (counter > -10 && counter <= 0) {
            styleSet(pre => pre = "red");
        }
        if (counter === 1) styleSet(pre => pre = "black");
    }

    return (
        <div>
            <button onClick={() => handleClickIncrement()}>+</button>
            <span style={{color: colorStyle}}>{counter}</span>
            <button onClick={() => handleClickDecrement()}>-</button>
        </div>
    )
}

export default IncrementAndDecrement;