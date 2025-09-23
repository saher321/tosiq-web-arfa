import React from 'react'

const Button = ({ classname, onclick, children }) => {
  return (
    <button 
        onClick={onclick}
        className={classname}> 
        
        {children}

    </button>
  )
}

export default Button