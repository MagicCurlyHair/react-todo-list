import React from "react";
import Task from "./Task";

function CompletedList({completed, deleteTask, uncompleteTask}) {
  return(
    <div className="completed">
      <ul>
        {/* uses reduceRight so that latest item in the list is always at the top*/}
        {completed.reduceRight((acc, task, index) => {
          acc.push(<li key={index}><Task task={task} id={index} list={"completed"} deleteTask={deleteTask} changeTask={uncompleteTask}/></li>);
          return acc;
        }, [])}
      </ul>
    </div>
  );
}

export default CompletedList;