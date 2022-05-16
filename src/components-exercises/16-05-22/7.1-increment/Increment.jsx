import React from "react";

class Increment extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    handleClick() {
        this.setState(pre => ({ count: pre.count + 1 }));
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleClick()}>+</button>
                <span>{this.state.count}</span>
            </div>
        );
    }
}

// function Increment() {
//     const [count, setCount] = React.useState(0);

//     function incrementByOne () {
//         setCount(pre => pre + 1);
//     }

//     return (
//         <div>
//             <button onClick={incrementByOne}>+</button>
//             <span>{count}</span>
//         </div>
//     );
// }

export default Increment;