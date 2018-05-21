import { Flex } from "Components";
import React from "react";
import { Button, FormControl } from "react-bootstrap";
import styles from "./index.scss";

export class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.inputValue);
    this.clearForm();
  }

  handleChange(event) {
    this.setState({ inputValue: event.currentTarget.value });
  }

  clearForm() {
    this.setState({ inputValue: "" });
  }

  render() {
    return (
      <form className={styles.formStyles} onSubmit={this.handleSubmit}>
        <Flex>
          <FormControl
            type="text"
            placeholder="Enter text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <Button type="submit" bsStyle="primary">
            Submit
          </Button>
        </Flex>
      </form>
    );
  }
}
