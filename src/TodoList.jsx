import React from "react";
import Task from "./Task";

function TodoList({todo, deleteTask, changeTask}) {
  return(
    <div className="todo">
      <ul>
        {/* uses reduceRight so that latest item in the list is always at the top*/}
        {todo.reduceRight((acc, task, index) => {
          task.completed = false;
          acc.push(<li key={index}><Task task={task} id={index} list={"todo"} deleteTask={deleteTask} changeTask={changeTask}/></li>);
          return acc;
        }, [])}
      </ul>
    </div>
  );
}

export default TodoList;