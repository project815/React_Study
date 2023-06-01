/** @format */

import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [item, setItem] = useState(0);

  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="App">
      {item}
      <button onClick={incrementItem}>+</button>
      <button onClick={decrementItem}>-</button>
    </div>
  );
};

class AppUgly extends React.Component {
  state = {
    item: 1,
  };
  render() {
    const { item } = this.state;

    return (
      <div className="App">
        {item}
        <button onClick={this.incrementItem}>+</button>
        <button onClick={this.decrementItem}>-</button>
      </div>
    );
  }

  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
}

export default App;
