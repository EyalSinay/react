import React from 'react'

function Button({valueButton = "click", onButtonClick = () => {}}) {


  return (
    <button onClick={onButtonClick}>{valueButton}</button>
  )
}

export default Button;