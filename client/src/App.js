import React from "react";
import "./App.css";
import axios from "axios";

import PlayerCard from "./components/PlayerCard";

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log("from CDM", res);
        return this.setState({ players: res.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        {this.state.players.map(item => {
          return <PlayerCard name={item.name} country={item.country} />;
        })}
      </div>
    );
  }
}

export default App;
