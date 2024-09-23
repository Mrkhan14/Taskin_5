import React, { Component } from "react";

export class Counter extends Component {
  state = {
    counter: 0,
  };
  componentWillUnmount() {
    console.log("Counter unmount");
  }
  render() {
    const { counter } = this.state;
    const increase = () => {
      this.setState({ counter: counter + 1 });
    };
    return (
      <div>
        Counter {counter}
        <button onClick={increase}>+</button>
      </div>
    );
  }
}

export default Counter;
