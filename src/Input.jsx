import React from "react";

function Input({textInput, handleInput, addTask}) {
  return( 
  <div className="input-section">
    <input className="task-input" type="text" placeholder="Your task..." 
      value={textInput} onChange={handleInput}></input>
    <button className="button-add" onClick={addTask}><i className="fas fa-plus"></i> Add Task</button>
  </div>
  )};

export default Input;