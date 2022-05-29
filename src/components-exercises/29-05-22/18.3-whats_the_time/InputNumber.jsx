import React from 'react'

function InputNumber(props) {
  return (
    <div>
        <label htmlFor={props.name}>{props.name}</label>
        <input type="number" name={props.name} id={props.name} value={props.value} onChange={props.onInputChange} />
    </div>
  )
}

export default InputNumber;