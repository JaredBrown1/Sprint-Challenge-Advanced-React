import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    women: []
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(women => {
        console.log("fetch: women: ", women);
        this.setState({ ...this.state, women: women.message });
      })
      .catch(err => console.log("error on fetch: ", err));
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
