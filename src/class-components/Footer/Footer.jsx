import React, { Component } from "react";
import styles from "./Footer.module.css";

export default class Footer extends Component {
  z;
  render() {
    return (
      <footer className={styles.footer}>
        <span>Drag and drop to reorder list</span>
      </footer>
    );
  }
}
