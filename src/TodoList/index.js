import React, { Component, Fragment } from "react";
import TodoListContent from "./TodoListContent";

class TodoList extends Component {
  constructor(props) {
    super(props);
    // state 数据
    this.state = {
      inputValue: "",
      todoListContent: ["组件"]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteTodoItem = this.handleDeleteTodoItem.bind(this);
  }
  render() {
    return (
      <Fragment>
        <input
          type="text"
          value={this.state.inputValue}
          onInput={this.handleInputChange}
          onKeyDown={this.handleAddItem}
        />
        <button onClick={this.handleAddItem}>添加</button>
        <TodoListContent
          contentList={this.state.todoListContent}
          deleteTodoItem={this.handleDeleteTodoItem}
        />
      </Fragment>
    );
  }
  handleInputChange(e) {
    const val = e.target.value;
    this.setState(() => {
      return {
        inputValue: val
      };
    });
  }

  handleAddItem(e) {
    if (e.keyCode !== 13) return;

    this.setState(prevState => ({
      todoListContent: [prevState.inputValue, ...prevState.todoListContent],
      inputValue: ""
    }));
  }

  handleDeleteTodoItem(index) {
    this.setState(prevState => {
      let todoListContent = [...prevState.todoListContent];
      todoListContent.splice(index, 1);
      return {
        todoListContent: [...todoListContent]
      };
    });
  }
}

export default TodoList;
