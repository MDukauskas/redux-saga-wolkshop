import * as Actions from "../actions";

export const TODO_REDUCER_KEY = "TODO_REDUCER_KEY";

export const initialState = [];

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_TODO_ITEM:
      return [...state, action.item];
  }
  return state;
};
