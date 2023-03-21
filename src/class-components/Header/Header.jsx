import React, { Component } from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import styles from "./Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>Todo</h1>
        <ThemeButton theme={this.props.theme} toggleTheme={this.props.toggleTheme} />
      </header>
    );
  }
}
