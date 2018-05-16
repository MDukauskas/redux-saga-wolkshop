import React from "react";
import { Flex, TodoForm } from "Components";

export const MainPage = () => (
  <React.Fragment>
    <Flex style={{ justifyContent: "center" }}>
      <Flex style={{ width: "700px" }}>
        <TodoForm />
      </Flex>
    </Flex>
  </React.Fragment>
);
