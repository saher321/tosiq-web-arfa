import React, { useState } from 'react'
import { FiPlus, FiTrash2 } from "react-icons/fi";
import Button from './components/Button';
import InputField from './components/InputField';

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
        <InputField type="text"
        classname='p-1 rounded-md border border-gray-600'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        hint='Add new item' />

        <Button 
          classname='ml-1 py-1 px-2 rounded border border-green-700 cursor-pointer bg-green-600 hover:bg-green-900 text-white hover:text-white'
          onclick={addNewItem}
        >
          <FiPlus className='inline mt-[-2px]' /> Add new
        </Button>
        
        <hr className='my-2'/>
        
        <div>
          { listItems.length > 0 ? 
          <ul>
            {listItems.map((item, i) => { 
              return ( 
              <li key={item} className='p-2 rounded bg-amber-200 my-2 flex items-center justify-between'>

                <span className='block'>{item}</span> 

                <Button 
                  classname='cursor-pointer block bg-gray-200 p-1 rounded-full'
                  onClick={() => removeItem(i)}
                >
                  <FiTrash2 />
                </Button>
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