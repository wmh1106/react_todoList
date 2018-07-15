import React, { Component, Fragment } from "react";
import TodoListContent from "./TodoListContent";
import store from '../store/index'

import {getInputChangeAction,getAddItemAction} from '../store/action.js'

class TodoList extends Component {
  constructor(props) {
    super(props);
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
        <TodoListContent/>
      </Fragment>
    );
  }

  handleInputChange(e) {
    const value = e.target.value;
    store.dispatch(getInputChangeAction(value))
  }
  handleAddItem(e) {
    if (e.keyCode !== 13) return;
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleAddItemClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleStoreChange(){
    this.setState(()=>({
      ...store.getState()
    }))
  }
}

export default TodoList;
