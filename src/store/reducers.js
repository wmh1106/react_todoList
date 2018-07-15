const defaultState = {
  inputValue: "",
  todoListContent: ["组件"]
};

export default (state = defaultState, action) => {
  if (action.type === "inputChangeAction") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === "addItemAction") {
    const newState = JSON.parse(JSON.stringify(state));
    
    newState.todoListContent.unshift(newState.inputValue );
    newState.inputValue = "";
    return newState;
  }

  if (action.type === "deleteTodoItemAction") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoListContent.splice(action.value,1);
    return newState;
  }

  return state;
};
