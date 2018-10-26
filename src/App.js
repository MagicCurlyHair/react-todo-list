import React, { Component } from 'react';
import './App.css';
import Input from "./Input";
import TodoList from "./TodoList";
import CompletedList from "./CompletedList"

class App extends Component {
  constructor(){
    super();
    this.state = {todo: [], completed: [], textInput: ""};
    this.handleInput = this.handleInput.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.changeTask = this.changeTask.bind(this);
  }

  handleInput(event) {
    this.setState({textInput: event.target.value});
  }

  addTask() {
    if (this.state.textInput){
      this.setState({todo: [...this.state.todo, {text: this.state.textInput}], textInput: ""});
    }
  }

  deleteTask(event) {
    const taskIndex = event.target.parentNode.dataset.id;
    const list = event.target.parentNode.dataset.list;
    const newList = [...this.state[list]];
    const deleted = newList.splice(taskIndex, 1);
    this.setState({[list]: newList});
    return deleted;
  }

  changeTask(event) {
    const task = this.deleteTask(event)[0];
    const list = event.target.parentNode.dataset.list;
    let otherList = "";
    list === "todo" ? otherList = "completed": otherList = "todo";
    const newList = [...this.state[otherList]];
    newList.push(task);
    this.setState({[otherList]: newList});
  }

  uncompleteTask(event) {

  }

  render() {
    return (
      <div className="App">
        <Input textInput={this.state.textInput} handleInput={this.handleInput} addTask={this.addTask}/>
        <TodoList todo={this.state.todo} deleteTask={this.deleteTask} completeTask={this.changeTask}/>
        <CompletedList completed={this.state.completed} deleteTask={this.deleteTask} uncompleteTask={this.changeTask}/>
      </div>
    );
  }
}

export default App;
