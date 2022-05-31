import React, { useState } from 'react'
import DisplaySomeData from './DisplaySomeData';

function CancelRequest() {
  const [toggle, setToggle] = useState(false);
  
  return (
    <>
    <button onClick={() => setToggle(prev => !prev)}>{toggle ? "Remove Data" : "Show Data"}</button>
      {toggle && <DisplaySomeData/>}
    </>
  )
}

export default CancelRequest;