import React, { Component } from "react";
import Keypad from "./keypad.jsx";
import Display from "./display.jsx";

class Body extends Component {
  state = {
    displayText: ""
  };

  handleOnAppend = (event) => {
    let currentElement = event.target.innerHTML;
    if (currentElement === "&lt;=") {
      this.setState({
        displayText: this.state.displayText.slice(0, -1)
      });
    } else if (currentElement === "=") {
      // let result = this.add(this.state.previousNumber,Number(this.state.displayText));
      let result = eval(this.state.displayText);
      this.setState({ displayText: String(result) });
    } else if (currentElement === "AC") {
      this.setState({ displayText: "" });
    } else {
      let currentText = this.state.displayText + currentElement;
      currentText.length < 13
        ? this.setState({
            displayText: currentText
          })
        : alert("Exceeding limit");
    }
  };

  render() {
    return (
      <div className="card" id="calculator">
        <Display displayText={this.state.displayText} />
        <p className="mx-auto p-2">Made by Alok</p>
        <Keypad onAppend={(event) => this.handleOnAppend(event)} />
      </div>
    );
  }
}

export default Body;
