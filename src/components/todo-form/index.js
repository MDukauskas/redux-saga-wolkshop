import React from "react";
import { InputField, Flex } from "Components";
import { Button, FormControl } from "react-bootstrap";

import styles from "./index.scss";

export const TodoForm = props => (
  <form className={styles.formStyles}>
    <Flex>
      <FormControl type="text" value="" placeholder="Enter text" />
      <Button bsStyle="primary">Submit</Button>
    </Flex>
  </form>
);
