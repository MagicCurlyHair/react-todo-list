import React from "react";

function Task({task, id, list, deleteTask, changeTask}) {
  const {text} = task;
  return(
    <div className="task" data-id={id} data-list={list}>
      <div className="task-text"><span>{text}</span></div>
      <button className="button-check" onClick={changeTask}><i className="fas fa-check icon-disabled"></i></button>
      <button className="button-delete" onClick={deleteTask}><i className="fas fa-trash-alt icon-disabled"></i></button>
    </div>
  )
}

export default Task;