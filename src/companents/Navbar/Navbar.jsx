import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [todos, settodos] = useState([])
  const [ input, setInput] = useState("")
  const handleAdd = () => {
    if (input.trim() === "") return
    settodos([...todos,input])
    setInput("")

  }
  return (
    <div id="Container1">
      <h1>todo App</h1>
      <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add your new todo..." />
      <button onClick={handleAdd}>+</button>
      <ul> 
        {todos.map((todo,index)=>
          <li key={index}> {todo}</li>
        )}
      </ul>
      </div>
    </div>
  );
;};

export default Navbar;
