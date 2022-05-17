import "./changing_box.css";
import React from "react";

// class component:
// class ChangingBox extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { myBackgroundColor: "blue", myBorderRadius: "0%", count: 0 };
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             this.setState(pre => ({ myBackgroundColor: "red", count: pre.count + 1 }));
//         }, 500);
//         console.log("componentDidMount", this.state.count);
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log("componentDidUpdate", this.state.count);
//         const sto = (color, radius = prevState.myBorderRadius) => {
//             setTimeout(() => {
//                 this.setState(pre => ({ myBackgroundColor: color, myBorderRadius: radius, count: pre.count + 1 }));
//             }, 500);
//         }
//         if (this.state.count === 2) {
//             sto("yellow");
//         } else if (this.state.count === 3) {
//             sto("green");
//         } else if (this.state.count === 4) {
//             sto("brown", "50%");
//         } else if (this.state.count > 4) {
//             this.setState({ myBackgroundColor: "red", myBorderRadius: "50%", count: 2 });
//         }
//     }

//     render() {
//         console.log("render", this.state.count);
//         return (
//             <div className="box" style={{
//                 backgroundColor: this.state.myBackgroundColor,
//                 borderRadius: this.state.myBorderRadius,
//             }}></div>
//         );
//     }
// }


// function component:
function ChangingBox() {

    const [myBackgroundColor, setMyBackgroundColor] = React.useState("blue");
    const [myBorderRadius, setMyBorderRadius] = React.useState("0%");
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        const stmCounter = (num) => {
            setTimeout(() => {
                setCount(count + num);
            }, 500);
        }
        if (count === 0) {
            stmCounter(1);
        } else if (count === 1) {
            setMyBackgroundColor("red");
            stmCounter(1);
        } else if (count === 2) {
            setMyBackgroundColor("yellow");
            stmCounter(1);
        } else if (count === 3) {
            setMyBackgroundColor("green");
            stmCounter(1);
        } else if (count === 4) {
            setMyBackgroundColor("blue");
            setMyBorderRadius("50%");
            stmCounter(-count + 1);
        }
        console.log(count);
    }, [count]);

    return (
        <div className="box" style={{
            backgroundColor: myBackgroundColor,
            borderRadius: myBorderRadius,
        }}></div>
    );
}

export default ChangingBox;