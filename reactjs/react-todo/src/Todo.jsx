import React, { useState } from 'react'
import { FiTrash2 } from "react-icons/fi";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);
  // const [ isShow, setIsShow ] = useState(true)
  const addNewItem = () => {
    setListItems([...listItems, inputValue])
    setInputValue("");
  }

  const removeItem = (key) => {
    // console.log(key);
    const oldArray = [...listItems];
    oldArray.splice(key, 1);

    setListItems(oldArray);
  }
  

  return (
    <>
    {/* <div>{isShow ? "Todo" : "Untitled"}</div> */}
    <div className='rounded m-2 p-4 bg-white max-w-max'>
      <div>
        <input type="text"
        className='p-1 rounded-md border border-gray-600'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Add new item' />
        <button
        className='ml-1 py-1 px-2 rounded border border-green-700 cursor-pointer bg-green-600 hover:bg-green-900 hover:text-white'
        onClick={addNewItem}>Add new</button>
        <hr className='my-2'/>
        <div>
          { listItems.length > 0 ? 
          <ul>
            {listItems.map((item, i) => { 
              return ( 
              <li key={item} className='p-2 rounded bg-amber-200 my-2 flex items-center justify-between'>

                <span className='block'>{item}</span> 

                <button 
                onClick={() => removeItem(i)}
                className='block bg-gray-200 p-1 rounded-full'>          {<FiTrash2 />} 
                </button>
              </li>
              ) 
              })
            }
          </ul> : "No records" 
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default Todo