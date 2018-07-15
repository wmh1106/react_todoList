import {
  INPUT_CHANGE_ACTION,
  ADD_ITEM_ACTION,
  DELETE_TODO_ITEM_ACTION
} from "./actionType";

const defaultState = {
  inputValue: "",
  todoListContent: ["组件"]
};

export default (state = defaultState, action) => {
  if (action.type === INPUT_CHANGE_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === ADD_ITEM_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));

    newState.todoListContent.unshift(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }

  if (action.type === DELETE_TODO_ITEM_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    console.log(action.value)
    newState.todoListContent.splice(action.value, 1);
    return newState;
  }

  return state;
};
