import {
  INPUT_CHANGE_ACTION,
  ADD_ITEM_ACTION,
  DELETE_TODO_ITEM_ACTION
} from "./actionType";

export const getInputChangeAction = (value) => ({
  type: INPUT_CHANGE_ACTION,
  value
});

export const getAddItemAction = () => ({
  type: ADD_ITEM_ACTION
});

export const getDeleteTodoItemAction = (index) => ({
  type: DELETE_TODO_ITEM_ACTION,
  value: index
});
