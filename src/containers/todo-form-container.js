import { connect } from "react-redux";
import { TodoForm } from "../components";
import { AddTodo } from "../actions";

const mapDispatchToProps = {
  addTodo: AddTodo
};
export const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm);
