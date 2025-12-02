import React from 'react'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const TextEdit = ({value, setValue}) => {
    
  return (

  <ReactQuill theme="snow" value={value} onChange={setValue} />

  )
}

export default TextEdit