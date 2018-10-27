import React, { Component } from "react";
import Task from "./Task";

class CompletedList extends Component {
  componentDidUpdate(){
    if (this.props.completed.length !== 0){
      document.getElementById("completed").style.visibility = "visible";
    }
    else document.getElementById("completed").style.visibility = "hidden";
  }
  render(){
    const {completed, deleteTask, changeTaskState} = this.props;
    return(
      <div className="completed" id="completed">
        <ul>
          {/* uses reduceRight so that latest item in the list is always at the top*/}
          {completed.reduceRight((acc, task, index) => {
            acc.push(<li key={index}><Task task={task} id={index} list={"completed"} deleteTask={deleteTask} changeTaskState={changeTaskState}/></li>);
            return acc;
          }, [])}
        </ul>
      </div>
    );
  }
  
}

export default CompletedList;