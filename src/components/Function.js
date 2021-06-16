import React, { useState } from 'react'

const Function = () => {

  // useState Hook gives array [state variable, setState variable]
  // useState(initial value)
  const [show, setShow] = useState(false);

  // handleClick is JavaScript function instead of Class method
  // therefore, no binding is necessary
  function handleClick() {
    // setShow replaces setState
    // setShow still takes callback function to update state when dependent on previous value of state
    setShow(show => !show)
    console.log(show)
  }

  return (
    <div className="function">
      <h2>Function Component</h2>
      <p>This is a function component, using the setState Hook to set and update state held within.</p>
      <div>
        <button onClick={handleClick}>Click Me!</button>
        <p>If state is updating correctly, clicking the button should toggle the true/false value displayed below!</p>
        <p>{show.toString()}</p>
      </div>
    </div>
  )
}

export default Function;
