import React from "react";
import YellowBlock from "./YellowBlock";

class HideAndSeek extends React.Component {

    constructor(props){
        super(props);
        this.state = { showHide: true};
    }
    

    handleClick(){
        this.setState(pre => ({showHide: !pre.showHide}));
    }

    render(){
        return (
        <div style={{ border: "1px solid black", width: "200px", height: "200px" }}>
            <button onClick={() => this.handleClick()}>show/hide</button>
            { this.state.showHide && < YellowBlock />}
        </div>
    );
    }
}


// function HideAndSeek() {
//     const [showHide, setShowHideState] = React.useState(true);

//     function handleClick(){
//         setShowHideState(pre => !pre);
//     }

//     return (
//         <div style={{ border: "1px solid black", width: "200px", height: "200px" }}>
//             <button onClick={() => handleClick()}>show/hide</button>
//             { showHide && < YellowBlock />}
//         </div>
//     )
// }

export default HideAndSeek;