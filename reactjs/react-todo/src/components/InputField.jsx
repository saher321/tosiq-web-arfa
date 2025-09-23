import React from 'react'

const InputField = ({ type, classname, value, onchange, hint }) => {
  return (
    <input type={type}
        className={classname}
        value={value}
        onChange={onchange}
        placeholder={hint} />
  )
}

export default InputField