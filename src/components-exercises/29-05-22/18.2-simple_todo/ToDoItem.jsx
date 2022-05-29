import React from 'react'

function ToDoItem(props) {



  return (
    <div>
        {props.completed ? "✌️" : "👊"}
        <span onClick={props.onItemClick}>{props.name}</span>
    </div>
  )
}

export default ToDoItem;