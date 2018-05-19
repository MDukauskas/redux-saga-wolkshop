import { combineReducers } from "redux";
import { TodoReducer, TODO_REDUCER_KEY } from "./todo";

export default combineReducers({ [TODO_REDUCER_KEY]: TodoReducer });
