import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const showCounterValue = () => {
        setCounter(counter  + 1)
    }
    const showDecCounterValue = () => {
        setCounter(counter  - 1)
    }
  return (
    <div className='m-4'>
        <span className='bold text-3xl'>Counter is: {counter}</span>
        <br />

        <button
        className='cursor-pointer bg-gray-900 text-white/90 rounded px-3 py-2'
         onClick={showCounterValue}>Click</button> | {" "}

         <button
        className='cursor-pointer bg-gray-900 text-white/90 rounded px-3 py-2'
         onClick={showDecCounterValue}>Click</button>
    </div>
  )
}

export default Counter