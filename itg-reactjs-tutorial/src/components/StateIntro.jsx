import React, { useState } from 'react'

function StateIntro() {
    
    const [counter, setcounter] = useState(0);
    const increase = () => {
        setcounter(counter + 1)
    }

  return (
    <>
    <h1>Counter: {counter}</h1>
    <hr />
    <button onClick={increase}>Increase</button>
    <button onClick={() => increase()}>Increase 2</button>
    <button onClick={() => setcounter(counter+1)}>Increase 3</button>
    </>
  )
}

export default StateIntro