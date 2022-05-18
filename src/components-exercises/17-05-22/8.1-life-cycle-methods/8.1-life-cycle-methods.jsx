import React from "react";

class LifeCycleMethods extends React.Component {
    constructor(props){
        super(props);
        this.state = { favoriteColor: "white" };
    }


    componentDidMount(){
        setTimeout(() => {
            this.setState({favoriteColor: "black"})
          }, 1000);
    }

    componentDidUpdate() {
        document.getElementById("my-div").innerHTML = "The updated favorite is " + this.state.favoriteColor;
      }

    render(){
        return(
            <div>
            <h1>{`My favorite color is ${this.state.favoriteColor}`}</h1>
            <div id="my-div"></div>
            </div>
        )
    }
}

export default LifeCycleMethods;