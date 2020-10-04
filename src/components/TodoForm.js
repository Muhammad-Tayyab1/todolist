import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
export const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value :
    '');

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus()
    return () => {

    }
  }, [input])

  const handleChange = e => {
    setInput(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  }
  return (
    <div>


      <form id="to-do-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input type="text" placeholder="Update Item" value={input}
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-button">Update</button>
          </>
        ) : (
            <>
              <input type="text" placeholder="Enter Item" value={input}
                onChange={handleChange}
                ref={inputRef}
              />
              <button>Add Todo</button>
            </>
          )}

      </form>



    </div>
  )
}
