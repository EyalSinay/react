import React, { useState } from 'react'
import CheckBox from './CheckBox';

function MarkingAndDeleting() {
    const initial = ["one", "two", "three", "four", "five"];
    const initialValues = [false, false, false, false, false];

    const [checkBoxes, setCheckBoxes] = useState(initial);
    const [checkBoxesValues, setCheckBoxesValues] = useState(initialValues);

    const onCheckChange = (index) => {
        setCheckBoxesValues(prev => {
            const newArr = [...prev];
            newArr[index] = !prev[index];
            return newArr;
        });
    }

    const onDeleteClick = () => {
        setCheckBoxes(prev => {
            const newArr = [...prev];
            const newArrFilter = newArr.filter((item, index) => !checkBoxesValues[index]);
            return newArrFilter;
        });
        setCheckBoxesValues(prev => {
            const newArr = [...prev];
            const newArrFilter = newArr.filter((item) => !item);
            return newArrFilter;
        });
    }

    const onResetClick = () => {
        setCheckBoxes(initial);
        setCheckBoxesValues(initialValues);
    }

    console.log(checkBoxes);
    console.log(checkBoxesValues);
    return (
        <div>
            <button onClick={onDeleteClick}>Delete</button>
            <button onClick={onResetClick}>Reset</button>
            {checkBoxes.map((item, index) => <CheckBox key={index} text={item} onCheckChange={() => onCheckChange(index)} value={checkBoxesValues[index]} />)}
        </div>
    )
}

export default MarkingAndDeleting;