import React, { useState } from 'react'
import InputNumber from './InputNumber';

function WhatsTheTimeEx() {

    const [secondValue, setSecondValue] = useState("");
    const [minutesValue, setMinutesValue] = useState("");
    const [hoursValue, setHoursValue] = useState("");
    
    const onSecondChange = (e) => {
        const value = e.target.value;
        setSecondValue(value);
        setMinutesValue(value/60);
        setHoursValue((value/60)/60);
    }
    const onMinutesChange = (e) => {
        const value = e.target.value;
        setSecondValue(value*60);
        setMinutesValue(value);
        setHoursValue(value/60);
    }
    const onHoursChange = (e) => {
        const value = e.target.value;
        setSecondValue(value*60*60);
        setMinutesValue(value*60);
        setHoursValue(value);
    }

  return (
    <div>
        <InputNumber name="Second" value={secondValue} onInputChange={onSecondChange} />
        <InputNumber name="Minutes" value={minutesValue} onInputChange={onMinutesChange}/>
        <InputNumber name="Hours" value={hoursValue} onInputChange={onHoursChange} />
    </div>
  )
}

export default WhatsTheTimeEx;