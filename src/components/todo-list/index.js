import React from "react";
import { TodoListItem } from "Components";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Flex } from "..";

export const TodoList = props => {
  if (!props.items) {
    return null;
  }

  return (
    <ListGroup style={{ width: "100%" }}>
      {props.items.map((item, index) => {
        return <ListGroupItem key={index}>{item}</ListGroupItem>;
      })}
    </ListGroup>
  );
};
