import React from "react";
import data from "./data";
import Name from "./Name";
import Card from "./Card";

class DataMassaging extends React.Component {
    state = { allNames: [], bornBefore1990: {} };

    componentDidMount(){
        this.setState({ allNames: this.getArrOfAllNames(), bornBefore1990: this.getObjBornBefore1990() });
    }

    getArrOfAllNames = () => {
        return data.map(obj => obj.name);
    }

    getObjBornBefore1990 = () => {
        return data.filter(obj => {
            const objDate = new Date(obj.birthday);
            const year1990Date = new Date("1-1-1990");
            return objDate < year1990Date;
        });
    }

    render() {
        return (
            <div>
                {this.getArrOfAllNames().map((nameElement, index) => <Name key={index} name={nameElement}/>)}
                {this.getObjBornBefore1990().map((obj, index) => <Card key={index} index={index} objCard={obj}/>)}
            </div>
        );
    }
}

export default DataMassaging;