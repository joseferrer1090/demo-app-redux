import React, { Component } from "react";
import CharacterList from "./CharacterList";
import HeroresList from "./HeroesList";
import SquadStats from "./SquadStats";
import "./../styles/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className=""> SuperSquad </h2>
        <div className="col-md-4">
          <CharacterList />
        </div>
        <div className="col-md-4">
          <HeroresList />
        </div>
        <div className="col-md-4">
          <SquadStats />
        </div>
      </div>
    );
  }
}
export default App;
