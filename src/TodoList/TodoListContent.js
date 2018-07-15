import React, { Component } from "react";
import PropTypes from 'prop-types'
import './todoList.css'
class TodoListContent extends Component {
  constructor(props){
    super(props)
    this.state = {
      show:false
    }
  }
  render() {
    const {contentList} = this.props
    return (
      <ul>
        {contentList.map((item, index) => {
          return (
            <li 
              className={`todoItem`}
              key={Math.random()}
              onClick       ={this.handleDeleteTodoItem.bind(this)}
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
    const {deleteTodoItem} = this.props
    deleteTodoItem(index)
  }

  handleAddBg(ev){
    ev.target.classList.add('bg')
  }
  handleRemoveBg(ev){
    ev.target.classList.remove('bg')
  }
}

TodoListContent.propTypes = {
  contentList : PropTypes.array,
  deleteTodoItem : PropTypes.func
}

export default TodoListContent;
