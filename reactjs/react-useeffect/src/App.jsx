import React, { useEffect, useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);
  const [changeText, setChangeText] = useState("");
  
  // useEffect(()=>{
  //   console.log("Run on every sate change/page reload");
  // })

  // useEffect(()=>{
  //   console.log("Run only first time");
  // }, [])

  useEffect(() => {
    console.log("Run on counter change");
  }, [counter])

  useEffect(() => {
    console.log("Run on change text");
  }, [changeText])

  const toggleText = () => {
    setChangeText("Second Text")
  }
  return (
    <div>
      {counter}
      <br />
      <br />
      <button onClick={() => setCounter(counter +1)}>Click</button>

      <h1>
        {changeText ? 
        changeText : 
        "This is text to be changed"
        }
      </h1>
      <button onClick={toggleText}>Change Text</button>
    </div>
  )
}

export default App