import React, { useRef } from 'react'

const App = () => {
  const no1 = useRef(null);
  const no2 = useRef(null);

  const showData = () => {
    let a = no1.current.value;
    let b = no2.current.value;
    let sum = Number(a) + Number(b)
    console.log(sum)
  }
  return (
    <div className='m-4'>
    <h1>React: useRef()</h1>
    <input type="number"
    className='border border-green-400 rounded p-3 focus:outline-none'
    ref={no1} placeholder='Enter Number a' /> <br /> <br />
    <input type="number" ref={no2} placeholder='Enter Number b' />
    <br />
    <button onClick={showData}>Show data</button>
    </div>
  )
}

export default App