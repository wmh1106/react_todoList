import React, { Component } from "react";
import PropTypes from 'prop-types'
import store from '../store/index'

import './todoList.css'
class TodoListContent extends Component {
  constructor(props){
    super(props)
    this.state = {
      show:false
    }
    this.handleStoreChange = this.handleStoreChange.bind(this)

    store.subscribe(this.handleStoreChange)
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
  
  handleDeleteTodoItem(index) {
    const action = {
      type:'deleteTodoItemAction',
      value:index
    }
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

TodoListContent.propTypes = {
  contentList : PropTypes.array,
  deleteTodoItem : PropTypes.func
}

export default TodoListContent;
