import React from "react";
import PropTypes from "prop-types";
import { classString } from "Utils";
import styles from "./index.scss";

export const Flex = props => (
  <div
    className={classString([styles.flex, styles[props.direction]])}
    {...props}
  >
    {props.children}
  </div>
);

Flex.propTypes = {
  direction: PropTypes.string
};

Flex.defaultProps = {
  direction: "row"
};
