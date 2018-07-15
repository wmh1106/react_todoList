import React, { Component, Fragment } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    // state 数据
    this.state = {
      inputValue: "",
      todoListContent: ["初始化的数据"]
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onInput={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleAddItem.bind(this)}>添加</button>
        </div>
        <ul>
          {this.state.todoListContent.map((item, index) => {
            return (
              <li
                key={index}
                onClick={this.handleDeleteTodoItem.bind(this, index)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleAddItem() {
    this.setState({
      todoListContent: [this.state.inputValue, ...this.state.todoListContent],
      inputValue: ""
    });
  }

  handleDeleteTodoItem(index) {
    let contentList = this.state.todoListContent;
    contentList.splice(index, 1);
    this.setState({
      todoListContent: [...contentList]
    });
  }
}

export default TodoList;
