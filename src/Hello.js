import { Component } from "react";
import "./Hello.css";

class Hello extends Component {
  render() {
    return (
      <div className="f1 tc">
        <h1>Hello World</h1>
        <p>{this.props.greeting}</p>
        <h2>{this.props.yea}</h2>
      </div>
    );
  }
}

export default Hello;
