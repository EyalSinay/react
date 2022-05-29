import React from 'react'

function CheckBox(props) {
  return (
    <div>
        <input type="checkbox" name={props.text} id={props.text} checked={props.value} onChange={props.onCheckChange} />
        <label htmlFor={props.text}>{props.text}</label>
    </div>
  )
}

export default CheckBox;