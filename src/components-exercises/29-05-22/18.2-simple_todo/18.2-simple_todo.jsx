import React, { useState } from 'react'
import ToDoItem from "./ToDoItem"

function SimpleTodoEx() {

  const initialTodoArr = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ];

  const [todoArr, setTodoArr] = useState(initialTodoArr);

  const onItemClick = (index) => {
    setTodoArr(prev => {
      const newArr = [...prev];
      newArr[index].completed = newArr[index].completed ? false : true;
      return newArr;
    });
  }


  return (
    <div>
      {todoArr.map((item, index) => <ToDoItem key={index} name={item.name} completed={item.completed} onItemClick={()=>onItemClick(index)} />)}
    </div>
  )
}

export default SimpleTodoEx;