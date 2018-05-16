import React from "react";
import { InputField, Flex } from "Components";

import styles from "./index.scss";

export const TodoForm = props => (
  <form className={styles.formStyles}>
    <Flex>
      <InputField type={"text"} style={{ flexGrow: 1 }} />
      <button>Submit</button>
    </Flex>
  </form>
);
