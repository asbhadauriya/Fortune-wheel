import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Wheel from "./components/wheel";

import "./styles.css";

export class App extends React.Component {
  constructor() {
    super();
    this.coins = [
      "+100",
      "-100",
      "+200",
      "+1000",
      "0",
      "+500",
      "-250",
      "-500",
      "+300"
    ];
  }

  render() {
    return (
      <div className="App">
        <h1>What should you eat today?</h1>
        <Wheel items={this.coins} />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
