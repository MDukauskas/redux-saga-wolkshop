import React from "react";
import { TodoListItem } from "Components";

export const TodoList = props => {
  if (!props.items) {
    return null;
  }

  return (
    <ul>
      {props.items.map(item => {
        return <TodoListItem item={item} />;
      })}
    </ul>
  );
};
