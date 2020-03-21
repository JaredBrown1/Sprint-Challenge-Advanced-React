import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(res => {
      console.log("from CDM", res);
    });
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
