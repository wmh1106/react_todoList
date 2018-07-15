import React, { Component } from "react";
import store from '../store/index'

import {
  getDeleteTodoItemAction
} from "../store/action";

import './todoList.css'

class TodoListContent extends Component {
  constructor(props){
    super(props)
    this.state = {
      ...store.getState()
    }
    this.handleStoreChange = this.handleStoreChange.bind(this)

    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <ul>
        {this.state.todoListContent.map((item, index) => {
          return (
            <li 
              className={`todoItem`}
              key={Math.random()}
              onClick       ={this.handleDeleteTodoItem.bind(this,index)}
              onMouseEnter  ={this.handleAddBg.bind(this)}
              onMouseLeave  ={this.handleRemoveBg.bind(this)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    );
  }
  
  handleDeleteTodoItem(index){
    const action = getDeleteTodoItemAction(index)
    store.dispatch(action)
  }

  handleStoreChange(){
    this.setState(()=>({
      ...store.getState()
    }))
  }

  handleAddBg(ev){
    ev.target.classList.add('bg')
  }
  handleRemoveBg(ev){
    ev.target.classList.remove('bg')
  }
}
export default TodoListContent;
