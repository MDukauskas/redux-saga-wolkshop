import React from "react";
import { Flex, TodoForm, TodoList } from "Components";
import { TodoListContainer, TodoFormContainer } from "../../containers";

export const MainPage = () => (
  <React.Fragment>
    <Flex style={{ justifyContent: "center" }}>
      <Flex style={{ width: "700px" }} direction="column">
        <h3>Add todo item</h3>
        <TodoFormContainer />
        <h3>Todo List</h3>
        <TodoListContainer />
      </Flex>
    </Flex>
  </React.Fragment>
);
