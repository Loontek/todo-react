import React, { Component } from "react";
import styles from "./ClearButton.module.css";

export default class ClearButton extends Component {
  render() {
    return (
      <button
        className={styles.clearBtn}
        type="button"
        title="Clear completed button"
        onClick={this.props.clearCompleted}
      >
        Clear Completed
      </button>
    );
  }
}
