import React, { Component, Fragment } from "react";
import TodoListContent from "./TodoListContent";
import store from '../store/index'

class TodoList extends Component {
  constructor(props) {
    super(props);
    // state 数据
    this.state = {
      ...store.getState()
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this)
    // store 的监听
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <Fragment>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyDown={this.handleAddItem}
        />
        <button onClick={this.handleAddItemClick}>添加</button>
        <TodoListContent
          contentList={this.state.todoListContent}
        />
      </Fragment>
    );
  }

  handleInputChange(e) {
    const value = e.target.value;
    const action = {
      type:'inputChangeAction',
      value
    }
    store.dispatch(action)
  }
  handleAddItem(e) {
    if (e.keyCode !== 13) return;
    const action = {
      type : 'addItemAction'
    }
    store.dispatch(action)
  }
  handleAddItemClick(e) {
    const value =  e.target.value
    const action = {
      type : 'addItemAction'
    }
    store.dispatch(action)
  }

  handleStoreChange(){
    this.setState((prevState)=>({
      ...store.getState()
    }))
  }
}

export default TodoList;
