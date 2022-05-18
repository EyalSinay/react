import React from "react";
import BoxAnimations from "./BoxAnimations";

class BoxAnimationsEx extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <BoxAnimations size="300px"/>
                <BoxAnimations size="100px"/>
                <BoxAnimations size="200px"/>
            </div>
        )
    }
}

export default BoxAnimationsEx;