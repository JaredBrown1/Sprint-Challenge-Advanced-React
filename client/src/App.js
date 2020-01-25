import React from "react";
import "./App.css";

import WomanList from "./components/womanList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      women: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(women => {
        console.log("fetch: women: ", women);
        this.setState({ women: women });
      })
      .catch(err => console.log("error on fetch: ", err));
  }

  render() {
    return (
      <div className="App">
        <WomanList women={this.state.women} />
      </div>
    );
  }
}

export default App;
