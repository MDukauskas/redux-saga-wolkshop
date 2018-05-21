import { connect } from "react-redux";
import { TodoList } from "../components";
import { selectTodoItem } from "../selectors";

const mapStateToProps = state => ({
  items: selectTodoItem(state)
});
export const TodoListContainer = connect(mapStateToProps)(TodoList);
